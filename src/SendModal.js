import React, { Component } from 'react';
import { Modal, Button, Checkbox, Row, Col} from 'antd';
import './App.css';
import UserCheckbox from './UserCheckbox';

class SendModal extends React.Component {
  state = {
    ModalText: 'Content of the modal',
    visible: false,
    confirmLoading: false,
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = () => {
    this.setState({
      ModalText: 'The modal will be closed after two seconds',
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 2000);
  }

  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  }

  onChange = (checkedValues) => {
    console.log('checked = ', checkedValues);
  }
    
  render() {
    const { visible, confirmLoading, ModalText } = this.state;
    return (
      <div>
        <Button type="primary" onClick={this.showModal} id="send"> Send </Button>
        <Modal title="Send to Users"
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
          width={850}
          id="send-modal"
        >
            <div id="modal-content">
                <UserCheckbox/> 
            </div>

        </Modal>
      </div>
    );
  }
}

export default SendModal;