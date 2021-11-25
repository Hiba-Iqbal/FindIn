import { message } from "antd";

export const showErrorMessage = (content) => {
  message.error({
    content,
    style: {
      marginTop: "4vh",
    },
  });
};

export const showSuccessMessage = (content) => {
  message.success({
    content,
    style: {
      marginTop: "4vh",
    },
  });
};

export const showWarningMessage = (content) => {
  message.warning({
    content,
    style: {
      marginTop: "4vh",
    },
  });
};
