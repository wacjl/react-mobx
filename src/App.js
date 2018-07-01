import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from 'antd'
import {observer,inject} from 'mobx-react'
class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        <Button type="primary">dds</Button>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default inject(stores=>({name:stores.rootStore}))(App);
