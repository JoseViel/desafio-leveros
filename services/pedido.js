const fs = require("fs")

function getTodosPedidos() {
    return JSON.parse(fs.readFileSync("./base/base.json"))
}

module.exports = {
    getTodosPedidos
}