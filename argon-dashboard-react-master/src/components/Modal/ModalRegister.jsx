import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalRegister = (props) => {
  const { onClose , dados, estilo } = props;
  const { title, message, textButton, img } = dados;
  const { color } = estilo;
  console.log("O valor de color é: ", color);

  return (
    <div className="modal">
      <div className="container">
        <h1 style={{color: color}}>{title}</h1>
        <div className="content">
          {message}
        </div>
        <Button className="close" onClick={onClose}>{textButton}</Button>
        <img className="imgModal" src={img}></img>
      </div>
    </div>
  );
}

export default ModalRegister;