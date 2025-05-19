/*
	Función que se invoca al presionar el botón "Configuration" desde la
	pantalla principal.
*/
function configurationHTML(){
	/*window.location.href = "Configuration.html"*/
	window.location.href = "index.html"
	window.location.href = "index2.html"
};

/*
	Función que muestra el texto "title" dentro del textbox.
	Recibe el id del textbox a validar si está vacío o no.
*/
function defaultText(id){
	var element = "#" + id
	$(element).each(function(){

		this.value = $(this).attr('title');
		$(this).addClass('text-label');

		$(this).focus(function(){
		if(this.value == $(this).attr('title')) {
				this.value = '';
				$(this).removeClass('text-label');
			}
		});

		$(this).blur(function(){
				if(this.value == '') {
					this.value = $(this).attr('title');
					$(this).addClass('text-label');
				}
			});
	});
};

/*
	Función que es invocada al presionar el botón "Aceptar", el cual
	tiene la función de guardar en el "localStorage" los valores
	seteados por el usuario.
*/

function saveConfiguration(){
	/* Se asignan los valores seteados por el usuario en los diferentes textbox
		para almacenarlos en el "localStorage".
	*/ 
	var iphostname = document.getElementById("iphostname").value;
	var port = document.getElementById("port").value;
	var language = document.getElementById("language").value;
	
	/*
		Se valida si la variable que los campos no se encuentren vacíos.  Estar
		vacíos significa que se encuentren con el texto "title" de cada campo.
	*/
	if(iphostname != $('#iphostname').attr("title")){
		localStorage.iphostname = iphostname;
	}
	
	if(port != $('#port').attr("title")){
		localStorage.port = port;
	}
	
	localStorage.language = language;
	
	// Redireccionar a la portada
	window.location.href = "index.html"
};

function deseaConfirmar(){
	if (confirm("Do you want to save the settings?") == true) {
        saveConfiguration();
    } 	
};

function returnIndex(){
	window.location.href = "index.html";
};
	
	/*
		Se valida que cada campo no se encuentre "undefined" o en blanco ""
		dentro del "localStorage".
	*/
	if((localStorage.iphostname == undefined) || (localStorage.iphostname == "")){
		defaultText("iphostname");
	} else {
		document.getElementById("iphostname").value = localStorage.iphostname;
	}
	
	if((localStorage.port == undefined) || (localStorage.port == "")){
		defaultText("port");
	} else {		
		document.getElementById("port").value = localStorage.port;
	}

	/*
		Como el combobox "language" siempre va a tener un valor default "English (2)"
		entonces se guarda en el "localStorage" sin necesidad de validar si el campo
		se encuentra vacío o no.
	*/
	document.getElementById("language").value = localStorage.language;
	
	/*
	// Las siguientes líneas se utilizan para eliminar un campo del "localStorage".
	localStorage.removeItem("iphostname");
	localStorage.removeItem("port");
	localStorage.removeItem("language");
	*/
