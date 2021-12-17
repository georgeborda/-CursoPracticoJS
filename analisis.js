// Helpers
function ordenarLista(lista){
    lista.sort(function(a,b){
        return a-b;
    })
}

function esPar (numerito){
    return (numerito % 2 === 0);
}


// Calculadora de mediana
function medianaSalarios(lista){

    let mediana;

    const mitadLista = parseInt(lista.length / 2);

    ordenarLista(lista);

    if (esPar(lista.length)){
        mediana = (lista[mitadLista] + lista[mitadLista - 1]) / 2 ;
    }
    else{
        mediana = lista[mitadLista];
    }

    return mediana;
}



//////////////////////////////////////////////////////////////////////////7


// Mediana general
const salariosCol = colombia.map(
    function(persona){
        return persona.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    function (salaryA, salaryB){
        return salaryA - salaryB;
    }
);

const medianaGeneralCol = medianaSalarios(salariosColSorted);


// Mediana del top 10%

const spliceStart = parseInt(salariosColSorted.length) * 0.9;
const spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(
    spliceStart,
    spliceCount,
);

const medianaTop10Col = medianaSalarios(salariosColTop10);


console.log({
    medianaGeneralCol,
    medianaTop10Col,
});