import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogsContainer from './HogsContainer';
import HogDetails from './HogDetails';

class App extends Component {
  // state = {
  //   hogs: this.props.hogs,
  //   hog: {}
  // }

  constructor(props) {
    super(props)
    this.state = {
      hogs: this.props.hogs,
      hog: this.props.hogs[0]
    }
  }

  displayHog = (hog) => {
    this.setState({
      hog
    }, () => console.log("display", this.state.hog))
  }
  render() {
    console.log("render", this.state.hog)
    return (
      <div className="App">
          <HogsContainer hogs={this.state.hogs} displayHog={this.displayHog} />
          <HogDetails hog={this.state.hog}/>

      </div>
    )
  }
}

export default App;
