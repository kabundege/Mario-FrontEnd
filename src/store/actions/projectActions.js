export const ActionCreate = (project) =>{
    return async (dispatch,getState) =>{
        await fetch('https://mario-diary.herokuapp.com/api/v1/stories',{
            method:'POST', 
            headers: {
            Accepted:'appication/json',
            'Content-Type': 'application/json'
            },
            body:JSON.stringify(project)
        }).then(res => res.json())
            .then(data=>{
                console.log(data)
                if(data.status !== 201){
                    const newError = data.error.split("")
                    newError.splice(0,7)
                    dispatch({ type : 'creation_Error',action : newError.join("")})
                }else{
                    dispatch({ type :'create_project_success',action: data.message})
                    dispatch({ type:'notification',action: {message:`create a story ${project.title}`,data: data.data}})
                }
            })
    }
}

export const userProjects = () => {
    return async (dispatch,getState) =>{
        await fetch('https://mario-diary.herokuapp.com/api/v1/stories')
                .then(res => res.json())
                    .then(data => {
                        if(data.status !== 200){
                            const newError = data.error.split("")
                            newError.splice(0,7)
                            dispatch({ type: 'P_Error',action : data.error})
                        }else{
                            dispatch({type :'Fetch_success',action: data.data})
                        }
                    })
    }
}

export const publicProjects = () => {
    return async (dispatch,getState) =>{
        await fetch('https://mario-diary.herokuapp.com/api/v1/public/stories')
                .then(res => res.json())
                    .then(data => {
                        if(data.status !== 200){
                            const newError = data.error.split("")
                            newError.splice(0,7)
                            dispatch({ type: 'P_Error',action : data.error})
                        }else{
                            dispatch({type :'Public_Fetch_success',action: data.data})
                        }
                    })
    }
}

export const deleteProject = (storyID) => {
    return async (dispatch,getState) =>{
        await fetch(`https://mario-diary.herokuapp.com/api/v1/story/${storyID}`,{ method: 'DELETE' })
                .then(res => res.json())
                    .then(data => {
                        if(data.status !== 200){
                            const newError = data.error.split("")
                            newError.splice(0,7)
                            dispatch({ type: 'P_Error',action : data.error})
                        }else{
                            dispatch({type :'Delete_success',action: data.message})
                            dispatch({ type:'notification',action: {message:`deleted a story`,data: data.data}})
                        }
                    })
    }
}

export const updateAction = (creds,storyID) => {
    return async (dispatch,getState) =>{
        await fetch(`https://mario-diary.herokuapp.com/api/v1/story/${storyID}`,{
            method:'PATCH', 
            headers: {
            Accepted:'appication/json',
            'Content-Type': 'application/json'
            },
            body:JSON.stringify(creds)
        }).then(res => res.json())
            .then(data => {
                if(data.status !== 200){
                    const newError = data.error.split("")
                    newError.splice(0,7)
                    dispatch({ type: 'P_Error',action : data.error})
                }else{
                    dispatch({type :'Updated_success',action: data.message})
                    dispatch({ type:'notification',action: {message:'updated a story' + creds.title ,data: data.data}})
                }
            })
    }
}

export const likeAction = (storyID) => {
    return async (dispatch,getState) =>{
        await fetch(`https://mario-diary.herokuapp.com/api/v1/like/${storyID}`,{method:'PATCH'})
                .then(res => res.json())
                    .then(data => {
                        if(data.status !== 200){
                            const newError = data.error.split("")
                            newError.splice(0,7)
                            dispatch({ type: 'P_Error',action : data.error})
                        }else{
                            dispatch({type :'like_success',action: data.message})
                        }
                })
    }
}

export const contact = (data) => {
    return async (dispatch,getState) => {
        await fetch('https://mario-diary.herokuapp.com/api/v1/contactUs',{
            method:'POST', 
            headers: {
            Accepted:'appication/json',
            'Content-Type': 'application/json'
            },
            body:JSON.stringify(data)
        }).then(res=>res.json())
            .then(data=>{
                if(data.status !== 200){
                    const newError = data.error.split("")
                    newError.splice(0,7)
                    dispatch({ type: 'P_Error',action : data.error})
                }else{
                    dispatch({type :'contact_success',action: data.message})
                }
            })
    }
}
