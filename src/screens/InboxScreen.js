import React from "react";
import "./inbox-screen.css";

import { Avatar, InboxChat } from "../components";
import { inbox } from "../mock";

class InboxScreen extends React.Component {
  render() {
    let { isHidden } = this.state;
    console.log(" InboxScreen STATE", isHidden);

    let { goToChat, searchString } = this.props;

    const inboxClass = ["inbox", isHidden && "hidden"].join(" ");
    return (
      <div className={inboxClass}>
        <div className="inbox-tabs">
          <div className="tab">Messages</div>
          <div className="tab">Calls</div>
          <div className="tab">Groups</div>
        </div>

        <div className="favourites">
          <div className="label">Favourites</div>

          <div className="favourite-users">
            <Avatar />
            <Avatar />
            <Avatar />
            <Avatar />
          </div>
        </div>

        <div className="chats">
          {inbox.map((chat) => {
            return (
              <InboxChat
                action={goToChat}
                username={chat.username}
                avatar={chat.avatar}
                unreadCount={chat.unread_count}
                messages={chat.messages.reverse()}
                time={chat.time}
                searchString={searchString}
              />
            );
          })}
        </div>
      </div>
    );
  }

  constructor(props) {
    super(props);

    let { isInboxHidden } = this.props;
    let isHidden = false || isInboxHidden;

    this.state = { isHidden };
  }

  componentDidMount() {
    const inboxDiv = document.querySelector(".inbox");
    let { transitionDuration } = this.props;
    inboxDiv.style["transition-duration"] = transitionDuration + "ms";
  }
  componentWillUnmount() {}

  hide = () => {
    return new Promise((resolve, reject) => {
      const inboxDiv = document.querySelector(".inbox");
      inboxDiv.style["transition-function"] = "ease-out";
      inboxDiv.classList.add("hidden");
      let { transitionDuration } = this.props;
      setTimeout(() => {
        this.setState({ isHidden: true }, () => {
          resolve();
        });
      }, transitionDuration + 10);
    });
  };

  show = () => {
    return new Promise((resolve, reject) => {
      const inboxDiv = document.querySelector(".inbox.hidden");
      inboxDiv.style["transiton-function"] = "ease-in";
      let { transitionDuration } = this.props;
      setTimeout(() => {
        inboxDiv.classList.remove("hidden");
        setTimeout(() => {
          this.setState({ isHidden: false }, resolve);
        }, transitionDuration + 10);
      }, 10);
    });
  };
}

export default InboxScreen;
