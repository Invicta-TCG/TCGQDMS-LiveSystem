import React, { Component } from "react";
import { Input, InputNumber, Modal, Button, Icon } from "antd";
import { PrimaryButton } from "../../../styledcomponents/button/button";

import {
  MasterLevelFormTitle,
  MasterLevelForm
} from "../../../styledcomponents/form/MasterLevelForms";

export default class CustomerAddForm extends Component {
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
            width: "120px"
          }}
        >
          Add Customer
        </PrimaryButton>
        <Modal
          width="500px"
          visible={visible}
          closable={false}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
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
          title={
            <MasterLevelFormTitle>
              <p
                style={{
                  color: "white"
                }}
              >
                Add New Customer
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
        >
          <MasterLevelForm>
            {/* Code */}
            <div className="input_wrapper">
              <label for="id" className="label">
                Code:
              </label>
              <Input id="id" name="id" placeholder="Enter the Code" />
            </div>

            {/* Plant Name */}
            <div className="input_wrapper">
              <label for="customer_name" className="label">
                Customer Name:
              </label>
              <Input
                id="customer_name"
                name="customer_name"
                placeholder="Enter the Custome "
              />
            </div>

            {/* Place */}
            <div className="input_wrapper">
              <label for="address" className="label">
                Address:
              </label>
              <Input
                id="address"
                name="address"
                placeholder="Enter the Address"
              />
            </div>

            {/* T.P No */}
            <div className="input_wrapper">
              <label for="contactno" className="label">
                Contact No:
              </label>
              <Input
                className="input_number"
                id="contactno"
                name="contactno"
                placeholder="Enter the Contact No"
              />
            </div>

            {/* Description  */}
            <div className="input_wrapper">
              <label for="email" className="label">
                Email:
              </label>
              <Input id="email" name="email" placeholder="Enter the Email" />
            </div>
          </MasterLevelForm>
        </Modal>
      </div>
    );
  }
}
