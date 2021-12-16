
function calcularMediana(){

    let mediana;

    const mitadLista = parseInt(lista.length / 2);

    ordenarLista();

    if (esPar(lista.length)){
        mediana = (lista[mitadLista] + lista[mitadLista - 1]) / 2 ;
    }
    else{
        mediana = lista[mitadLista];
    }

    return mediana;
}



function ordenarLista(){
    lista.sort(function(a,b){
        return a-b;
    })
}



function esPar (numerito){
    if (numerito % 2 === 0){
        return true;
    }
    else {
        return false;
    }
}

