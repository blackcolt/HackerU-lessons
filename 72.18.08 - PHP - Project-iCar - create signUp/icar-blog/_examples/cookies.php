<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cookies</title>
</head>

<body>
    <h1>$_COOKIE</h1>

    <pre>
        <?php var_export($_COOKIE); ?>
    </pre>


    <?php


    // create / update
    // setcookie('myfirstcookie', 'this is my first cookie', 0, '/',);
    // setcookie('mysecondcookie', 'this is my second cookie', time() + 60 * 60 * 24 * 3, '/')
    setcookie('mysecondcookie', 'changed', time() + 60 * 60 * 24 * 3, '/');

    // delete
    setcookie('mysecondcookie', '', time() - 1, '/');

    ?>

























<h1>Number of views</h1>
    <?php
    setcookie(
        'number_of_views',
        isset($_COOKIE['number_of_views']) ? (int) $_COOKIE['number_of_views'] + 1 : 1,
        time() + 7 * 24 * 60 * 60,
        '/',
    );
    ?>
    <p>
        number_of_views: <?= $_COOKIE['number_of_views'] ?? 0; ?>
    </p>

</body>

</html>