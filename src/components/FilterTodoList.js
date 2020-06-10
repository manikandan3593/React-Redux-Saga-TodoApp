import React from 'react'
import { VisibilityFilters } from '../actions'
import FilterLink  from '../containers/LinkWrapper'

const FilterTodoList = () => {
    return (
        <div>
            <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
            <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
            <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
      </div>
    )
}

export default FilterTodoList