<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные с формы, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$text = $_POST['content'];

// Формирование HTML-разметки самого письма(можно добавить ин)
$title = "Заголовок письма";
$body = "
<h2>Сообщение с формы обратной связи сайта</h2>
<hr>
<b>Имя:</b> $name<br>
<b>Телефон:</b> $phone<br><br>
<hr>
<b>Сообщение:</b><br>$text
";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    // $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты(которая отправляет письмо)
    $mail->Host       = 'smtp.yandex.ru'; // SMTP сервера вашей почты
    $mail->Username   = 'tor.band@yandex.ru'; // Логин на почте
    $mail->Password   = 'Tor.band.2022'; // Пароль на почте
    $mail->SMTPSecure = 'TLS';
    $mail->Port       = 587;
    $mail->setFrom('tor.band@yandex.ru', 'Сообщение с Tvoy-dom.by от '.$name); // Адрес самой почты(должен совпадать c Логин на почте) и имя отправителя

    // Получатель письма
    $mail->addAddress('pavel.zalazaev@protonmail.com');

// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";}
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
echo 'OK';

?>