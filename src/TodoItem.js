/** Todo item component */
import React from "react"

function TodoItem(props) {
    // Individual style added on click!
    const completedStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }
    
    return (
        <div className="todo-item">
            <input 
                id = {props.item.id}
                type="checkbox" 
                checked={props.item.completed} 
                onChange={() => props.handleChange(props.item.id)}
            />
            <label htmlFor={props.item.id} style={props.item.completed ? completedStyle: null}>{props.item.text}</label>
        </div>
    )
}

export default TodoItem