const { getTodosPedidos } = require("../services/pedido")

function getPedidos(req, res) {
    const pedidos = getTodosPedidos()
    res.json(pedidos)
}

module.exports = {
    getPedidos
}