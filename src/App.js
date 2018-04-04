import React, { Component } from 'react';
import './App.css';
import uuid from 'uuid';
import Todos from './Components/Todos';
import Projects from './Components/Projects';
import AddProject from "./Components/AddProject";
import $ from 'jquery';

class App extends Component {
    constructor(){
        super();
        this.state = {
            projects : [],
            todos: []
        }
    }
    getTodos(){
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/todos',
            dataType: 'json',
            cache: false,
            success: function (data) {
                this.setState({
                    todos:data
                }, function () {
                    console.log(this.state);
                });
            }.bind(this),
            error: function (xhr, status, err) {
                console.log(err);
            }
        });
    }

    getProjects(){
        this.setState({
            projects:[
                {
                    id: uuid.v4(),
                    title: "Buisness Website",
                    category: "Web Design"
                },
                {
                    id: uuid.v4(),
                    title: "Social App",
                    category: "Mobile Development"
                },
                {
                    id: uuid.v4(),
                    title: "Ecommerce Shopping Cart",
                    category: "Web Development"
                }
            ]
        });
    }

    componentWillMount(){
        this.getProjects();
        this.getTodos();
    }

    componentDidMount(){
        this.getTodos();
    }

    handleAddProject(project){
        let projects = this.state.projects;
        projects.unshift(project);
        this.setState({projects: projects});
    }
    handleDeleteProject(id){
        let projects = this.state.projects;
        let index = projects.findIndex( x => x.id === id);
        projects.splice(index, 1);
        this.setState({projects: projects});
    }
  render() {
    return (
      <div className="App">
          <div className="bg-info mb-3 text-center">
              <h3 className="text-light p-2">ReactJS Project Manager App</h3>
          </div>
          <AddProject addProject={this.handleAddProject.bind(this)}/>
          <div className="row">
              <Projects className="col-md-6 col-sm-12" projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>
              <Todos  todos={this.state.todos}/>
          </div>
      </div>
    );
  }
}

export default App;
