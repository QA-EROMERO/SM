// Orden de las piezas conforme a la portada, no conforme a la Base de Datos.
var itemsList = [
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
    "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
    "21", "22", "23", "24", "25", "26", "27", "28", "29", "30",
    "31", "32", "33", "34", "35", "36", "37", "38", "39", "40",
    "41", "42", "43", "44", "45", "46", "47", "48", "49", "50",
    "51", "52", "53", "54", "55", "56", "57", "58", "59", "60",
    "61", "62", "63", "64", "65", "66", "67", "68", "69", "70",
    "71", "72", "73", "74", "75", "76", "77", "78", "79", "80",
    "81", "82", "83", "84", "85", "86", "87", "88", "89", "90",
    "91", "92", "93", "94", "95", "96", "97", "98", "99", "100"
];

function RegresarALaPortada(){				
	//Retornar a la Portada
	window.location.href = "index.html";	
};//Fin de la Función RegresarALaPortada()

function AvanzarALaPortada2(){				
	//Retornar a la Portada
	window.location.href = "index2.html";
};//Fin de la Función AvanzarALaPortada()

function MostrarSiguiente(Idioma, CODIGO_SM){    
    var parameters = location.search.substring(1).split("&");
    var temp = parameters[0].split("=");
    var Idioma = unescape(temp[1]);
    temp = parameters[1].split("=");
    var CODIGO_SM = unescape(temp[1]);
    
    var nextItem = itemsList.indexOf(CODIGO_SM)+1;

    if(nextItem == 100){
        nextItem = 0;
    }
    
    window.location.href = "ShowItem.html" + "?IDIOMA" + "=" + Idioma + "&CODIGO_SM=" + itemsList[nextItem];
};

function MostrarAnterior(Idioma, CODIGO_SM){
    var parameters = location.search.substring(1).split("&");
    var temp = parameters[0].split("=");
    var Idioma = unescape(temp[1]);
    temp = parameters[1].split("=");
    var CODIGO_SM = unescape(temp[1]);
    
    var previousItem = itemsList.indexOf(CODIGO_SM)-1;
    
    if(previousItem == -1){
        previousItem = 99;
    }

    window.location.href = "ShowItem.html" + "?IDIOMA" + "=" + Idioma + "&CODIGO_SM=" + itemsList[previousItem];

};


