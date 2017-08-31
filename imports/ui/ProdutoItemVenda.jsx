import React, { Component, PropTypes } from 'react';
//Theme Material UI
//import RFBG from 'react-flexbox-grid/lib/index';
import TextField from 'material-ui/TextField';
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
	
	handleSlider = (event, value) => { 
		this.setState({slider: value}); 
		console.log(this.props.produto);
	};

	render(){
		return (
			<div>
				<TextField floatingLabelText="Nome do produto" value={this.props.produto.produto} disabled={true}/>
				<TextField floatingLabelText="Valor do Produto" value={this.props.produto.valor} disabled={true} style={style}/>
				<Slider min={1} max={10} step={1} value={this.state.slider} onChange={this.handleSlider} style={{width: 200}}/>
				<span>{'Quantidade selecionada: ' + this.state.slider}</span>
				<TextField floatingLabelText="Valor Total" value={this.props.produto.total} disabled={true} style={style}/>
			</div>
		)
		
	};
	
	
}