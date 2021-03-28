import React from "react";
import "./message.css";

import Avatar from "./Avatar";
import avatar1 from "../mock/avatars/avatar1.jpg";

const Message = ({ isSent }) => {
  const messageClass = ["message", isSent && "sent"].join(" ");

  return (
    <div className={messageClass}>
      {!isSent && <Avatar size="mini" avatar={avatar1} />}
      <div className="message-info">
        <div className="message-bubble">
          heeey man! I just got in from Kano, cheers to the win
        </div>
        <div className="time">00:12</div>
      </div>
    </div>
  );
};

export default Message;
