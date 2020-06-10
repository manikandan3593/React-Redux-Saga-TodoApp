import {combineReducers} from 'redux'
import ActionsTypes from '../actions/ActionTypes'
import {VisibilityFilters} from '../actions'
import ActionTypes from '../actions/ActionTypes';

let taskId;

function todos(state = [], action) {
    switch (action.type) {
      case ActionsTypes.Receive_Todo:
         taskId = action.data?.length
        return  [...state, ...action.data];
      case ActionsTypes.Toggle_Todo:
        let newState = state.map((todo) => {
          if(todo.id === action.id){
            todo.completed = !todo.completed 
            return todo
          }
            return todo
        })
        return  [...newState];
      case ActionTypes.Add_Todo:
        let newTodo = { id : ++taskId , userId : 1, title : action.task, completed : false }
        return [...state, newTodo]
      default:
        return state
    }
}

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case ActionsTypes.Filter_Todo:
      return action.filter;
    default:
      return state;
  }
}


export default combineReducers({
  todos,
  visibilityFilter
});
