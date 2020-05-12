export const searchAction = (payload) =>{
    return async (dispatch,getState)=>{
        await fetch('https://mario-diary.herokuapp.com/api/v1/search',{
            method:'POST',
            headers: {
                Accepted:'appication/json',
                'Content-Type': 'application/json'
                },
            body:JSON.stringify(payload)
        }).then(res => res.json())
            .then(data => {
                if(data.status !== 200){
                    dispatch({ type: 'Search_Error',action : data.error})
                }else{
                    dispatch({type :'Public_Fetch_success',action: data.data})
                    dispatch({ type:'notification',action: {message:`search for ${payload.content}`,data: data.data}})
                }
            })
    }
}

export const CreateComment = (storyID,payload) =>{
    return async (dispatch,getState)=>{
        await fetch(`https://mario-diary.herokuapp.com/api/v1/${storyID}`,{
            method:'POST',
            headers: {
                Accepted:'appication/json',
                'Content-Type': 'application/json'
                },
            body:JSON.stringify(payload)
        }).then(res => res.json())
            .then(data => {
                if(data.status !== 200){
                    dispatch({ type: 'A_Error',action : data.error})
                }else{
                    dispatch({type :'PostComment_success',action: data.data})
                    dispatch({ type:'notification',action: {message:'created A Comment',data: data.data}})
                }
            })
    }
}

export const getComment = (storyID) => {
    return async (dispatch,getState)=>{
        await fetch(`https://mario-diary.herokuapp.com/api/v1/${storyID}`)
                .then(res => res.json())
                    .then(data => {
                        if(data.status !== 200){
                            dispatch({ type: 'A_Error',action : data.error})
                        }else{
                            dispatch({type :'GetComment_success',action: data.data})
                        }
                    })
    }
}

export const DeleteComment = (storyID,commentID) => {
    return async (dispatch,getState)=>{
        await fetch(`https://mario-diary.herokuapp.com/api/v1/${storyID}/${commentID}`,{ method : 'DELETE' })
                .then(res => res.json())
                    .then(data => {
                        if(data.status !== 200){
                            dispatch({ type: 'A_Error',action : data.error})
                        }else{
                            dispatch({type :'DeleteComment_success',action: data.data})
                            dispatch({ type:'notification',action: {message:'Deleted A Comment',data: data.data}})
                        }
                    })
    }
}
