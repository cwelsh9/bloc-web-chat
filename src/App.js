import React, { Component } from 'react';
import * as firebase from 'firebase';
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

  }

  render() {
    return (
      <RoomList firebase={ firebase }/>
    );
  }
}

export default App;
