const express = require("express")
const routes = require("./routes/routes")
const cors = require('cors');

const app = express()

app.use(cors());

app.use(routes)

const port = 8000

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})