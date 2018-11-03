import React from 'react';

const ToDoForm = props => {
    console.log(props)
    return(
        <form onSubmit={e => e.preventDefault()}>
            <input placeholder="What?"></input>
            <button>Submit</button>
        </form> 
    )
};

export default ToDoForm