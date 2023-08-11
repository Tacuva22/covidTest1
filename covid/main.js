/* 
    crear un progrma, que determine si tengo covid

    Para saber si tengo covid debo saber lo siguiente

    1.- si mi temperatura mayor a 47 y tengo dolor de cabeza tengo un 60% de robabilidad de teenr covid

    2.- si tengo temperatura mayoy de 37c tengo dolor de cabeza y tengo diarrea tengo un 75% de probabilidad

    3.- si presento todos los sintomas anteriores y me fatigo mucho tengo un 95% probabilidad de tener covid

    datos:
    temperatura
    dolor de cabeza
    probabilidad
    diarrea
    fatiga

    toma la temperatura
    guarda temperatura
    si temperatura > 37 && duele cabeza
            malito un 75%
    si temperatura > 37 && diarrea
            malito un 60 %
    si temperatura < 
            37 tas chido
    si temperatura > 37 && duele cabeza && diarre && fatiga
            chanse tienes un 95% de covid

            
    Deseo validad que el usuario no ingrese una temperatura menor a 30
    y mayor a 55 . 
    no debo aceptar valores nulos , (todos los campos son obligatorios)
    de lo contrario , debo mostrar un error. 
    Al final de mi test, debo reiniciar la pagina. 
*/

function tomarDatos() {
    let temperatura = parseFloat(document.getElementById("temperatura").value);
    let dolorDeCabeza = document.getElementById("dolorDeCabeza").checked;
    let diarrea = document.getElementById("diarrea").checked;
    let fatiga = document.getElementById("fatiga").checked;

   if(isNaN(temperatura) || temperatura < 30 || temperatura > 55){
    alert("temperatura fuera de rango debe estar entre 30 y 55 grados")
   } else(
   tomarTemperatura(temperatura, dolorDeCabeza, diarrea, fatiga))
}

function tomarTemperatura(temperatura, dolorDeCabeza, diarrea, fatiga) {
    if (temperatura >= 37 && dolorDeCabeza && !fatiga) {
        alert("tienes 60% de probabilidades de tener covid.");
    } else if (temperatura >= 37 && diarrea && !fatiga) {
        alert("tienes 75% de probabilidades de tener covid");
    } else if (temperatura >= 37 && diarrea && dolorDeCabeza && fatiga) {
        alert("tienes 95% de probabilidades de tener covid");
    } else {
        alert("Tas sano pa")
    }

    window.location.reload();
}