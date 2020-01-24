import React, { Component } from "react";
import { Form, Input, Modal, Button, Icon, Select } from "antd";

import {
  MasterLevelForm,
  MasterLevelFormTitle
} from "../../../styledcomponents/form/MasterLevelForms";
import { PrimaryButton } from "../../../styledcomponents/button/button";

const { Option } = Select;
function onChange(date, dateString) {
  console.log(date, dateString);
}

function onBlur() {
  console.log("blur");
}

function onFocus() {
  console.log("focus");
}

function onSearch(val) {
  console.log("search:", val);
}

export default class EmployeeAddForm extends Component {
  state = {
    loading: false,
    visible: false
  };
  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  componentDidMount() {
    console.log(this.props.screen);
  }
  render() {
    const { visible, loading } = this.state;
    return (
      <div>
        <PrimaryButton
          onClick={this.showModal}
          style={{
            background: "#001328",
            color: "white",
            border: "none",
            width: "120px",
            marginLeft: "-10px"
          }}
        >
          Add Employee
        </PrimaryButton>
        <Modal
          width="850px"
          visible={visible}
          closable={false}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          title={
            <MasterLevelFormTitle>
              <p
                style={{
                  color: "white"
                }}
              >
                Add New Employee
              </p>
              <Icon
                type="close-circle"
                onClick={this.handleCancel}
                style={{
                  color: "white"
                }}
              />
            </MasterLevelFormTitle>
          }
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              Return
            </Button>,
            <PrimaryButton
              key="submit"
              loading={loading}
              onClick={this.handleOk}
              style={{ background: "#001328", color: "white", border: "none" }}
            >
              Submit
            </PrimaryButton>
          ]}
        >
          <MasterLevelForm>
            {/* Code */}
            <div className="input_wrapper">
              <label for="id" className="label">
                Code
              </label>
              <Input id="id" name="id" placeholder="" />
            </div>

            {/* Plant Name */}
            <div className="input_wrapper">
              <label for="customer_name" className="label">
                First Name
              </label>
              <Input id="customer_name" name="customer_name" placeholder="" />
            </div>

            {/* Place */}
            <div className="input_wrapper">
              <label for="address" className="label">
                Last Name
              </label>
              <Input id="address" name="address" placeholder="" />
            </div>

            {/* T.P No */}
            <div className="input_wrapper">
              <label for="plant" className="label">
                Plant
              </label>
              <Select
                showSearch
                style={{ width: 190 }}
                placeholder="Select a Plant"
                optionFilterProp="children"
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  option.props.children
                    .toLowerCase()
                    .indexOf(input.toLowerCase()) >= 0
                }
              >
                <Option value="peliyagoda">Peliyagoda</Option>
                <Option value="jaffna">Jaffna</Option>
                <Option value="trincomalee">Trincomalee</Option>
                <Option value="trincomalee">Ratmalana</Option>
              </Select>
            </div>

            <div className="input_wrapper">
              <label for="plant" className="label">
                User Role
              </label>
              <Select
                showSearch
                style={{ width: 190 }}
                placeholder="Select User Role"
                optionFilterProp="children"
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  option.props.children
                    .toLowerCase()
                    .indexOf(input.toLowerCase()) >= 0
                }
              >
                <Option value="QC Manager">QC Manager</Option>
                <Option value="QC Assistant Manager">
                  QC Assistant Manager
                </Option>
                <Option value="QC Staff">QC Staff</Option>
                <Option value="QC Technician">QC Technician</Option>
                <Option value="Plant manager">Plant manager</Option>
              </Select>
            </div>
            <div className="input_wrapper">
              <label for="address" className="label">
                Address
              </label>
              <Input id="address" name="address" placeholder="" />
            </div>
            <div className="input_wrapper">
              <label for="phoneno" className="label">
                Phone No
              </label>
              <Input id="phoneno" name="phoneno" placeholder="" />
            </div>
            <div className="input_wrapper">
              <label for="username" className="label">
                User Name
              </label>
              <Input id="username" name="username" placeholder="" />
            </div>
            <div className="input_wrapper">
              <label for="email" className="label">
                Email
              </label>
              <Input id="email" name="email" placeholder="" />
            </div>
          </MasterLevelForm>
        </Modal>
      </div>
    );
  }
}
