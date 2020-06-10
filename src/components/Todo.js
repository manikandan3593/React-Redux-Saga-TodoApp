import React from 'react'

const Todo = (props) => {
    return(
        <tr onDoubleClick ={ () => props.toggleTodo(props.id)}>
            <td>{ props.id}</td>
            <td>{props.userId}</td>
            <td>{props.title}</td>
            <td><input readOnly type="checkbox" checked={ props.completed }></input></td>
        </tr>
    )
}

export default Todo