const port = 3003;

const express = require('express');
const app = express();


app.get('/products', (req, res, next) => {
    res.send({ nome: 'Notebook', preco: 1000 });
})

app.listen(port, () => {
    console.log(`Server in port ${port}.`)
})