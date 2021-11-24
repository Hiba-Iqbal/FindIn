import { Input, Form, DatePicker } from "antd";

import React from "react";
import Button from "../Button/Button";

const TaskEdit = () => {
  return (
    <div className="c-task-edit">
      <Form classname="c-form">
        <Form.Item name="task" className="c-input">
          <Input
            autoComplete="off"
            className="w-100"
            placeholder="This is your task list, edit this text and press save"
            size="large"
          />

          <div className="date-save-div">
            <DatePicker format="DD-MM-YYYY" className="date-picker" />

            <Button themecolor="blue" className="float-right">
              Save
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default TaskEdit;
