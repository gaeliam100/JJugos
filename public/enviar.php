<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require './phpmailer/PHPMailer.php';
require './phpmailer/SMTP.php';
require './phpmailer/Exception.php';

$config = require('./env.php');

$mail = new PHPMailer(true);

header('Content-Type: application/json');

try {
  if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'message' => 'Solo se permiten solicitudes POST.']);
    exit;
  }

  $mail->isSMTP();
  $mail->Host       = 'mail.jjugosnaturales.com.mx';
  $mail->SMTPAuth   = true;
  $mail->Username   = $config['EMAIL_USER'];
  $mail->Password   = $config['EMAIL_PASS'];
  $mail->SMTPSecure = 'ssl';
  $mail->Port       = 465;

  $mail->setFrom($config['EMAIL_USER'], 'Landing JJugos');
  $mail->addAddress('jose.herrera@jjugosnaturales.com.mx');
  $replyToEmail = $_POST['Correo'] ?? '';
  $replyToName = $_POST['Nombre'] ?? '';

  if (filter_var($replyToEmail, FILTER_VALIDATE_EMAIL)) {
    $mail->addReplyTo($replyToEmail, $replyToName);
  }

  $mail->isHTML(true);
  $mail->Subject = 'Nuevo mensaje de contacto desde JJUGOS';
  $mail->Body    = "
    <strong>Nombre:</strong> {$_POST['Nombre']}<br>
    <strong>Apellido:</strong> {$_POST['Apellido']}<br>
    <strong>Correo:</strong> {$_POST['Correo']}<br>
    <strong>Teléfono:</strong> {$_POST['Teléfono']}<br>
    <strong>Empresa:</strong> {$_POST['Empresa']}<br>
    <strong>Motivo:</strong> {$_POST['Motivo']}<br>
    <strong>Mensaje:</strong><br>{$_POST['Mensaje']}
  ";

  $mail->send();
  echo json_encode(['success' => true, 'message' => 'Mensaje enviado correctamente.']);
} catch (Exception $e) {
  echo json_encode(['success' => false, 'message' => 'Error al enviar el mensaje: ' . $mail->ErrorInfo]);
}