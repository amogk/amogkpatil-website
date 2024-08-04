<?php
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    $mailheader = "From:".$name."<".$email.">\r\n";

    $recipient = "amogkpatil@gmail.com";

    mail($recipient, $subject, $message, $mailheader) or die("Error! Message not sent.");

    echo '
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>About - Amogk Patil</title>
            <link rel="stylesheet" href="style.css">
            <script src="nav.js"></script>
            <script type="importmap">
                {
                    "imports": {
                    "three": "https://cdn.jsdelivr.net/npm/three@v0.167.1/build/three.module.js",
                    "three/addons/": "https://cdn.jsdelivr.net/npm/three@v0.167.1/examples/jsm/"
                    }
                }
            </script>
            <script src="contactreturn_3js.js" type="module"></script> 
        </head>
        <body>
            <header>
                <h1 id="title"><a href="index.html">amogk patil.</a></h1>
            </header>
            <div id="after-contact">
                <h1 id="response">Thanks for sending me a message! I will respond as soon as I can.</h1>
                <a href="index.html"><h1 id="return-home">Return home?</h1></a>
                <div id="contact_canvasholder">
                    <canvas id="contact_c"></canvas>   
                </div>
            </div>
        </body> 
        </html>
    ';
?>