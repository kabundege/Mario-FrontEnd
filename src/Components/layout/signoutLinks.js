import React from 'react';
import { NavLink } from 'react-router-dom';

const signedOut = () => {
    return(
        <div>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/signup">Sign Up</NavLink></li>
                <li><NavLink to="/login">Log In</NavLink></li>
            </ul>
        </div>      
    )
}

export default signedOut