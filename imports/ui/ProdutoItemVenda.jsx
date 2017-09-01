import React, { Component, PropTypes } from 'react';
//Theme Material UI
//import RFBG from 'react-flexbox-grid/lib/index';
import TextField from 'material-ui/TextField';
import Slider from 'material-ui/Slider';
import {Grid, Row, Col} from 'meteor/jimmiebtlr:react-flexbox-grid';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentRemove from 'material-ui/svg-icons/content/remove';

export default class ProdutoItemVenda extends Component{
	constructor(props) {
		super(props);		
		this.state = {
			value: "",
			prod: "teste",
			var: "ahah",
			tot: 55550,
			slider: 1,			
		};		
		this.handleSlider = this.handleSlider.bind(this);
	};			
	
	handleSlider = (event, value) => { 
		this.setState({slider: value}); 
		console.log(this.props.produto);
	};

	handleButtonDel = (event, id) => {
		console.log(id);
		console.log(this.props.produto._id);
		console.log(event);
	};	

	componentDidUpdate(){
		var {produto, valor, total} = this.props.produto;
		this.setState({
			prod: produto,
			var: valor,
			tot: total
		});
	};

	render(){
		return (
			<Row>
				<Col lg={3}>
					<TextField floatingLabelText="Nome do Produto" defaultValue={this.state.prod} disabled={true} className="estilo"/>
					{/* <label hintText="Nome do produto" value={this.props.produto.produto} disabled={true}>{this.props.produto.produto}</label> */}
				</Col>
				<Col lg={2}>
					<TextField floatingLabelText="Valor do Produto" defaultValue={this.state.var} disabled={true} className="estilo"/>
				</Col>
				<Col lg={3}>
					<Slider min={1} max={10} step={1} value={this.state.slider} onChange={this.handleSlider} style={{ margin: '12px', width: 200}}/>
					{/* <span>{'Quantidade selecionada: ' + this.state.slider}</span> */}
				</Col>				
				<Col lg={2}>
					<TextField floatingLabelText="Valor Total" value={this.state.tot} disabled={true}  className="estilo"/>
				</Col>
				<Col lg={1}>
					<FloatingActionButton mini={true} 
						onClick={this.handleButtonDel.bind(this, this.props.produto._id)}
						secondary={true} 
						className="estilo">
						<ContentRemove />
					</FloatingActionButton>
				</Col>
			</Row>
		)		
	};	
}