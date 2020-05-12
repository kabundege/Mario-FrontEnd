const initState = {
    Notes : [ {
        id:1,action:'New_Project',timestamp:1586380103685
    } ]
}

const NotifyReducer = (state = initState,action) => {

    switch(action.type){
        case 'notification':
            const newNote = {
                id: state.Notes.length + 1,
                action : action.action.message,
                timestamp:Date.now()
            }
            return state ={
                ...state,
                Notes: [...state.Notes,newNote]
            }
        default:
            return state
    }
}

export default NotifyReducer
