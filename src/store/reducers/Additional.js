const initState = {
    SearchData : [
        {storyid: 1,timeStamp:1519801036856,likes:17,ownerId:"1586700006853",owner:'Kabundege', title: "House Party",content:'sunt aut facere repellat provident occaecati excepturi optio reprehenderit ea molestias quasi exercitationem repellat qui ipsa sit aut' },
        {storyid: 2,timeStamp:1586380103685,likes:41,ownerId:"1586700006853",owner:"Ange", title: "Schooling",content:'sunt aut facere repellat provident occaecati excepturi optio reprehenderit ea molestias quasi exercitationem repellat qui ipsa sit aut'},
        {storyid: 3,timeStamp:1507801036853,likes:23,ownerId:"1586700006853",owner:"Louange" ,title: "Programming",content:'sunt aut facere repellat provident occaecati excepturi optio reprehenderit ea molestias quasi exercitationem repellat qui ipsa sit aut'},
    ],
    Comments: [
        {commentid:2,storyid:1,createdon:1596380103685,author:"Drey Johnson",content:"this didn't end how i intended"},
        {commentid:3,storyid:2,createdon:1596380103685,author:"Louange Dukunde",content:"this didn't end how i intended"},
        {commentid:5,storyid:5,createdon:1586380103685,author:"kevin Hart",content:"i think this is the best story i've ever red"},
        {commentid:1,storyid:1,createdon:1586380103685,author:"kevin Hart",content:"i think this is the best story i've ever red"},
        {commentid:4,storyid:3,createdon:1586380103685,author:"Damon salvator",content:"i think this is the best story i've ever red"},
    ],
    SearchError : null,
    CommnetError : null
}

const AdditionalReducer = (state = initState,action) => {
    let Action  = action.action
    switch(action.type){
        case 'A_Error':
            return{
                ...state,
                SearchError: action.action,
                CommnetError: action.action
            }
        case 'StroySearch_success':
            return state = {
                SearchData:[...Action],
                SearchError:null
            }
        case 'GetComment_success':
            return state = {
                ...state,
                Comments:[...Action],
                CommnetError:null
            }
        case 'PostComment_success':
            return state = {
                ...state,
                Comments:[...state.Comments,...Action],
                CommnetError:null
            }
        default:
            return state
    }
}

export default AdditionalReducer;
