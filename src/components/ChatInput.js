import React from 'react';

class ChatInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { chatInput: '' };

    this.submitHandler = this.submitHandler.bind(this);
    this.textChangeHandler = this.textChangeHandler.bind(this);
  }

  submitHandler(event) {
    event.preventDefault();

    // Clear the input box
    this.setState({ chatInput: '' });

    // Call the onSend callback with the chatInput messages
    this.props.onSend(this.state.chatInput);
  }

  textChangeHandler(event) {
    this.setState({ chatInput: event.target.value });
  }

  render() {
    return (
      <form className="chat-input" onSubmit={this.submitHandler}>
        <input type="text"
          onChange={this.textChangeHandler}
          value={this.state.chatInput}
          placeholder="Write a message..."
          required />
        <input type="submit" value="Send" />
      </form>
    );
    }
  }

  ChatInput.defaultProps = {
  };

  export default ChatInput;
