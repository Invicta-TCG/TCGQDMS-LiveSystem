import React, { Component } from "react";
import { Input, Modal, Icon, Button } from "antd";

import "./style.css";
import { PrimaryButton } from "../../../styledcomponents/button/button";
import {
  MasterLevelFormTitle,
  MasterLevelForm
} from "../../../styledcomponents/form/MasterLevelForms";
import TextArea from "antd/lib/input/TextArea";

export default class AddSampleCategory extends Component {
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
          Add Sample Category
        </PrimaryButton>
        <Modal
          width="350px"
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
                Add Sample Category
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

            {/* User Role */}
            <div className="input_wrapper">
              <label for="user_role" className="label">
                Sample Category:
              </label>
              <Input
                id="user_role"
                name="user_role"
                placeholder="Enter Sample Category"
              />
            </div>

            <div className="input_wrapper">
              <label for="user_role" className="label">
                Description:
              </label>
              <TextArea
                id="user_role"
                name="user_role"
                placeholder="Enter Description"
                style={{ width: "180px" }}
              />
            </div>
          </MasterLevelForm>
        </Modal>
      </div>
    );
  }
}
