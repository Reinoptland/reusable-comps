import styled, { css } from "styled-components";
import themeColors from "../../styles/themeColors";
import PropTypes from "prop-types";

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

EasyLifeButton.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary", "danger"]).isRequired,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};
