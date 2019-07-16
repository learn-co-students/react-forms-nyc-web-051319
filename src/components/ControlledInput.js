import React, { Component } from 'react'
// Code ControlledInput Component Here


class ControlledInput extends Component {
  state = {
    firstName: 'Mendel',
    lastName: 'Stillerman',
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.sendFormDataSomewhere(this.state)
  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <input name="firstName"
          type="text"
          value={this.state.firstName}
          onChange={this.handleChange}
        />
        <input
          name="lastName"
          type="text"
          value={this.state.lastName}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default ControlledInput;
