import React from 'react';

const ToDoForm = () => {
    return(
        <form onSubmit={e => e.preventDefault()}>
            <input placeholder="What?"></input>
            <button>Submit</button>
        </form> 
    )
};

export default ToDoForm