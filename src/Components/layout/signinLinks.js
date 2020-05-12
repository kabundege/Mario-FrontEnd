import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { logoutAction } from '../../store/actions/authAction'

const signedIn = (props) => {
    const { signout } = props 
    const { auth } = props
    return(
    <div>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><NavLink to="/dash">Dashboard</NavLink></li>
            <li><NavLink to="/create">New Project</NavLink></li>
            <li><NavLink to="/" onClick={signout}>Log Out</NavLink></li>
            <li><NavLink to="/profile" className="btn btn-floating green darken-2" >{auth.firstname.charAt(0)}{auth.lastname.charAt(0)}</NavLink></li>
        </ul>
    </div>
    )
}


const mapDispatchToProps = (dispatch) => {
    return{
        signout : () =>{ dispatch(logoutAction())}
    }
}

const MapStateToProps = (state) =>{
    return {
        auth: state.auth
    }
}

export default connect(MapStateToProps,mapDispatchToProps)(signedIn)
