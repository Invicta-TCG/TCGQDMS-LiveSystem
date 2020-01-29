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
                Code:
              </label>
              <Input id="code" name="code" placeholder="Enter Code" />
            </div>

            <div className="input_wrapper">
              <label for="project_name" className="label">
                Project Name:
              </label>
              <Input
                id="project_name"
                name="project_name"
                placeholder="Enter Project Name"
              />
            </div>

            <div className="input_wrapper">
              <label for="customer" className="label">
                Customer
              </label>
              <Select
                id="customer"
                placeholder="Select Customer"
                name="customer "
                style={{ width: "180px" }}
              ></Select>
            </div>

            <div className="input_wrapper">
              <label for="customer" className="label">
                Contact Person
              </label>
              <Select
                id="customer"
                placeholder="Select Contact Person"
                name="customer "
                style={{ width: "180px" }}
              ></Select>
            </div>
            <div className="input_wrapper">
              <label for="customer" className="label">
                Contact No
              </label>
              <Select
                id="customer"
                placeholder="Select Contact No"
                name="customer "
                style={{ width: "180px" }}
              ></Select>
            </div>

            <div className="input_wrapper">
              <label for="mix_design" className="label">
                Mix design
              </label>
              <Select
                id="mix_design"
                placeholder="Select MixDesign"
                name="mix_design "
                style={{ width: "180px" }}
              >
                <Option value="Main Category 1">Mix Design</Option>
              </Select>
            </div>

            <div className="input_wrapper">
              <label for="grade" className="label">
                Grade
              </label>
              <Select
                id="grade"
                placeholder="Select Grade"
                name="grade "
                style={{ width: "180px" }}
              ></Select>
            </div>

            <div className="input_wrapper">
              <label for="plant" className="label">
                Plant
              </label>
              <Select
                id="plant"
                placeholder="Select Plant"
                name="plant "
                style={{ width: "180px" }}
              ></Select>
            </div>
          </MasterLevelForm>
        </Modal>
      </div>
    );
  }
}
