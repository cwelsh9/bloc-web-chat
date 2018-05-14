class App extends Component {
  constructor() {
    super();
    this.state = {
      rooms: []
    };
  this.roomsRef = this.props.firebase.database().ref('rooms');
  }

  componentDidMount() {
    this.roomsRef.on('child_added', snaposhot => {
      console.log(snapshot);
    });
  }
}
export default App;
