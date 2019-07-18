// Code ControlledInput Component Here

import React, { Component } from 'react';

class ControlledInput extends Component {
    state = {
        value: ''
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

/*     handleFirstNameChange = (e) => {
        this.setState({
            firstName: e.target.value
        })
    } */
    handleSubmit = event => {
        event.preventDefault()
        this.sendFormDataSomewhere(this.state)
    }

    render() {
        return (
          <form onSubmit={event => this.handleSubmit(event)}>
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </form>
        );
    }
}

export default ControlledInput;
