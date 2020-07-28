import './app.css';
import React from 'react';

import Mega from "./components/mega/Mega";
import Contador from "./components/contador/Contador";
import Input from "./components/formulario/Input";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import DiretaPai from "./components/comunicacao/DiretaPai";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import ParOuImpar from "./components/condicional/ParOuImpar";
import ListaProdutos from "./components/repeticao/ListaProdutos";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import Familia from "./components/basicos/Familia";
import Card from "./components/layout/Card";
import Aleatorio from "./components/basicos/Aleatorio";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";

export default _ =>
	<div className="app">
		<h1>Fundamentos React</h1>

		<div className="cards">
			<Card titulo="#13 - Mega" color="#B9006E">
				<Mega qtde={8}></Mega>
			</Card>

			<Card titulo="#12 - Contador" color="#424242">
				<Contador numeroInicial={10}></Contador>
			</Card>

			<Card titulo="#11 - Componente Controlado" color="#E45F56">
				<Input></Input>
			</Card>

			<Card titulo="#10 - Comunicacao Indireta" color="#BBAD39">
				<IndiretaPai></IndiretaPai>
			</Card>

			<Card titulo="#09 - Comunicacao Direta" color="#59323C">
				<DiretaPai></DiretaPai>
			</Card>

			<Card titulo="#08 - Renderizacao Condicional" color="#982395">
				<ParOuImpar numero={25}></ParOuImpar>

				<UsuarioInfo usuario={{ nome: 'Fernando' }}></UsuarioInfo>
				<UsuarioInfo usuario={{ email: 'fer@nando.com' }}></UsuarioInfo>
			</Card>

			<Card titulo="#07 - Repeticao2" color="#000">
				<ListaProdutos></ListaProdutos>
			</Card>

			<Card titulo="#06 - Repeticao" color="#FF4C65">
				<ListaAlunos></ListaAlunos>
			</Card>

			<Card titulo="#05 - Componente com Filhos" color="#00C8F8">
				<Familia sobrenome="Josiel">
					<FamiliaMembro nome="Igor" />
					<FamiliaMembro nome="Ana" />
					<FamiliaMembro nome="Mirela" />
				</Familia>
			</Card>

			<Card titulo="#04 - Desafio Aleatório" color="#FA6900">
				<Aleatorio min={1} max={60}></Aleatorio>
			</Card>

			<Card titulo="#03 - Fragmento" color="#E94C6F">
				<Fragmento></Fragmento>
			</Card>

			<Card titulo="#02 - Com Parâmetro" color="#E8B71A">>
				<ComParametro
					titulo="Situacao do aluno"
					aluno="Maria"
					nota={9.9} />
			</Card>

			<Card titulo="#01 - Primeiro Componente" color="#588C73">>
				<Primeiro></Primeiro>
			</Card>
		</div>
	</div>