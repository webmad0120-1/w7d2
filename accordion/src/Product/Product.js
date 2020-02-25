import React from "react";
import "./Product.css";

export default class Product extends React.Component {
  render() {
    return (
      <div className="product">
        <button onClick={() => this.props.clickToDelete()}>Delete me</button>
        <h1>{this.props.name}</h1>
        <h2>{this.props.price} $</h2>
        <img width="200" src={this.props.img} alt="" />
      </div>
    );
  }
}
