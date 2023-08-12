const Sequelize  = require("sequelize")

const conexao = new Sequelize("resgistroscomnode", "root", "anthony321", {
    host: "localhost",
    dialect: "mysql"
});

conexao.authenticate()
.then(function(){
console.log("Foi mn conectou bem")
}).catch(function(){
    console.log("IIIIH deu merda mn, n deu de conectar com o banco")
})

module.exports = conexao