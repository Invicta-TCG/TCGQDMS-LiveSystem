import React, { Component } from "react";
import { Input, Modal, Button, Icon, Form, InputNumber } from "antd";

import { PrimaryButton } from "../../../styledcomponents/button/button";
import {
  MasterLevelForm,
  MasterLevelFormTitle
} from "../../../styledcomponents/form/MasterLevelForms";

// function onChange(date, dateString) {
//   console.log(date, dateString);
// }

class PlantForm extends Component {
  state = {
    loading: false,
    visible: false
  };
  showModal = () => {
    this.setState({
      visible: true
    });
  };

  // handleOk = () => {
  //   this.handleSubmit();
  //   this.setState({ loading: true });
  //   setTimeout(() => {
  //     this.setState({ loading: false, visible: false });
  //   }, 3000);
  // };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  componentDidMount() {
    console.log(this.props.screen);
  }

  handleSubmit = e => {
    console.log(e);
    console.log(this.props.form);
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        this.setState({ loading: true });
        setTimeout(() => {
          this.setState({ loading: false, visible: false });
        }, 3000);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
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
          loading={loading}
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
                type='close-circle'
                onClick={this.handleCancel}
                style={{
                  color: "white"
                }}
              />
            </MasterLevelFormTitle>
          }
          footer={[
            <Button key='back' onClick={this.handleCancel}>
              Return
            </Button>,
            <PrimaryButton
              key='submit'
              loading={loading}
              onClick={e => this.handleSubmit(e)}
              style={{ background: "#001328", color: "white", border: "none" }}
            >
              Submit
            </PrimaryButton>
          ]}
          width='500px'
        >
          <MasterLevelForm>
            {/* Code */}
            <div className='input_wrapper'>
              <label for='code' className='label'>
                Code:
              </label>
              <Form.Item>
                {getFieldDecorator("code", {
                  rules: [{ required: true, message: "Please enter a code!" }]
                })(
                  <Input id='code' name='code' placeholder='Enter the Code ' />
                )}
              </Form.Item>
            </div>

            {/* Plant Name */}
            <div className='input_wrapper'>
              <label for='plant_name' className='label'>
                Plant Name:
              </label>
              <Form.Item>
                {getFieldDecorator("plant_name", {
                  rules: [
                    { required: true, message: "Please enter Plant Name!" },
                    { min: 6, message: "Please enter over 6 letters" }
                  ]
                })(
                  <Input
                    id='plant_name'
                    name='plant_name'
                    placeholder='Enter the Plant Name'
                  />
                )}
              </Form.Item>
            </div>

            {/* Place */}
            <div className='input_wrapper'>
              <label for='plant_name' className='label'>
                Address:
              </label>
              <Form.Item>
                {getFieldDecorator("plant_address", {
                  rules: [
                    { required: true, message: "Please enter an Address!" }
                  ]
                })(
                  <Input
                    id='plant_address'
                    name='plant_address'
                    placeholder='Enter the Address '
                  />
                )}
              </Form.Item>
            </div>

            <div className='input_wrapper'>
              <label for='plant_name' className='label'>
                Contact No:
              </label>
              <Form.Item>
                {getFieldDecorator("contactno", {
                  rules: [
                    { required: true, message: "Please enter a Contact No!" },
                    { type: "number", message: "Please enter numbers only" }
                  ]
                })(
                  <InputNumber
                    className='input_number'
                    id='contactno'
                    name='contactno'
                    placeholder='Enter the Contact No'
                  />
                )}
              </Form.Item>
            </div>
          </MasterLevelForm>
        </Modal>
      </div>
    );
  }
}

const PlantAddForm = Form.create({ name: "add_plant" })(PlantForm);
export default PlantAddForm;
