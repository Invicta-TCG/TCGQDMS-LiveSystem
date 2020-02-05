import React, { Component } from "react";
import { Input, Modal, Icon, Button, Select, Row, Col } from "antd";
import {
  MasterLevelFormTitle,
  MasterLevelForm
} from "../../../styledcomponents/form/MasterLevelForms";

import { PrimaryButton } from "../../../styledcomponents/button/button";

const { Option } = Select;
export default class AddMaterialParameter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: [{ id: "", parameter: "", unit: "", entry: "" }],
      val: "",
      loading: false,
      visible: false
    };
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  addClick() {
    this.setState(prevState => ({
      test: [...prevState.test, { id: "", parameter: "", unit: "", entry: "" }]
    }));
  }

  handleChange(i, e) {
    console.log("kkkkkkk");
    const { name, value } = e.target;
    let test = [...this.state.test];
    test[i] = { ...test[i], [name]: value };
    this.setState({ test });
  }

  removeClick(i) {
    let test = [...this.state.test];
    test.splice(i, 1);
    this.setState({ test });
  }
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

  createUI() {
    return this.state.test.map((el, i) => (
      <div key={i}>
        <Row>
          <Input
            placeholder='Code'
            name='parameter'
            value={el.parameter || ""}
            onChange={this.handleChange.bind(this, i)}
            style={{ width: "100px" }}
          />

          <Input
            placeholder='Material '
            name='parameter'
            value={el.parameter || ""}
            onChange={this.handleChange.bind(this, i)}
            style={{ width: "100px", marginLeft: "10PX" }}
          />

          <Select
            style={{ width: "140px", marginLeft: "10px" }}
            placeholder='Parameter '
          ></Select>

          <Select
            style={{ width: "140px", marginLeft: "10px" }}
            placeholder='MainCategory ID'
          ></Select>

          <Input
            placeholder='Min Value'
            name='parameter'
            value={el.parameter || ""}
            onChange={this.handleChange.bind(this, i)}
            style={{ width: "100px", marginLeft: "20PX" }}
          />

          <Input
            placeholder='Max Value'
            name='parameter'
            value={el.parameter || ""}
            onChange={this.handleChange.bind(this, i)}
            style={{ width: "100px", marginLeft: "20PX" }}
          />

          <Select
            style={{ width: "140px", marginLeft: "40px" }}
            placeholder='Unit'
          ></Select>

          <Button
            type=''
            value='remove'
            onClick={this.removeClick.bind(this, i)}
            style={{ width: "75px", marginLeft: "40px" }}
          >
            Remove
          </Button>
        </Row>
        <br />
      </div>
    ));
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
          Add Material Parameter
        </PrimaryButton>
        <Modal
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
          width='1100px'
          title={
            <MasterLevelFormTitle>
              <p
                style={{
                  color: "white"
                }}
              >
                Add Material Parameter
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
            {this.createUI()}

            <Row>
              <Col span={3}>
                <Button
                  type=''
                  value='add more'
                  onClick={this.addClick.bind(this)}
                >
                  Add more
                </Button>
              </Col>
            </Row>
          </MasterLevelForm>
        </Modal>
      </div>
    );
  }
}
