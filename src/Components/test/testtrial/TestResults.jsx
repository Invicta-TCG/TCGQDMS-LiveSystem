import React, { Component } from "react";
import { FlexContainer } from "../../styledcomponents/container/FlexGrid";
import { TestResultInput } from "./inputs/TestResultInput";
import TextArea from "antd/lib/input/TextArea";
import { PrimaryButton } from "../../styledcomponents/button/button";

const data = [
  {
    testcode: "10",
    testname: "sieve",
    sample: "sample",
    material: "sand",
    plant: "peliyagoda",
    testeddate: "20/01/2020",
    testedlevel: "plantlevel",
    materialparameter: "param01",
    testresult: "pass",
    testedby: "noname",
    status: "finished",
    comments: "no comments"
  }
];

export default class TestResults extends Component {
  componentDidMount() {
    console.log(data);
  }

  render() {
    return (
      <FlexContainer style={{ width: "auto" }}>
        {/* Column 01 */}
        <FlexContainer
          style={{
            width: "60%",
            background: "white",
            padding: "50px",
            textAlign: "justify"
          }}
        >
          {TestResultInput("Test Code", "test_code", data[0].testcode)}
          {TestResultInput("Test Name", "test_name", data[0].testname)}
          {TestResultInput("Sample", "sample", data[0].sample)}
          {TestResultInput("Material", "material", data[0].material)}
          {TestResultInput("Plant", "plant", data[0].plant)}
          {TestResultInput("Tested Date", "tested_date", data[0].testeddate)}
          {TestResultInput("Test Level", "test_level", data[0].testedlevel)}
          {TestResultInput(
            "Material Parameter",
            "material_parameter",
            data[0].materialparameter
          )}
          {TestResultInput("Test Result", "test_result", data[0].testresult)}
          {TestResultInput("Tested By", "tested_by", data[0].testedby)}
          {TestResultInput("Status", "status", data[0].status)}
          {TestResultInput("Comments", "comments", data[0].comments)}
        </FlexContainer>
        {/* Column 02 */}
        <FlexContainer
          column
          normal
          style={{ background: "white", width: "35%", padding: "50px" }}
        >
          <div style={{ display: "flex" }}>
            <h3 style={{ width: "170px" }}>Reviews</h3>
            <TextArea
              id='reviews'
              name='reviews'
              style={{ width: "150px", height: "50px" }}
            />
          </div>
          <div style={{ display: "flex" }}>
            <h3 style={{ width: "170px" }}>Reviews</h3>
            <TextArea
              id='reviews'
              name='reviews'
              style={{ width: "150px", height: "50px" }}
            />
          </div>
          <h4>Final Status</h4>
          <FlexContainer normal>
            <PrimaryButton
              type='primary'
              style={{ background: "green", outline: "none", border: "none" }}
            >
              Accept
            </PrimaryButton>
            <PrimaryButton
              type='primary'
              style={{ background: "black", outline: "none", border: "none" }}
            >
              Reject
            </PrimaryButton>
          </FlexContainer>

          <FlexContainer normal>
            <PrimaryButton
              type='primary'
              style={{
                background: "#001422",
                outline: "none",
                border: "none"
              }}
            >
              Submit
            </PrimaryButton>
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
    );
  }
}
