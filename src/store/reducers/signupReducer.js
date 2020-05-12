const initState = {
    email:null,
    userid:null,
    signupError: null,
    SignupSuccess:null
}

const signupReducer = (state = initState,action) => {
    const Action  = action.action;
    switch(action.type){
        case 'Signup_Error':
            return{
                ...state,
                signupError: action.action
            }
        case 'Signup_success':
            return state = {
                email:Action.email,
                userid:Action.id,
                signupError:null,
                SignupSuccess:"Mario Welcomes You!"
            }
        default:
            return state
    }
}

export default signupReducer
