<?php

/**
 * 
 * Model class is responsible for interacting with DB
 * 
 */

class Model extends Dbh
{
	protected function getEmails($order, $sort)
	{
		$sql = "SELECT * FROM subscriptions ORDER BY $order $sort";
		$stmt = $this->connect()->query($sql);
		$rs = array();

		// Populates array with data
		while ($row = $stmt->fetch()) {
			$rs[] = $row;
		}

		return $rs;
	}

	protected function setEmail($email)
	{
		$sql = "INSERT INTO subscriptions(email) VALUE (?)";
		$stmt = $this->connect()->prepare($sql);
		$stmt->execute([$email]);
	}

	protected function eraseEmail($id)
	{
		$sql = "DELETE FROM subscriptions WHERE id=(?)";
		$stmt = $this->connect()->prepare($sql);
		$stmt->execute([$id]);
	}
}
