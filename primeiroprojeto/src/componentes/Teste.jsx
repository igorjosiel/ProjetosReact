import React, { Component } from "react";

export default class Teste extends Component {
  render() {
    const textoExemplo = this.props.texto;
    console.log(this.props);
    
    return (
        <div>
          <p>{textoExemplo}</p>
        </div>
    );
  }
}
