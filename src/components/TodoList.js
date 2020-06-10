import React, {Component} from 'react'
import Todo from './Todo'
import '../TodoList.css'

class TodoList extends Component {
  
    componentDidMount(){
      this.props.requestTodo();
    }

    render() {
      return(
                this.props.todos.length > 0 ?
                      <div className="todoList">
                          <table id="todoTable">
                            <thead>
                              <tr>
                                <td>Id</td>
                                <td>User Id</td>
                                <td>Task</td>
                                <td>Completed</td>
                              </tr>
                            </thead>
                            <tbody>
                              { this.props.todos.map( (todo, index) =>   <Todo key={index}  {...todo} toggleTodo ={this.props.toggleTodo}/>) }
                            </tbody>
                          </table>
                      </div>
                : <h1>Loading !!!</h1>
      )
    }
  }

export default TodoList