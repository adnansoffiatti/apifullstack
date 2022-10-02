const express = require("express");

const routes = require('./routes/routes');

const app = express();

// habilita server para receber dados via post (formulário)
app.use(express.urlencoded({ extended: true }));

// definindo rotas
app.use('/api', routes);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server is listening on port ${port}`));
