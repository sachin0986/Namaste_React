import React from "react";
import ReactDOM from "react-dom/client";
import UserClass from "./UserClass";

class About extends React.Component {
  render() {
    return (
      <div>
        <h1>This is About Page</h1>
        <h2>
          This page is creating for checking the rout is working properly or not
        </h2>
        <UserClass />
      </div>
    );
  }
}

export default About;
