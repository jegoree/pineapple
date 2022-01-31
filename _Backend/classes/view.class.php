<?php



class View extends Model
{

	public function showEmails()
	{
		$rs = $this->getEmails();
	}
}
