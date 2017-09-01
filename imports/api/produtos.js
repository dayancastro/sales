import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export const Produtos = new Mongo.Collection('produtos');

Meteor.methods({
    'produtos.insert'(produto) {      
      
    //   produtos.insert({
    //     text,
    //     createdAt: new Date(),
    //     owner: Meteor.userId(),
    //     username: Meteor.user().username,
    //   });
    },
    'produtos.remove'(_id) {
      check(_id, String);
    //   const produto = Produtos.findOne(_id);         
    //   Produtos.remove(_id);
        Produtos.remove(id);
    },
});