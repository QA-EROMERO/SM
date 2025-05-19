$(document).ready(function(){
	/* ==========================================
		               ICONO MENU
	   ========================================== */
	  
	// Muestra el Menú dentro de unca caja con scrollbar
	$( "div.demo" ).scrollTop( 300 );

	/* Mostrar y Ocultar Menú */
	$('.menu-bar').click(function(e){
		e.preventDefault();

		// Oculta todos los submenus.
		$('.submenu-lv1').children().slideUp("slow");
		$('.submenu-lv3').children().slideUp("slow");

		// Elimina el fondo del último título y subtítulo seleccionado
		$('*').removeClass('activado_1');
		$('*').removeClass('activado_2');

		if($('.contenido').hasClass('abrir')){
			$('.contenido').removeClass('abrir');
		} else {
			$('.contenido').addClass('abrir');			
		}

	});

	/* ==========================================
	          Desplegar y Ocultar Menu
	   ========================================== */

	// Menú Periodo Histórico   
	$('.menu-periodo-historico').click(function(e){
		e.preventDefault();

		$('*').removeClass('activado_1');		
		$(this).addClass('activado_1');

		$('.submenu-lv1').children().hide();
		$('#submenu-lv1-periodo-historico').children().show();
		
	});

	// Menú Material
	$('.menu-material').click(function(e){
		e.preventDefault();
		
		$('*').removeClass('activado_1');		
		$(this).addClass('activado_1');

		$('.submenu-lv1').children().hide();
		$('#submenu-lv1-material').children().show();	
			
		
	});


	// Menú Procedencia
	$('.menu-procedencia').click(function(e){
		e.preventDefault();

		$('*').removeClass('activado_1');		
		$(this).addClass('activado_1');

		$('.submenu-lv1').children().hide();
		$('#submenu-lv1-procedencia').children().show();
	});

	// Menú Uso y Forma
	$('.menu-usoyforma').click(function(e){
		e.preventDefault();

		$('*').removeClass('activado_1');		
		$(this).addClass('activado_1');

		$('.submenu-lv1').children().hide();
		$('#submenu-lv1-usoyforma').children().show();
		
	});

	// Menú Glífico
	$('.menu-glifico').click(function(e){
		e.preventDefault();

		$('*').removeClass('activado_1');		
		$(this).addClass('activado_1');

		$('.submenu-lv1').children().slideUp();
		$('#submenu-lv1-glifico').children().slideDown();
		
	});

	// Biens Culturales en peligro
	$('.menu-bienes-culturales-en-peligro').click(function(e){
		e.preventDefault();

		$('*').removeClass('activado_1');		
		$(this).addClass('activado_1');

		$('.submenu-lv1').children().slideUp();
		$('#submenu-lv1-bienes-culturales-en-peligro').children().slideDown();
		
	});



	/* ==========================================
	          Desplegar y Ocultar Submenu
	   ========================================== */
	
	$('.submenu-lv2-preclasico').click(function(e){
		e.preventDefault();

		$('*').removeClass('activado_2');		
		$(this).addClass('activado_2');

		$('.submenu-lv3').children().slideUp("slow");
		$('#submenu-lv3-preclasico').children().slideDown("slow");
	});

	$('.submenu-lv2-clasico').click(function(e){
		e.preventDefault();

		$('*').removeClass('activado_2');		
		$(this).addClass('activado_2');

		$('.submenu-lv3').children().slideUp("slow");
		$('#submenu-lv3-clasico').children().slideDown("slow");
	});

	$('.submenu-lv2-postclasico').click(function(e){
		e.preventDefault();

		$('*').removeClass('activado_2');		
		$(this).addClass('activado_2');

		$('.submenu-lv3').children().slideUp("slow");
		$('#submenu-lv3-postclasico').children().slideDown("slow");
	});	








	$('.submenu-lv2-ceramica').click(function(e){
		e.preventDefault();

		$('*').removeClass('activado_2');		
		$(this).addClass('activado_2');

		$('.submenu-lv3').children().slideUp("slow");
		$('#submenu-lv3-ceramica').children().slideDown("slow");
	});

	$('.submenu-lv2-hueso').click(function(e){
		e.preventDefault();

		$('*').removeClass('activado_2');		
		$(this).addClass('activado_2');

		$('.submenu-lv3').children().slideUp("slow");
		$('#submenu-lv3-hueso').children().slideDown("slow");
	});

	$('.submenu-lv2-jade').click(function(e){
		e.preventDefault();

		$('*').removeClass('activado_2');		
		$(this).addClass('activado_2');

		$('.submenu-lv3').children().slideUp("slow");
		$('#submenu-lv3-jade').children().slideDown("slow");
	});

	$('.submenu-lv2-concha').click(function(e){
		e.preventDefault();

		$('*').removeClass('activado_2');		
		$(this).addClass('activado_2');

		$('.submenu-lv3').children().slideUp("slow");
		$('#submenu-lv3-concha').children().slideDown("slow");
	});

	$('.submenu-lv2-metal').click(function(e){
		e.preventDefault();

		$('*').removeClass('activado_2');		
		$(this).addClass('activado_2');

		$('.submenu-lv3').children().slideUp("slow");
		$('#submenu-lv3-metal').children().slideDown("slow");
	});

	$('.submenu-lv2-piedra').click(function(e){
		e.preventDefault();

		$('*').removeClass('activado_2');		
		$(this).addClass('activado_2');

		$('.submenu-lv3').children().slideUp("slow");
		$('#submenu-lv3-piedra').children().slideDown("slow");
	});

	$('.submenu-lv2-alabastro').click(function(e){
		e.preventDefault();

		$('*').removeClass('activado_2');		
		$(this).addClass('activado_2');

		$('.submenu-lv3').children().slideUp("slow");
		$('#submenu-lv3-alabastro').children().slideDown("slow");
	});










	$('.submenu-lv2-costa-sur').click(function(e){
		e.preventDefault();
		
		$('*').removeClass('activado_2');		
		$(this).addClass('activado_2');

		$('.submenu-lv3').children().slideUp("slow");
		$('#submenu-lv3-costa-sur').children().slideDown("slow");
	});

	$('.submenu-lv2-tierras-altas').click(function(e){
		e.preventDefault();

		$('*').removeClass('activado_2');		
		$(this).addClass('activado_2');

		$('.submenu-lv3').children().slideUp("slow");
		$('#submenu-lv3-tierras-altas').children().slideDown("slow");
	});

	$('.submenu-lv2-tierras-bajas').click(function(e){
		e.preventDefault();

		$('*').removeClass('activado_2');		
		$(this).addClass('activado_2');

		$('.submenu-lv3').children().slideUp("slow");
		$('#submenu-lv3-tierras-bajas').children().slideDown("slow");
	});









	$('.submenu-lv2-cantaros').click(function(e){
		e.preventDefault();

		$('*').removeClass('activado_2');		
		$(this).addClass('activado_2');

		$('.submenu-lv3').children().slideUp("slow");
		$('#submenu-lv3-cantaros').children().slideDown("slow");
	});

	$('.submenu-lv2-cuencos').click(function(e){
		e.preventDefault();

		$('*').removeClass('activado_2');		
		$(this).addClass('activado_2');

		$('.submenu-lv3').children().slideUp("slow");
		$('#submenu-lv3-cuencos').children().slideDown("slow");
	});

	$('.submenu-lv2-esculpidos-tallados').click(function(e){
		e.preventDefault();

		$('*').removeClass('activado_2');		
		$(this).addClass('activado_2');

		$('.submenu-lv3').children().slideUp("slow");
		$('#submenu-lv3-esculpidos-tallados').children().slideDown("slow");
	});

	$('.submenu-lv2-figurilla').click(function(e){
		e.preventDefault();

		$('*').removeClass('activado_2');		
		$(this).addClass('activado_2');

		$('.submenu-lv3').children().slideUp("slow");
		$('#submenu-lv3-figurilla').children().slideDown("slow");
	});

	$('.submenu-lv2-instrumentos-sonoros').click(function(e){
		e.preventDefault();

		$('*').removeClass('activado_2');		
		$(this).addClass('activado_2');

		$('.submenu-lv3').children().slideUp("slow");
		$('#submenu-lv3-instrumentos-sonoros').children().slideDown("slow");
	});

	$('.submenu-lv2-incensarios').click(function(e){
		e.preventDefault();

		$('*').removeClass('activado_2');		
		$(this).addClass('activado_2');

		$('.submenu-lv3').children().slideUp("slow");
		$('#submenu-lv3-incensarios').children().slideDown("slow");
	});

	$('.submenu-lv2-morteros').click(function(e){
		e.preventDefault();

		$('*').removeClass('activado_2');		
		$(this).addClass('activado_2');

		$('.submenu-lv3').children().slideUp("slow");
		$('#submenu-lv3-morteros').children().slideDown("slow");
	});

	$('.submenu-lv2-ollas').click(function(e){
		e.preventDefault();

		$('*').removeClass('activado_2');		
		$(this).addClass('activado_2');

		$('.submenu-lv3').children().slideUp("slow");
		$('#submenu-lv3-ollas').children().slideDown("slow");
	});

	$('.submenu-lv2-piedras-de-moler').click(function(e){
		e.preventDefault();

		$('*').removeClass('activado_2');		
		$(this).addClass('activado_2');

		$('.submenu-lv3').children().slideUp("slow");
		$('#submenu-lv3-piedras-de-moler').children().slideDown("slow");
	});

	$('.submenu-lv2-sellos').click(function(e){
		e.preventDefault();

		$('*').removeClass('activado_2');		
		$(this).addClass('activado_2');

		$('.submenu-lv3').children().slideUp("slow");
		$('#submenu-lv3-sellos').children().slideDown("slow");
	});

	$('.submenu-lv2-urnas').click(function(e){
		e.preventDefault();

		$('*').removeClass('activado_2');		
		$(this).addClass('activado_2');

		$('.submenu-lv3').children().slideUp("slow");
		$('#submenu-lv3-urnas').children().slideDown("slow");
	});

	$('.submenu-lv2-vasijas').click(function(e){
		e.preventDefault();

		$('*').removeClass('activado_2');		
		$(this).addClass('activado_2');

		$('.submenu-lv3').children().slideUp("slow");
		$('#submenu-lv3-vasijas').children().slideDown("slow");
	});

	$('.submenu-lv2-vasos').click(function(e){
		e.preventDefault();

		$('*').removeClass('activado_2');		
		$(this).addClass('activado_2');

		$('.submenu-lv3').children().slideUp("slow");
		$('#submenu-lv3-vasos').children().slideDown("slow");
	});

});