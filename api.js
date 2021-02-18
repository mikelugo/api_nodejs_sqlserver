const dbcategoria = require("./dbcategoria");

var express = require('express');
var bodyparser = require('body-parser');
var cors = require('cors');
const { request, response } = require("express");

var app = express();
var router= express.Router();

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(cors());
app.use('./api', router);

router.route('/categoria').get((request,response)=>{
    dbcategoria.getCategoria().then(result=>{
        response.json(result[0]);
    })
})

var port = process.env.port || 8090;
app.listen(port);
console.log('categoria API iniciando en el puerto'+port)