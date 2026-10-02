//las dos variables son diferentes
let nom = "Ana";
//Las constantes son variables que no cambian
// su valor
const G = 9.8;
const PI = 3.14;

nom = "Pepe"

function saluda(){
    let valor = document.getElementById("camponombre").value;
    document.getElementById("resultado").innerHTML = "Hola, " + valor;
}

function comprovaLogin(){
    let usuario = document.getElementById("usuari").value;
    let password = document.getElementById("password").value;
    if (usuario === "admin" && password ==="1234") {
        alert("Sesion iniciada")
    }
    else if (usuario !== "admin" && password !== "1234")  {
        alert("Contraseña o usuario incorrectos")
    }
    else {
        alert("Tienes que poner el usuario y contraseña")
    }
}

function calcularPrecio(){
    const precio = document.getElementById("precio").value;
    const radioSi = document.getElementById("residenteSi").checked;
    const radioNo = document.getElementById("residenteNo").checked;
    const radioEspecial = document.getElementById("familiaEspecial").checked;
    const radioGeneral = document.getElementById("familiaGeneral").checked;
    const radioNoNumerosa = document.getElementById("noFamiliaNumerosa").checked;

    if (radioSi == true && radioEspecial == true) {
    let precioFinal=  precio * 0.15;
    alert(precioFinal);
    }
    else if (radioSi == true && radioGeneral == true) {
    let precioFinal = precio * 0.20;
    alert(precioFinal);
    }
    else if (radioSi == true && radioNoNumerosa == true) {
    let precioFinal = precio * 0.25;
    alert(precioFinal);
    }
    else if (radioNo == true && radioEspecial == true) {
    let precioFinal = precio * 0.90;
    alert(precioFinal);
    }
    else if (radioNo == true && radioGeneral == true) {
    let precioFinal = precio * 0.95;
    alert(precioFinal);
    }
    else if (radioNo == true && radioNoNumerosa == true) {
    let precioFinal = precio;
    alert(precioFinal);
    }
    else {
        alert("Tienes que marcar una casilla");
    }
}

