import React, { Component } from "react";
import { Input, Button, Icon } from "antd";
import "./App.css";
import SendModal from "./SendModal";
import axios from "axios";

class App extends Component {
  state = { text: "", users: [] };

  handleBroadcast = () => {
    return axios.post("http://localhost:8080/broadcast", {
      text: this.state.text,
      users: this.state.users
    });
  };

  handleTextChange = e => {
    this.setState({ text: e.target.value });
  };

  render() {
    const { TextArea } = Input;

    return (
      <div id="container">
        <div id="logo" />
        <div id="input-button">
          <TextArea rows={10} id="text-area" onChange={this.handleTextChange} />
          <SendModal onSubmit={this.handleBroadcast} />
        </div>
      </div>
    );
  }
}

export default App;
