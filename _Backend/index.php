<?php

include 'class-autoload.php';

$emailObj = new View();


// Sorting logic
if (isset($_GET['order'])) {
	$order = $_GET['order'];
} else {
	$order = 'email';
}

if (isset($_GET['sort'])) {
	$sort = $_GET['sort'];
} else {
	$sort = 'ASC';
}

// Fetching reaults from DB
$result = $emailObj->fetchEmails($order, $sort);

// Delete action
if (isset($_GET['delete'])) {
	$id = $_GET['delete'];
	$ctrl = new Controller();
	$ctrl->deleteEmail($id);
	header("Refresh:0; url=index.php");
}


?>

<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Pineapple</title>
</head>

<body>
	<input type="text" id="search" onkeyup="myFunction()" placeholder="Search for email.."> <br />
	<table border='1' id="subscriptions">
		<tr>
			<?php $sort == 'ASC' ? $sort = 'DESC' : $sort = 'ASC' ?>
			<th><a href='?order=email&&sort=<?= $sort ?>'>Email</a></th>
			<th><a href='?order=date&&sort=<?= $sort ?>'>Date</a></th>
			<th>Delete</th>
		</tr>
		<?php foreach ($result as $row) : ?>
			<tr>
				<td><?= $row['email']; ?></td>
				<td><?= $row['date']; ?></td>
				<td><a href="?delete=<?php echo $row['id']; ?>">Delete</a></td>
			</tr>
		<?php endforeach; ?>
	</table>

	<script>
		// Filtering function
		function myFunction() {
			var input, filter, table, tr, td, i, txtValue;
			input = document.getElementById("search");
			filter = input.value.toUpperCase();
			table = document.getElementById("subscriptions");
			tr = table.getElementsByTagName("tr");
			for (i = 0; i < tr.length; i++) {
				td = tr[i].getElementsByTagName("td")[0];
				if (td) {
					txtValue = td.textContent || td.innerText;
					if (txtValue.toUpperCase().indexOf(filter) > -1) {
						tr[i].style.display = "";
					} else {
						tr[i].style.display = "none";
					}
				}
			}
		}
	</script>

</body>

</html>