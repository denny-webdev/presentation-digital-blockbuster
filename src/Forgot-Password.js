import React from 'react'
import './Password.css'

class ForgotPassword extends React.Component {
    constructor(props){
    super(props)
    this.state = {value:""}


    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}
handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('reset link sent: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Reset Password</h1>
        <div class="sc-container">
          <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Username or Email" />
          <input class="button" type="button" value="Get New Password"/>
        </div> 
      </form>
    );
  }
}



  export default ForgotPassword