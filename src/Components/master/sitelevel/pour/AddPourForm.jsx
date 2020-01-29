import React, { Component } from "react";
import { Input, Modal, Icon, Button, Select } from "antd";

import {
  MasterLevelFormTitle,
  MasterLevelForm
} from "../../../styledcomponents/form/MasterLevelForms";

import { PrimaryButton } from "../../../styledcomponents/button/button";
import TextArea from "antd/lib/input/TextArea";

const Option = Select;
export default class AddPourForm extends Component {
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
          Add Pour
        </PrimaryButton>
        <Modal
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
                Add Pour{" "}
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
              <Input id="code" name="code" placeholder="Enter Code " />
            </div>

            <div className="input_wrapper">
              <label for="code" className="label">
                Pour No:
              </label>
              <Input id="code" name="code" placeholder=" Enter Pour No" />
            </div>

            <div className="input_wrapper" style={{ width: "200px" }}>
              <label for="code" className="label">
                Project:
              </label>
              <Select
                id="code"
                name="code"
                placeholder=" Select Project"
              ></Select>
            </div>
            <div className="input_wrapper">
              <label for="code" className="label">
                Description:
              </label>
              <TextArea id="code" name="code" placeholder="Enter Description" />
            </div>
          </MasterLevelForm>
        </Modal>
      </div>
    );
  }
}
