import { React, useState } from 'react';
import InputUser from './InputUser';

export default function ConatainerMenor(props) {
    const { numInputs } = props;

    const [cep] = useState('"Deigite seu CEP..."');
    const [cidade] = useState('Cidade...');
    const [rua] = useState('Rua...');
    const [bairro] = useState('Bairro...');
    const [uf] = useState('UF...');

    const style = {
        border: "2px solid blue",
        width: "30%",
        height: "30vh",
        background: "#FFEFD5",
        marginLeft: "470px"
    }

    return(
        numInputs === 1 ? 
        <div style={style}>
            <InputUser texto={cep}></InputUser>
        </div>
        :
        <div style={style}>
            <InputUser margin={10} texto={cidade}></InputUser>
            <InputUser margin={10} texto={rua}></InputUser>
            <InputUser margin={10} texto={bairro}></InputUser>
            <InputUser margin={10} texto={uf}></InputUser>
        </div>
    )
}