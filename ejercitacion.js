/* //Realizar un programa que genere un numero aletorio del 1 al 1000 y que la maquina lo adivine
let randomNum = 0;
let min = 0;
let max = 0;
let counter = 0; //contador par almacenar la cantidad de intentos que hace la maquina
let prediction = 0;
min = parseFloat(prompt("Ingrese el numero minimo: "));
max = parseFloat(prompt("Ingrese el numero maximo: "));
counter = 0;
//funcion que devuelve un numero aletorio
function randomNumFunction(min,max){
    return Math.floor(Math.random() * (max * min) + min);
}
randomNum = randomNumFunction(min,max); //almacenamos el numero aletorio
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
prediction = binarySearch(min,max);
//mostramos por pantalla el acierto de la maquina
if(prediction != -1){
    console.log("La maquina acerto el numero y este es: "+prediction+" .Tardo un total de: "+counter+" intentos")
}
else{
    console.log("La maquina no aceerto el numero, el numero era: "+randomNum)
} */
/* Ejemplo en ingles 
//Ahora al programa para calcular las notas lo vamos a refactorizar utilizando Objetos.
//creo un objeto llamado machine que va a ser la maquina que adivine el numero
let machine = {
    randomNum: 0,
    max: 0,
    min: 0,
    counter: 0,
    //inicio dando valores que voy a ocupar para poder adivinar el numero
    init: function() {
        this.min = 1;
        this.max = 1000;
        this.counter = 0;
        this.randomNum = this.randomNumFunction(this.min, this.max);
        console.log(this.randomNum);
    },
    //genero un método para generar un numero random
    randomNumFunction: function (){
        return Math.floor(Math.random() * (this.max*this.min)) - this.min
    },
    //genero un método para poder buscar el numero random generado
    binarySearch: function() {
        let left = this.min;
        let right = this.max;
        while (left <= right) {
            this.counter++;
            let prediction = Math.floor((left + right) / 2);
            if (prediction === this.randomNum) {
                this.prediction = prediction;
                return;
            } else if (prediction < this.randomNum) {
                left = prediction + 1;
            } else {
                right = prediction - 1;
            }
        }
        this.prediction = -1;
    },
    //metodo para imprimir si la prediccion fue acertada o no
    result: function(){
        if (prediction !== -1) {
            console.log("La máquina acertó el número: " + this.prediction + ". Se tardó un total de: " + this.counter + " intentos");
        } else {
            console.log("La máquina no acertó el número. El número era: " + this.randomNum);
        }
    }
}
//llamo a machine y sus metodos para iniciar
machine.init();
let prediction = machine.binarySearch();
let result = machine.result(prediction);
*/
/* //Ejemplo en español
//Ahora al programa para calcular las notas lo vamos a refactorizar utilizando Objetos.
//creo un objeto llamado maquina que va a ser la maquina que adivine el numero
let maquina = {
    numeroAleatorio: 0,
    maximo: 0,
    minimo: 0,
    contador: 0,

    // Inicializa los valores necesarios para el juego
    iniciar: function() {
        this.minimo = 1;
        this.maximo = 1000;
        this.contador = 0;
        this.numeroAleatorio = this.generarNumeroAleatorio();
        console.log(this.numeroAleatorio);
    },

    // Genera un número aleatorio
    generarNumeroAleatorio: function() {
        return Math.floor(Math.random() * (this.maximo * this.minimo)) - this.minimo;
    },

    // Realiza la búsqueda binaria para adivinar el número aleatorio
    busquedaBinaria: function() {
        let izquierda = this.minimo;
        let derecha = this.maximo;
        while (izquierda <= derecha) {
            this.contador++;
            let prediccion = Math.floor((izquierda + derecha) / 2);
            if (prediccion === this.numeroAleatorio) {
                this.prediccion = prediccion;
                return;
            } else if (prediccion < this.numeroAleatorio) {
                izquierda = prediccion + 1;
            } else {
                derecha = prediccion - 1;
            }
        }
        this.prediccion = -1;
    },

    // Imprime el resultado del juego
    resultado: function() {
        if (this.prediccion !== -1) {
            console.log("La máquina adivinó el número: " + this.prediccion + ". Se tardó un total de: " + this.contador + " intentos");
        } else {
            console.log("La máquina no adivinó el número. El número era: " + this.numeroAleatorio);
        }
    }
}

// Inicia el juego
maquina.iniciar();
let prediccion = maquina.busquedaBinaria();
let resultado = maquina.resultado(prediccion); */
