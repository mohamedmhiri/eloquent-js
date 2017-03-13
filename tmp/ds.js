var insat = {}
insat.gl4 = {}

insat.gl4.Product = function (id, name, price ) {
    this.id = id
    this.name = name
    this.price = price
}

insat.gl4.Product.prototype.getName = function () {
    return this.name
}
insat.gl4.Product.prototype.getId = function () {
    return this.id
}
insat.gl4.Product.prototype.getPrice = function () {
    return this.price
}
insat.gl4.Product.prototype.setId = function (_id) {
    this.id = _id
}
insat.gl4.Product.prototype.setName = function (_name) {
    this.name = _name
}
insat.gl4.Product.prototype.setPrice = function (_price) {
    this.price = _price
}
insat.gl4.Product.prototype.toJson = function () {
    var obj = {
        _id : this.id,
        _name : this.name,
        _price : this.price
    }
    return obj
}
insat.gl4.ProductsManager = function () {
    this.products = []
}
insat.gl4.ProductsManager.prototype.addProduct = function (prod) {
    this.products.push(JSON.stringify(prod.toJson()))
}
insat.gl4.ProductsManager.prototype.getById = function (ident) {
    console.log(this.products)
    var res = null
    var i = 0
    while (i < this.products.length ) {
        var tmp = JSON.parse(this.products[i])
        if ((tmp._id) === ident){
            res = tmp
        }
            i ++

    }
    return res
}
insat.gl4.ProductsManager.prototype.updateProduct = function (iden, nom, prix) {
    var res = this.getById(iden)
    if (res != null) {
        if (nom.length > 0) {
            res._name = nom
        }
        if (!isNaN(prix)) {
            res._price = prix
        }


    }
}
insat.gl4.ProductsManager.prototype.deleteProduct = function (iden) {
    var res = this.getById(iden)
    if (res != null) {
        delete res
    }
}
var produit = new insat.gl4.Product(1, 'produit1', 100)
console.log(produit.getName())
var productsManager = new insat.gl4.ProductsManager()
productsManager.addProduct(produit)
var produit1 = productsManager.getById(1)
console.log(JSON.stringify(produit1))
productsManager.updateProduct(1, 'produit2')
// productsManager.deleteProduct(1)
delete productsManager.products[0]
console.log(productsManager.getById(1))