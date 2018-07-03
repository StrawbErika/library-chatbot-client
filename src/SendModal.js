import React, { Component } from 'react';
import { Modal, Button, Checkbox, Row, Col} from 'antd';
import './App.css';
import UserCheckbox from './UserCheckbox';

class SendModal extends React.Component {
    state = {
        loading: false,
        visible: false,
      }
    
      showModal = () => {
        this.setState({
          visible: true,
        });
      }
    
      handleOk = () => {
        this.setState({ loading: true });
        setTimeout(() => {
          this.setState({ loading: false, visible: false });
        }, 3000);
      }
    
      handleCancel = () => {
        this.setState({ visible: false });
      }
    
      render() {
        const { visible, loading } = this.state;
        return (
          <div>
            <Button type="primary" onClick={this.showModal} id="send"> Send </Button>
              
            <Modal
              visible={visible}
              title="Send to Users"
              onOk={this.handleOk}
              onCancel={this.handleCancel}
              width={850}
              footer={[
                <Button key="back" onClick={this.handleCancel}>Return</Button>,
                <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
                  Submit
                </Button>,
              ]}
            >
            
            <UserCheckbox/>
            </Modal>
          </div>
        );
      }
    }
export default SendModal;


