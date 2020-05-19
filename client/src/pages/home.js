import React, { Component } from "react";

class Home extends Component {
  state = {
    user:""
  };

  render() {
    return (
      <div>
        <div>
          <h1>Welcome To Finance Friend</h1>
        </div>
        <div>
          <p>Easy to use and free for everyone, Finance Friend is designed to help you 
            budget and create ways to save for future purchases.
          </p>
        </div>
        <div>
          <h3>Create an Account</h3>
          <h3>Find your Budget</h3>
          <h3>Create new Savings Goal</h3>
        </div> 
        <div>
          <button>Get Started</button>
          <button>Login</button>
        </div>
      </div>
    );
  };
} ;

export default Home;
