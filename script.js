// Index html
const nomJug1 = document.getElementById("jug1")
const nomJug2 = document.getElementById("jug2")
const nomJug3 = document.getElementById("jug3")
const nomJug4 = document.getElementById("jug4")
const btnEnviar = document.getElementById("boton-enviar")

//Bingo html

//Creación de cartones

let matriz3x3 = [[],[],[]];

let matriz4x4 = [[],[],[],[]];

let matriz5x5 = [[],[],[],[],[]];

//Generar numeros aleatorios para cartones
generarAleatorio=(min, max)=>{
    return Math.floor(Math.random() * (max - min)) + min; 
};

for (let x = 0; x <= 100; x++){
    console.log(generarAleatorio(1, 51))
}

//Generar numero aletorio para sorteo
for (let x = 0; x <= 100; x++){
    console.log(generarAleatorio(1, 51))
}



