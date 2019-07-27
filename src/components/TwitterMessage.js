import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      maxChars: this.props.maxChars,
      message: ''
    };
  }

  handleChange = e => {
    this.setState({
      maxChars: this.props.maxChars - e.target.value.length,
      message: e.target.value
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleChange} value={this.state.message} />
        <br />
        <p style={{fontSize: '13px'}}>Remaining characters: {this.state.maxChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
