import React from 'react';

import TodoItem from "./TodoItem"
import todosData from "./todosData"

class App extends React.Component {
  //Reading "todosData" from the JS file, this is to replicate the fact of getting data from the API 
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
    }
    
  //Handle the change on click for TodoItem.
    handleChange = (id) => {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }
    //Everything renders here!
    render() {
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)
        
        return (
            <div className="todo-list">
                {todoItems}
            </div>
        )    
    }
}

export default App