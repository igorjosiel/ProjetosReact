import './mega.css';
import React, { useState } from 'react';

export default props => {
    function gerarNumeroContido(min, max, array)
    {
        const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min;

        return array.includes(aleatorio) ?
            gerarNumeroContido(min, max, array) :
            aleatorio;
    }

    function gerarNumeros(qtde)
    {
        const numeros = Array(qtde)
            .fill(0)
            .reduce((nums) => {
                const novoNumero = gerarNumeroContido(1, 60, nums)

                return [...nums, novoNumero]
            }, [])
            .sort((n1, n2) => n1 - n2)

        return numeros;
    }

    const [qtde, setQtde] = useState(props.qtde || 6);
    const numerosIniciais = gerarNumeros(qtde);
    const [numeros, setNumeros] = useState(numerosIniciais);

    return (
        <div>
            <h2 className='mega'>Mega</h2>
            <h3>{numeros.join(' ')}</h3>

            <div>
                <label>Quantidade de Numeros</label>
                <input
                    min="6"
                    max="15"
                    type="number"
                    value={qtde}
                    onChange={(e) => {
                        setQtde(+e.target.value)
                        setNumeros(gerarNumeros(qtde))
                    }}>
                </input>
            </div>

            <button onClick={_ => setNumeros(gerarNumeros(qtde))}>Gerar Numeros</button>
        </div>
    );
}

//console.log(geraNumeros(7));



//console.log(gerarNumeroContido(1, 60, [0, 0, 0, 0, 0, 0]));