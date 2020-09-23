const sequence = {
    _id: 1,
    get id() { return this._id++ }
}

const products = {

}

function salvarProduct(product) {
    if(!product.id) product.id = sequence.id;
    products[product.id] = product;
    return product;
}

function getProduct(id) {
    return products[id] || {};
}

function getProducts() {
    return Object.values(products);
}

module.exports = { salvarProduct, getProduct, getProducts}