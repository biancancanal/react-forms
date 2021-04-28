



import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input
            type="text" name="firstName" 
            onChange={this.props.handleChange}
            value={this.props.formData.firstName}
          />
          <input
            type="text" name="lastName"
            onChange={this.props.handleChange}
            value={this.props.formData.lastName}
          />
        </form>
      </div>
    )
  }
}

export default Form;


//CODE BEFORE ADDING PARENT COMPONENT


// import React from 'react';

// class Form extends React.Component {
//   state = {
//     firstName: "",
//     lastName: "",
//     submittedData: []
//   }

//   handleFirstNameChange = event => {
//     console.log("event.target.value", event.target.value)
//     console.log("state", this.state.firstName)
//     this.setState({
//       firstName: event.target.value
//     })
//   }

//   handleLastNameChange = event => {
//     this.setState({
//       lastName: event.target.value
//     })
//   }

//   handleChange = (event) => {
//     this.setState({
//       [event.target.name]: event.target.value
//     })
//   }

//   handleSubmit = (event) => {
//     event.preventDefault()
//     console.log(this.state)
//     let formData = { firstName: this.state.firstName, lastName: this.state.lastName }
//     let dataArray = this.state.submittedData.concat(formData)
//     this.setState({submittedData: dataArray})
//     this.setState({
//       firstName: "",
//       lastName: ""
//     })
//   }

//   listOfSubmissions = () => {
//     return this.state.submittedData.map(data => {
//       return <div><span>{data.firstName}</span> <span>{data.lastName}</span></div>
//     })
//   }

//   render() {
//     return (
//       <div>
//       <form onSubmit={this.handleSubmit}>
//         <input type="text" name="firstName" onChange={this.handleChange} value={this.state.firstName} />
//         <input type="text" name="lastName" onChange={this.handleChange} value={this.state.lastName} />
//         <input type= "submit" />
//       </form>
//       {this.listOfSubmissions()}
//       </div>
//     )
//   }
// }

// export default Form;