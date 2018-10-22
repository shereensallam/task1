const mongoose = require('mongoose');

var usrSchema = mongoose.Schema({
    name:{
        type:String,
        required: true
    },

    email:{
        type: String,
        required: true
    },
    password:{
        type:String, 
        required: true
    } 
});

const user = mongoose.model('user', usrSchema);

var passChk= [];

function adduser (name, email, password){
    var user = new User({
        name: name,
        email: email,
        password: password
    });
    user.save();
}

function checkuser(email, name, password){
    var result = user.find({
        email: email
    }).count();

    if (result.length == 0){
        Usermodule.adduser(email, name, password);
        return true;
    }
    return false;
}
function checkAcc(email, password){
    passChk = user.find({
        email: email
    }).populate(password);
    if(passChk.length > 0){
        return true;
    }
    else false;
}
module.exports.checkuser = checkuser;
module.exports.checkAcc = checkAcc;
module.exports.userInfo = passChk;
