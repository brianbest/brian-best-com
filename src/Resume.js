import React, { Component } from "react";
import Nav from "./Nav";

class Resume extends Component {
  render(){
    return(
      <div className="">
        <Nav />
        <div className="container">
          <h1>Resume</h1>
          <h2>This is where I'll put my work experince</h2>
        </div>
      </div>
    );
  }
}

export default Resume;