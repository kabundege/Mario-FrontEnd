const initState = {
    firstname:null,
    lastname:null,
    email:null,
    userid:null,
    role:null,
    image:null,
    authError: null,
    token:null
}

const authReducer = (state = initState,action) => {
    let Action  = action.action
    switch(action.type){
        case 'Login_Error':
            return{
                ...state,
                authError: action.action
            }
        case 'Login_success':
            return state = {
                email:Action.email,
                userid:Action.id,
                firstname:Action.firstName,
                lastname:Action.lastName,
                token:Action.token,
                image:Action.image,
                role:Action.role,
                authError:null
            }
        case 'Logout':
            localStorage.removeItem("token")
            return state = {
                firstname:null,
                lastname:null,
                email:null,
                userid:null,
                authError: null,
                role:null,
                token:null
            }
        default:
            return state
    }
}

export default authReducer
