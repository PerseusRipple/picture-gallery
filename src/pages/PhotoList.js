import React, { Component } from "react";
import PhotoDetail from "./PhotoDetail";
import { Link } from "react-router-dom";

import hobbies from "../data/hobbies.json";

class PhotoList extends Component {
  render() {
    const currentHobby = hobbies[this.props.match.params.hobby];
    console.log(currentHobby);
    return (
      <>
        <main>
          <main>
            <header>
              <h1>Things I Like</h1>
              <h2>A Photo Gallery By Jason Perry</h2>
            </header>
          </main>
          <section>Home</section>
        </main>
        <section>
          <header>Pandas</header>
          <p>Something goes here...</p>
          <section>
            <img> </img>
            <img> </img>
            <img> </img>
          </section>
        </section>
        this is the photo list {this.props.match.params.hobby}
        {currentHobby.photos.map((photo, index) => {
          console.log(photo, index);
          return <img key={index} src="photo.imageURL" alt="image" />;
        })}
      </>
    );
  }
}

export default PhotoList;
