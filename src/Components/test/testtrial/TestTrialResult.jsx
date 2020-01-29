import React, { Component } from "react";
import { Input, Button } from "antd";
import { FlexContainer } from "../../styledcomponents/container/FlexGrid";
import TextArea from "antd/lib/input/TextArea";

import { AntTable } from "../../styledcomponents/table/AntTabl";
import { TestTrialTableTitles } from "./title/TestTrialTableTitles";
import { MasterLevelForm } from "../../styledcomponents/form/MasterLevelForms";
import { PrimaryButton } from "../../styledcomponents/button/button";

const data1 = [
  {
    Parameter: "",
    Unit: "",
    Accepted_Value: ""
  }
];

const data2 = [
  {
    Parameter: "",
    value: "",
    unit: "",
    iteration: ""
  }
];
const data3 = [
  {
    Parameter: "",
    result_value: "",
    unit: "",
    iteration: ""
  }
];

export default class TestTrialResult extends Component {
  render() {
    const columns1 = [
      {
        title: <p style={{ color: "black" }}>Parameter</p>,
        dataIndex: "Parameter",
        key: "Parameter"
      },
      {
        title: <p style={{ color: "black" }}>Unit</p>,
        dataIndex: "Unit",
        key: "Unit"
      },
      {
        title: <p style={{ color: "black" }}>Accepted Value</p>,
        dataIndex: "Accepted_Value",
        key: "Accepted_Value"
      }
    ];

    const columns2 = [
      {
        title: <p style={{ color: "black" }}>Parameter</p>,
        dataIndex: "parameter",
        key: "parameter"
      },
      {
        title: <p style={{ color: "black" }}>Value</p>,
        dataIndex: "value",
        key: "value"
      },
      {
        title: <p style={{ color: "black" }}>Unit</p>,
        dataIndex: "unit",
        key: "unit"
      },
      {
        title: <p style={{ color: "black" }}>Iteration</p>,
        dataIndex: "iteration",
        key: "iteration"
      }
    ];

    const columns4 = [
      {
        title: <p style={{ color: "black" }}>Parameter</p>,
        dataIndex: "parameter",
        key: "parameter"
      },

      {
        title: <p style={{ color: "black" }}>Unit</p>,
        dataIndex: "unit",
        key: "unit"
      },
      {
        title: <p style={{ color: "black" }}>Result Value</p>,
        dataIndex: "result_value",
        key: "result_value"
      },
      {
        title: <p style={{ color: "black" }}>Iteration</p>,
        dataIndex: "iteration",
        key: "iteration"
      }
    ];
    return (
      <FlexContainer home style={{ marginTop: "-20px", background: "white" }}>
        <AntTable
          medium
          emptyTableTestTrial
          columns={columns1}
          dataSource={data1}
          onChange={this.handleChange}
          pagination={false}
          //   scroll={{ y: 100 | true }}
          size='small'
          title={() => <h4>Material Related Parameter</h4>}
        />

        <AntTable
          medium
          emptyTableTestTrial
          columns={columns2}
          dataSource={data2}
          onChange={this.handleChange}
          pagination={false}
          size='small'
          title={() => <h4>Additional Parameter With Value</h4>}
        />

        <AntTable
          medium
          emptyTableTestTrial
          columns={columns2}
          dataSource={data2}
          onChange={this.handleChange}
          pagination={false}
          size='small'
          title={() => <h4>Equipment Related Parameter</h4>}
        />

        <AntTable
          medium
          emptyTableTestTrial
          columns={columns4}
          onChange={this.handleChange}
          size='small'
          dataSource={data3}
          pagination={false}
          title={() => <h4>Test Related Parameter</h4>}
        />

        <MasterLevelForm
          filled
          style={{
            width: "100%",
            marginTop: "20px",
            marginLeft: "15px",
            borderRadius: "15px",
            flexDirection: "column"
          }}
        >
          {TestTrialTableTitles("Results")}

          <FlexContainer normal>
            <FlexContainer home>
              <div className='input_wrapper'>
                <label for='code' className='label'>
                  Average Value
                </label>
                <Input id='code' name='code' placeholder='' />
              </div>
              <div style={{ marginTop: "60px", marginLeft: "10px" }}>
                <PrimaryButton
                  style={{ background: "#001422", border: "none" }}
                  type='primary'
                >
                  Calculate
                </PrimaryButton>
              </div>
            </FlexContainer>
            <FlexContainer normal>
              <div className='input_wrapper'>
                <label for='code' className='label'>
                  Status
                </label>
                <Input id='code' name='code' placeholder='' />
              </div>
              <div style={{ marginTop: "60px", marginLeft: "10px" }}>
                <PrimaryButton
                  style={{ background: "green", border: "none" }}
                  type='primary'
                >
                  Pass
                </PrimaryButton>
              </div>
              <div style={{ marginTop: "60px", marginLeft: "10px" }}>
                <PrimaryButton
                  style={{ background: "red", border: "none" }}
                  type='primary'
                >
                  Fail
                </PrimaryButton>
              </div>
              <div className='input_wrapper'>
                <label for='code' className='label'>
                  Description
                </label>
                <TextArea id='code' name='code' placeholder='' cols={40} />
              </div>
            </FlexContainer>
            <FlexContainer normal style={{ marginTop: "50px" }}>
              <div style={{}}>
                <PrimaryButton
                  style={{ background: "#001422", border: "none" }}
                  type='primary'
                >
                  Submit
                </PrimaryButton>
              </div>
              <div style={{ marginLeft: "10px" }}>
                <PrimaryButton
                  style={{ background: "#001422", border: "none" }}
                  type='primary'
                >
                  Print
                </PrimaryButton>
              </div>
            </FlexContainer>
          </FlexContainer>
        </MasterLevelForm>
      </FlexContainer>
    );
  }
}
