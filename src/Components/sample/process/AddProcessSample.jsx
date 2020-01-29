import React, { Component } from "react";
import { Input, Modal, Icon, Select, Button } from "antd";

import { PrimaryButton } from "../../styledcomponents/button/button";
import {
  MasterLevelFormTitle,
  MasterLevelForm
} from "../../styledcomponents/form/MasterLevelForms";
import TextArea from "antd/lib/input/TextArea";

export default class AddProcessSample extends Component {
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
    const { visible } = this.state;

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
          Add Processing Sample
        </PrimaryButton>
        <Modal
          width="500px"
          visible={visible}
          okType="default"
          closable={false}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              Return
            </Button>,
            <PrimaryButton
              key="submit"
              // loading={loading}
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
                Add Processing Sample
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
              <Input
                className="inputProcessfield"
                id="code"
                name="code"
                placeholder="Enter Code "
              />
            </div>

            {/* Plant Name */}
            <div className="input_wrapper">
              <label for="process_name" className="label">
                Name:
              </label>
              <Input
                className="inputProcessfield"
                id="process_name"
                name="process_name"
                placeholder="Enter Name"
              />
            </div>

            {/* Place */}
            <div className="input_wrapper">
              <label for="raw_material" className="label">
                Raw Material:
              </label>
              <Select
                className="inputProcessfield"
                id="raw_material"
                name="raw_material"
                placeholder=" Enter RawMaterial"
                style={{ width: "180px" }}
              />
            </div>

            {/* T.P No */}
            <div className="input_wrapper">
              <label for="plant" className="label">
                Plant:
              </label>
              <Select
                className="inputProcessfield"
                id="plant"
                name="plant"
                placeholder="Select Plant "
                style={{ width: "180px" }}
              />
            </div>

            {/* Description  */}
            <div className="input_wrapper">
              <label for="description" className="label">
                Description:
              </label>
              <TextArea
                id="description"
                name="description"
                placeholder=" Enter Description"
                style={{ width: "410px" }}
              />
            </div>
          </MasterLevelForm>
        </Modal>
      </div>
    );
  }
}
