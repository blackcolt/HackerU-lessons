<?php session_start(); ?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Session Tutorial</title>
</head>

<body>
    <pre>
        <?php var_export($_SESSION); ?>
    </pre>



    <?php

    // // create / update
    $_SESSION['id'] = 1;
    $_SESSION['name'] = 'daniel';
    $_SESSION['is_active'] = true;
    $_SESSION['hello'] = 'dsfdsf';

    // unset($_SESSION['id']);

    // // destroy session
    // session_destroy();
    // setcookie(
    //     session_name(),
    //     '',
    //     time() - 1,
    //     session_get_cookie_params()['path']
    // )
    ?>

    <h1>session meta-data:</h1>
    <pre>

        <?php
        var_export(session_name());
        echo '<br>';
        var_export(session_get_cookie_params());
        ?>
    </pre>
</body>

</html>