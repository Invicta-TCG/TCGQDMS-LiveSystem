import styled, { css } from "styled-components";

export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${props => (props.column ? "column" : "row")};
  height: ${props => (props.titles ? "40px" : props.steps ? "150px" : "")};
  justify-content: ${props =>
    props.home
      ? "flex-start"
      : props.normal
      ? "space-evenly"
      : "space-between"};

  ${props =>
    props.leveltitles &&
    css`
      @media (min-width: 1900px) {
        justify-content: space-between;
        width: calc(100% - 10px);
      }
    `}
  ${props =>
    props.leveltileareafixed &&
    css`
      margin-top: -15px;
      justify-content: flex-start;
    `}
  ${props =>
    props.stepsarea &&
    css`
      justify-content: space-evenly;
      margin-top: 15px;
    `}

  ${props =>
    props.borderRadiused &&
    css`
      border-bottom-right-radius: 15px;
      border-bottom-left-radius: 15px;
      background: white;
      padding: 10px;
    `}
    
`;
