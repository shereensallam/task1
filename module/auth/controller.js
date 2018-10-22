const express = require ('express');
const Usermodule = require('./module');

function checkUser(email, name, password){

    if (Usermodule.checkuser(email, name, password)){
        return true;
    }
    return false;
}

var userInfo = [];
function checkAcc(email, password){

    if (Usermodule.checkAcc(email, password)){
        return true;
    };
    return false;
}

module.exports.checkUser = checkUser;
module.exports.checkAcc = checkAcc;



