/* COMENTARIO

let nombreProductoA = 'Mesa'
let precioProductoA = 100
let stockProductoA = 10

let nombreProductoB = 'Verde'
let precioProductoB = 10
let stockProductoB = 20

let nombreProductoC = 'Azul'
let precioProductoC = 20
let stockProductoC = 50

//let compra = prompt("Ingrese SI si quiere comprar: " + nombreProductoA + " y " + nombreProductoB)

let productoCompra = prompt("Ingrese que producto quiere comprar: \n - Mesa\n - Verde\n - Azul")
let precioTotal = 0

if(productoCompra.toUpperCase() == 'MESA'){
    let cantidadProductoMesa = prompt("ingrese que cantidad de " + nombreProductoA + " desea comprar:")
    if(cantidadProductoMesa <= stockProductoA){
        precioTotal = cantidadProductoMesa * precioProductoA
    }
    else{
        alert("Actualmente tenemos " + stockProductoA + " unidades de este producto")
    }
}
else if(productoCompra == 'Verde'){
    let cantidadProductoVerde = prompt("ingrese que cantidad de " + nombreProductoB + " desea comprar:")
    precioTotal = cantidadProductoVerde * precioProductoB
}
else if(productoCompra == 'Azul'){
    let cantidadProductoAzul = prompt("ingrese que cantidad de " + nombreProductoC + " desea comprar:")
    precioTotal = cantidadProductoAzul * precioProductoC
}
else{
    alert("No tenemos ese producto a la venta")
}

if(precioTotal != 0){
    alert("El precio total es: " + precioTotal)
}

else{
    alert("Gracias por su visita")
}
*/

let nombreProductoA = 'Rojo'
let precioProductoA = 100
let stockProductoA = 10

let nombreProductoB = 'Verde'
let precioProductoB = 10
let stockProductoB = 20

let nombreProductoC = 'Azul'
let precioProductoC = 20
let stockProductoC = 50

//let compra = prompt("Ingrese SI si quiere comprar: " + nombreProductoA + " y " + nombreProductoB)

let productoCompra = prompt("Ingrese que producto quiere comprar: \n - Rojo\n - Verde\n - Azul")
let precioTotal = 0

if(productoCompra.toUpperCase() == 'Rojo'){
    let cantidadProductoRojo = prompt("ingrese que cantidad de " + nombreProductoA + " desea comprar:")
    if(cantidadProductoRojo <= stockProductoA){
        precioTotal = cantidadProductoRojo * precioProductoA
    }
    else{
        alert("Actualmente tenemos " + stockProductoA + " unidades de este producto")
    }
}
else if(productoCompra == 'Verde'){
    let cantidadProductoVerde = prompt("ingrese que cantidad de " + nombreProductoB + " desea comprar:")
    precioTotal = cantidadProductoVerde * precioProductoB
}
else if(productoCompra == 'Azul'){
    let cantidadProductoAzul = prompt("ingrese que cantidad de " + nombreProductoC + " desea comprar:")
    precioTotal = cantidadProductoAzul * precioProductoC
}
else{
    alert("No tenemos ese producto a la venta")
}

if(precioTotal != 0){
    alert("El precio total es: " + precioTotal)
}