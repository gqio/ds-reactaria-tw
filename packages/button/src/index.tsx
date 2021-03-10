import React, { useRef } from "react";
import { useButton } from "@react-aria/button";
import { themeColors } from "../../colors/src/index";

type ButtonProps = {
  /**
    Variant of the button.
  */
  variant?: "primary" | "secondary";
  /**
    Handler when pressed 
  */
  onPress?: () => void;
} & {
  children?: any;
};
function Button(props: ButtonProps) {
  let { children } = props;
  let ref = useRef();
  let { buttonProps, isPressed } = useButton(
    {
      ...props,
      elementType: "button",
    },
    ref
  );

  const variant =
    props.variant === "secondary"
      ? { background: "transparent", color: themeColors.colors.primary }
      : {
          background: themeColors.colors.primary,
          color: "white",
          padding: "10px",
        };
  return (
    <button
      {...buttonProps}
      style={{
        border: "none",
        padding: "10px",
        ...variant,
      }}
      ref={ref}
    >
      {children}
    </button>
  );
}

export { Button };
