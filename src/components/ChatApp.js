import React, { Component } from 'react';

class ChatApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = { messages: [] };
  }

  sendHandler(message) {
    const messageObject = {
      user: this.props.user,
      message
    };
  }

}
