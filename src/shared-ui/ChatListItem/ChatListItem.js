import React, { useState } from "react";
import { Form, Input, Button, Checkbox, Divider } from "antd";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";

const ChatListItem = () => {
  const [starred, setStarred] = useState(false);
  const [selected, setSelected] = useState(false);

  return (
    <>
      <div className={`chat-list-item ${selected ? "selected" : ""}`}>
        <Checkbox onClick={() => setSelected(!selected)} />

        <div className="avatar">
          <img src={require(`../../../assets/images/ms/ms-1.png`)} alt="" />
        </div>

        <div className="chat-text">
          <div className="title">Maria Cook</div>
          <div className="subtitle">Managing Director</div>
          <div className="text">
            Perfect Sam, I will send you an Interview invitation
          </div>
          <div className="date">17/04/23</div>
        </div>
        <div className="chat-item-btns">
          <div>
            {" "}
            {!starred ? (
              <AiOutlineStar onClick={() => setStarred(!starred)} />
            ) : (
              <AiFillStar onClick={() => setStarred(!starred)} />
            )}
          </div>
          <div>
            <BsTrash />
          </div>
        </div>
      </div>
      <Divider />
    </>
  );
};

export default ChatListItem;
