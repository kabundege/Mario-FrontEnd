const initState = {
    emailError : null
}

const forgotReducer = (state = initState,action) => {
    switch(action.type){
        case 'Email_Error':
            return{
                ...state,
                emailError: action.action
            }
        case 'Email_success':
            return state = {
                ...state,
                emailError: action.action
            }
        default:
            return state
    }
}

export default forgotReducer
