function calcularModa (){

    const listaCount = {};

    //Se convierte la matriz en un objeto con los numeros que aoarecen y cuantas veces
    lista.map(
        function(elemento){
            if(listaCount[elemento]){
                listaCount[elemento] += 1;
            }
            else{
                listaCount[elemento] = 1;
            }
            
        }
    );                                                  
    
    
    //Se convierte el objeto en un array nuevamente por las veces que se repite
    const listaArray = Object.entries(listaCount).sort(
        function(elementoA, elementoB){
            return elementoA[1] - elementoB[1];
        }
    );
    
    const moda = listaArray[listaArray.length - 1];

    return moda;

}




