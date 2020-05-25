import React, { Component } from "react";
import Banner from "../components/Banner";
import Module from "../components/Module";
import "./pages.css";

class Home extends Component {
  state = {
    user:""
  };

  render() {
    return (
      <div>
        <Banner>
          <h1>Welcome To Finance Friend</h1>
        </Banner>
        <div >
          <p className="info">Easy to use and free for everyone, Finance Friend is designed to help you 
            budget and create ways to save for future purchases.
          </p>
        </div>
        <div>
          <Module>
            <h3>Create an Account</h3>
          </Module>
          <Module>
            <h3>Find your Budget</h3>
          </Module>
          <Module>
          <h3>Create new Savings Goal</h3>
          </Module>
        </div> 
        <div>

        </div>
        <div id="buttons">
          <button id="start">Get Started</button>
          <button id="login">Login</button>
        </div>
      </div>
    );
  };
} ;

export default Home;
