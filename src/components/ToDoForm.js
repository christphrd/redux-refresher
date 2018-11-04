import React from 'react';

class ToDoForm extends React.Component {
    state = {
        toDoItem: ""
    }

    handleSubmit = e => {
        e.preventDefault();

        console.log(this.state.toDoItem)
        console.log(this.props)
    }

    handleChange = e => {
        this.setState({
            toDoItem: e.target.value
        })
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input placeholder="What?" onChange={this.handleChange} />
                <button>Submit</button>
            </form> 
        )
        }
};

export default ToDoForm