/*
La función "EnviarIdiomaYCodigo(id)" recibe como parámetro el "id" del botón que fue seleccionado.
Esta función redirecciona a la página ShowItem.html concatenando el valor del Idioma seleccionado
y el CODIGO_SM (id botón seleccionado).
*/
//var Language = document.getElementById("Language").value;
function EnviarIdiomaYCodigo(id){
	// Obtiene el valor del Idioma Seleccionado
	var Language = localStorage.language;
		
	// Se carga la página "ShowItem.html" enviando los parámetros IDIOMA y CODIGO_SM de 
	// forma concatenada en el URL, ejemplo: "file:///C:/Users/E/Desktop/SM/www/ShowItem.html?IDIOMA=2&CODIGO_SM=2"
	//window.location.href = "ShowItem.html" + "?IDIOMA" + "=" + Language + "&CODIGO_SM=" + id;
	window.location.href = "ShowItem.html" + "?IDIOMA" + "=" + Language + "&CODIGO_SM=" + id;
};//Fin de la Función EnviarIdiomaYCodigo(id)
