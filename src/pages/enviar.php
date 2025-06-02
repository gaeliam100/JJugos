<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $nombre    = htmlspecialchars($_POST['Nombre'] ?? '');
  $apellido  = htmlspecialchars($_POST['Apellido'] ?? '');
  $correo    = htmlspecialchars($_POST['Correo'] ?? '');
  $telefono  = htmlspecialchars($_POST['Teléfono'] ?? '');
  $empresa   = htmlspecialchars($_POST['Empresa'] ?? '');
  $motivo    = htmlspecialchars($_POST['Motivo'] ?? '');
  $mensaje   = htmlspecialchars($_POST['Mensaje'] ?? '');

  $to = "jose.herrera@jjugosnaturales.com.mx";
  $subject = "Nuevo mensaje de contacto desde el sitio JJUGOS";
  $body = "Nombre: $nombre $apellido\n";
  $body .= "Correo: $correo\n";
  $body .= "Teléfono: $telefono\n";
  $body .= "Empresa: $empresa\n";
  $body .= "Motivo: $motivo\n";
  $body .= "Mensaje:\n$mensaje\n";

  $headers = "From: contacto@jjugosnaturales.com.mx\r\n";
  $headers .= "Reply-To: $correo\r\n";

  if (mail($to, $subject, $body, $headers)) {
    echo "Mensaje enviado correctamente.";
  } else {
    echo "Error al enviar el mensaje.";
  }
} else {
  echo "Método no permitido.";
}