import React from "react";
import "./ColorSlider.css";

export default class ColorSlider extends React.Component {
  state = {
    redValue: 255
  };

  updateValue(e) {
    this.setState({
      redValue: e.target.value,
    });
  }

  render() {
    return (
      <section className="color-slider">
        <div 
            className="color" 
            style={{ backgroundColor: `rgb(${this.state.redValue}, 0, 0)` }}>
          {this.state.redValue}
        </div>
        <input
          type="range"
          onChange={e => this.updateValue(e)}
          value={this.state.redValue}
          min="0"
          max="255"
        />
      </section>
    );
  }
}
