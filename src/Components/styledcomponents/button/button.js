import styled, { css } from "styled-components";
import theme from "../../../theme";
import { Button } from "antd";

export const PrimaryButton = styled(Button)`
  ${props =>
    props.primary &&
    css`
      border-radius: "0.1em";
      box-shadow: "20px 20px 1px 1px";
      border-color: ${theme.colors.black};
      border: none;

      &:hover {
        outline-color: ${theme.colors.black};
        color: ${theme.colors.black};
        border-color: ${theme.colors.black};
        border: none;
      }
    `}
`;
