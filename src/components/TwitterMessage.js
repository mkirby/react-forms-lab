import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      remainingChars: props.maxChars
    };
  }

  calculateRemainingCharacters = () => {
    const currentLength = this.state.message.length
    const remainingChars = this.props.maxChars - currentLength
    this.setState({remainingChars: remainingChars}, () => console.log(this.state))
  }

  changeHandler = (e) => {
      this.setState({[e.target.name]: e.target.value}, () => {
        this.calculateRemainingCharacters()
      })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.changeHandler} />
    <em> {this.state.remainingChars} Remaining Characters</em>
      </div>
    );
  }
}

export default TwitterMessage;
