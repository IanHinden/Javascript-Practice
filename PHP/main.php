<!DOCTYPE HTML>

<html>
<body>
	<body bgcolor="#FFDFDD">
	
Welcome <?php echo $_POST["username"]; ?><br>
Your email address is: <?php echo $_POST["email"]; ?>

		<div id="MYSQL">
		<?php
			$name = $_POST["username"];
			$name = mysql_real_escape_string($name);
			$email = $_POST["email"];
			$email = mysql_real_escape_string($email);

			$servername = "localhost";
			$login = "root";
			$password = "";
			$dbname = "Testing";

			// Create connection
			$conn = mysqli_connect($servername, $login, $password, $dbname);
			// Check connection
			if (!$conn) {
  				die("Connection failed: " . mysqli_connect_error());
			}

			$sql = "INSERT INTO MyGuests (username, email)
			VALUES ('$name', '$email')";

			if (mysqli_query($conn, $sql)) {
   			 echo "New record created successfully";
			} else {
   			 echo "Error: " . $sql . "<br>" . mysqli_error($conn);
			}

mysqli_close($conn);
?>
		</div>	
</body>
</html>