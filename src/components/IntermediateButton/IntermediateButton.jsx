import React from "react";
import PropTypes from "prop-types";
import style from "./IntermediateButton.module.css";

export default function IntermediateButton(props) {
  return (
    <button
      className={`${style.btn} ${style[`btn--${props.variant}`]} ${
        props.size ? style[`btn--size-${props.size}`] : ""
      }`}
    >
      {props.children}
    </button>
  );
}

IntermediateButton.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary", "danger"]).isRequired,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};
