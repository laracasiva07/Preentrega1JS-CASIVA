
let ancho = Number(prompt("Ingrese metros que tiene de ancho"))
let largo = Number(prompt("Ingrese metros que tiene de largo"))
let totaldemetros = ancho * largo

alert("En total tiene: " + totaldemetros + " metros cuadrados")

let opcion = prompt("¿Desea saber la cantidad de material que necesita para su techo?").toLowerCase()
let cemento = (totaldemetros / 2) + 3
let ladrillos =  (totaldemetros * 8)
do {
    opcion = pedirTextoYconvertirAnumero("Bienvenido/a ¿Que material le interesa saber? \n1 - Cantidad de Ladrillos y precio\n2 - Cantidad de cemento y precio\n0 Salir")
    if (opcion === 1) {
        let total = calcularTotal(ladrillos, 170)
        alert("Cantidad ladrillos: " + ladrillos + " - Precio: $" + total)  
    } else if (opcion === 2) {
        let total = calcularTotal(cemento, 9000)
        alert("Cantidad cemento: " + cemento + " - Precio: $" + total)
    } else if (opcion !== 0) {
        alert("Opción incorrecta")
    } 
} while (opcion !== 0);

function pedirTextoYconvertirAnumero(mensaje) {
    return Number(prompt(mensaje))
}

function calcularTotal(cantidad, precioUnitario) {
    return cantidad * precioUnitario
}
