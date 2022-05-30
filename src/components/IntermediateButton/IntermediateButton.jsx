import React from "react";
import PropTypes from "prop-types";
import style from "./IntermediateButton.module.css";

export default function IntermediateButton({
  variant,
  size,
  children,
  ...otherProps // anything else: call it otherProps (...rest)
}) {
  // let variant = props.variant
  console.log("INTERMEDIATE OTHER PROPS:", otherProps);
  return (
    <button
      {...otherProps} // pass on all the otherProps to the button (...spread)
      className={`${style.btn} ${style[`btn--${variant}`]} ${
        size ? style[`btn--size-${size}`] : ""
      }`}
    >
      {children}
    </button>
  );
}

IntermediateButton.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary", "danger"]).isRequired,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};
