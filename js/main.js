
debugger

const CATEGORIAS = ['Shooter', 'RPG', 'Deportes', 'Terror', 'Indie']

const TITULOS = ['Call of Duty: Modern Warfare 2 Remastered', 'Elden Ring', 'NBA2k23', 'Madison', 'Stardew Valley']



const PRECIOS = [59.95, 69.95, 44.99, 50.00, 18.99]

const CODIGOSPROMO = ['ESTIM_WELLCOME', 'ESTIM_10']

const TIPOUSUARIO = ['PREMIUM', 'BASICO'] // Posteriormente incluire que si el usuario es PREMIUM tiene un % de descuento.

const USUARIOS = [new Usuario("Paco", "Sanz", "Calvo33", TIPOUSUARIO[0]), new Usuario("Margarita", "Seisdedos", "Ladrillo89", TIPOUSUARIO[1])]

const IVA = 1.21


function agregarJuegos(titulos, precios, categorias) {
    let juegos = []
    for (let i = 0; i < titulos.length; i++) {
        juegos.push(new Videojuego(titulos[i], precios[i], categorias[i]))
    }
    return juegos
}

// Agrega los juegos por los parametros de las arrays "TITULOS", "PRECIOS"Y "CATEGORIAS" (SEGURAMENTE LO TERMINE HACIENDO COMO USUARIOS)

function login() {
    let usuarioExiste = false

    while (!usuarioExiste) {
        let nombreUsuario = prompt("Bienvenido a ESTIM. Introduce un nombre de usuario ")
        USUARIOS.forEach(usuario => {
            if (usuario.nombreUsuario === nombreUsuario) {
                usuarioExiste = true
            }
        });
        if (!usuarioExiste) {
            let alta = confirm("No existe ningun usuario con el nombre " + nombreUsuario + ". ¿Deseas darlo de alta?")
            if (alta === true) {
                let nuevoUsuario = registroUsuario(nombreUsuario)
                USUARIOS.push(nuevoUsuario)
            }
            else {
                alert("Intenta introducir un usuario registrado")
            }
        }
        else {
            prompt("Introduzca la contraseña:")
            alert("Bienvenido, '" + nombreUsuario + "'")
        }
    }


}
// Funcion para logearte en la pagina. Si el usuario introducido no esta registrado te da la opcion de registrarlo.

function registroUsuario(nombreUsuario) {
    let nombre = prompt("Introduce tu nombre para el usuario '" + nombreUsuario + "':")
    while (nombre === "" || nombre === null) {
        nombre = prompt("Introduce un nombre valido")
    }
    let apellido = prompt("Introduce tu apellido:")
    while (apellido === "" || apellido === null) {
        apellido = prompt("Introduce un apellido valido")
    }
    let contrasenya = prompt("Introduce una contraseña")
    while (contrasenya === "" || contrasenya === null) {
        contrasenya = prompt("Introduce una contraseña valida")
    }
    let tipo = prompt("¿Que tipo de plan deseas adquirir? (BASICO o PREMIUM)")
    while (tipo === "" || tipo === null) {
        tipo = prompt("Introduce un plan valido (BASICO o PREMIUM")
    }
    alert("Usuario '" + nombreUsuario + "' ha sido creado con éxito")
    return new Usuario(nombre, apellido, nombreUsuario, tipo)
}
//Funcion para registrar nuevos usuarios. 

function añadirAlCarrito(juegos) {
    let carrito = []
    let juegoExiste = false
    let repetir = true
    let juegosDisponibles = juegos
    while (repetir) {
        let conCategoria = confirm("¿Deseas filtrar los juegos por categorias?")

        if (conCategoria) {
            let categoria = prompt("Ingresa la categoria a filtrar: " + CATEGORIAS)
            juegosDisponibles = juegos.filter(juego => juego.categoria == categoria)
        }

        let nombreJuego = prompt("Añada nombre + list de juegos (promt.table): ")

        juegosDisponibles.forEach(juego => {
            if (juego.nombre === nombreJuego) {
                carrito.push(juego)
                juegoExiste = true
            }
        });
        if (!juegoExiste) {
            alert("El juego con nombre '" + nombreJuego + "' no existe")
        }
        else {
            alert(nombreJuego + " añadido al carrito")
        }
        juegoExiste = false
        repetir = confirm("¿Deseas añadir otro juego?")

    }

    return carrito

}
//Funcion para añadir los juegos al carrito. El usuario puede elegir si filtrar juegos por categoria o no.

function compra(carrito) {
    debugger
    let nombreCarro = carrito.nombre
    let realizarCompra = confirm("¿Deseas realizar el pago los siguientes articulos?: " + nombreCarro)
    if (realizarCompra = true) {
        //print(descuento()) 
        alert("Has realizado correctamente la compra de " + carrito.nombre + Videojuego.precio)
    }
    else {
        delete [carrito]
        alert("Vuelve cuando quieras")
    }
}
//Funcion para realizar la compra de los articulos del carrito. 

function descuento() {
    let codigoPromo = prompt("¿Tienes un codigo de descuento? Introducelo aqui:")
    if (codigoPromo === "") {
        codigoPromo = prompt("Codigo de descuento invalido. Inteoduce otro codigo valido:")
        if (codigoPromo === CODIGOSPROMO[0]) {
            Videojuego.precio * 0.85

        }
        if (codigoPromo === CODIGOSPROMO[1]) {
            Videojuego.precio * 0.9

        }
    }
}
//Esta funcion descontara el importe del codigo de descuento al carro final. Tambien realizare codigos de 1 solo uso.

login()
let repetir = true
while (repetir) {
    const juegos = agregarJuegos(TITULOS, PRECIOS, CATEGORIAS)
    const carrito = añadirAlCarrito(juegos)
    compra(carrito)
    repetir = confirm("¿Seguir navegando?")
    if (repetir == false) {
        alert("Nos vemos jugon")
    }
}
//console.log(juegos)
//console.log(carrito)


//QUIERO CONTINUAR EL PROYECTO (O AL MENOS LO INTENTARE): DINAMIZAR LA APLICACION CON EVENTOS, AÑADIR BOTONES FUNCIONALES, REALIZAR UNA BIBLIOTECA DE JUEGOS COMPRADOS POR USUARIO, FICHAS Y DESCRIPCIONES JUEGOS...   