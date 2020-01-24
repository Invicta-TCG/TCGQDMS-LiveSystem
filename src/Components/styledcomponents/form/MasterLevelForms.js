import styled, { css } from "styled-components";
import { Form } from "antd";

export const MasterLevelForm = styled(Form)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: ${props =>
    props.unalignedform ? "flex-start" : "space-evenly"};
  height: auto;
  width: auto;
  background: ${props => (props.filled ? "white" : "")};

  ${props =>
    props.testconfiguration &&
    css`
      border-radius: 15px;
      padding: 20px;
      flex-direction: row;
      justify-content: space-around;
      height: 300px;
      width: 250px;
     
      }
    `}
`;

export const MasterLevelFormTitle = styled.div`
  padding: 15px;
  margin: ${props => (props.nomargin ? "0px" : "-25px")};
  width: auto;
  height: 50px;
  background: #001328;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  border-bottom-right-radius: -10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  color: white;
`;
