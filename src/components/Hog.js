import React, { Component } from 'react';


class Hog extends Component {

  handleClick = () => {
    this.props.displayHog(this.props.hog)
  }

  render() {
    return (
      <li onClick={this.handleClick} >
        {this.props.hog.name}
      </li>
    )
  }
}

export default Hog;
