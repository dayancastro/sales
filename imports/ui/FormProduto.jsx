import React, { Component, PropTypes } from 'react';
import SnackTera from './SnackTera.jsx';
import { Produtos } from '../api/produtos.js'
//Theme
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class FormProduto extends Component{
    constructor(props) {
		super(props);
		this.state = {					
            txtProduto: "",
			txtProdDesc: "",
			txtProdValor: "",
			txtProdQtd: "",
			snackOpen: false,
			snackMessage: "",
        };				
        this.handleChangeProduto = this.handleChangeProduto.bind(this);
		this.handleChangeProdDesc = this.handleChangeProdDesc.bind(this);
		this.handleChangeProdValor = this.handleChangeProdValor.bind(this);
        this.handleChangeProdQtd = this.handleChangeProdQtd.bind(this);
        
		this.handleSubmitProduto = this.handleSubmitProduto.bind(this);		
    }

    handleChangeProduto = (event) => {
		this.setState({txtProduto: event.target.value});		
	};
	handleChangeProdDesc = (event) => {this.setState({txtProdDesc: event.target.value});};
	handleChangeProdValor = (event) => {this.setState({txtProdValor: event.target.value});};
	handleChangeProdQtd = (event) => {this.setState({txtProdQtd: event.target.value});};

    handleSubmitProduto(event){
        event.preventDefault();        
        console.log(this.state.txtProduto);
        Produtos.insert({
            produto: this.state.txtProduto,
            descricao: this.state.txtProdDesc,
            valor: this.state.txtProdValor,
            quantidadeDisponivel: this.state.txtProdQtd,
        });
        //clear field after insert.
        this.setState({txtProduto:"", txtProdDesc:"", txtProdValor:"", txtProdQtd:""});
        //send message to user!
        this.setState({snackOpen: true, snackMessage:"Produto salvo com sucesso!"});
    }	    

    render(){
        return (
            <div>
                <form className="new-produto" onSubmit={this.handleSubmitProduto.bind(this)}>						
                    <TextField value={this.state.txtProduto} onChange={this.handleChangeProduto} floatingLabelText="Nome do produto" className="estilo"/>
                    <TextField value={this.state.txtProdDesc} onChange={this.handleChangeProdDesc} floatingLabelText="Descrição do produto" className="estilo"/>
                    <TextField value={this.state.txtProdValor} onChange={this.handleChangeProdValor} floatingLabelText="Valor do produto" className="estilo"/>
                    <TextField value={this.state.txtProdQtd} onChange={this.handleChangeProdQtd} floatingLabelText="Quantidade disponível do produto" className="estilo"/>
                    <RaisedButton label="Salvar" primary={true} type="submit" className="estilo"/>
                </form>
                <SnackTera open={this.state.snackOpen} message={this.state.snackMessage}/>
            </div>
        );
    }
}

export default FormProduto;