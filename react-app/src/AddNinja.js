import React, { Component } from 'react';

class AddNinja extends Component {
  state = {
    name: null,
    age: null,
    belt: null,
  }

  // Arrow function used to mantain this keyword reference
  handleChange = (e) => {
    this.setState({
      // Looking for named property in state based on target id
      [e.target.id]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addNinja(this.state); // Function passed as prop from parent
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" onChange={this.handleChange}/>

          <label htmlFor="name">Age:</label>
          <input type="text" id="age" onChange={this.handleChange}/>

          <label htmlFor="name">Belt:</label>
          <input type="text" id="belt" onChange={this.handleChange}/>

          <button>Submit</button>
        </form>
      </div>
    );
  }
};

export default AddNinja;