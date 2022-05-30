import React from "react";
import PropTypes from "prop-types";

export default function IntermediateButton(props) {
  return <button>{props.children}</button>;
}

IntermediateButton.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary", "danger"]).isRequired,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};
