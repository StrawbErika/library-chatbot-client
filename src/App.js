import React, { Component } from 'react';
import { Input, Button, Icon } from 'antd';
import './App.css';
import SendModal from './SendModal';

class App extends Component {
  render() {
    const { TextArea } = Input;


    return (
      <div id = "container">
        <div id = "logo">
        </div>
        <div id = "input-button">
          <TextArea rows = {10} id = "text-area"/>
          <SendModal/>
        </div>
      </div>
    );
  }
}


export default App;
