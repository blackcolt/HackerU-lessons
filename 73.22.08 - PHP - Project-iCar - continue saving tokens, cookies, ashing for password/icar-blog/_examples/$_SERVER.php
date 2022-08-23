<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <pre>

    <?php
    var_export($_SERVER);
    ?>
    </pre>

    <?php

    // Client IP
    echo $_SERVER['REMOTE_ADDR'] . '<br>';

    // OS and Browsers
    echo $_SERVER['HTTP_USER_AGENT'] . '<br>';

    // Server IP
    echo $_SERVER['SERVER_ADDR'] . '<br>';

    // Query String
    echo $_SERVER['QUERY_STRING'] . '<br>';

    // Request method
    echo $_SERVER['REQUEST_METHOD'] . '<br>';

    // url without domain
    echo $_SERVER['REQUEST_URI'] . '<br>';

    // Time of request
    echo $_SERVER['REQUEST_TIME'] . '<br>';

    // Referer page
    echo $_SERVER['HTTP_REFERER'];
    ?>
</body>

</html>