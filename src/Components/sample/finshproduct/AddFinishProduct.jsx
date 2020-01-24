import React, { Component } from "react";
import { Input, Modal, Icon, Select, Button, DatePicker } from "antd";

import { PrimaryButton } from "../../styledcomponents/button/button";
import {
  MasterLevelFormTitle,
  MasterLevelForm
} from "../../styledcomponents/form/MasterLevelForms";

const Option = Select;
export default class AddFinishProduct extends Component {
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
          Add FinishProduct Sample
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
                Add FinishProduct Sample
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
              <label for="material" className="label">
                Customer Name
              </label>
              <Select id="material" name="material " style={{ width: "180px" }}>
                <Option value="Material">Customer Name</Option>
              </Select>
            </div>

            <div className="input_wrapper">
              <label for="material" className="label">
                Sample Size
              </label>
              <Select id="material" name="material " style={{ width: "180px" }}>
                <Option value="Material">Sample Size</Option>
              </Select>
            </div>

            <div className="input_wrapper">
              <label for="material" className="label">
                Project Name
              </label>
              <Select id="material" name="material " style={{ width: "180px" }}>
                <Option value="Material">Project Name</Option>
              </Select>
            </div>

            <div className="input_wrapper">
              <label for="code" className="label">
                Date
              </label>
              <DatePicker id="code" name="code" placeholder="" />
            </div>
            <div className="input_wrapper">
              <label for="code" className="label">
                Time
              </label>
              <Input id="code" name="code" placeholder="" />
            </div>

            <div className="input_wrapper">
              <label for="code" className="label">
                Work Order No
              </label>
              <Input id="code" name="code" placeholder="" />
            </div>

            <div className="input_wrapper">
              <label for="material" className="label">
                Trial Staus
              </label>
              <Select id="material" name="material " style={{ width: "180px" }}>
                <Option value="Material">Status</Option>
              </Select>
            </div>
          </MasterLevelForm>
        </Modal>
      </div>
    );
  }
}
