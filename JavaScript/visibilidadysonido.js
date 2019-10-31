/*Funciones para mostrar/ocultar y sonar/parar*/
function show(element){
    document.getElementById(element).style.visibility="visible";    
}     
function hide(element){
    document.getElementById(element).style.visibility="hidden";
}
function parar(element){
    document.getElementById(element).pause();
}    
function cortar (element) {
    document.getElementById(element).style.visibility = "visible";
    setInterval(function(){
        document.getElementById("zombies").style.visibility= "hidden";      
    },10000);
}      
function sonar(element){
    document.getElementById(element).play();
}     
function parar(element){
    document.getElementById(element).pause();
}