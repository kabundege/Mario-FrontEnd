import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { updateAction } from '../../store/actions/projectActions'
import ReactQuill from 'react-quill'; 
import 'react-quill/dist/quill.snow.css';
import { TokenAction } from '../../store/actions/authAction';

class CreateProject extends Component {
    constructor(props){
        super(props)
        this.state = {
            title : '',
            content : '',
            status:'',
        }
        this.storyid = null;
        this.creationSucess = null;
        this.Editor = {
            modules : {
                toolbar: [
                    ['bold','italic', 'underline', 'strike'],        // toggled buttons
                    ['blockquote', 'code-block'],
                    
                    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
                    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
                    [{ 'direction': 'rtl' }],                         // text direction
                    // custom dropdown
                    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

                    ['link', 'image', 'video'],
                  
                    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
                    [{ 'font': [] }],
                    [{ 'align': [] }],                                       // remove formatting button
                  ]
                }
        }
    }
    handlerChange = (e) => {
        const { id,value } = e.target;
        this.setState({
            [id]: value
        })
    }
    handlerQuill = (e) =>{
        this.setState({
            content: e
        })
    }
    handlerSubmit = (e) => {
        this.props.updateProject(this.state,this.storyid)
        e.preventDefault()
    }
    componentDidMount(){
        const { UserProject,auth } = this.props
        if(UserProject){
                this.storyid = UserProject.storyid
            this.setState({
                title: UserProject.title,
                content: UserProject.content,
                status: UserProject.share
            })
        }
        if(!auth.email){
            const token = localStorage.getItem('token')
            if(token){
                this.props.isAuth(token)  
            }else{
                this.props.history.push("/login")
            }
        }
    }
    render(){
        const { project } = this.props
        if(project.UpdatedSucess){
            project.UpdatedSucess = null;
            setTimeout(()=>{this.props.history.push('/dash')},1000)
        }

        return (
            <div className="container createProject">
            <form className="white" onSubmit={this.handlerSubmit}>
                    <div className="section title">
                        <i style={{position:"absolute",top:"30%"}} className="material-icons green-text text-darken-1">description</i>
                        <input type="text" id="title" className="grey-text text-darken-2" value={this.state.title} onChange={this.handlerChange} required/>
                    </div>
                    <div className="input-field Increate">
                        <p className="choice">
                            <label>
                                <input 
                                    id="status" 
                                    value="public" 
                                    className="with-gap" 
                                    name="group1" 
                                    type="radio"
                                    checked={this.state.status === 'public'} 
                                    onChange={this.handlerChange}
                                    /><span>Public</span>
                            </label>
                            <label>
                                <input 
                                    id="status" 
                                    value="private" 
                                    className="with-gap" 
                                    name="group1" 
                                    type="radio"
                                    checked={this.state.status === 'private'} 
                                    onChange={this.handlerChange} 
                                    /><span>Private</span>
                            </label>
                        </p>
                    </div>
                    <br/>
                    <div className="input-field app">
                    <ReactQuill 
                        value={this.state.content}
                        modules={this.Editor.modules}
                        theme="snow"
                        onChange={this.handlerQuill}
                        bounds={'.app'}
                        />
                    </div>
                    <div className="input-field">
                        <button className="btn green darken-2 z-depth-0">UPDATE</button>
                        <p className="center red-text text-darken-2">{ project.projectError }</p>
                    </div>
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state,oldProps) => {
    const id = oldProps.match.params.id
    return{
        UserProject : state.project.UserProjects.find(project => project.storyid === id),
        project: state.project,
        auth:   state.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateProject : (project,id) => {dispatch(updateAction(project,id))},
        isAuth: (token) => {dispatch(TokenAction(token))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)
