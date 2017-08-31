import React, { Component, PropTypes } from 'react';
//Theme Material UI
//import RFBG from 'react-flexbox-grid/lib/index';
import TextField from 'material-ui/TextField';
import Slider from 'material-ui/Slider';
import {Grid, Row, Col} from 'meteor/jimmiebtlr:react-flexbox-grid'

const style = {
	margin: 12,
};


export default class ProdutoItemVenda extends Component{
	constructor(props) {
		super(props);		
		this.state = {
			value: "",
			prod: "teste",
			var: "",
			tot: 0,
			slider: 1,			
		};		
		this.handleSlider = this.handleSlider.bind(this);
	};			
	
	handleSlider = (event, value) => { 
		this.setState({slider: value}); 
		console.log(this.props.produto);
	};

	render(){
		// var {produto, valor, total} = this.props.produto;
		// console.log(valor);
		// this.setState({ prod: produto, var: valor, tot: total});
		return (
			<Row>
				<Col lg={3}>
					<TextField floatingLabelText="Nome do produto" value={this.state.prod} /*disabled={true}*//>
				</Col>
				<Col lg={3}>
					<TextField floatingLabelText="Valor do Produto" value={this.props.produto.valor} disabled={true} style={style}/>
				</Col>
				<Col lg={3}>
					<Slider min={1} max={10} step={1} value={this.state.slider} onChange={this.handleSlider} style={{width: 200}}/>
					{/* <span>{'Quantidade selecionada: ' + this.state.slider}</span> */}
				</Col>				
				<Col lg={3}>
					<TextField floatingLabelText="Valor Total" value={this.props.produto.total} disabled={true} style={style}/>
				</Col>
			</Row>
		)
		
	};
	
	
}