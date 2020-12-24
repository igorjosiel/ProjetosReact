import React, {Component} from 'react';

export default class Conversor extends Component {
    render() {
        const { textoExemplo } = this.props;

        return (
            <div>
                <p>{textoExemplo}</p>
            </div>
        )
    }
}