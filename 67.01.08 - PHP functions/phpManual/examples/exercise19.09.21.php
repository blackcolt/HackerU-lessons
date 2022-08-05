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


    $sum = 0;

    function perform($num1, $num2, $fn)
    {
        global $sum;

        $result = $fn($num1, $num2);
        $sum += $result;

        return $result;
    }

    echo '<br>';
    echo  perform(2, 3, function ($num1, $num2) {

        return $num1 + $num2;
    });


    $plus = function ($num1, $num2) {

        return $num1 + $num2;
    };

    echo '<br>';
    echo perform(2, 3, $plus);

    echo '<br>';

    $sub = function ($num1, $num2) {
        return $num1 - $num2;
    };
    echo perform(32, 3, $sub);
    echo '<br>';
    echo "sum: $sum";
    ?>
</body>

</html>