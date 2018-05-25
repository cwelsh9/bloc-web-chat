import React, { Component } from 'react';

class RoomList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rooms: [],
      newRoomName: ""
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

  createRoom() {
    this.roomsRef.push({
      name: this.state.newRoomName
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

        <form id="form">
          <input type="text" value={this.state.newRoomName}></input>
          <input type="submit" onClick={() => this.createRoom()}></input>

        </form>
      </section>

    )}
  }


  export default RoomList;
