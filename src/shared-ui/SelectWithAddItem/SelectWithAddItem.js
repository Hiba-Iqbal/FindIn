import React, { useState } from "react";

import { Select, Divider, Input } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const { Option } = Select;
let index = 0;

const SelectWithAddItem = ({
  options = [],
  onItemChange = null,
  defaultValue = "",
  hintTextForAddItem = "Can't find your option?",
}) => {
  const [items, setitems] = useState(options);
  const [newItemName, setNewItemName] = useState("");
  const onNameChange = (event) => {
    setNewItemName(event.target.value);
  };
  const addItem = () => {
    setitems((prevValue) => [
      ...prevValue,
      newItemName || `New item ${index++}`,
    ]);
    setNewItemName("");
  };
  return (
    <Select
      className={"c-select-with-add-item"}
      defaultValue={defaultValue}
      placeholder="Select"
      onChange={onItemChange}
      dropdownRender={(menu) => (
        <div>
          <div
            style={{
              display: "flex",
              flexWrap: "nowrap",
              padding: 8,
              alignItems: "center",
            }}
          >
            <span className="d-flex flex-column justify-content-start">
              <a>{hintTextForAddItem}</a>
              <span className="d-flex">
                <Input
                  autoComplete="off"
                  style={{ flex: "auto" }}
                  value={newItemName}
                  onChange={onNameChange}
                />
                <a
                  style={{
                    flex: "none",
                    padding: "8px",
                    display: "flex",
                    cursor: "pointer",
                    alignItems: "center",
                  }}
                  onClick={addItem}
                >
                  <PlusOutlined className="mr-1" /> Add item
                </a>
              </span>
            </span>
          </div>
          <Divider className="m-0" />
          {menu}
        </div>
      )}
    >
      {items.map((item) => (
        <>
          <Option key={item}>{item}</Option>
        </>
      ))}
    </Select>
  );
};
export default SelectWithAddItem;
