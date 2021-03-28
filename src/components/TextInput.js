import React from "react";
import "./text-input.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

class TextInput extends React.Component {
  render() {
    let { isTyping } = this.state;
    console.log(" TextInput STATE", isTyping);
    return (
      <div className="text-input-container">
        <span
          className="text-input"
          contentEditable="true"
          onChange={() => {
            console.log("typing");
          }}
        >
          Type new message
        </span>
        <button className="send-button">
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </div>
    );
  }

  constructor(props) {
    super(props);

    let isTyping = false;

    this.state = { isTyping };
  }

  componentDidMount() {
    this.focusInput();
  }
  componentWillUnmount() {}

  focusInput = () => {
    const spanText = document.querySelector(".text-input");
    spanText.onfocus = () => {
      spanText.innerHTML = "";
    };
    spanText.onblur = () => {
      spanText.innerHTML = "Type new message";
    };
  };
}

export default TextInput;
