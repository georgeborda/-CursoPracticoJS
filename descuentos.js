const precioOriginal = 100;

const descuento = 0.15;

const porcentajePrecioConDescuento = 1 - descuento;
const precioConDescuento = precioOriginal * porcentajePrecioConDescuento;

console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento
});
