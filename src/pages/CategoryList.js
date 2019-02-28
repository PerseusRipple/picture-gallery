import React, { Component } from "react";
import PhotoDetail from "./PhotoDetail";
import { Link } from "react-router-dom";

import data from "../data/json.json";

class CategoryList extends Component {
  render() {
    console.log(Object.keys(data));
    return (
      <main>
        {Object.keys(data).map(category => {
          return (
            <section>
              <Link to={"/" + category}>{category}</Link>
            </section>
          );
        })}
      </main>
    );
  }
}

export default CategoryList;
