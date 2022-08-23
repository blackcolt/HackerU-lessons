<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h1>md5 - md5('password')</h1>
    <p>
        <?= md5('password' . 'WR*h>k559TTGqHZ4tXhmNyXd#{=:QQ'); ?><br>
        <?= md5('password'); ?><br>
        <?= md5('password'); ?><br>
    </p>

    <h1>sha1 - sha1('password')</h1>
    <p>
        <?= sha1('password'); ?><br>
        <?= sha1('password'); ?><br>
        <?= sha1('password'); ?><br>
    </p>

    <h1>Bcrypt</h1>
    <p>
        <?php
        $password = password_hash('password', PASSWORD_BCRYPT);
        echo $password . ' - ' . (password_verify('password', $password) ? 'true' : 'false') . '<br>';
        echo $password . ' - ' . (password_verify('password1', $password) ? 'true' : 'false') . '<br>';
        echo '<br><br>';
        $password = password_hash('password', PASSWORD_BCRYPT);
        echo $password . ' - ' . (password_verify('password', $password) ? 'true' : 'false') . '<br>';
        echo $password . ' - ' . (password_verify('password1', $password) ? 'true' : 'false') . '<br>';
        ?>
    </p>
</body>

</html>