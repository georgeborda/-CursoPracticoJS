//Función que calcula la altura de cualquier triángulo

function altTriangulo (l1, l2, l3){
    var altura, semiperimetro;

    semiperimetro = (l1 + l2 + l3) / 2;

    altura = 2 / l3 * Math.sqrt(semiperimetro*(semiperimetro-l1)*(semiperimetro-l2)*(semiperimetro-l3));

    return altura;
}


//Código del cuadrado

console.group("Cuadrados");

const ladoCuadrado = 5; 

console.log("Los lados del cuadrado miden "+ ladoCuadrado + " cm");

const perimetroCuadrado = ladoCuadrado * 4;

console.log("El perímetro del cuadrado es "+ perimetroCuadrado + " cm");

const areaCuadrado = ladoCuadrado**2;

console.log("El área del cuadrado es "+ areaCuadrado + " cm²");

console.groupEnd();



//Código del triángulo

console.group("Triángulos");

const ladoTriangulo1 = 4;
const ladoTriangulo2 = 5;
const ladoTriangulo3 = 3; 
const alturaTriangulo = altTriangulo(ladoTriangulo1, ladoTriangulo2, ladoTriangulo3);

console.log("Los lados del triángulo miden "+ ladoTriangulo1 + " cm, "+ ladoTriangulo2 + " cm y "+ ladoTriangulo3 + " cm");

console.log("La altura del triángulo es "+ alturaTriangulo + " cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTriangulo3;

console.log("El perímetro del triángulo es "+ perimetroTriangulo + " cm");

const areaTriangulo = (ladoTriangulo3 * alturaTriangulo)/2;

console.log("El área del triángulo es "+ areaTriangulo + " cm²");

console.groupEnd(); 



//Código del círculo

console.group("Círculos");

const radioCirculo = 4;
const diametroCirculo = radioCirculo * 2;
const pi = Math.PI; 

console.log("El radio del círculo es "+ radioCirculo + " cm");

console.log("El diámetro del círculo es "+ diametroCirculo + " cm");

const perimetroCirculo = diametroCirculo * pi;

console.log("El perímetro del círculo es "+ perimetroCirculo + " cm");

const areaCírculo = pi * radioCirculo**2;

console.log("El área del círculo es "+ areaCírculo + " cm²");

console.groupEnd(); 