<?php

class Dbh
{
	private $dblocation = "127.0.0.1";
	private $dbname = "pineapple";
	private $dbuser = "root";
	private $dbpasswd = "test12345";

	protected function connect()
	{
		// Establish connection
		$dsn = "mysql:host=$this->dblocation;dbname=$this->dbname";
		$pdo = new PDO($dsn, $this->dbuser, $this->dbpasswd);

		// Converts fetched data in assotiative array
		$pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);

		return $pdo;
	}
}