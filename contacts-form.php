<?php
echo include('contact.php');
if(isset($_POST['submit'])){
    $to = "FreeDezz@Gmail.com"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $name = $_POST['name'];
    $tel = $_POST['tel'];
    $country = $_POST['country'];
    $subject = "Form submission";
    $message = $name . "from country: $country" . " wrote the following:" . "\n\n" . $_POST['message'] . "\n\n" ."Phone: ". $tel;

    $headers = "From:" . $from;
    mail($to,$subject,$message,$headers);

    echo "<div class='thanks-you-message'>Mail Sent. Thank you " . $name . ", we will contact you shortly.</div>";
    // You can also use header('Location: thank_you.php'); to redirect to another page.
}
?>
