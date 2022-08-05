<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php

    $arr = [
        1, 2, 3, 4, 5, 6, 7, 8, 9,
        444 => 444,
        'a' => 'a',
        'b' => 'b',
        'c' => 'c'
    ];

    echo "from for"
    ?>
    <br>
    <ul>
        <?php for ($i = 0; $i < count($arr); $i++) : ?>
            <li>
                <?= $arr[$i]; ?>
            </li>
        <?php endfor; ?>
    </ul>


    <br><br>

    <ul>
        <?php foreach ($arr as $val) : ?>
            <li>
                <?= $val; ?>
            </li>
        <?php endforeach; ?>
    </ul>

    <br><br>

    <ul>
        <?php foreach ($arr as $key => $val) : ?>
            <li>
                <?= $key; ?> : <?= $val; ?>
            </li>
        <?php endforeach; ?>
    </ul>
</body>

</html>