import React, { Component } from "react";
import Nav from "./Nav";

class Blog extends Component {
  render(){
    return(
      <div className="">
        <Nav activeRoute="/blog" />
        <div className="container">
          <h1>Blog</h1>
          <h2>This is where I'll put random words</h2>
        </div>
      </div>
    );
  }
}

export default Blog;