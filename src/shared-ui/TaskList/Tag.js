import React from "react";
import { Tag } from "antd";

const Tag = (props) => {
  const { type = "", tagName = "default" } = props;
  return (
    <Tag {...props} className={`custom-tag ${type}`}>
      {tagName}
    </Tag>
  );
};

export default Tag;
