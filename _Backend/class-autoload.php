<?php 

/**
 * 
 * A small tool that will integrate all the classes
 * 
 */


spl_autoload_register('myAutoLoader');

function myAutoLoader($className) {
	$path = "classes/";
	$extension = ".class.php";
	$fullPath = $path . $className .$extension;

	include_once $fullPath;
}

?>