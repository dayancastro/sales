import React, { Component, PropTypes } from 'react';
//Theme Material UI
//import RFBG from 'react-flexbox-grid/lib/index';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Slider from 'material-ui/Slider';

const style = {
	margin: 12,
};


export default class ProdutoItemVenda extends Component{
	constructor(props) {
		super(props);
		this.state = {
			value: "",
			slider: 1,
		};
		
		this.handleSlider = this.handleSlider.bind(this);
	};

	handleSubmitVenda(event){
		event.preventDefault();
	};
	
	handleChange = (event, _id, value) => {
		this.setState({value: value});
		console.log(event.target.parentElement.parentElement.parentElement.id);
		console.log(event);
	};
	
	handleSlider = (event, value) => {
		this.setState({slider: value});
	};
	
	render(){
		return (
			<div>
				<SelectField value={this.state.value} onChange={this.handleChange} floatingLabelText="Selecione um produto" autoWidth={true} style={style}>
					{this.props.renderProdutosSelect}
				</SelectField>						
				<Slider min={1} max={10} step={1} value={this.state.slider} onChange={this.handleSlider} style={{width: 200}}/>
				<span>{'Quantidade selecionada: ' + this.state.slider}</span>						  
				<TextField floatingLabelText="Valor do Produto" disabled={true} style={style}/>
				<TextField floatingLabelText="Valor Total" disabled={true} style={style}/>						
			</div>
		)
		
	};
	
	
}