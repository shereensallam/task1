const mongoose = require('mongoose');

var bookSchema = mongoose.Schema ({
    bookName:{
        type:String,
        required: true
    },

    ISBN:{
        type:String,
        required: true
    },

    Description:{
        type: String,
    },
    
    available:{
        type: Boolean
    } 
});

const book = mongoose.model('book', bookSchema);

var result = [];

function checkBookName(name){
    result = book.find({
        bookName: name
    });

    if (result.length > 0){
        return true;
    };
    return false;
}

module.exports.checkBook = checkBookName;
module.exports.books = result;

