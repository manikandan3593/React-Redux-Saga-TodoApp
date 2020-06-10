import React from 'react'

const Link = ( {active, filterTodo, children}) => {
    return (
        <button
            onClick = { filterTodo }
            disabled = { active }
            style={{
                marginLeft: '4px',
                cursor: "pointer"
            }}
        >
            {children}
        </button>
    )
}

export default Link