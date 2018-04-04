import React, { Component } from 'react';
import TodoItem from './TodoItem';

class Todos extends Component {

    render() {
        let todoItems;
        if(this.props.todos){
            todoItems = this.props.todos.map(todo => {
                return (
                    <TodoItem  key={todo.title} todo={todo}/>
                );
            });
        }

        return (
            <div className="col-md-6 col-sm-12" >
                <div className="card bg-light">
                    <div className="card-body">
                        <div >
                            <h3>Todo List</h3>
                            <hr/>
                            <ul className="list-group">
                                {todoItems}
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Todos;