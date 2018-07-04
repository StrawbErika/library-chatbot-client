import React, { Component } from "react";
import { Checkbox, Row } from "antd";

const CheckboxGroup = Checkbox.Group;

class userCheckbox extends React.Component {
  state = {
    checkedList: [],
    indeterminate: true,
    checkAll: false
  };

  onChange = checkedList => {
    this.setState({
      checkedList,
      indeterminate:
        !!checkedList.length && checkedList.length < this.props.users.length,
      checkAll: checkedList.length === this.props.users.length
    });
  };

  onCheckAllChange = e => {
    this.setState({
      checkedList: e.target.checked ? this.props.users : [],
      indeterminate: false,
      checkAll: e.target.checked
    });
  };
  render() {
    return (
      <div>
        <div style={{ borderBottom: "1px solid #E9E9E9" }}>
          <Checkbox
            indeterminate={this.state.indeterminate}
            onChange={this.onCheckAllChange}
            checked={this.state.checkAll}
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
                  <Checkbox value={user.id} className="users">
                    {" "}
                    {user.name}{" "}
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
