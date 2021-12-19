import React, { Component } from "react";
import Nav from "./Nav";

class Home extends Component {
  render(){
    return(
      <div className="">
        <Nav />
        <div className="container">
          <h1>My name is Brian Best and this is my website</h1>
        </div>
      </div>
    );
  }
}

export default Home;