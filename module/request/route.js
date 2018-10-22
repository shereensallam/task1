const express = require ('express');
const ctrl = require ('./controller');

const reqRouter = express.Router();

var name="";
reqRouter.post('./request', (req, res) => {
    name = req.body.bookName;
});

var flag = ctrl.checkBook(name);

reqRouter.get(`./request/${flag}`, (req, res) => {
    if (flag)
        res.send(name + 'Welcome, now you logged in' + '\n' + `${ctrl.results}`);
    else 
        res.send(name + 'Sorry, book name does not exist');
});

module.exports.reqRouter = reqRouter;