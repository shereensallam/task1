const express = require ('express');
const Bookmodule = require('./module');

//search by name
var book=[];
var name='';

function checkBook(name ){
    if (Bookmodule.checkBook(name)){
        book = Bookmodule.books;
        return true;
    }
    return false;
}

module.exports.checkBook = checkBook;
module.exports.books = book;