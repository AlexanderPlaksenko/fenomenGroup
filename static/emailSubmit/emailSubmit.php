<?php

header("Content-Type: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Origin: *");

$rest_json = file_get_contents("php://input");

$_POST = json_decode($rest_json, true);

if (empty($_POST['emailValue']) && empty($_POST['nameValue']) && empty($_POST['telValue'])) die();

if ($_POST) {

// set response code - 200 OK

    http_response_code(200);

    $to = "alexanderplx256@gmail.com";

    $from = $_POST['emailValue'];

    $name = strip_tags(htmlspecialchars($_POST['nameValue']));
    $email_address = strip_tags(htmlspecialchars($_POST['emailValue']));
    $phone = strip_tags(htmlspecialchars($_POST['telValue']));

//data

    $email_subject = "Новая заявка от:  $name";
    $email_body = "Получена новая заявка.\n\n" . "Детали:\n\nОт: $name\n\nEmail: $email_address\n\nТелефон: $phone";

//Headers

    $headers = "MIME-Version: 1.0\r\n";

    $headers .= "Content-type: text/html; charset=UTF-8\r\n";

    $headers .= "From: <noreply@fenomen.group>";

    mail($to, $email_subject, $email_body, $headers);

//echo json_encode( $_POST );

    echojson_encode(array("sent" => true));

} else {

// tell the user about error

    echojson_encode(

        [

            "sent" => false,

            "message" => "Something went wrong"

        ]

    );

}