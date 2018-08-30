import React, { Component } from 'react';


class HogDetails extends Component {
  // makeImgPath(name) {
  //   if(name) {
  //     console.log(name)
  //     let imagePath = `./src/hog-imgs/${name.toLowerCase().split(" ").join("_")}.jpg`
  //     // console.log("imgpath", imagePath)
  //     // require(imagePath)
  //     return imagePath
  //   }
  // }
  render() {
    // console.log('hog', this.makeImgPath(this.props.hog.name))
    return (
      <div >
        <h1>{this.props.hog.name}</h1>
        <img src={require(`../hog-imgs/${(this.props.hog.name).replace(/ /g,"_").toLowerCase()}.jpg`)} />
        <h2>{this.props.hog['specialty']}</h2>
        <h3>{this.props.hog['highest medal achieved']}</h3>
        <h3>{this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</h3>

        <p>{this.props.hog.greased}</p>
      </div>
    )
  }
}

export default HogDetails;
