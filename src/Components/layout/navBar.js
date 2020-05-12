import React from 'react';
import { Link,NavLink } from 'react-router-dom';
import SignedInLinks from './signinLinks'
import SignedOutLinks from './signoutLinks'
import { connect } from 'react-redux'
import { logoutAction } from '../../store/actions/authAction'
import diaryImage from '../../img/small.jpg'

const Nav = (props) => {
    const { auth } = props;
    const { signout } = props;

    const links = auth.email ? <SignedInLinks /> :<SignedOutLinks/>

    const sideNav  = auth.email ? (
        <ul id="mobile-demo" className="sidenav">
            <li>
                <div className="user-view">
                    <div className="background">
                        <img src={diaryImage} alt="user"/>
                    </div>
                    <Link to="/profile" className="btn btn-floating green darken-2">{auth.firstname.charAt(0)}{auth.lastname.charAt(0)}</Link>
                    <Link to="/profile" className="white-text name">{auth.firstname+' '+auth.lastname}</Link>
                    <Link to="/profile" className="white-text email">{auth.email}</Link> 
                </div>
            </li>
            <li><NavLink to="/dash">Dashboard</NavLink></li>
            <li><NavLink to="/create">New Project</NavLink></li>
            <li><NavLink to="/" onClick={signout}>Log Out</NavLink></li>
        </ul>
    ) : (
        <ul id="mobile-demo" className="sidenav">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/signup">Sign Up</NavLink></li>
            <li><NavLink to="/login">Log In</NavLink></li>
        </ul>
    )

    return(
        <nav className="nav-warpper grey darken-3">
            <div className="container">
                <Link to='/' className='brand-logo'>
                    <i style={{position:"relative",top:"3px"}} className="material-icons">cloud</i>
                Mario Diary</Link>
                <Link to="#" data-target="mobile-demo" className="sidenav-trigger right">
                    <i className="material-icons">menu</i>
                </Link>
                {links}
            </div>
            {sideNav}
        </nav>  
    )
}

const mapDispatchToProps = (dispatch) => {
    return{
        signout : () =>{ 
            localStorage.removeItem("token")
            dispatch(logoutAction())
        }
    }
}

const mapStateToProps = (state) => {
    return{
        auth: state.auth
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Nav)