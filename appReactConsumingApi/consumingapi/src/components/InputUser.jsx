import React from 'react';
import { Input } from 'reactstrap';

export default function InputUser(props) {
    const { margin = 70, texto = '' } = props;

    const style = {
        width: "90%",
        marginTop: margin
    }

    return <Input type="text" name="cep" id="cep" placeholder={texto} style={style}></Input>;
}