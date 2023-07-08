const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes');
const port = 8081;

app.use(cors());
app.use(bodyParser.json());
app.use(routes);

app.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`);
});