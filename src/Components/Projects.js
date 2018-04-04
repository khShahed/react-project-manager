import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
import PropTypes from 'prop-types';

class Projects extends Component {
    deleteProject(id){
        this.props.onDelete(id);
    }
    render() {
        let projectItems;
        if(this.props.projects){
            projectItems = this.props.projects.map(project => {
                return (
                    <ProjectItem onDelete={this.deleteProject.bind(this)} key={project.id} project={project}/>
                );
            });
        }

        return (
            <div className="col-md-6 col-sm-12" >
                <div className="card bg-light">
                    <div className="card-body">
                        <div >
                            <h3>My Projects</h3>
                            <hr/>
                            <ul className="list-group">
                                {projectItems}
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
Projects.propTypes = {
    projects: PropTypes.array,
    onDelete: PropTypes.func
};
export default Projects;
