$(document).ready(function(){
	/*
	El siguiente JQuery se hizo para obtener la altura de forma dinámica
	que toma el video y asignarla a la tabla, de tal forma que siempre
	tengan la misma altura tanto el Video como la Tabla.
	*/
	
	// Se obtiene la altura que tomo el video y se asigna
	// a la variable videoHeight
	var videoHeight = $("video").css("height");
	var videoWidth = $("video").css("width");
	
	// Se asigna la altura a la tabla
	$("table").css("height", videoHeight);
	/*$("table").css("width", videoWidth);*/
	
	/*
	$('back').click(function(e){
		$("video").css("display", "none");
	});
	
	$('next').click(function(e){
		$("video").css("display", "none");
	});
	*/
	  
}); // Fin de $(document).ready(function()
