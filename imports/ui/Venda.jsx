import React, { Component, PropTypes } from 'react';
import ProdutoItemVenda from './ProdutoItemVenda.jsx';
import {createContainer} from 'meteor/react-meteor-data';
import { Produtos } from '../api/produtos.js'
//Theme Material UI
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
//import RFBG from 'meteor/jimmiebtlr:react-flexbox-grid'
import {Grid, Row, Col} from 'meteor/jimmiebtlr:react-flexbox-grid'

const style = {
	margin: 12,
};

class Venda extends Component{
	constructor(props) {
		super(props);
		this.state = {
			value: 1,
			produtosVendidos: [{
				produto: "Teste",
				valor: 10,
				total:10,	
			}],			
		};	
					
	};

	handleProdutosVendidos(){
		this.setState({
			produtosVendidos: [...this.state.produtosVendidos, {
				_idProduto: '324121',
				produto: "",
				valor: 100,
				total:100,			
			}]
		});
		// produtosVendidos.push({
		// 	produto: "",
		// 	valor: 100,
		// 	total:100,			
		// });		
	};

	renderProdutosVendidos(){
		return this.state.produtosVendidos.map((item)=>(
			<ProdutoItemVenda key={this.state.produtosVendidos._idProduto} produto={this.state.produtosVendidos} />
		));
	};

	handleChange = (event, _id, value) => {
		this.setState({value: value});
		console.log(event.target.parentElement.parentElement.parentElement.id);
		// console.log(event);
		this.handleProdutosVendidos();
	};
	
	handleSubmitVenda(event){		
		event.preventDefault();
	};	
	
	render(){		
		return (
			<div>
				<h1>Vendas</h1>
					<form className="new-venda" onSubmit={this.handleSubmitVenda.bind(this)}>										
						<Row >
							<Col xs={4}>
								<TextField ref="cliInput" floatingLabelText="Nome do cliente" required={true} errorText="Campo requerido." className="estilo"/>														
							</Col>	
							<Col xs={4}>
								<DatePicker floatingLabelText="Data da venda" className="estilo"/>	
							</Col>
							<Col xs={4}>
								<SelectField value={this.state.value} onChange={this.handleChange} floatingLabelText="Selecione um produto" autoWidth={true} className="estilo">
										{this.renderProdutosSelect()}
								</SelectField>						
							</Col>
						</Row>
						{ this.renderProdutosVendidos() }
						<Row>														
							{/* <FloatingActionButton mini={true} className="estilo"> <ContentAdd /> </FloatingActionButton> Novo item da venda */}							
							{/* <ProdutoItemVenda /> */}
							<Col xs={4}>
								<RaisedButton label="Salvar" primary={true} type="submit" className="estilo"/>
							</Col>
						</Row>						
					</form>
			</div>
		)		
	};	
	
	//Prepara os produtos para serem exibidos no SelectField
	renderProdutosSelect(){
		console.log(this.state.produtosVendidos);
		return this.props.produtos.map( (produto, index) => (
			<MenuItem key={produto._id} value={index+1} id={produto._id} produto={produto} primaryText={produto.produto}/>
		));
	};
}

export default createContainer(() => {
  return {
    produtos: Produtos.find({}).fetch(),
  };
}, Venda);