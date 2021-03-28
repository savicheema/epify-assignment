import React from "react";
import "./App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faSearch,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";
import { InboxScreen, ChatScreen } from "./screens";
import { Search } from "./components";

class App extends React.Component {
  render() {
    let {
      screen,
      isChatHidden,
      isInboxHidden,
      isSearching,
      searchString,
    } = this.state;
    console.log(" App STATE", screen);

    return (
      <div className="App">
        <div className="header">
          <div className="back" onClick={this.goToInbox}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </div>
          <div className="screen-head">
            {screen === ChatScreen && (
              <div className="title">
                <div className="name">Ajala Ojo</div>
                <div className="status">Active now</div>
              </div>
            )}
            {screen === InboxScreen && <div className="title"></div>}

            {screen === ChatScreen && (
              <div className="operation">
                <FontAwesomeIcon icon={faEllipsisH} />
              </div>
            )}
            {screen === InboxScreen && (
              <div className="operation" onClick={this.toggleSearch}>
                {!isSearching && <FontAwesomeIcon icon={faSearch} />}
                {isSearching && (
                  <Search
                    searchString={searchString}
                    updateSearchString={this.updateSearchString}
                  />
                )}
              </div>
            )}
          </div>
        </div>

        <div className="screen">
          <this.state.screen
            ref={this.screenRef}
            goToChat={this.goToChat}
            goToInbox={this.goToInbox}
            isChatHidden={isChatHidden}
            isInboxHidden={isInboxHidden}
            transitionDuration={this.transitionDuration}
            searchString={searchString}
          />
        </div>
      </div>
    );
  }

  constructor(props) {
    super(props);

    let screen = InboxScreen;
    let isChatHidden = true;
    let isInboxHidden = false;
    let isSearching = false;
    let searchString = "";

    // screen = ChatScreen;
    // isChatHidden = false;
    // isInboxHidden = true;

    this.state = {
      screen,
      isChatHidden,
      isInboxHidden,
      isSearching,
      searchString,
    };

    this.screenRef = React.createRef();
    this.transitionDuration = 160;
  }

  componentDidMount() {}
  componentWillUnmount() {}

  goToChat = () => {
    this.screenRef.current.hide().then(() => {
      const screen = ChatScreen;
      const isChatHidden = true;
      const isInboxHidden = false;

      this.setState(
        { screen, isChatHidden, isInboxHidden, searchString: "" },
        () => {
          this.screenRef.current.show();
        }
      );
    });
  };

  goToInbox = () => {
    let { screen } = this.state;
    if (screen === InboxScreen) return;
    this.screenRef.current.hide().then(() => {
      const screen = InboxScreen;
      const isChatHidden = false;
      const isInboxHidden = true;

      this.setState({ screen, isChatHidden, isInboxHidden }, () => {
        this.screenRef.current.show();
      });
    });
  };

  toggleSearch = () => {
    let { isSearching } = this.state;

    if (isSearching) return;

    this.setState({ isSearching: true }, () => {
      const searchInput = document.querySelector("input.search-input");
      searchInput.focus();
      searchInput.onblur = () => {
        this.setState({ isSearching: false }, () => {
          setTimeout(() => {
            this.setState({ searchString: "" });
          }, 200);
        });
      };
    });
  };

  updateSearchString = (e) => {
    this.setState({ searchString: e.target.value }, () => {
      this.searchTimeout = undefined;
    });
  };
}

export default App;
