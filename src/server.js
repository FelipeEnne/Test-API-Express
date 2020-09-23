const port = 3003;

const express = require('express');
const app = express();
const database = require('./database')


app.get('/products', (req, res) => {
    res.send(database.getProducts());
})

app.get('/products/:id', (req, res) => {
    res.send(database.getProducts(req.params.id));
})

app.post('/products', (req, res) => {
    const produto =  database.salvarProduct({
        nome: req.body.name,
        preco: req.body.preco,
    });
    res.send(produto);
})

app.listen(port, () => {
    console.log(`Server in port ${port}.`)
})