/* Arrow Functions */

// En JavaScript Vanilla ¿como escribimos una función?
function suma (a,b) {
    return a + b
}

console.log('La Suma es', suma(10,20))

// Funciones Anonimas: A veces las guardamos en una constante para que no sea anónima.
const sumaDos = function (a,b) {
    return a + b
}

console.log('La Suma es', sumaDos(10,20))

/* Ejemplo de Hoisting */
function sumaTres (a,b) {
    return a + b
}

var num1 = 5
var num2 = 3

console.log('La Suma es', sumaTres(num1,num2))

/* Arrow Function */
// Azucar Sintactico (Sugar Syntax)
// No necesito escribir la palabra 'function', en su lugar usamos => despues de los parametros/argumentos
const sumaCuatro = (a,b) => {
    return a + b
}
console.log('La Suma 4 es', sumaCuatro(10,20))

// Se puede simplificar aún más el uso de Arrow Functions si solo tiene o retorna un solo comando. En este caso existe un return implicito (no lo escribimos, pero esta ahí)
const sumaCinco = (a,b) => a + b
console.log('La Suma 5 es', sumaCinco(20,20))

// Uso de Function Anonima que además es Arrow Function

const miArreglo = ["Perros", "Gatos", "Patos", "Ratones"]

miArreglo.forEach((elemento)=>console.log(elemento))