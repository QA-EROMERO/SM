<?php
	/*
	Access-Control-Allow-Origin error sending a jQuery Post
	Para solventar este error, se debe agregar el encabezado
	header('Access-Control-Allow-Origin: *'); en los archivos
	.PHP.
	*/
	header('Access-Control-Allow-Origin: *');
	class Ruta extends CI_Model{
		function __construct()
		{
			//Llamada al constructor del Modelo
			parent::__construct();
		}

		function getRoot(){
			$query = $this->db->get('sm_ruta');
			return $query->result_array();
		}
		
		//Selecciona el atributo Ruta de la tabla sm_ruta donde el campo ID_Item = $id
		function getRootById($id){
			$this->db->select('Ruta');
			$this->db->from('sm_ruta');
			$this->db->where('ID_Item', $id);
			$query = $this->db->get();

			return $query->row();
		}


		// Selecciona toda la información de los Items de la vista vw_Complete_Item_Info
		// donde el campo ID_SM = $id

		function getCompleteItemInfoById($CODIGO_SM, $ID_IDIOMA){
			// Selecciona todos los campos que forman parte de la vista vw_Complete_Item_Info
			$this->db->select('*');
			// vw_Complete_Item_Info es la vista creada en la BD
			$this->db->from('vw_Complete_Item_Info'); 
			$this->db->where('CODIGO_SM', $CODIGO_SM);
			// Este segundo "Where" es interpretado como "AND" en SQL
			$this->db->where('IDIOMA', $ID_IDIOMA); 
			$query = $this->db->get();

			// Retorna el resultado de la consulta en una sola fila (row)
			return $query->row();
		}

	}
?>