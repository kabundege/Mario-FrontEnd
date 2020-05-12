export const ResetMailer = (Credential) =>{
    return async (dispatch,getState) => {
        await fetch('https://mario-diary.herokuapp.com/api/v1/auth/email',{
            method: 'POST', 
            headers: {
            Accepted:'appication/json',
            'Content-Type': 'application/json'
            },
            body:JSON.stringify(Credential)
        }).then(res => res.json()).then(data => {
            if(data.status !== 200){
                dispatch({ type: 'Email_Error',action : data.error})
            }else{
                dispatch({type :'Email_success',action: data.message})
            }
        })
    }
}

export const resetAction = (Credential,token) =>{
    return async (dispatch,getState) => {
        await fetch(`https://mario-diary.herokuapp.com/api/v1/auth/reset/${token}`,{
            method: 'PATCH', 
            headers: {
            Accepted:'appication/json',
            'Content-Type': 'application/json'
            },
            body:JSON.stringify(Credential)
        }).then(res => res.json()).then(data => {
            if(data.status !== 200){
                dispatch({ type: 'Reset_Error',action : data.error})
            }else{
                dispatch({type :'Reset_success',action: data.message})
            }
        })
    }
}
