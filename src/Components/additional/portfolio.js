import React from 'react'
import './portfolio.css'
import { Link } from 'react-router-dom'
import Tools from '../../img/circuit.jpg'
import server from '../../img/server.jpg'
import chriss from '../../img/chriss.jpg'
import dash from '../../img/dash.jpg'

export default function portfolio() {
    return (
        <div>
            <div  className="section  img">
                <div className="container white-text bgn">
                    <h1>Christophe <span>K</span> Kabundege</h1>
                    <h6>Rwandan Software Engineer for React.js, Node.js and Express</h6>
                </div>
            </div>
            <div className="socialMedia">
                <Link to="//web.facebook.com/christophe.kwizera.79"><i className="fab fa-facebook-f medium"></i></Link>
                <Link to="//github.com/kabundege"><i className="fab fa-github"></i></Link>
                <Link to="//www.linkedin.com/in/christophe-kwizera-081123190/"><i className="fab fa-linkedin-in"></i></Link>
                <Link to="//twitter.com/KabundegeC"><i className="fab fa-twitter"></i></Link>
            </div>
            <div className="container developer">
                <div className="content">
                    <h4 className="header center">About Me</h4>
                    <p>Get to know me before you dive into my content.</p>
                </div>
                <img src={chriss} alt="developer"/>
                <div className="Media">
                    <Link to="//web.facebook.com/christophe.kwizera.79"><i className="fab fa-facebook-f"></i></Link>
                    <Link to="//github.com/kabundege"><i className="fab fa-github grey-text text-darken-3"></i></Link>
                    <Link to="//www.linkedin.com/in/christophe-kwizera-081123190/"><i className="fab fa-linkedin-in"></i></Link>
                    <Link to="//twitter.com/KabundegeC"><i className="fab fa-twitter"></i></Link>
                </div>
                <em>
                I am a self-employed software and web engineer dedicated to
                learning and teaching JavaScript for client-server architectures.
                while obtaining my Bachelor Degree in computer Engineering, I gained 
                experience from <span style={{color:"blue"}}>Andela</span>, where I used JavaScript intensively
                during both my professional life and spare time. Eventually it led me
                to teach others about these topics and to offer <b> 1 | N | 1 </b>courses and 
                on-site consulting for companies. I am happy to welcome you on my website
                </em>
            </div>
            <div className="section detail white">
                <div className="container developer">
                    <div className="content">
                        <h4 className="header center">What I offer</h4>
                        <p>Why you might want to hire me</p>
                    </div>
                    <div className="data">
                        <div className="card">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img className="activator" src={dash} alt=""/>
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">FrOnTeNd DeSiGn<i className="material-icons right">more_vert</i></span>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">FrOnTeNd DeSiGn<i className="material-icons right">close</i></span>
                                <ul>
                                    <li>___</li>
                                    <li><i className="fab fa-html5"></i> HTML5</li>
                                    <li><i className="fab fa-css3-alt"></i> CSS3</li>
                                    <li><i className="fab fa-js-square"></i> JavaScript</li>
                                    <li><i className="fab fa-react"></i> React.Js</li>
                                    <li><i className="fab fa-reacteurope"></i> React_Native</li>
                                </ul>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img className="activator" src={Tools} alt=""/>
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">Dev Tools<i className="material-icons right">more_vert</i></span>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">Dev Tools<i className="material-icons right">close</i></span>
                                <ul>
                                    <li>___</li>
                                    <li><i class="fas fa-code-branch"></i> GitHub</li>
                                    <li><i class="fas fa-plane-departure"></i> Pivotal Tracker</li>
                                    <li><i class="fas fa-server"></i> Heroku</li>
                                </ul>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img className="activator" src={server} alt=""/>
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">BaCkEnd DeSiGn<i className="material-icons right">more_vert</i></span>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">BaCkEnd DeSiGn<i className="material-icons right">close</i></span>
                                <ul>
                                    <li>___</li>
                                    <li><i class="fab fa-node-js"></i> Express.Js</li>
                                    <li><i class="fas fa-server"></i> FireBase</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
