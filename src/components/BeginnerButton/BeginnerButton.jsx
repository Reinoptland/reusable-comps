import React from "react";

export default function BeginnerButton(props) {
  let backgroundColor;
  let textColor;
  let fontSize;
  let padding;

  switch (props.size) {
    case "lg":
      fontSize = "20px";
      padding = "12px";
      break;

    default:
      fontSize = "16px";
      padding = "8px";
      break;
  }

  switch (props.variant) {
    case "secondary":
      backgroundColor = "gray";
      textColor = "white";
      break;

    default:
      backgroundColor = "dodgerblue";
      textColor = "white";
      break;
  }

  return (
    <button
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
        border: "none",
        padding: padding,
        fontSize: fontSize,
      }}
    >
      {props.displaySpinner ? "😵‍💫" : props.buttonText}
    </button>
  );
}
