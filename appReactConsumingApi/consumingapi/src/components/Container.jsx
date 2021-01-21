import React from 'react';
import ContainerMenor from './ContainerMenor';

export default function Conatainer() {
    const style = {
        border: "2px solid green",
        width: "100%",
        height: "90vh",
        background: "#FFEFD5",
        display: "fex",
        justifyContent: ""
    }

    return (
        <div style={style}>
            <ContainerMenor numInputs={1}></ContainerMenor>
            <ContainerMenor numInputs={4}></ContainerMenor>
        </div>
    );
}