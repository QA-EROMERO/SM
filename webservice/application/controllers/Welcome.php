<?php
/*
Access-Control-Allow-Origin error sending a jQuery Post
Para solventar este error, se debe agregar el encabezado
header('Access-Control-Allow-Origin: *'); en los archivos
.PHP.
*/
header('Access-Control-Allow-Origin: *');
defined('BASEPATH') OR exit('No direct script access allowed');

class Welcome extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/user_guide/general/urls.html
	 */
	public function index()
	{
		$this->load->view('welcome_message');
	}

	public function getroot(){
		$this->load->model('Ruta');
		$data = $this->Ruta->getRoot();
		header('Content-Type: application/json');
		echo json_encode($data);
	}

	function getRootById(){
		$myId = $this->input->post('ID_Item');

		$this->load->model('Ruta');
		$data = $this->Ruta->getRootById($myId);
		header('Content-Type: application/json');
		echo json_encode($data);
	}

	// Esta función realiza la consulta a la Vista "vw_Complete_Item_Info"
	// Función que recibe dos parámetros: 1. CODIGO_SM: Código del Item
	// 2. IDIOMA: Es el ID_Idioma
	function getCompleteItemInfoById(){
		$CODIGO_SM = $this->input->post('CODIGO_SM');  // Primer Parámetro enviado con el método POST
		$ID_IDIOMA = $this->input->post('IDIOMA');     // Segundo Parámetro enviado con el método POST

		$this->load->model('Ruta');                    // Carga el Modelo Ruta.php

		// Invoca la Función getCompleteItemInfoById enviado dos Parámetros
		// $CODIGO_SM y $ID_IDIOMA: Son los nombres de los campos en la vista "vw_Complete_Item_Info"
		// a la cual se hace referencia.  No son los nombres de los campos en las tablas de la BD.
		// $CODIGO_SM: El código del Item (Botón) que fue presionado
		// $ID_IDIOMA: Es el código del Idioma que el usuario selecciono siendo: 1. Español, 2. Inglés
		$data = $this->Ruta->getCompleteItemInfoById($CODIGO_SM, $ID_IDIOMA);   
		header('Content-Type: application/json');
		echo json_encode($data);
	}

}
?>
