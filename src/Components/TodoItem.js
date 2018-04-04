import React, { Component } from 'react';

class TodoItem extends Component {

    render() {
        return (
            <li className="Todo list-group-item p-2">
                <div className="p-1">
                    {this.props.todo.title}
                </div>
            </li>
        );
    }
}

export default TodoItem;
