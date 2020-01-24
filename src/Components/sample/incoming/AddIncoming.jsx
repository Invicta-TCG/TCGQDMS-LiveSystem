import React, { Component } from "react";
import { Input, Modal, Icon, Select, Button, DatePicker } from "antd";

import { PrimaryButton } from "../../styledcomponents/button/button";
import {
  MasterLevelFormTitle,
  MasterLevelForm
} from "../../styledcomponents/form/MasterLevelForms";
import TextArea from "antd/lib/input/TextArea";

export default class AddIncoming extends Component {
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
          Add Incoming Sample
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
                Add Incoming Sample
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
          <MasterLevelForm unalignedform>
            <div className="input_wrapper">
              <label for="code" className="label">
                Code
              </label>
              <Input id="code" name="code" placeholder="Code" />
            </div>

            {/* Plant Name */}
            <div className="input_wrapper">
              <label for="supplier_name" className="label">
                Supplier Name
              </label>
              <Select
                className="inputfield"
                id="supplier_name"
                name="supplier_name"
                placeholder="Supplier_name name"
                style={{ width: "195px" }}
              />
            </div>

            {/* Place */}
            <div className="input_wrapper">
              <label for="raw_material" className="label">
                Raw Material
              </label>
              <Select
                id="raw_material"
                name="raw_material"
                placeholder=" Raw Material"
                style={{ width: "195px" }}
              />
            </div>

            {/* T.P No */}
            <div className="input_wrapper">
              <label for=" delivered_date" className="label">
                Delivered Date
              </label>
              <DatePicker
              //   onChange={onChange}
              />
            </div>

            {/* Description  */}
            <div className="input_wrapper">
              <label for="vechical_no" className="label">
                Vechical No
              </label>
              <Input
                id="vechical_no"
                name="vechical_no"
                placeholder="Vechical No"
              />
            </div>

            <div className="input_wrapper">
              <label for="description" className="label">
                Description
              </label>
              <TextArea
                id="description"
                name="description"
                placeholder="Description"
                style={{ width: "200px" }}
              />
            </div>
          </MasterLevelForm>
        </Modal>
      </div>
    );
  }
}
