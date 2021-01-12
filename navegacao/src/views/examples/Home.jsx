import React, { useState, useEffect } from 'react';

const entrada = useState(false);
const valor = useState(0);

useEffect(() => {
    if(entrada === true)
    {
        var abreInput = document.getElementById('inputName');

    }
  }, [entrada]);

const Home = props => (
    <div>
        <h1>Início</h1>
        <h2>Bem vindo!</h2>

        <button name="updateName" id="updateName" onClick={setEntrada(true)}>Alterar Nome</button>
        <input id="inputName" placeholder="Digite seu nome..." hidden="true"></input>
        <button name="updateName" id="updateName" onClick={setEntrada(true)} hidden="true">Alterar Nome</button>

        <button name="addNumber" id="addNumber">Soma</button>
        <button name="subtraiNumber" id="subtraiNumber">Subtração</button>
    </div>
)

export default Home;