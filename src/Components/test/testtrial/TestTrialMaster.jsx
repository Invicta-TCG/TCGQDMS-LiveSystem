import React, { Component } from "react";
import BasicCard from "../../styledcomponents/card/BasicCard";
import { FlexContainer } from "../../styledcomponents/container/FlexGrid";

import imgObj from "../../../assets/labtesting.jpg";
import { ManageTest, MaterialsType } from "./TestTrial";
import { NavigationLink } from "../../styledcomponents/Link/NavLink";

export const TestPage = ({ match, location }) => {
  const {
    params: { testId }
  } = match;

  return (
    <div>
      <div>{MaterialsType(testData[testId - 1].typeData)}</div>
      <div style={{ height: "40px" }}></div>
      <div>
        {ManageTest(testData[testId - 1].data, testData[testId - 1].name)}
      </div>
    </div>
  );
};

const testData = [
  {
    id: "1",
    name: "Sleve Test",
    data: [
      {
        key: "1",
        samplecode: "Samp001",
        sampletype: "Incoming Sample",
        name: "John Brown",
        date: "2018/05/8",
        rawmaterial: "M Sand"
      },
      {
        key: "2",
        samplecode: "Samp002",
        date: "2018/05/8",
        name: "Jim Green",
        sampletype: "Process Sample",
        rawmaterial: "Cement",
        email: "AdMixture"
      },
      {
        key: "3",
        samplecode: "Samp003",
        date: "2018/05/8",
        name: "Joe Black",
        sampletype: "Process Sample",
        rawmaterial: "0-5mm",
        email: "AdMixture"
      },
      {
        key: "4",
        samplecode: "Samp004",
        date: "2019/04/7",
        name: "Jim Red",
        sampletype: "Incoming Sample",
        rawmaterial: "River Sand",
        email: "AdMixture"
      }
    ],
    typeData: [
      {
        id: "1",
        typeName: "River Sand"
      },
      {
        id: "2",
        typeName: "M-Sand"
      },
      {
        id: "3",
        typeName: "UnWashed Sand"
      },
      {
        id: "4",
        typeName: "0-5mm"
      },
      {
        id: "5",
        typeName: "5-14mm"
      },
      {
        id: "6",
        typeName: "5-20mm"
      }
    ]
  },
  {
    id: "2",
    name: "Strength Test",
    typeData: [
      {
        id: "1",
        typeName: "Concreate"
      }
    ]
  },
  {
    id: "3",
    name: "pH Test",
    typeData: [
      {
        id: "1",
        typeName: "Optima100"
      },
      {
        id: "2",
        typeName: "Optima184"
      },
      {
        id: "3",
        typeName: "Optima187"
      },
      {
        id: "4",
        typeName: "Ecomix30"
      },
      {
        id: "5",
        typeName: "HypercreateR"
      },
      {
        id: "6",
        typeName: "Mirs286"
      }
    ]
  },
  {
    id: "4",
    name: "Water Demand Test"
  },
  {
    id: "5",
    name: "Water Content Test"
  },
  {
    id: "6",
    name: "Gravity Test"
  },
  {
    id: "7",
    name: "75% Micron Test"
  },
  {
    id: "8",
    name: "Slump Test"
  },
  {
    id: "9",
    name: "Marsh Cone Test"
  },
  {
    id: "10",
    name: "Marsh Cone Test"
  }
];

export default class TestTrialMaster extends Component {
  render() {
    return (
      <FlexContainer>
        {testData.map((post, index) => {
          return (
            <NavigationLink to={`/test/${index + 1}`}>
              <BasicCard testtrial finalproduct imgUrl={imgObj}>
                <h1 style={styleObj}>{post.name}</h1>
              </BasicCard>
            </NavigationLink>
          );
        })}
      </FlexContainer>
    );
  }
}
const styleObj = {
  fontSize: 20,
  color: "#fff",
  textAlign: "center",
  paddingTop: "30px",
  fontFamily: "Arial"
};

// const styleDiv = {
//   display: "flex",
//   flexdirection: "column",
//   flexwrap: "wrap",
//   justifycontent: "spaceevenly",
//   width: "800px"
// };
