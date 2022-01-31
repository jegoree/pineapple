<?php

/**
 * 
 * Model class is responsible for interacting with DB
 * 
 */

class Model extends Dbh
{
	protected function getEmails()
	{
		$sql = 'SELECT * FROM subscriptions';
		$stmt = $this->connect()->query($sql);
		while ($row = $stmt->fetch()) {
			echo $row['email'] . '<br>';
		}
	}

	protected function setEmail($email)
	{
		$sql = "INSERT INTO subscriptions(email) VALUE (?)";
		$stmt = $this->connect()->prepare($sql);
		$stmt->execute([$email]);
	}
}
