import React, { Component } from 'react';

class RoomList extends Component {
  constructor(props) {
    super(props);

    this.state = { rooms: [], newRoomName: "" }
    this.roomsRef = this.props.firebase.database().ref('rooms');
    this.createRoom = this.createRoom.bind(this);
  }


  componentDidMount() {
    this.roomsRef.on('child_added', snapshot => {
      const room = snapshot.val();
      room.key = snapshot.key;
      this.setState({ rooms: this.state.rooms.concat( room ) });
      if (this.state.room === 1) {
        this.props.setRoom(room);
      }
    })
  }
  ;


  toggleCreateRoom() {
    this.setState( prevState => ( {
      isOpen: !prevState.isOpen
    }));
  }

  createRoom(newRoomName) {
    this.roomsRef.push({
      name: newRoomName,
      createdAt: Date.now(),
      creator: {
        email: this.props.user.email,
        displayName: this.props.user.displayName
      }
    });
    this.setState({ newRoomName: ''});
  }

  handleChange(event) {
    this.setState({ newRoomName: event.target.value });
  }

  removeRoom(room) {
    this.roomsRef.child(room.key).remove();
  }


  render() {
    return (
      <section id="room-component">
      <ul id="room-list">
      {this.state.rooms.map(room => (
        <li key={room.key} className={this.props.activeRoom && this.props.activeRoom.key === room.key ? "active" : "" }>
        <button onClick={this.setRoom} className="room-name">{room.name}</button>
        {room.creator && this.props.user && room.creator.email === this.props.user.email
        }
        </li>
      ))}
      </ul>

      {this.props.user !== null && (
        <form id="create-room" onSubmit={ (e) => {e.preventDefault(); this.createRoom(this.state.newRoomName) } }>
        <input type="text" value={this.state.newRoomName} onChange={this.handleChange.bind(this)} name="newRoomName" placeholder="Enter room name"/>
        <input type="submit" value="New Room" />
        </form>
      )}
      </section>
    );
  }
}


export default RoomList;
