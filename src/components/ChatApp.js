import React, { Component } from 'react';
import MessageList from './MessageList.js'
import ChatInput from './ChatInput.js'

class ChatApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = { messages: [] };
    this.sendHandler = this.sendHandler.bind(this);
  }

  sendHandler(message) {
    const messageObject = {
      user: this.props.user,
      message
    };

    messageObject.fromMe = true;
    this.addMessage(messageObject);
  }

  addMessage(message) {
    const messages = this.state.MessageList;
    messages.push(message);
    this.setState({ MessageList });
  }

  render() {
    return (
      <div className="container">
        <h3>Bloc Web Chat</h3>
        <MessageList messages={this.state.messages} />
        <ChatInput onSend={this.sendHandler} />
      </div>
    );
  }
}
  ChatApp.defaultProps = {
    user: 'Anonymous'
  };

  export default ChatApp;
