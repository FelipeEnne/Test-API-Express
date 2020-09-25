const port = 3003;

const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const database = require('./database')

app.use(bodyParser.urlencoded({ extendes: true}))

app.get('/products/:id', (req, res) => {
    res.send(database.getProduct(req.params.id));
})

app.get('/products', (req, res) => {
    res.send(database.getProducts());
})

app.post('/products', (req, res) => {
    const products =  database.saveProduct({
        name: req.body.name,
        preco: req.body.preco,
    });
    res.send(products);
})


app.put('/products/:id', (req, res) => {
    const products =  database.saveProduct({
        id: req.params.id,
        name: req.body.name,
        preco: req.body.preco,
    });
    res.send(products);
})

app.delete('/products/:id', (req, res) => {
    const products =  database.deleteProduct( req.params.id );
    res.send(products);
})

app.listen(port, () => {
    console.log(`Server in port ${port}.`)
})