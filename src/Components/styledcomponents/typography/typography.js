import styled from "styled-components";
import { Typography } from "antd";
import theme from "../../../theme";

const { Title } = Typography;

export const Heading = styled(Title)`
  font-family: ${props => (props.card ? theme.fonts.calibri : "roboto")};
`;

export const TileParagraph = styled.p`
  font-size: 14px;
  font-family: "Roboto";
  align-self: auto;
  width: 100%;
  color: white;
`;
