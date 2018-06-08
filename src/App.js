import React, { Component } from 'react';
import * as firebase from 'firebase';
import './App.css';
import RoomList from './components/RoomList.js';
import MessageList from './components/MessageList.js'
import ChatInput from './components/ChatInput.js'


var config = {
  apiKey: "AIzaSyB9owGLvUlEF-jrYLxD54td1ISZlizXbho",
  authDomain: "bloc-web-chat.firebaseapp.com",
  databaseURL: "https://bloc-web-chat.firebaseio.com",
  projectId: "bloc-web-chat",
  storageBucket: "bloc-web-chat.appspot.com",
  messagingSenderId: "935032876915"
};
firebase.initializeApp(config);

class App extends Component {

  constructor(props) {
    super(props);
      this.state = {
        activeRoom: null
      }
  }

  setUser(user) {
    this.setState({user: user});
  }

  setRoom(room) {
    this.setState({activeRoom: room});
  }



  render() {
    return (
      <div className="container">
        <h3>Bloc Web Chat</h3>
        <MessageList messages={this.state.messages} />
        <ChatInput onSend={this.sendHandler} />
      <RoomList firebase={ firebase }/>
      </div>
    );
  }


}

export default App;
