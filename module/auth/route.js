const express = require ('express');
const ctrl = require('./controller');

const authRouter = express.Router();

var email="";
var name="";
var password="";
var flag = false;

authRouter.post('./register', (req, res) => {
    email = req.body.email;
    name = req.body.name;
    password = req.body.password;
});

flag = ctrl.checkUser(email, password, name);

authRouter.get(`./register/${flag}`, (req, res) => {
    if (flag)
        res.send(name + 'Welcome, now you are a user');
    else 
        res.send(name + 'Sorry, Your email already exist');
});

authRouter.post('./loggin', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
});

flag = ctrl.checkAcc(email, password);

authRouter.get(`./loggin/${flag}`, (req, res) => {
    if (flag)
        res.send(name + 'Welcome, now you logged in');
    else 
        res.send(name + 'Sorry, Wrong email or password');
});

module.exports.authRouter = authRouter;

