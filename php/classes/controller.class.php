<?php
include_once 'classes/model.class.php';
/**
 * 
 * Controller will use user input and put it in DB
 * 
 */


class Controller extends Model
{

	public function addEmail($email)
	{
		$this->setEmail($email);
	}

	public function deleteEmail($id)
	{
		$this->eraseEmail($id);
	}
}


