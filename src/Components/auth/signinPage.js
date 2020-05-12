import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { authAction,TokenAction } from '../../store/actions/authAction'
import { Redirect } from 'react-router-dom'
import google from '../../img/normal google.png'
import facebook from '../../img/normal facebook.png'
import { Link } from 'react-router-dom'
import dotenv from 'dotenv'

dotenv.config()

class signinPage extends Component {
    state = {
        email : null,
        password : null
    }
    handlerChange = (e) => {
        const { id,value } = e.target;
        this.setState({
            [id]: value
        })
    }
    handlerSubmit = async (e) => {
        this.props.signin(this.state)
        e.preventDefault()
    }
    handlerGoogle  = (e) =>{
        window.location.href = `https://mario-diary.herokuapp.com/api/v1/auth/google`
    }
    handlerFacebook  = () =>{
        window.location.href = `https://mario-diary.herokuapp.com/api/v1/auth/facebook`
    }
    componentDidMount(){
        const token = window.location.search
        const arr = token.split("")
        arr.splice(0,7)
        if(arr.length > 20){
            this.props.auth(arr.join("").trim())
            console.log("this happened");
        }else{
            const localToken = localStorage.getItem("token")
            if(localToken) return this.props.auth(localToken)
        }
    }
    render(){
        const { isAuth } = this.props;
        if(isAuth.email) {
            localStorage.setItem('token',isAuth.token)
            return <Redirect to="/dash"/>
        }
        return (
            <div className="container parent">
                <form className="white" onSubmit={this.handlerSubmit}>
                    <h5 className="grey-text text-darken-3 center">SIGN IN</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handlerChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handlerChange}/>
                    <Link to='/forgotPassword' className="green-text">Forgot Password ?</Link>
                    </div>
                    <div className="input-field center">
                        <button className="btn green darken-2 z-depth-0">LOG IN</button>
                        <div className="red-text text-darken-1 center">
                            {isAuth.authError ? <p>{isAuth.authError}</p> : null}
                        </div>
                    </div>
                    <hr/>
                    <div className="input-field center">
                        <button className="loggers google">
                            <img src={google} alt="login" onClick={this.handlerGoogle}/>
                        </button>
                        <button className="loggers facebook">
                            <img src={facebook} alt="facebook" onClick={this.handlerFacebook}/>
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToprops = (state) =>{
    return {
        isAuth : state.auth
    }
}

const mapDisptachToprops = (dispatch) => {
    return {
        signin : (creds) => { dispatch(authAction(creds)) },
        auth : (token) => {dispatch(TokenAction(token))}
    }
}

export default connect(mapStateToprops,mapDisptachToprops)(signinPage)
