import React, { Component } from "react";
import { Input, Modal, Icon, Button } from "antd";

import { PrimaryButton } from "../../../styledcomponents/button/button";
import {
  MasterLevelFormTitle,
  MasterLevelForm
} from "../../../styledcomponents/form/MasterLevelForms";

export default class AddEquipmentParameter extends Component {
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
            width: "auto",
            marginLeft: "-10px"
          }}
        >
          Add Equipment Parameter
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
                Add Equipment Parameter
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
              <label for="code" className="label">
                Code:
              </label>
              <Input id="code" name="code" placeholder="Enter the Code" />
            </div>

            <div className="input_wrapper">
              <label for="user_role" className="label">
                Equipment:
              </label>
              <Input
                id="user_role"
                name="user_role"
                placeholder="Enter the Equipment"
              />
            </div>

            {/* User Role */}
            <div className="input_wrapper">
              <label for="user_role" className="label">
                Parameter:
              </label>
              <Input
                id="user_role"
                name="user_role"
                placeholder="Enter the Parameter"
              />
            </div>

            <div className="input_wrapper">
              <label for="user_role" className="label">
                Unit:
              </label>
              <Input
                id="user_role"
                name="user_role"
                placeholder="Enter the Unit"
              />
            </div>
          </MasterLevelForm>
        </Modal>
      </div>
    );
  }
}
