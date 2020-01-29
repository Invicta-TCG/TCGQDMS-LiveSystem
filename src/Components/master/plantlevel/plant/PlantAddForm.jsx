import React, { Component } from "react";
import { Input, InputNumber, Modal, Button, Icon } from "antd";

import { PrimaryButton } from "../../../styledcomponents/button/button";
import {
  MasterLevelForm,
  MasterLevelFormTitle
} from "../../../styledcomponents/form/MasterLevelForms";

// function onChange(date, dateString) {
//   console.log(date, dateString);
// }

export default class PlantAddForm extends Component {
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
          Add Plant
        </PrimaryButton>
        <Modal
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
                Add New Plant
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
          width="500px"
        >
          <MasterLevelForm>
            {/* Code */}
            <div className="input_wrapper">
              <label for="code" className="label">
                Code:
              </label>
              <Input id="code" name="code" placeholder="Enter the Code " />
            </div>

            {/* Plant Name */}
            <div className="input_wrapper">
              <label for="plant_name" className="label">
                Plant Name:
              </label>
              <Input
                id="plant_name"
                name="plant_name"
                placeholder="Enter the Plant Name"
              />
            </div>

            {/* Place */}
            <div className="input_wrapper">
              <label for="plant_name" className="label">
                Address:
              </label>
              <Input
                id="plant_name"
                name="plant_name"
                placeholder="Enter the Address "
              />
            </div>

            <div className="input_wrapper">
              <label for="plant_name" className="label">
                Contact No:
              </label>
              <Input
                className="input_number"
                id="contactno"
                name="contactno"
                placeholder="Enter the Contact No"
              />
            </div>
          </MasterLevelForm>
        </Modal>
      </div>
    );
  }
}
