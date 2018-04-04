import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
import uuid from 'uuid';

class AddProject extends Component {

    constructor(){
        super();
        this.state = {
            newProject: {}
        }
    }

    static defaultProps = {
        categories: ['Web Design', 'Web Development', 'Mobile Development']
    }

    handleSubmit(e){
        if(this.refs.title.value === ''){
            alert('Title is required');
        } else {
            this.setState({
                newProject:{
                    id: uuid.v4(),
                    title: this.refs.title.value,
                    category: this.refs.category.value
                }
            }, function () {
                // console.log(this.state);
                this.props.addProject(this.state.newProject);
            });
        }
        e.preventDefault();
    }

    render() {
        let categoryOptions = this.props.categories.map(category => {
            return <option key={category} value={category}>{category}</option>
        });

        return (
            <div className="container m-auto p-2 row">
                <div className="card bg-light col-md-7 col-sm-10 m-auto">
                    <div className="card-body">
                        <h3>Add Project</h3>
                        <hr/>
                        <form className="p-3" onSubmit={this.handleSubmit.bind(this)}>
                            <div className="form-group row">
                                <label className="col-md-3 col-sm-12" >Title</label>
                                <input type="text" className="form-control col-md-9 col-sm-12" ref="title"/>
                            </div>
                            <div className="form-group row">
                                <label className="col-md-3 col-sm-12" >Category</label>
                                <select type="text" className="form-control col-md-9 col-sm-12" ref="category">
                                    {categoryOptions}
                                </select>
                            </div>
                            <input type="submit" className="btn btn-block btn-primary" value="Save Project"/>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddProject;
