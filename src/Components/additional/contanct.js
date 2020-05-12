import React,{ Component } from 'react'
import ReactQuill from 'react-quill'
import { connect } from 'react-redux'
import { contact } from '../../store/actions/projectActions'

class contanct extends Component {
    state = {
        subject:"",
        authorEmail:'',
        content:'',
    }
    handlerChange = (e) => {
        const { id,value } = e.target;
        this.setState({
            [id]: value
        })
    }
    handlerQuill = (e,f) =>{
        console.log(e,f)
        this.setState({
            content: e
        })
    }
    handlerSubmit = (e) => {
        this.props.sendEmail(this.state)
        e.preventDefault()
    }

    componentDidMount(){
        const { project } = this.props
        project.Mailer = null
        project.projectError = null
    }

    render(){
        const { project } = this.props

        return (
            <div className="container">
                <form className="white" onSubmit={this.handlerSubmit}>
                    <h6 className="grey-text text-darken-3">rEply In 48HoUrs</h6>
                    <div className="input-field">
                        <label htmlFor="Subject">Subject</label>
                        <input type="text" id="subject" onChange={this.handlerChange} required/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">Your Email</label>
                        <input type="email" id="authorEmail" onChange={this.handlerChange} required/>
                    </div>
                    <div className="input-field">
                        <ReactQuill onChange={this.handlerQuill} value={this.state.content} id="content" placeholder="start writting..."/>
                    </div>
                    <div className="input-field">
                        <button className="btn green darken-2 z-depth-0 waves-effect waves-light">Send</button>
                        {project.projectError ? (
                            <p className="center red-text">{project.projectError}</p>
                        ):(
                            <p className="center green-text">{project.Mailer}</p>
                        )}
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        project : state.project
    }
}

const mapDispachToProps = (dispatch) => {
    return {
        sendEmail : (data)=>{dispatch(contact(data))}
    }
}

export default connect(mapStateToProps,mapDispachToProps)(contanct);
