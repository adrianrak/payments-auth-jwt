import React, { Component } from 'react';
import LoginForm from "./components/LoginForm/LoginForm";

export default class App extends Component {
  render() {
    return (
      <div className="row">
          <div className="container">
            <LoginForm/>
          </div>
      </div>
    );
  }
}