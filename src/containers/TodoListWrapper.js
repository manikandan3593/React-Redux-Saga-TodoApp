import { connect } from 'react-redux'
import { requestTodo, VisibilityFilters, toggleTodo } from '../actions'
import TodoList from '../components/TodoList'

const getTodos = (todos, filter) => {
    switch(filter)
    {
     case VisibilityFilters.SHOW_ALL :
        return todos;
     case VisibilityFilters.SHOW_COMPLETED :
        return todos.filter((todo) => todo.completed)
    case VisibilityFilters.SHOW_ACTIVE :
        return todos.filter((todo) => !todo.completed)
    default:
        throw new Error('Unknown filter: ' + filter);
    }
}

const mapStateToProps = state => ({
    todos: getTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = (dispatch) => ({
    requestTodo : () => dispatch(requestTodo()),
    toggleTodo : id => dispatch(toggleTodo(id))
});

const TodoListWrapper =  connect( mapStateToProps, mapDispatchToProps)(TodoList)

export default TodoListWrapper