import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return(
        <footer className="page-footer grey darken-4">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="green-text"><i style={{position:"relative",top:"4px",left:"-5px"}} className="material-icons">cloud</i>Mario Diary</h5>
                <p className="grey-text text-lighten-4">Created with <i style={{position:"relative",top:"3px",color:"red"}} className="tiny material-icons">favorite</i> Kabundege Christophe</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">More</h5>
                <ul>
                  <li><Link className="grey-text text-lighten-3" to="/about-us"><i style={{position:"relative",top:"4px",left:"-5px"}} className="tiny material-icons">bubble_chart</i>About_us</Link></li>
                  <li><Link className="grey-text text-lighten-3" to="/contact-us"><i style={{position:"relative",top:"2px",left:"-5px"}} className="tiny material-icons">local_phone</i>Contact_us</Link></li>
                  <li><Link className="grey-text text-lighten-3" to="#"><i style={{position:"relative",top:"2px",left:"-5px"}} className="tiny material-icons">language</i>Our Api</Link></li>
                  <li><Link className="grey-text text-lighten-3" to="/more"><i style={{position:"relative",top:"2px",left:"-5px"}} className="tiny material-icons">add_location</i>Do More</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2020 Copyright Rwanda
            <Link className="btn green darken-2 right" to="/contact-us">Talk to Us!</Link>
            </div>
          </div>
        </footer> 
    )
}

export default Footer
