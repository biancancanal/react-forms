import React from 'react';

class Form extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    submittedData: []
  }

  handleFirstNameChange = event => {
    console.log("event.target.value", event.target.value)
    console.log("state", this.state.firstName)
    this.setState({
      firstName: event.target.value
    })
  }

  handleLastNameChange = event => {
    this.setState({
      lastName: event.target.value
    })
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state)
    //send data somewhere to be added to database
    this.setState({
      firstName: "",
      lastName: ""
    })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="firstName" onChange={this.handleChange} value={this.state.firstName} />
        <input type="text" name="lastName" onChange={this.handleChange} value={this.state.lastName} />
        <input type= "submit" />
      </form>
    )
  }
}

export default Form;