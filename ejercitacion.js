//Realizar un programa que genere un numero aletorio del 1 al 1000 y que la maquina lo adivine
let min = parseFloat(prompt("Ingrese el numero minimo: "));
let max = parseFloat(prompt("Ingrese el numero maximo: "));
let counter = 0;
//funcion que devuelve un numero aletorio
function randomNumFunction(min,max){
    return Math.floor(Math.random() * (max * min) + min);
}
let randomNum = randomNumFunction(min,max); //almacenamos el numero aletorio
console.log(randomNum)
//funcion para buscar el numero aletorio
function binarySearch(min,max){
    let left = min;
    let rigth = max;
    while(left<=rigth){
        counter++
        let prediction = Math.floor((left + rigth)/2);
        if(prediction == randomNum){
            return prediction;
        }
        else if(prediction < randomNum){
            left = prediction + 1;
        }
        else{
            rigth = prediction - 1;
        }
    }
    return -1
}
let prediction = binarySearch(min,max);
//mostramos por pantalla el acierto de la maquina
if(prediction != -1){
    console.log("La maquina acerto el numero y este es: "+prediction+" .Tardo un total de: "+counter+" intentos")
}
else{
    console.log("La maquina no aceerto el numero, el numero era: "+randomNum)
}