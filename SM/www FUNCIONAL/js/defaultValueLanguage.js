//Validar si no existe un lenguaje default, seleccionar el Idioma Inglés
if (localStorage.getItem("language") === null){
	localStorage.language = 2;
}
