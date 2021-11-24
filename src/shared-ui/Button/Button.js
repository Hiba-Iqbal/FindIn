import React from "react";

import { Button as AntdButton } from "antd";

function Button(props) {
  const {
    children,
    type = "small",
    themecolor = "",
    className = "",
    loading,
  } = props;
  return (
    <AntdButton
      loading={loading}
      {...props}
      className={`c-button ${
        type === "large" ? "large" : ""
      } ${themecolor} ${className}`}>
      {children}
    </AntdButton>
  );
}

export default Button;
