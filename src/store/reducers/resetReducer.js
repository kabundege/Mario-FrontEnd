const initState = {
    ResetError : null,
    ResetSuccess :null
}

const ResetReducer = (state = initState,action) => {
    switch(action.type){
        case 'Reset_Error':
            return{
                ...state,
                ResetError: action.action
            }
        case 'Reset_success':
            return state = {
                ...state,
                ResetSuccess: action.action
            }
        default:
            return state
    }
}

export default ResetReducer
