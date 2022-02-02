<?php

/**
 * 
 * View will fetch data to display on the front end
 * 
 */


class View extends Model
{

	public function fetchEmails($order, $sort)
	{
		$rs = $this->getEmails($order, $sort);
		return $rs;
	}
}
