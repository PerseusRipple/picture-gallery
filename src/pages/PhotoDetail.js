import React, { Component } from "react";

import data from "../data/json.json";

class PhotoDetail extends Component {
  render() {
    const displayData = data[this.props.match.params.category];
    console.log(displayData);
    return (
      < Photo
      
    )
  }
}

export default PhotoDetail;