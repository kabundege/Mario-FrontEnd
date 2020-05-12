import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ResetMailer } from '../../store/actions/forgotPassword'

class forgotePassword extends Component {
    state={
        email:null
    }
    handlerChange = (e) =>{
        const { id,value} = e.target
        this.setState({
            [id]: value
        })
    }
    handlerSubmit = (e) =>{
        this.props.sendEmail(this.state)
        e.preventDefault()
    }
    render() {
        const { forgotePassword } = this.props;
        return (
            <div className="container parent">
                <form className="white" onSubmit={this.handlerSubmit}>
                    <h5 className="grey-text text-darken-3 center">Enter Your Email</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handlerChange} />
                    </div>
                    <div className="input-field center">
                        <button className="btn pink lighten-1 z-depth-0">SEND</button>
                        <div className="pink-text text-darken-1 center">
                            {forgotePassword.emailError ? <p>{forgotePassword.emailError}</p> : null}
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToprops = (state) =>{
    return {
        forgotePassword : state.forgot
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendEmail: (email) => {dispatch(ResetMailer(email))}
    }
}

export default connect(mapStateToprops,mapDispatchToProps)(forgotePassword)
