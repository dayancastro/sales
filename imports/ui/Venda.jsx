import React, { Component, PropTypes } from 'react';
import ProdutoItemVenda from './ProdutoItemVenda.jsx';
import {createContainer} from 'meteor/react-meteor-data';
import { Produtos } from '../api/produtos.js'
import MenuItem from 'material-ui/MenuItem';
//Theme Material UI
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const style = {
	margin: 12,
};

class Venda extends Component{
	constructor(props) {
		super(props);
		this.state = {
			value: 1,
		};		
	};

	handleSubmitVenda(event){
		event.preventDefault();
	};	
	
	//Prepara os produtos para serem exibidos no SelectField
	renderProdutosSelect(){
		return this.props.produtos.map( (produto, index) => (
			<MenuItem value={index+1} id={produto._id} produto={produto} primaryText={produto.produto}/>
		));
	}
	
	render(){
		return (
			<div>
				<h1>Vendas</h1>
					<form className="new-venda" onSubmit={this.handleSubmitVenda.bind(this)}>					
						<TextField ref="cliInput" floatingLabelText="Nome do cliente" required={true} errorText="Campo requerido." style={style}/>
						<DatePicker floatingLabelText="Data da venda" style={style} />	
						
						<FloatingActionButton mini={true} style={style}> <ContentAdd /> </FloatingActionButton> Novo item da venda
						
						<ProdutoItemVenda renderProdutosSelect={this.renderProdutosSelect()}/>
						<RaisedButton label="Salvar" primary={true} type="submit" style={style}/>					
					</form>
			</div>
		)		
	};		
}

// <SelectField value={this.state.value} onChange={this.handleChange} floatingLabelText="Selecione um produto" autoWidth={true} style={style}>
							// {this.props.renderProdutosSelect}
						// </SelectField>

Venda.propTypes = {  
  renderProdutosSelect: PropTypes.function,
};

export default createContainer(() => {
  return {
    produtos: Produtos.find({}).fetch(),
  };
}, Venda);