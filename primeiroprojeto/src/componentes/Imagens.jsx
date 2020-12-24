import React, {Component} from 'react';

export default class Imagens extends Component {
    render() {
        state {
            categoria : '';
            quantidade : ''
        }

        var qtd = this.props.quantidade;

        const styleDiv = {
            backgroundColor: '#778899',
            width: '100%',
            height: '520px',
            margin: '20px auto'
        }

        const styleImg = {
            margin: '10px',
            height: '100px',
            width: '100px'
        }

        const styleH5 = {
            bold: 'none',
            color: 'black'
        }

        function renderizaImagens() {
            var imagens = [];

            for (let i = 0; i < qtd; i ++)
            {
                imagens.push(<img style={styleImg} src='https://images.pexels.com/photos/20787/pexels-photo.jpg'/>);
            }

            return imagens;
        }

        alterarQuantidade = () => {
            this.setState({
                quantidade
            })
        }

        alterarQuantidade = e => {
            this.setState({ [e.target.name]: e.target.value });
        }

        var btnBuscar = document.getElementById("botaoBuscar");
        
        btnBuscar.addEventListener("click", () => {
            console.log("Igor Josiel");
        });

        return (
            <div>
               <div style={styleDiv}>
                    <h1>Imagens</h1>

                    <h5 style={styleH5}>Digite a quantidade de imagens a serem exibidas: </h5>
                    <input type="number" min="0" max="10" onChange={}></input>

                    <h5>Digite a categoria de imagens que deseja buscar: </h5>
                    <input type="text"></input><br /><br />

                    <button onClick={this.obterValores} id="botaoBuscar">Buscar</button>

                    <ul>
                       
                        {renderizaImagens()}
                    </ul>
               </div>
            </div>
        )
    }
}