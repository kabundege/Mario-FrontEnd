import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { signupAction } from '../../store/actions/authAction'
import { Redirect } from 'react-router-dom'

class signupPage extends Component {
    state = {
        email : '',
        password : '',
        firstName: '',
        lastName:'',
        confirmPassword:''
    }
    handlerChange = (e) => {
        const { id,value } = e.target;
        this.setState({
            [id]: value
        })
    }
    handlerSubmit = (e) => {
        this.props.signup(this.state)
        e.preventDefault()
    }
    componentDidMount(){
        const { auth } = this.props;
        if(!auth.email){
            const token = localStorage.getItem('token')
            if(token){
                this.props.isAuth(token)  
            }
        }else{
            this.props.history.push("/dash")
        }
    }
    render(){
        const { signupState } = this.props;
        if (signupState.SignupSuccess) return < Redirect to="/login"/>
        signupState.SignupSuccess = null
        return (
            <div className="container">
                <form className="white" onSubmit={this.handlerSubmit}>
                    <h5 className="grey-text text-darken-3">SIGN UP</h5>
                    <div className="input-field">
                        <label htmlFor="Firstname">Firstname</label>
                        <input type="text" id="firstName" onChange={this.handlerChange} required/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="Lastname">Lastname</label>
                        <input type="text" id="lastName" onChange={this.handlerChange} required/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handlerChange} required/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handlerChange} required/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="ConfirmPasword">Confirm Password</label>
                        <input type="password" id="confirmPassword" onChange={this.handlerChange} required/>
                    </div>
                    <div className="input-field">
                        <button className="btn green darken-2 z-depth-0">Register</button>
                        <div className="red-text center">
                            <p  className="red-text text-darken-1">{signupState.signupError}</p>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToprops = (state) =>{
    return {
        auth: state.auth,
        signupState : state.signup
    }
}

const mapDisptachToprops = (dispatch) => {
    return {
        signup : (creds) => { dispatch(signupAction(creds)) }
    }
}

export default connect(mapStateToprops,mapDisptachToprops)(signupPage)
