const express = require("express")
const routes = require("./routes/routes")

const app = express()

app.use(routes)

const port = 8000

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})