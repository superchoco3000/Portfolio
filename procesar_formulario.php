<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = strip_tags(trim($_POST["message"]));

    // Vérification des données
    if (empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo "Oops! Il y a eu un problème avec votre soumission. Veuillez vérifier les champs et réessayer.";
        exit;
    }

    $destinatario = "lucsplucs@gmail.com"; // Remplace avec ton adresse e-mail
    $asunto = "Nouveau message de votre portfolio";
    $cuerpo = "Nom: $name\n";
    $cuerpo .= "Email: $email\n\n";
    $cuerpo .= "Message:\n$message\n";

    // En-têtes pour un email HTML (facultatif, mais peut améliorer la compatibilité)
    $cabeceras = "From: $email\r\n";
    $cabeceras .= "Reply-To: $email\r\n";
    $cabeceras .= "MIME-Version: 1.0\r\n";
    $cabeceras .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Envoi de l'e-mail
    if (mail($destinatario, $asunto, $cuerpo, $cabeceras)) {
        http_response_code(200);
        echo "Message envoyé avec succès !";
    } else {
        http_response_code(500);
        echo "Erreur lors de l'envoi du message.";
    }

} else {
    http_response_code(403);
    echo "Il y a eu un problème avec votre soumission, veuillez réessayer.";
}
?>