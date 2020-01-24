import React, { Component } from "react";
import { Checkbox } from "antd";

import { FlexContainer } from "../../styledcomponents/container/FlexGrid";

import { AntTable } from "../../styledcomponents/table/AntTabl";

import AdditionalParameterTitle from "./titles/AdditionalParameterTitle";

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
        dataIndex: "id",
        width: "5%",
        key: "id"
      },
      {
        title: <p style={{ color: "black" }}>Parameter</p>,
        dataIndex: "date",
        width: "10%",
        key: "id"
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
        dataIndex: "id",
        width: "8%",
        key: "id"
      },
      {
        title: <p style={{ color: "black" }}>Unit</p>,
        dataIndex: "date",
        width: "6%",
        key: "id"
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
        width: "7%",
        render: (text, record) => <Checkbox />
      }
    ];
    const columns3 = [
      {
        title: <p style={{ color: "black" }}>Code</p>,
        dataIndex: "id",
        width: "10%",
        key: "id"
      },
      {
        title: <p style={{ color: "black" }}>Location</p>,
        dataIndex: "date",
        width: "16%",
        key: "id"
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
      <FlexContainer style={{ justifyContent: "flex-start" }}>
        <AntTable
          lowLength2
          size={this.state.size}
          columns={columns2}
          title={() => <AdditionalParameterTitle />}
        />
        <AntTable
          style={{ width: "310px" }}
          size={this.state.size}
          columns={columns1}
          title={() => <h3>Test Parameter</h3>}
        />
        <AntTable
          style={{ width: "550px" }}
          size={this.state.size}
          columns={columns3}
          title={() => <h3>Equation Parameter</h3>}
        />
      </FlexContainer>
    );
  }
}
