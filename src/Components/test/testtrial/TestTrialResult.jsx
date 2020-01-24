import React, { Component } from "react";
import { Input, Button } from "antd";
import { FlexContainer } from "../../styledcomponents/container/FlexGrid";
import TextArea from "antd/lib/input/TextArea";

import { AntTable } from "../../styledcomponents/table/AntTabl";
import { TestTrialTableTitles } from "./title/TestTrialTableTitles";
import { MasterLevelForm } from "../../styledcomponents/form/MasterLevelForms";

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
      <FlexContainer home style={{ marginTop: "-20px" }}>
        <AntTable
          lowHeight
          lowLength2
          title={() => TestTrialTableTitles("Material Parameter with Value")}
          columns={columns1}
          dataSource={data1}
          onChange={this.handleChange}
          pagination={false}
          //   scroll={{ y: 100 | true }}
          size='small'
        />

        <AntTable
          lowLength2
          lowHeight
          title={() => TestTrialTableTitles("Equipment Parameter with Value")}
          columns={columns2}
          dataSource={data2}
          onChange={this.handleChange}
          pagination={false}
          size='small'
        />

        <AntTable
          lowLength2
          lowHeight
          title={() => TestTrialTableTitles("Additional Parameter with Value")}
          columns={columns2}
          dataSource={data2}
          onChange={this.handleChange}
          pagination={false}
          size='small'
        />

        <AntTable
          medium
          lowHeight
          title={() => TestTrialTableTitles("Test Parameter with Value")}
          columns={columns4}
          onChange={this.handleChange}
          size='small'
          dataSource={data3}
          pagination={false}
        />

        <MasterLevelForm
          filled
          style={{
            width: "600px",
            marginTop: "20px",
            marginLeft: "15px",
            borderRadius: "15px",
            flexDirection: "column"
          }}
        >
          {TestTrialTableTitles("Results")}

          <FlexContainer normal column>
            <FlexContainer home style={{ marginLeft: "30px" }}>
              <div className='input_wrapper'>
                <label for='code' className='label'>
                  Average Value
                </label>
                <Input id='code' name='code' placeholder='' />
              </div>
              <div style={{ marginTop: "44px", marginLeft: "10px" }}>
                <Button>Calculate</Button>
              </div>
            </FlexContainer>
            <FlexContainer normal>
              <div className='input_wrapper'>
                <label for='code' className='label'>
                  Status
                </label>
                <Input id='code' name='code' placeholder='' />
              </div>
              <div className='input_wrapper'>
                <label for='code' className='label'>
                  Description
                </label>
                <TextArea id='code' name='code' placeholder='' cols={40} />
              </div>
            </FlexContainer>
          </FlexContainer>
        </MasterLevelForm>
      </FlexContainer>
    );
  }
}
