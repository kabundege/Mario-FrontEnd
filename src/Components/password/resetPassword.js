import React, { Component } from 'react'
import { connect } from 'react-redux'
import { resetAction } from '../../store/actions/forgotPassword'
import { TokenAction } from '../../store/actions/authAction'
import { Redirect } from 'react-router-dom'

class forgotePassword extends Component {
    constructor(){
        super()
        this.state={
            password:null,
            confirmPassword:null
        }
        this.token = null;
    }
    handlerChange = (e) =>{
        const { id,value} = e.target
        this.setState({
            [id]: value
        })
    }
    handlerSubmit = (e) =>{
        this.props.reset(this.state,this.token)
        e.preventDefault()
    }
    After = () =>{
        this.props.auth({token : this.token})
    }
    componentDidMount(){
        const token = window.location.search
        const arr = token.split("")
        arr.splice(0,7)
        this.token = arr.join("")
    }
    render() {
        const { resetStatus } = this.props;
        const { isAuth } = this.props;
        if(isAuth.email) return  <Redirect to='/dash'/>
        return (
            <div className="container parent">
                <form className="white" onSubmit={this.handlerSubmit}>
                    <h5 className="grey-text text-darken-3 center">Reset Your Password</h5>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handlerChange} required/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="ConfirmPasword">Confirm Password</label>
                        <input type="password" id="confirmPassword" onChange={this.handlerChange} required/>
                    </div>
                    <div className="input-field center">
                        <button className="btn pink lighten-1 z-depth-0">Reset</button>
                        <div className="center">
                            {resetStatus.ResetError ? <p className="pink-text text-darken-1 ">{resetStatus.ResetError}</p> : null }
                            {resetStatus.ResetSuccess ? (
                                <div>
                                    <p className="green-text text-lighten-2">{resetStatus.ResetSuccess}
                                    <span 
                                        className="blue-text text-lighten-2" 
                                        style={{cursor:"pointer"}} 
                                        onClick={this.After}
                                        >Click_here To continue!</span>
                                        </p>
                                </div>) : null
                            }
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToprops = (state) =>{
    return {
        resetStatus : state.Reset,
        isAuth: state.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        reset : (creds,token) => {dispatch(resetAction(creds,token))},
        auth : (token) => {dispatch(TokenAction(token))}
    }
}

export default connect(mapStateToprops,mapDispatchToProps)(forgotePassword)
