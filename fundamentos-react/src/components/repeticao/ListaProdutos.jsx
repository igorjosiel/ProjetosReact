import '../../data/produtos.css';
import React from 'react';
import produtos from '../../data/produtos';

export default props => {
	const lis = produtos.map((produto, id) => {
		return (
			<tr key={produto.id} className={id % 2 === 0 ? 'par' : ''}>
				<td>{produto.id}</td>
				<td>{produto.nome}</td>
				<td>R$ {produto.preco.toFixed(2).replace('.', ',')}</td>
			</tr>
		);
	});

	return (
		<div>
			<table className="configTable">
				<tr>
					<th>Id</th>
					<th>Produto</th>
					<th>Preco</th>
				</tr>

				{lis}
			</table>
		</div>
	)
}