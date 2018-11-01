import React, { Component } from 'react';
import './App.css';
import ToDoForm from './components/ToDoForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
        <body>
          <ToDoForm />
        </body>
      </div>
    );
  }
}

export default App;
