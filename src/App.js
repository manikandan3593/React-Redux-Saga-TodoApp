import React from 'react'
import TodoListWrapper from './containers/TodoListWrapper'
import  FilterTodoList from './components/FilterTodoList'
import './app.css';

export const App = () => {
    return (
        <div className="app">
            <FilterTodoList/>
            <TodoListWrapper/>
        </div>
    )
}