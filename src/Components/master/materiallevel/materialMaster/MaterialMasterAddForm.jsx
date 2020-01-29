import React, { Component } from "react";
import { Input, Modal, Button, Icon, Select } from "antd";

import { PrimaryButton } from "../../../styledcomponents/button/button";
import {
  MasterLevelFormTitle,
  MasterLevelForm
} from "../../../styledcomponents/form/MasterLevelForms";

const Option = Select;
export default class MaterialMasterAddForm extends Component {
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
          Add Material
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
                Add Material
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
            <div className="input_wrapper" style={{ marginLeft: "-10px" }}>
              <label for="id" className="label">
                Code:
              </label>
              <Input id="id" name="id" placeholder="Enter Code " />
            </div>

            {/* Plant Name */}

            {/* Place */}
            <div className="input_wrapper" style={{ marginLeft: "-20px" }}>
              <label for="main_category" className="label">
                Main Category:
              </label>
              <Select
                placeholder="Select main Category"
                id="main_category"
                name="main_category "
                style={{ width: "170px" }}
              ></Select>
            </div>

            {/* T.P No */}
            <div className="input_wrapper" style={{ marginLeft: "-10px" }}>
              <label for="main_category" className="label">
                Sub Category:
              </label>
              <Select
                placeholder="Select Sub Category"
                id="main_category"
                name="main_category "
                style={{ width: "170px" }}
              ></Select>
            </div>

            <div className="input_wrapper" style={{ marginLeft: "-10px" }}>
              <label for="customer_name" className="label">
                Material Name:
              </label>
              <Input
                id="customer_name"
                name="customer_name"
                placeholder="Enter Material Name"
              />
            </div>

            {/* Description  */}
            {/* <div className="input_wrapper">
              <label for="email" className="label">
                Email
              </label>
              <Input id="email" name="email" placeholder="" />
            </div> */}

            {/* Date */}
            {/* <div className="input_wrapper" style={{marginLeft:'-200px'}}>
              <label for="date" className="label">
                Description
              </label>
              <TextArea id="date" name="date" placeholder="" />
            </div> */}

            {/* <PrimaryButton
              type="primary"
              style={{ background: "#001328", color: "white", border: "none" }}
            >
              Submit
            </PrimaryButton> */}
            {/* <PrimaryButton>Clear</PrimaryButton> */}
          </MasterLevelForm>
        </Modal>
      </div>
    );
  }
}
