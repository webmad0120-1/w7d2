import React from "react";

export default class Accordion extends React.Component {
  state = {
    open: true
  };

  switchMenu() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    return (
      <div>
        <button onClick={() => this.switchMenu()}>{this.state.open ? "Close" : "Open"} menu</button>
        {this.state.open && <div className="contents">{this.props.children}</div>}
      </div>
    );
  }
}
