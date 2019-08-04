import React from 'react'

class ControlledInput extends React.Component {
  state = {
    firstName: "John",
    lastName: "Henry"
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.sendFormDataSomewhere(this.state)
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.submit(event)}>
          <input type="text" name="firstName" onChange={(event) => this.handleChange(event)} value={this.state.firstName} />
          <input type="text" name="lastName" onChange={(event) => this.handleChange(event)} value={this.state.lastName} />

        </form>

      </div>

    )
  }
}

export default ControlledInput
