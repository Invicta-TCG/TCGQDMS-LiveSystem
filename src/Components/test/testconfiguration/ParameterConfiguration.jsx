import React, { Component } from "react";
import { Checkbox } from "antd";

import { FlexContainer } from "../../styledcomponents/container/FlexGrid";

import { AntTable } from "../../styledcomponents/table/AntTabl";

import AdditionalParameterTitle from "./titles/AdditionalParameterTitle";

const data = [{ code: "", name: "" }];
const data1 = [{ code: "", location: "" }];
const data2 = [{ parameter: "", unit: "" }];

export default class ParameterConfiguration extends Component {
  state = {
    trial: "",
    size: "small"
  };

  onChangeTrail = value => {
    console.log(value);
    this.setState({ trial: value });
  };
  render() {
    const columns1 = [
      {
        title: <p style={{ color: "black" }}>Code</p>,
        dataIndex: "code",
        width: "5%",
        key: "code"
      },
      {
        title: <p style={{ color: "black" }}>Parameter</p>,
        dataIndex: "parameter",
        width: "10%",
        key: "parameter"
      },
      {
        title: <p style={{ color: "black" }}>Unit</p>,
        dataIndex: "name",
        key: "name",
        width: "6%"
      },
      {
        title: <p style={{ color: "black" }}>Relevant</p>,
        key: "action",
        width: "8%",
        render: (text, record) => <Checkbox />
      }
    ];
    const columns2 = [
      {
        title: <p style={{ color: "black" }}>Parameter</p>,
        dataIndex: "parameter",
        width: "8%",
        key: "parameter"
      },
      {
        title: <p style={{ color: "black" }}>Unit</p>,
        dataIndex: "unit",
        width: "6%",
        key: "unit"
      },
      {
        title: <p style={{ color: "black" }}>Short Format</p>,
        dataIndex: "name",
        key: "name",
        width: "8%"
      },
      {
        title: <p style={{ color: "black", marginLeft: "40px" }}>Action</p>,
        key: "action",
        width: "7%"
      }
    ];
    const columns3 = [
      {
        title: <p style={{ color: "black" }}>Code</p>,
        dataIndex: "code",
        width: "10%",
        key: "code"
      },
      {
        title: <p style={{ color: "black" }}>Location</p>,
        dataIndex: "location",
        width: "16%",
        key: "location"
      },
      {
        title: <p style={{ color: "black" }}>Equipment</p>,
        dataIndex: "name",
        key: "name",
        width: "16%"
      },
      {
        title: <p style={{ color: "black" }}>Parameter</p>,
        dataIndex: "name",
        key: "name",
        width: "16%"
      },
      {
        title: <p style={{ color: "black" }}>Unit</p>,
        dataIndex: "name",
        key: "name",
        width: "16%"
      },
      {
        title: <p style={{ color: "black" }}>Relevant</p>,
        key: "action",
        width: "12%",
        render: (text, record) => <Checkbox />
      }
    ];
    return (
      <FlexContainer style={{ justifyContent: "center" }}>
        <AntTable
          style={{ width: "600px", height: "200px" }}
          size={this.state.size}
          columns={columns1}
          dataSource={data}
          title={() => <h3>Test Parameter</h3>}
        />
        <AntTable
          style={{ width: "600px" }}
          size={this.state.size}
          columns={columns3}
          dataSource={data1}
          title={() => <h3>Equation Parameter</h3>}
        />
        <AntTable
          style={{ width: "1200px" }}
          length
          size={this.state.size}
          columns={columns2}
          dataSource={data2}
          title={() => <AdditionalParameterTitle />}
        />
      </FlexContainer>
    );
  }
}
