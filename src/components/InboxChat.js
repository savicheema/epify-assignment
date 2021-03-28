import React from "react";
import "./inbox-chat.css";

import Avatar from "./Avatar";

const InboxChat = ({
  action,
  avatar,
  username,
  messages,
  time,
  unreadCount,
  searchString,
}) => {
  if (searchString) {
    const isContained = messages.some((message, index) => {
      return message.toLowerCase().includes(searchString.toLowerCase());
    });

    if (!isContained) return "";
  }
  return (
    <div className="inbox-chat" onClick={action}>
      <Avatar avatar={avatar} />

      <div className="info-container">
        <div className="chat-info">
          <div className="user-name">{username}</div>
          <div className="last-text">{messages[0]}</div>
        </div>

        <div className="chat-details">
          <div className="update-time">{time}</div>
          {!!unreadCount && <div className="unread-count">{unreadCount}</div>}
        </div>
      </div>
    </div>
  );
};

export default InboxChat;
