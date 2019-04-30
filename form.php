<?php

$EmailTo = "producao@maxsigns.com.br";
$Name = Trim(stripslashes($_POST['name']));
$Email = Trim(stripslashes($_POST['email']));
$Phone = Trim(stripslashes($_POST['phone']));
$Message = Trim(stripslashes($_POST['mens']));

// validation
$validationOK=true;
if (!$validationOK) {
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.html\">";
  exit;
}

// prepare email body text
$Body = "";
$Body .= "Nome: ";
$Body .= $Name;
$Body .= "\n\n";
$Body .= "Email: ";
$Body .= $Email;
$Body .= "\n\n";
$Body .= "Telefone: ";
$Body .= $Phone;
$Body .= "\n\n";
$Body .= "Mensagem: ";
$Body .= $Message;

// send email
$success = mail($EmailTo, "Cliente do site", $Body);

// redirect to success page
if ($success){
  print "<meta http-equiv=\"refresh\" content=\"0;URL=thanks.html\">";
}
else{
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.html\">";
}
?>
