import React, { Component, PropTypes } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

export default class Produto extends Component{	
	render(){
		return (
			<Table>			 
				<TableHeader>
					<TableRow>
						<TableHeaderColumn>ID</TableHeaderColumn>
						<TableHeaderColumn>Produto</TableHeaderColumn>
						<TableHeaderColumn>Descrição</TableHeaderColumn>
						<TableHeaderColumn>Valor</TableHeaderColumn>
						<TableHeaderColumn>Quantidade Disponível</TableHeaderColumn>
					</TableRow>
				</TableHeader>			 
				<TableBody>
					<TableRow>
						<TableRowColumn>{this.props.produto._id}</TableRowColumn>
						<TableRowColumn>{this.props.produto.produto}</TableRowColumn>
						<TableRowColumn>{this.props.produto.descricao}</TableRowColumn>
						<TableRowColumn>{this.props.produto.valor}</TableRowColumn>
						<TableRowColumn>{this.props.produto.quantidadeDisponivel}</TableRowColumn>
					</TableRow>
				</TableBody>
			</Table>
			//<li>{this.props.produto.produto}</li>
		);
	}
}

Produto.propTypes = {
	produto: PropTypes.object.isRequired,
};