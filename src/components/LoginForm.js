import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  changeListener = (e) => {
    this.setState({[e.target.name]: e.target.value}, () => console.log(this.state))
  }

  submitListener = (e) => {
    e.preventDefault()
    if (this.state.username.length === 0 || this.state.password.length === 0) {
      alert("Enter Login Details")
    } else {
      this.props.handleLogin(this.state)
      this.setState({ username: "", password: "" })
    }
    
  }

  render() {
    return (
      <form onSubmit={this.submitListener}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.changeListener}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.changeListener}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
