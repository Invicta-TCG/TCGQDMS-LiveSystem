import React, { Component } from "react";
import { Input, DatePicker, Modal, Button, Icon, Radio } from "antd";
import TextArea from "antd/lib/input/TextArea";

import { PrimaryButton } from "../../../styledcomponents/button/button";
import {
  MasterLevelFormTitle,
  MasterLevelForm
} from "../../../styledcomponents/form/MasterLevelForms";

export default class AddCalibrationForm extends Component {
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
          Add Calibration
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
                Add Equipment Calibration
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
            {/* <Icon type="close-circle" onClick={this.handleCancel} style={{marginLeft:'300px',marginTop:'-65px',color:'white'}}/> */}

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
                Equipment Name:
              </label>
              <Input
                id="user_role"
                name="user_role"
                placeholder="Enter Equipment Name"
              />
            </div>

            <div className="input_wrapper">
              <label for="user_role" className="label">
                {" "}
                Calibrated Date:
              </label>
              <DatePicker />
            </div>
            <div className="input_wrapper">
              <label for="user_role" className="label">
                {" "}
                Due Date:
              </label>
              <DatePicker />
            </div>
            <div className="input_wrapper">
              <label for="user_role" className="label">
                Calibrated By:
              </label>
              <Radio>Internal</Radio>
              <Radio>External</Radio>
            </div>
            <div className="input_wrapper">
              <label for="user_role" className="label">
                Company:
              </label>
              <Input
                id="user_role"
                name="user_role"
                placeholder="Enter Company"
              />
            </div>
            <div className="input_wrapper">
              <label for="user_role" className="label">
                Tester:
              </label>
              <Input
                id="user_role"
                name="user_role"
                placeholder="Enter Tester"
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
