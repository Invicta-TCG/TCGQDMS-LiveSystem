import React, { Component } from "react";
import { Input, Modal, Icon, Select, Button } from "antd";
import { PrimaryButton } from "../../../styledcomponents/button/button";
import {
  MasterLevelFormTitle,
  MasterLevelForm
} from "../../../styledcomponents/form/MasterLevelForms";

const Option = Select;

export default class AddProjectForm extends Component {
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
          Add Project
        </PrimaryButton>
        <Modal
          width="600px"
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
                Add Project
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
                Code
              </label>
              <Input id="code" name="code" placeholder="" />
            </div>

            <div className="input_wrapper">
              <label for="project_name" className="label">
                Project Name
              </label>
              <Input id="project_name" name="project_name" placeholder="" />
            </div>

            <div className="input_wrapper">
              <label for="customer" className="label">
                Customer
              </label>
              <Select id="customer" name="customer " style={{ width: "190px" }}>
                <Option value="Main Category 1">Customer</Option>
              </Select>
            </div>

            <div className="input_wrapper">
              <label for="mix_design" className="label">
                Mix design
              </label>
              <Select
                id="mix_design"
                name="mix_design "
                style={{ width: "190px" }}
              >
                <Option value="Main Category 1">Mix Design</Option>
              </Select>
            </div>

            <div className="input_wrapper">
              <label for="grade" className="label">
                Grade
              </label>
              <Select id="grade" name="grade " style={{ width: "190px" }}>
                <Option value="Main Category 1">grade</Option>
              </Select>
            </div>

            <div className="input_wrapper">
              <label for="plant" className="label">
                Plant
              </label>
              <Select id="plant" name="plant " style={{ width: "190px" }}>
                <Option value="Main Category 1">Plant</Option>
              </Select>
            </div>
          </MasterLevelForm>
        </Modal>
      </div>
    );
  }
}
