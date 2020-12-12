import React from 'react'
import './login.css'


    class Login extends React.Component {
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
        alert('login succesful: ' + this.state.value);
        event.preventDefault();
      }
    
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <div class="login-box">
            <h1>login</h1>
              <div class="textbox"/>
            <i class="fa fa-user" aria-hidden="true"></i>
            <input type="text" placeholder="username" value=""/>
                <div class="textbox">
                    <i class="fa fa-lock" aria-hidden="true"></i>
                    <input type="password" placeholder="password" name="" value=""/>
                <button class="btn">login</button>
                <button class="btn"> create account</button>
                </div>
                </div>
          </form>
        );
    }
}

  export default Login