import React from "react";

class Tool extends React.Component {
  classn = () => {
    return `position ${this.props.position}`;
  };
  render() {
    return (
      <div className={`${this.classn()}`}>
        Thanks For Hovering ! A am a ToolTip
      </div>
    );
  }
}

export default Tool;
