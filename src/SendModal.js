import React, { Component } from "react";
import { Modal, Button, Checkbox, Row, Col } from "antd";
import "./App.css";
import UserCheckbox from "./UserCheckbox";
import axios from "axios";

// hello
// hi!

class SendModal extends React.Component {
  state = {
    loading: false,
    visible: false,
    users: []
  };

  showModal = () => {
    axios.get("http://localhost:8080/showUsers").then(response => {
      const { userList } = response.data;
      const userListWithCheck = userList.map(user => ({
        ...user,
        checked: true
      }));

      this.setState({
        visible: true,
        users: userListWithCheck
      });
    });
  };

  handleOk = () => {
    this.setState({ loading: true });
    this.props.onSubmit().then(body => {
      this.setState({ loading: false, visible: false });
    });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  render() {
    const { visible, loading } = this.state;
    return (
      <div>
        <Button type="primary" onClick={this.showModal} id="send">
          {" "}
          Send{" "}
        </Button>

        <Modal
          visible={visible}
          title="Send to Users"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          width={850}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              Return
            </Button>,
            <Button
              key="submit"
              type="primary"
              loading={loading}
              onClick={this.handleOk}
            >
              Submit
            </Button>
          ]}
        >
          <UserCheckbox users={this.state.users} />
        </Modal>
      </div>
    );
  }
}
export default SendModal;
