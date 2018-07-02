import React, { Component } from 'react';
import { Input } from 'antd';

class App extends Component {
  render() {
    const { TextArea } = Input;


    return (
      <div className="App">
        <div>
          <TextArea rows={4} />
        </div>
      </div>
    );
  }
}

export default App;
