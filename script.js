// Index html
const nomJug1 = document.getElementById("jug1")
const nomJug2 = document.getElementById("jug2")
const nomJug3 = document.getElementById("jug3")
const nomJug4 = document.getElementById("jug4")
const btnEnviar = document.getElementById("boton-enviar")


let matriz = [];
let filas = 3;
let col = 3;
let h = 0;

//Generar numeros aleatorios
generarAleatorio=(min, max)=>{
    return Math.floor(Math.random() * (max - min)) + min; 
};

//Relleno de cartones
for (let i = 0; i < filas; i++) {
    matriz[i] = [];
    for (let j = 0; j < col; j++) {
        matriz[i][j] = h++;
    }
}

for (let i = 0; i < 25; i++) {
    matriz.push(generarAleatorio(1,51));
 }

 //Iterar array
for(let i = 0; i < matriz.length; i++){
    console.log(matriz[i])
}









