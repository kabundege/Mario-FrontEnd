import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import moment from 'moment';

const Notifications = ({TopStories}) => {
    const linkStyle = { color:"black",textTransform:"lowercase",fontFamily:"'Open Sans', sans-serif"}
    return(
        <div className="section trends">
            <div className='card z-depth-0'>
                <div className="card-content">
                    <span className="card-title">Trends</span>
                    <ul className="notifications">
                       {
                           TopStories[0] ? TopStories.map(project=>{
                               return(
                                <div className="card-action grey lighten-4 notification" key={project.storyid}>
                                    <Link to={'/project/'+project.storyid} style={linkStyle}>{project.title} from {project.owner}</Link>
                                    <p className="green-text darken-2">{moment(project.timestamp).calendar()}</p>
                                </div>
                               )
                           }) : null
                       }
                    </ul>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        TopStories: state.project.Public.filter(project => project.likes > 30)
    }
}

export default connect(mapStateToProps)(Notifications)
