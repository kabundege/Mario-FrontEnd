import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { ActionCreate } from '../../store/actions/projectActions'
import { TokenAction } from '../../store/actions/authAction'
import ReactQuill from 'react-quill'; 
import 'react-quill/dist/quill.snow.css';

class CreateProject extends Component {
    constructor(props){
        super(props)
        this.state = { 
            title : 'Untitled Document',
            content : '',
            status:'public',
        }
        this.creationSucess = null;
        this.theme = 'snow'
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
    handlerQuill = (content, delta, source, editor) => {
        console.log("content is "+ content,"delta is "+ delta,"source is "+ source,"editor is "+ editor)
        this.setState({
            content: content
        })
    }
    handlerSubmit = (e) => {
        this.props.createProject(this.state)
        e.preventDefault()
    }
    render(){
        const { project,auth } = this.props;

        if(!auth.email){
            const token = localStorage.getItem('token')
            if(token){
                this.props.isAuth(token)  
            }else{
                this.props.history.push("/login")
            }
        }

        if(project.creationHandler === "success"){
            project.creationSucess = null
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
                        <button className="btn green darken-2 z-depth-0">Create</button>
                        <p className="center red-text text-darken-2">{ project.creationHandler }</p>
                    </div>
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        auth : state.auth,
        project : state.project
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject : (project) => {dispatch(ActionCreate(project))},
        isAuth: (token) => {dispatch(TokenAction(token))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)
