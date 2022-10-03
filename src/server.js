const express = require("express");

const db = require("./database/db");
const routes = require("./routes/routes");

const app = express();

// conexão com o banco de dados
db.connect();

// habilita server para receber dados json
app.use(express.json());

// definindo rotas
app.use("/api", routes);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server is listening on port ${port}`));
