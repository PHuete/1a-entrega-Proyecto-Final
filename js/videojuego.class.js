class Videojuego {
    constructor(nombre, precio, categoria) {
        this.id = parseInt(Math.random() * 100000)
        this.nombre = nombre
        this.precio = precio
        this.categoria = categoria
    }
    precioFinal(precio) {
        return '$ ' + parseFloat((this.precio * IVA).toFixed(2))
    }


}

