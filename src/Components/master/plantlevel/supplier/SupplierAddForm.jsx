import React, { Component } from "react";
import { Input, InputNumber, Modal, Button, Icon } from "antd";
import { PrimaryButton } from "../../../styledcomponents/button/button";

import {
  MasterLevelForm,
  MasterLevelFormTitle
} from "../../../styledcomponents/form/MasterLevelForms";

export default class SupplierAddForm extends Component {
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
          Add Supplier
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
                Add New Supplier
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
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-evenly"
              }}
            >
              {/* Code */}
              <div className="input_wrapper">
                <label for="id" className="label">
                  ID
                </label>
                <Input id="id" name="id" placeholder="" />
              </div>

              {/* Plant Name */}
              <div className="input_wrapper">
                <label for="customer_name" className="label">
                  Supplier Name
                </label>
                <Input id="customer_name" name="customer_name" placeholder="" />
              </div>

              {/* Place */}
              <div className="input_wrapper">
                <label for="address" className="label">
                  Address
                </label>
                <Input id="address" name="address" placeholder="" />
              </div>

              {/* T.P No */}
              <div className="input_wrapper">
                <label for="contactno" className="label">
                  Contact No
                </label>
                <InputNumber
                  className="input_number"
                  id="contactno"
                  name="contactno"
                  placeholder=""
                  style={{ width: "195px" }}
                />
              </div>

              {/* Description  */}
              <div className="input_wrapper">
                <label for="email" className="label">
                  Email
                </label>
                <Input id="email" name="email" placeholder="" />
              </div>

              {/* Date */}
              {/* <div className="input_wrapper">
              <label for="date" className="label">
                Date
              </label>
              <DatePicker id="date" name="date" placeholder="" />
            </div> */}

              {/* <PrimaryButton
              type="primary"
              style={{ background: "#001328", color: "white", border: "none" }}
            >
              Submit
            </PrimaryButton> */}
              {/* <PrimaryButton>Clear</PrimaryButton> */}
            </div>
          </MasterLevelForm>
        </Modal>
      </div>
    );
  }
}
