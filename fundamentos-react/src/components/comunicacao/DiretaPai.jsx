import React from 'react';
import DiretaFilho from './DiretaFilho';

export default props => {
    return (
        <div>
            <DiretaFilho nome="Augusto" idade={20} nerd={true}></DiretaFilho>
            <DiretaFilho nome="Antonio" idade={24} nerd={false}></DiretaFilho>
        </div>
    )
}