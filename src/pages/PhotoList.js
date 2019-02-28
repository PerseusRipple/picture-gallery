import React, { Component } from "react";
import PhotoDetail from "./PhotoDetail";
// import { Link } from "react-router-dom";

import data from "../data/json.json";

class PhotoList extends Component {
  render() {
    const displayData = data[this.props.match.params.category];
    console.log(displayData);
    return (
      <main>
        this is the photo list {this.props.match.params.category}
        {displayData.map((photo, i) => {
          console.log(photo, i);
          return <img src="photo.imageURL" alt="image" />;
        })}
      </main>
    );
  }
}

export default PhotoList;
