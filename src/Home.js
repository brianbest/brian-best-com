import React, { Component } from "react";
import Nav from "./Nav";
import Headshot from "./images/headshot.jpg";

class Home extends Component {
  render(){
    return(
      <div className="home">
        <Nav />
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col">
              <img src={Headshot} />
            </div>
            <div className="col-8">
              <h1>My name is Brian Best and this is my website</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;