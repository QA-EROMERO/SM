/*==============================================
reloadItem se utiliza para que al finalizar
la carga de objetos web en el DOM, el sistema
vuelva a recargar solamente la Tabla
==============================================*/
var container = document.getElementById("cuadricula");
var content = container.innerHTML;
container.innerHTML= content; 

//this line is to watch the result in console , you can remove it later	
//console.log("Refreshed"); 
