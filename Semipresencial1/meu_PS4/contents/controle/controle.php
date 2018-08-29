<?php
	if(isset($_POST['fn']) && !empty($_POST["fn"]) ){
		escreveArquivo();
	}
	if(isset($_POST['apaga']) && !empty($_POST["apaga"]) ){
		zeraArquivo();
	}

	function escreveArquivo(){
		$fn  = $_POST['fn'];
	   	$str = $_POST['str'];
	   	$file = fopen("text.txt","w");
	   	echo fwrite($file,$str);
	   	fclose($file);		
	}

	function zeraArquivo(){
		$file = fopen("text.txt","w");
	   	echo fwrite($file,"");
	   	fclose($file);	
	}
?>