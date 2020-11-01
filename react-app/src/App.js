import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

// Container based component
class App extends Component {
  state = {
    ninjas: [
      { id: 1, name: 'Ryu', age: '30', belt: 'Black' },
      { id: 2, name: 'Ken', age: '25', belt: 'Red' },
      { id: 3, name: 'Yoshi', age: '12', belt: 'Green' },
    ]
  }

  addNinja = (newNinja) => {
    // Spreading original array and adding newNinja
    newNinja.id = Math.random();
    let ninjas = [...this.state.ninjas, newNinja];
    this.setState({
      ninjas: ninjas
    })
  }

  deleteNinja = (id) => {
    // Filtering newArray without element with id
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id;
    })
    this.setState({
      ninjas: ninjas
    })
  }

  componentDidMount() {
    console.log('Component Mounted!');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component Update', prevProps, prevState);
  }

  render() {
    return (
      <div className="App">
        <h1>React App</h1> 
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} />
        <AddNinja addNinja={this.addNinja}/>
      </div>
    );
  }
}
 
export default App;