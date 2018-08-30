import React, { Component } from 'react';
import Filter from './Filter';
import Hog from './Hog';



class HogsContainer extends Component {


  render() {
    return (
      <div >
        <Filter />
        <ul>
          {this.props.hogs.map((hog) => <Hog hog={hog} key={hog.name} displayHog={this.props.displayHog}/>)}
        </ul>
      </div>
    )
  }
}

export default HogsContainer;
