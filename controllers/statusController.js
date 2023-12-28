const { getTodosStatus } = require("../services/status")

function getStatus(req, res){
    const statusPedidos = getTodosStatus()
    res.json(statusPedidos)
}

module.exports = {
    getStatus
}