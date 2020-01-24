import React, { Component } from "react";
import { Input, Modal, Icon, Button, Select } from "antd";
import { PrimaryButton } from "../../styledcomponents/button/button";
import {
  MasterLevelFormTitle,
  MasterLevelForm
} from "../../styledcomponents/form/MasterLevelForms";

// function onChange(date, dateString) {
//   console.log(date, dateString);
// }
const Option = Select;
const InputGroup = Input.Group;
export default class AdditionalParameterAddForm extends Component {
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
          Add Additional Parameter
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
                Add Additional Parameter
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
              {/* <label for="code" className="label">
                Parameter
              </label> */}
              <Input
                id='code'
                style={{ width: "180px" }}
                name='code'
                placeholder='Parameter'
              />
            </div>

            {/* Plant Name */}
            <div className='input_wrapper'>
              {/* <label for="plant" className="label">
                Unit
              </label> */}
              <Select
                showSearch
                style={{ width: "180px" }}
                placeholder='Select a Unit'
                optionFilterProp='children'
                filterOption={(input, option) =>
                  option.props.children
                    .toLowerCase()
                    .indexOf(input.toLowerCase()) >= 0
                }
              >
                <Option value='peliyagoda'>Peliyagoda</Option>
                <Option value='jaffna'>Jaffna</Option>
                <Option value='trincomalee'>Trincomalee</Option>
                <Option value='trincomalee'>Ratmalana</Option>
              </Select>
            </div>

            {/* First Name */}
            <div className='input_wrapper'>
              {/* <label for="firstname" className="label">
               Short Format
              </label> */}
              <Select
                showSearch
                style={{ width: "180px" }}
                placeholder='Select a  ShortFormat '
                optionFilterProp='children'
                filterOption={(input, option) =>
                  option.props.children
                    .toLowerCase()
                    .indexOf(input.toLowerCase()) >= 0
                }
              >
                <Option value='peliyagoda'>Peliyagoda</Option>
                <Option value='jaffna'>Jaffna</Option>
                <Option value='trincomalee'>Trincomalee</Option>
                <Option value='trincomalee'>Ratmalana</Option>
              </Select>
            </div>

            {/* Last Name */}
            <div className='input_wrapper'>
              {/* <label for="lastname" className="label">
              Trial
              </label> */}
              <Select
                showSearch
                style={{ width: "180px" }}
                placeholder='Select a Plant'
                optionFilterProp='children'
                onChange={this.onChangeTrail}
                filterOption={(input, option) =>
                  option.props.children
                    .toLowerCase()
                    .indexOf(input.toLowerCase()) >= 0
                }
              >
                <Option value='Test'>Test </Option>
                <Option value='Config'>Configuration</Option>
              </Select>
            </div>
            {this.state.trial === "Test" ? (
              <div className='input_wrapper'>
                {/* <label for="lastname" className="label">
              Value
              </label>
              */}
                <InputGroup compact>
                  <Input
                    style={{ width: 80, textAlign: "center" }}
                    placeholder='Minimum'
                  />
                  <Input
                    style={{
                      width: 30,
                      borderLeft: 0,
                      pointerEvents: "none",
                      backgroundColor: "#fff"
                    }}
                    placeholder='~'
                    disabled
                  />
                  <Input
                    style={{
                      width: 80,
                      textAlign: "center",
                      borderLeft: 0
                    }}
                    placeholder='Maximum'
                  />
                </InputGroup>
              </div>
            ) : (
              ""
            )}
          </MasterLevelForm>
        </Modal>
      </div>
    );
  }
}
