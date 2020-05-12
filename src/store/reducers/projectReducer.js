const initState = {
    UserProjects : [
        {storyid: 1,image:null,timeStamp:1519801036856,likes:17,ownerId:"1586700006853",owner:'Kabundege', title: "House Party",content:'sunt aut facere repellat provident occaecati excepturi optio reprehenderit ea molestias quasi exercitationem repellat qui ipsa sit aut' },
        {storyid: 2,image:null,timeStamp:1586380103685,likes:41,ownerId:"1586700006853",owner:"Ange", title: "Schooling",content:'sunt aut facere repellat provident occaecati excepturi optio reprehenderit ea molestias quasi exercitationem repellat qui ipsa sit aut'},
        {storyid: 3,image:null,timeStamp:1507801036853,likes:23,ownerId:"1586700006853",owner:"Louange" ,title: "Programming",content:'sunt aut facere repellat provident occaecati excepturi optio reprehenderit ea molestias quasi exercitationem repellat qui ipsa sit aut'},
    ],
    Public : [
        {storyid: 1,image:null,timeStamp:1519801036856,likes:37,ownerId:"1586700006853",owner:'Kabundege', title: "House Party",content:'sunt aut facere repellat provident occaecati excepturi optio reprehenderit ea molestias quasi exercitationem repellat qui ipsa sit aut' },
        {storyid: 5,image:null,timeStamp:1586380103685,likes:55,ownerId:"1586700006853",owner:"Kevin Hart", title: "Driving Test",content:'sunt aut facere repellat provident occaecati excepturi optio reprehenderit ea molestias quasi exercitationem repellat qui ipsa sit aut'},
        {storyid: 8,image:null,timeStamp:1586700006853,likes:3,ownerId:"1586700006853",owner:"Ishimwe Louange" ,title: "Corona Virus",content:'sunt aut facere repellat provident occaecati excepturi optio reprehenderit ea molestias quasi exercitationem repellat qui ipsa sit aut'},
    ],
    projectError:null,
    creationHandler:null,
    UpdatedSucess:null,
    Mailer:null
}
const projectReducer = (state = initState,action) => {
        switch(action.type){
            case 'P_Error':
                return{
                    ...state,
                    projectError : action.action
                }
            case 'creation_Error':
                return {
                    ...state,
                    creationHandler:action.action,
                }
            case 'Fetch_success':
                return{
                    ...state,
                    projectError:null,
                    UserProjects: [...action.action]
                }
            case 'Public_Fetch_success':
                return{
                    ...state,
                    projectError:null,
                    Public:[...action.action]
                }
            case 'Delete_success':
                return{
                    ...state,
                    projectError:null
                }
            case 'create_project_success':
                return{
                    ...state,
                    creationHandler:'success',
                    projectError:null
                }
            case 'Updated_success':
                return {
                    ...state,
                    UpdatedSucess:'done',
                    projectError:null
                }
            case 'like_success':
                return{
                    ...state,
                    projectError:null
                }
            case 'contact_success':
                return{
                    ...state,
                    projectError:null,
                    Mailer:action.action
                }
            default:
                return state
        }
}

export default projectReducer
