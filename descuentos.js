function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 1 - descuento;
    const precioConDescuento = precio * porcentajePrecioConDescuento;
    
    return precioConDescuento;
}

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento es $" + precioConDescuento;
    }    
//const precioOriginal = 100;

//const descuento = 0.15;


/*console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento
});*/
