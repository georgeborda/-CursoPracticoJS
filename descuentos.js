function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 1 - descuento;
    const precioConDescuento = precio * porcentajePrecioConDescuento;
    
    return precioConDescuento;
}

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    const inputCupon = document.getElementById("InputCupon");
    const cuponValue = inputCupon.value;
    var descuento;

    switch(cuponValue){
        case cupon[0]:
            descuento = 0.1;
        break;
        case cupon[1]:
            descuento = 0.2;
        break;
        case cupon[2]:
            descuento = 0.1;
        break;
        case cupon[3]:
            descuento = 0.1;
        break;
        default:
            descuento = 0;
        break;
    }

    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento es $" + precioConDescuento;
    }

var cupon = [
    "Batman",
    "Superman",
    "Aquaman",
    "Flash"
]

    //const precioOriginal = 100;

//const descuento = 0.15;


/*console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento
});*/
