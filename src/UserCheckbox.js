/*
  PROBLEM:
  check all doesn't work! i mean ung checkbox mismo sa UI doesnt check all checkboxes
*/

// hallo
// :*
import React, { Component } from "react";
import { Checkbox, Row } from "antd";

const CheckboxGroup = Checkbox.Group;

class userCheckbox extends React.Component {
  state = {
    userList: [],
    indeterminate: true,
    checkAll: false
  };

  checked = e => {
    if (e.target.checked) {
      this.setState({
        userList: [...this.state.userList, e.target.value]
      });
    }
  };

  render() {
    console.log(this.state.userList);

    return (
      <div>
        <div style={{ borderBottom: "1px solid #E9E9E9" }}>
          <Checkbox
            indeterminate={this.state.indeterminate}
            // onChange={this.onCheckAllChange}
            // checked={this.state.checkAll}
          >
            Check all
          </Checkbox>
          <Checkbox value="Borrowers"> Borrowers </Checkbox>
        </div>
        <br />
        {this.props.users ? (
          this.props.users.map(user => {
            return (
              <Row>
                <Checkbox
                  value={user.id}
                  className="users"
                  onChange={this.checked}
                >
                  {" "}
                  {user.name}
                </Checkbox>
              </Row>
            );
          })
        ) : (
          <div>Loading</div>
        )}
      </div>
    );
  }
}
export default userCheckbox;
