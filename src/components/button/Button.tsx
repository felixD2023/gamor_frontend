import React from "react";

import {
  ButtonTypeRounded1,
  ButtonTypeRounded2,
  ButtonTypeSquare,
  ButtonTypeText,
} from "./StyledComponents";

interface propsButton {
  variant: string;
  text: string;
  color?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const Button = (props: propsButton) => {
  return (
    <div onClick={props.onClick}>
      {props.variant === "text" ? (
        <ButtonTypeText>{props.text}</ButtonTypeText>
      ) : props.variant === "rounded" && props.color === "black" ? (
        <ButtonTypeRounded1>{props.text}</ButtonTypeRounded1>
      ) : props.variant === "rounded" && props.color === "white" ? (
        <ButtonTypeRounded2>{props.text}</ButtonTypeRounded2>
      ) : props.variant === "standard" ? (
        <div>standard</div>
      ) : props.variant === "square" ? (
        <ButtonTypeSquare><strong>{props.text}</strong></ButtonTypeSquare>
      ) : null}
    </div>
  );
};

export default Button;
