import React from 'react'
import ProjectSummary from './projectSummary'

const ProjectList = ({ projects }) => {
    if(projects[0]){
        return(
            <div className="project-list section">
                {
                    projects.map(project => {
                        return(
                            <ProjectSummary project={project} key={project.storyid}/>
                        )
                    })
                }
            </div>
        )
    }else{
        return(
            <div className="project-list section">
                <div className="card z-depth-0 project-summary" >
                    <div className="card-content">
                        No Story Found
                    </div>
                    <div className="card-action gret lighten-4 grey-text">
                        Try searching with the title or the owner
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectList
