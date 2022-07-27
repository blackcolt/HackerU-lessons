<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Casting Variables</title>
</head>

<body>
    <h1>Casting Variables (type juggling)</h1>

    <br><br>
    <h2>Type Casting Scalars</h2>
    <p>
        Any type of value can be cast into another type using the following syntax <br>
        (CAST_TO) VALUE.
        <br>
        <a href="https://www.php.net/manual/en/language.types.type-juggling.php">php documentation</a>
    </p>
    <ul>
        <li>(int), (integer) - cast to int</li>
        <li>(bool), (boolean) - cast to bool</li>
        <li>(float), (double)- cast to float</li>
        <li>(string) - cast to string</li>
        <li>(array) - cast to array</li>
        <li>(object) - cast to object</li>
    </ul>
    <p>
        <b>Examples:</b><br>
        <?php
        echo '(int) "100 hello" => ', (int) "100 hello", ' (' . gettype((int) "100 hello") . ')', '<br>';
        echo '(int) "hello 100" => ', (int) "hello 100", ' (' . gettype((int) "hello 100") . ')', '<br>';
        echo '(string) 0 => ', (string) 0, ' (' . gettype((string) 0) . ')', '<br>';
        echo '(string) true => ', (string) true, ' (' . gettype((string) true) . ')', '<br>';
        // echo 'CHANGE => '            , CHANGE                ,' (' . gettype(CHANGE) . ')', '<br>';
        ?>
    </p>

    <br><br>
    <h2>Falsy and Truthy Values</h2>
    <p>
        any value of the followings is considered Falsy anything else is truthy:
    <ul>
        <li>the number zero - 0</li>
        <li>the value false - false</li>
        <li>the null value - null</li>
        <li>string with zero chars - ""/''</li>
        <li>empty array - array()</li>
    </ul>
    </p>
</body>

</html>