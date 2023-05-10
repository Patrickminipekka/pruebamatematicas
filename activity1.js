var puntuacion=0;
function updateScore(){
puntuacion = puntuacion +1;
document.getElementById ("score").innerHTML="PUNTUACION: "+puntuacion;
}
function saveScore(){
    localStorage.setItem("puntuacion", puntuacion);
}
function nextPage(){
    window.location = "activity_2.html";
}
