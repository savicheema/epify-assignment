import React from "react";
import "./chat-screen.css";

import { Message, TextInput } from "../components";

class ChatScreen extends React.Component {
  render() {
    let { isHidden } = this.state;
    console.log(" ChatScreen STATE", isHidden);

    const chatClass = ["chat", isHidden && "hidden"].join(" ");
    return (
      <div className={chatClass}>
        <Message isSent={false} />
        <Message isSent={true} />
        <Message isSent={false} />
        <Message isSent={true} />
        <Message isSent={true} />
        <Message isSent={false} />

        <TextInput />
      </div>
    );
  }

  constructor(props) {
    super(props);

    let { isChatHidden } = this.props;
    let isHidden = false || isChatHidden;

    console.log("CHAT SCREEN CONSTRUCTOr", isHidden);

    this.state = { isHidden };
  }

  componentDidMount() {
    const chatDiv = document.querySelector(".chat");
    let { transitionDuration } = this.props;
    chatDiv.style["transition-duration"] = transitionDuration + "ms";
  }
  componentWillUnmount() {}

  hide = () => {
    return new Promise((resolve, reject) => {
      const chatDiv = document.querySelector(".chat");
      chatDiv.style["transition-function"] = "ease-out";
      chatDiv.classList.add("hidden");
      let { transitionDuration } = this.props;
      setTimeout(() => {
        this.setState({ isHidden: true }, resolve);
      }, transitionDuration + 10);
    });
  };

  show = () => {
    return new Promise((resolve, reject) => {
      const chatDiv = document.querySelector(".chat.hidden");
      chatDiv.style["transition-function"] = "ease-in";
      console.log("chat div", chatDiv);

      let { transitionDuration } = this.props;
      setTimeout(() => {
        chatDiv.classList.remove("hidden");
        setTimeout(() => {
          this.setState({ isHidden: false }, resolve);
        }, transitionDuration + 10);
      }, 10);
    });
  };
}

export default ChatScreen;
