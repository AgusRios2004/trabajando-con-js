//Realizar un programa que genere un numero aletorio del 1 al 1000 y que la maquina lo adivine
let min = 1;
let max = 1000;
//funcion que devuelve un numero aletorio
function randomNumFunction(min,max){
    return Math.floor(Math.random() * (max * min) + min);
}
let randomNum = randomNumFunction(min,max);
console.log(randomNum)
//funcion para buscar el numero aletorio
function binarySearch(min,max){
    let left = min;
    let rigth = max;
    while(left<=rigth){
        let prediction = Math.floor((left + rigth)/2);
        if(prediction == randomNum){
            console.log("La maquina a adivinado el numero")
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
binarySearch(min,max)