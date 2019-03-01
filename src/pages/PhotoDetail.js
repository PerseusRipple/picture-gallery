import React, { Component } from "react";
// import { Link } from "react-router-dom";

import hobbies from "../data/hobbies.json";

class PhotoDetail extends Component {
  render() {
    return <div>this is my photo detail</div>;
    <main>
      <main>
        <header>
        <h1>Things I Like</h1>
              <h2>A Photo Gallery By Jason Perry</h2>
        </header>
      </main>
      <section>Home / der>
        {currentHobby}.title </section>
    </main>
    <section>
      <header>{currentHobby.photo[this.props.match.params.index] </header>
    </section>
  }
}

// const currentHobby = hobbies[this.props.match.params.hobby];
//     console.log(this.props.match.param);
// console.log(currentHobby)
//     return (
//       < Photo

//     )
//   }
//  }

export default PhotoDetail;
