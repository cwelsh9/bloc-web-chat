import React, { Component } from 'react';

class RoomList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rooms: []
    };

    this.roomsRef = this.props.firebase.database().ref('rooms');
  }

  componentDidMount() {
    this.roomsRef.on('child_added', snapshot => {
      const room = snapshot.val();
      room.key = snapshot.key;
      this.setState({ rooms: this.state.rooms.concat( room ) })
    });
  }

  render() {
    return (
      <section className='rooms'>
      {
        this.state.rooms.map((room) =>
        {
          return room.name
        }
      )}

      <form>
      var textField = document.createElement("INPUT");
      textField.setAttribute("type", "text");

      var sendButton = document.createElement("INPUT");
      sendButton.setAttribute("type", "submit");

      </form>

      <form onsubmit="return createRoom();" class="my-form">
      <input type="submit" value="Submit"/>
      </form>

      </section>

    )}
  }


  export default RoomList;
