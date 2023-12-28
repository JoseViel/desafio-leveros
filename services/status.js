const fs = require("fs")

function getTodosStatus() {
   const pedidos =  JSON.parse(fs.readFileSync("./base/base.json"))

   const status = {
    qtdStatusProcessando: 0,
    qtdStatusPendente: 0,
    qtdStatusAprovado: 0,
    qtdStatusCancelado: 0,
    qtdTotalPedidos: pedidos.length,
   };

   pedidos.forEach((pedido) => {
    switch (pedido.status) {
        case 'PROCESSANDO':
            status.qtdStatusProcessando++;
            break;
        case 'PENDENTE':
            status.qtdStatusPendente++;
            break;
        case 'APROVADO':
            status.qtdStatusAprovado++;
            break;
        case 'CANCELADO':
            status.qtdStatusCancelado++;
            break;
    }
   })

   return status
}

module.exports = {
    getTodosStatus
}