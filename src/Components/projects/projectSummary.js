import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const ProjectSummary = ({ project }) => {
    return(
        <div className="card z-depth-0 project-summary" >
            <div className="card-content">
                <Link to={'/project/'+ project.storyid}>
                    <span className="card-title green-text">
                         {project.title}</span></Link>
                        <ReactQuill id="display" value={project.content} readOnly/>
            </div>
            <div className="card-action gret lighten-4 grey-text">
                <div className="right likes">
                    <i className="material-icons green-text text-darken-1">favorite_border</i>
                    {project.likes}
                </div>
                <div><i style={{position:"relative",right:"5px",top:"5px",fontSize:"20px"}} className="material-icons green-text text-darken-1">person_pin</i>{project.owner}</div>
                <div><i style={{position:"relative",right:"5px",top:"5px",fontSize:"20px"}} className="material-icons green-text text-darken-1">date_range</i>{moment(project.timeStamp).calendar()}</div>
            </div>
        </div>
    )
}

export default ProjectSummary
