import React, { Component } from "react";
import { Input, Modal, Icon, Button, Form } from "antd";
import TextArea from "antd/lib/input/TextArea";

import { PrimaryButton } from "../../../styledcomponents/button/button";
import {
  MasterLevelFormTitle,
  MasterLevelForm
} from "../../../styledcomponents/form/MasterLevelForms";

// function onChange(date, dateString) {
//   console.log(date, dateString);
// }

class UserRoleAddForm extends Component {
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

  componentDidMount() {
    console.log(this.props.screen);
  }
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
          Add User Role
        </PrimaryButton>
        <Modal
          width='400px'
          visible={visible}
          closable={false}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
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
          title={
            <MasterLevelFormTitle>
              <p
                style={{
                  color: "white"
                }}
              >
                Add New User Role
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

            {/* User Role */}
            <div className='input_wrapper'>
              <label for='user_role' className='label'>
                Desigination:
              </label>
              <Form.Item>
                {getFieldDecorator("user_role", {
                  rules: [
                    { required: true, message: "Please enter a userRole!" }
                  ]
                })(
                  <Input
                    id='user_role'
                    name='user_role'
                    placeholder='Enter the Desigination'
                  />
                )}
              </Form.Item>
            </div>
            <div className='input_wrapper'>
              <label
                for='user_role'
                className='label'
                style={{ width: "180px" }}
              >
                Description:
              </label>
              <TextArea
                id='user_role'
                name='user_role'
                placeholder='Enter the Description'
              />
            </div>
          </MasterLevelForm>
        </Modal>
      </div>
    );
  }
}
const UserRoleForm = Form.create({ name: "add_userrole" })(UserRoleAddForm);
export default UserRoleForm;
