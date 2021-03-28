import React from "react";
import "./avatar.css";

const Avatar = (props) => {
  const avatarClass = ["avatar", props.size].join(" ");

  return (
    <div className={avatarClass}>
      {props.avatar && <img src={props.avatar} alt="avatar" />}
      {!props.avatar && "User"}
    </div>
  );
};

export default Avatar;
