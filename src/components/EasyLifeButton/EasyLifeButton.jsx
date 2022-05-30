import styled, { css } from "styled-components";
import themeColors from "../../styles/themeColors";

const EasyLifeButton = styled.button`
  border: none;
  padding: 8px;
  font-size: 16px;
  color: white;
  background-color: dodgerblue;

  ${(props) =>
    props.variant &&
    css`
      background: ${themeColors[props.variant].backgroundColor};
      color: ${themeColors[props.variant].color};
    `}
`;

export default EasyLifeButton;
