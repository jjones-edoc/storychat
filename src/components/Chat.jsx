import React, { useContext } from "react";
import "./Chat.css";
import { ChatContext } from "../context/ChatContext";
import Messages from "./chat_cp/Messages";
import Input from "./chat_cp/Input";

const Chat = () => {
  const { data } = useContext(ChatContext);
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <i className="fa fa-camera"></i>
          <i className="fa fa-user-plus"></i>
          <i className="fa fa-ellipsis-h fa-2x"></i>
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
