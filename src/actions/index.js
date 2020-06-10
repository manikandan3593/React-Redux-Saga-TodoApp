import ActionTyes from './ActionTypes'

export const requestTodo = () => {
    return {
        type : ActionTyes.Request_Todo
    }
}

export const receiveTodo = (data) => {
    return {
        type : ActionTyes.Receive_Todo,
        data
    }
}

export const filterTodo = (filter) => {
    return {
        type : ActionTyes.Filter_Todo,
        filter
    }
}

export const toggleTodo = (id) => {
    return {
        type : ActionTyes.Toggle_Todo,
        id
    }
}

export const addTodo = (task) => {
    return {
        type : ActionTyes.Add_Todo,
        task
    }
}

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};
  