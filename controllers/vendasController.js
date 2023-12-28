const { getTotalVendas } = require("../services/vendas")

function getVendas(req, res){
    const totalVendas = getTotalVendas()
    res.json({ totalVendas })  
}

module.exports = {
    getVendas
}