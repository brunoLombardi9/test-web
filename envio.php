<?php
require 'PHPMailer/PHPMailerAutoload.php';
    $email_from = 'info@paxmanntransformadores.com';
	$email_to = 'info@paxmanntransformadores.com';
  

    $nombre  .= $_POST['nombre'] . "<br />";
    $telefono .= $_POST['telefono'] . "<br />";
    $email .= $_POST['email'] . "<br />";
    $asunto.= $_POST['asunto'];
    $mensaje .= $_POST['mensaje'] . "<br />";

    

    $mail = new PHPMailer;
    $mail->setFrom($email_from, $nombre_inm);
    $mail->addAddress($email_to,$nombre_inm);

    $mail->msgHTML($email_message);
    $mail->AltBody = $email_message;

$mail->Subject = "{$asunto}"; // Este es el titulo del email.
$mensajeHtml = nl2br($mensaje);
$mail->Body = "
<br />{$mensaje} 
<br /><b>Nombre:</b> {$nombre} 
<br/> <b>Telefono:</b> {$telefono}
<br/> <b>Correo:</b> {$email} 



<br/>  <br />Mensaje recibido desde paxmanntransformadores.com<br />";

   
    if (!$mail->send()) {
        echo "Mailer Error: " . $mail->ErrorInfo;
    } else {
    
    header('Location: exito.html');}
?>