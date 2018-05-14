import firebase from 'firebase'
var config = {
    apiKey: "AIzaSyB9owGLvUlEF-jrYLxD54td1ISZlizXbho",
    authDomain: "bloc-web-chat.firebaseapp.com",
    databaseURL: "https://bloc-web-chat.firebaseio.com",
    projectId: "bloc-web-chat",
    storageBucket: "bloc-web-chat.appspot.com",
    messagingSenderId: "935032876915"
  };
  firebase.initializeApp(config);
  export default firebase;
