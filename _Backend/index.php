<?php include 'class-autoload.php'; ?>

<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Pineapple</title>
</head>

<body>
	<?php
	$emailObj = new View();
	$emailObj->showEmails();
	?>

</body>

</html>