import React, { Component } from 'react';


class MessageList extends Component {

  componentDidMount() {
    // get the messagelist container an set the scrollTop to the height of the container
    const objDiv = document.getElementById('messageList');
    objDiv.scrollTop = objDiv.scrollHeight;
  }

  render() {
    // Loop through all messages and create Message components
    const messages = this.props.messages.map((message, i) => {
      return (
        <MessageList
          key={i}
          user={message.user}
          message={message.message}
          fromMe={message.fromMe} />
      );
    });

    return (
      <div className="messages" id="messageList">
        { messages }
      </div>
    );
  }

}

MessageList.defaultProps = {
  messages: []
};

export default MessageList;
