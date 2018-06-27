import React from 'react';

class MessageContent extends React.Component {
  render() {
    const fromMe = this.props.fromMe ? 'from-me' : '';

    return (
      <div className={`message ${fromMe}`}>
        <div className='user'>
          { this.props.user }
        </div>
        <div className='message-body'>
          { this.props.message }
        </div>
      </div>
    );
  }
}

MessageContent.defaultProps = {
  user: '',
  message: '',
  sentAt: '',
  roomId: '',
  fromMe: false
};

export default MessageContent;
