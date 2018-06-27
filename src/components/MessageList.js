import React, { Component } from 'react';


class MessageList extends Component {
  constructor(props) {
    super(props);

    this.state = { messages: [], newMessage: "" }
    this.messagesRef = this.props.firebase.database().ref('messages');
  }

  componentDidMount() {
    this.messagesRef.on('child_added', snapshot => {
      const message = snapshot.val();
      message.key = snapshot.key;
      this.setState({ messages: this.state.messages.concat( message )});
    })
  }

  filteredMessages() {
    return this.state.messages.filter(message => {
      message.id == this.props.activeRoom.id
    });
  }

  roomName() {
    if (this.props.activeRoom === null) {
      return "";
    } else {
      return this.props.activeRoom.name
    }

  }

  onSend() {
    this.messagesRef.on('child_added', snapshot => {
      const message = snapshot.val();
      message.key = snapshot.key;
      this.setState({ messages: this.state.messages.concat( message )});
    })
  }

  render() {
    const messages = this.filteredMessages();

    return (
      <section id="message-component">
        <h2>{this.roomName()}</h2>
        <ul id="message-list">
          {messages.map(message => (
            <li key={message.key}>{message.content}</li>
          ))}
        </ul>
      </section>
    )
  }

};

export default MessageList;
