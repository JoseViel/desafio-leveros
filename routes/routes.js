const { Router } = require("express")
const { getPedidos } = require("../controllers/pedidoController")
const { getStatus } = require("../controllers/statusController")
const { getVendas } = require("../controllers/vendasController")

const router = Router()

router.get("/", (req, res) => res.status(200).send("teste!"));

router.get("/pedidos", getPedidos);

router.get("/pedidos/resumoStatus", getStatus);

router.get("/pedidos/totalVendas", getVendas);

module.exports = router