<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
mail ("agnieszkagebus@gmail.com", "Contact from the site", $message, "From: $email\r\n");
echo "Thank You!";
 ?>
