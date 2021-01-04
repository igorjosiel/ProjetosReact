import React, { Component } from "react";

export default class p extends Component {
  state = { numero: 1, endereco: "hsdhdhd" };

  render() {
    console.log(this);
    return (
      <div className="conversor">
        {this.state.numero}
        {this.state.endereco}
        <input
          type="number"
          onChange={(e) => {
            this.setState({ numero: e.target.value });
          }}
        />
        <br></br>
        <input
          type="text"
          onChange={(e) => {
            this.setState({ endereco: e.target.value });
          }}
        />
      </div>
    );
  }
}
