import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Produto from './Produto.jsx';
import Venda from './Venda.jsx';
import FormProduto from './FormProduto.jsx'
//import TeraAppBar from './TeraAppBar.jsx';
import SnackTera from './SnackTera.jsx';
import {createContainer} from 'meteor/react-meteor-data';
import { Produtos } from '../api/produtos.js'

//Theme
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import {cyan700} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
//import MyAwsomeReactComponent from './MyAwsomeReactComponent';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';
import Slider from 'material-ui/Slider';

//https://stackoverflow.com/questions/40791996/changing-a-component-in-reactjs-upon-clicking-a-button

const muiTheme = getMuiTheme({
  palette: {
    textColor: cyan700,
  },
  appBar: {
    height: 50,
  },
});

const style = {
  margin: 12,
};

class App extends Component{	
	constructor(props) {
		super(props);
		this.state = {
			value: 1,			
		};		
	}
	
	//prepara os produtos para serem exibidos na tabela.
	renderProdutos(){
		//return this.getProdutos().map( (produto) => (
		return this.props.produtos.map( (produto) => (
			<Produto key={produto._id} produto={produto}/>
		));
	}

	//Prepara os produtos para serem exibidos no SelectField
	renderProdutosSelect(){
		return this.props.produtos.map( (produto, index) => (
			<MenuItem value={index+1} primaryText={produto.produto}/>
		));
	}
	
	render(){
		return (
		<MuiThemeProvider muiTheme={muiTheme}> 			
			<div className="container">
				<AppBar title="Title" iconClassNameRight="muidocs-icon-navigation-expand-more">
					<RaisedButton label="Salvar" primary={true} style={style}/>
				</AppBar>
				<header>
					<Venda /*renderProdutosSelect={this.renderProdutosSelect()}*//>
					<h1>Produtos</h1>
					<FormProduto />					
				</header>				
				<ul>{ this.renderProdutos() }</ul>
			</div>
		</MuiThemeProvider>
		);
	}	
}

//<SelectField value={this.state.value} onChange={handleChange}>{this.renderProdutosSelect()}</SelectField>
// value={this.state.value} onChange={this.handleChange}

App.propTypes = {
  produtos: PropTypes.array.isRequired,
  renderProdutosSelect: PropTypes.function,
};

export default createContainer(() => {
  return {
    produtos: Produtos.find({}).fetch(),
  };
}, App);