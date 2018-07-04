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
    indeterminate: true,
    checkAll: false
  };

  render() {
    console.log(this.props.users);

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
          <CheckboxGroup
            value={this.state.checkedList}
            onChange={this.onChange}
          >
            {this.props.users.map(user => {
              return (
                <Row>
                  <Checkbox
                    value={user.id}
                    className="users"
                    checked={user.checked}
                  >
                    {" "}
                    {user.name} - {user.checked ? "true" : "false"}{" "}
                  </Checkbox>
                </Row>
              );
            })}
          </CheckboxGroup>
        ) : (
          <div>Loading</div>
        )}
      </div>
    );
  }
}
export default userCheckbox;
