const fs = require("fs")

function getTotalVendas() {
   
    const pedidos = JSON.parse(fs.readFileSync("./base/base.json"))
    
    const pedidosFiltrados = pedidos.filter((pedido) => pedido.status !== 'CANCELADO')
    
    const totalVendas = pedidosFiltrados.reduce((total, pedido) => total + (parseFloat(pedido.valor)), 0)

    return totalVendas
}

const resultado = getTotalVendas()
console.log(resultado)

module.exports = {
    getTotalVendas
}