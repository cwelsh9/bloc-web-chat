import React, { Component } from 'react';
import * as firebase from 'firebase';
import logo from './logo.svg';
import './App.css';
import RoomList from './components/RoomList';

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
        rooms: [],
      }
  }

  componentWillMount() {
    const self = this;
    const url = "https://bloc-web-chat.firebaseio.com";
    this.roomsRef = this.props.firebase.database().ref('rooms');
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
      </div>
    );
  }
}

export default App;
