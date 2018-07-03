import React, { Component } from 'react';
import { Checkbox, Row } from 'antd';

const CheckboxGroup = Checkbox.Group;

const plainOptions = ['Apple', 'Pear', 'Orange'];

class userCheckbox extends React.Component {
  state = {
    checkedList: [],
    indeterminate: true,
    checkAll: false,
  };

  render() {
    return (
      <div>
        <div style={{ borderBottom: '1px solid #E9E9E9' }}>
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
            <CheckboxGroup value={this.state.checkedList} onChange={this.onChange}>
            {
                    plainOptions.map(options => {
                        return(
                            <Row>
                                <Checkbox value={options} className="users"> {options} </Checkbox>
                            </Row>
                        )
                    })

            }
            </CheckboxGroup>

      </div>
    );
  }

  onChange = (checkedList) => {
    this.setState({
      checkedList,
      indeterminate: !!checkedList.length && (checkedList.length < plainOptions.length),
      checkAll: checkedList.length === plainOptions.length,
    });
  }

  onCheckAllChange = (e) => {
    this.setState({
      checkedList: e.target.checked ? plainOptions : [],
      indeterminate: false,
      checkAll: e.target.checked,
    });
  }
}
export default userCheckbox;
