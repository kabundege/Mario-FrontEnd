export const signupAction = (Credential) =>{
    return async (dispatch,getState) => {
        await fetch('https://mario-diary.herokuapp.com/api/v1/auth/signup',{
            method: 'POST', 
            headers: {
            Accepted:'appication/json',
            'Content-Type': 'application/json'
            },
            body:JSON.stringify(Credential)
        }).then(res => res.json()).then(data => {
            if(data.status !== 201){
                dispatch({ type : 'Signup_Error',action : data.error})
            }else{
                dispatch({ type :'Signup_success',action: data.data})
            }
        })
    }
}

export const authAction = (Credential) =>{
    return async (dispatch,getState) => {
        await fetch('https://mario-diary.herokuapp.com/api/v1/auth/signin',{
            method: 'POST', 
            headers: {
            Accepted:'appication/json',
            'Content-Type': 'application/json'
            },
            body:JSON.stringify(Credential)
        }).then(res => res.json()).then(data => {
            if(data.status !== 200){
                dispatch({ type: 'Login_Error',action : data.error})
            }else{
                dispatch({type :'Login_success',action: data.data})
            }
        })
    }
}

export const TokenAction = (token) =>{
    return async (dispatch,getState) => {
        await fetch(`https://mario-diary.herokuapp.com/api/v1/checkToken/${token}`)
                .then(res => res.json()).then(data => {
                    if(data.status !== 200){
                        dispatch({ type: 'Login_Error',action : data.error})
                    }else{
                        dispatch({type :'Login_success',action: data.data})
                        dispatch({ type:'notification',action: {message:'Login',data: data.data}})
                    }
                })
    }
}

export const logoutAction = () =>{
    return async (dispatch,getState) => {
        dispatch({type :'Logout'})
    }
}
