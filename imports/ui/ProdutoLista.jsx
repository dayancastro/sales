import React, { Component, PropTypes } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import {createContainer} from 'meteor/react-meteor-data';
import { Produtos } from '../api/produtos.js'

class ProdutoLista extends Component{

    renderProdutosRows(){
        return this.props.produtos.map( (produto) => (
            <TableRow key={produto._id}>
                <TableRowColumn key={"ColId-" + produto._id}>{produto._id}</TableRowColumn>
                <TableRowColumn key={"ColProd-" + produto._id}>{produto.produto}</TableRowColumn>
                <TableRowColumn key={"ColDesc-" + produto._id}>{produto.descricao}</TableRowColumn>
                <TableRowColumn key={"ColVar-" + produto._id}>{produto.valor}</TableRowColumn>
                <TableRowColumn key={"ColQtd-" + produto._id}>{produto.quantidadeDisponivel}</TableRowColumn>
            </TableRow>
        ));
    }

    //prepara os produtos para serem exibidos na tabela.
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
                    {this.renderProdutosRows()}
                </TableBody>
            </Table>        
        );
    }
}

export default createContainer(() => {
    return {
      produtos: Produtos.find({}).fetch(),
    };
}, ProdutoLista);