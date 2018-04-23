<?php
echo '<meta http-equiv="content-type" content="text/html; charset=utf-8">';
echo '<link rel="stylesheet" type="text/css" href="style.css"></head>';
echo '<link href="https://fonts.googleapis.com/css?family=Julius+Sans+One|Poiret+One&amp;subset=latin-ext" rel="stylesheet" type="text/css">';

$name = $_POST['name'];
$tel = $_POST['tel'];
$message = $_POST['message'];
$from = 'Wiadomość od ' . $name .  "\n" . 'Nr Telefonu ' . $tel;
mail ("agnieszkagebus@gmail.com", "Nowa wiadomosc - formularz kontaktowy Regina Gromadzka", $message, $from);
echo "<div class=\"form-php\"> <h1>DZIĘKUJEMY ZA WIADOMOŚĆ!<br> <br> Regina Gromadzka</h1></div>";
?>