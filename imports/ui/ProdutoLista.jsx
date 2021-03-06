import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import { createContainer } from 'meteor/react-meteor-data';
import { Produtos } from '../api/produtos.js'

class ProdutoLista extends Component{

    handleDelete = (event, id) => {
        console.log(id);
        Meteor.call('produtos.remove',id);
        // let prod = Produtos.findOne({_id:id});
        // Produtos.remove({_id:prod['_id']});
    };

    renderProdutosRows(){
        return this.props.produtos.map( (produto) => (
            <TableRow key={produto._id}>
                <TableRowColumn key={"ColId-" + produto._id}>{produto._id}</TableRowColumn>
                <TableRowColumn key={"ColProd-" + produto._id}>{produto.produto}</TableRowColumn>
                <TableRowColumn key={"ColDesc-" + produto._id}>{produto.descricao}</TableRowColumn>
                <TableRowColumn key={"ColVar-" + produto._id}>{produto.valor}</TableRowColumn>
                <TableRowColumn key={"ColQtd-" + produto._id}>{produto.quantidadeDisponivel}</TableRowColumn>
                <TableRowColumn key={"del-" + produto._id}><button onClick={this.handleDelete.bind(this, produto._id)}>Remover</button></TableRowColumn>
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
                        <TableHeaderColumn>Remover</TableHeaderColumn>
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