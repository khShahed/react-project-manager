import React, { Component } from 'react';

class ProjectItem extends Component {
    deleteProject(id){
        this.props.onDelete(id);
    }
    render() {
        return (
            <li className="Project list-group-item p-2">
                <div className="p-1">
                    {this.props.project.title} - <small className="text-muted text-info">{this.props.project.category}</small>
                    <a href="#"
                       className="btn btn-danger float-right"
                       onClick={this.deleteProject.bind(this, this.props.project.id)}>
                        Delete
                    </a>
                </div>
            </li>
        );
    }
}

export default ProjectItem;
