<?php
$br = '<br>';
function br($amount = 1, $print = false)
{
    global $br;

    $str = '';
    for ($i = 0; $i < $amount; $i++) {
        $str .= $br;
    }

    if ($print) {
        echo $str;
    } else {
        return $str;
    }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Math Functions</title>
</head>

<body>
    <h1>String Functions</h1>
    <p>
        <a href="https://www.php.net/manual/en/ref.strings.php">Reference</a>
    </p>

    <br><br>
    <h2>Trim</h2>
    <p>
    <pre>
            <code>
            &#x3C;?php
            trim('    hello    ');
            trim('    bye    ');
            trim('?????hello?????', '?');
            trim('?????bye???????', '?');
            ?&#x3E;
            </code>
        </pre>
    </p>
    <p>
        <b>Output:</b> <br>
        <?= trim('    hello    '); ?> <br>
        <?= trim('    bye    '); ?> <br>
        <?= trim('?????hello?????', '?'); ?> <br>
        <?= trim('?????bye???????', '?'); ?> <br>
    </p>

    <br><br>
    <h2>Right Trim (rtrim)</h2>
    <p>
    <pre>
            <code>
            &#x3C;?php
            rtrim('    hello    ');
            rtrim('    bye    ');
            rtrim('?????hello?????', '?');
            rtrim('?????bye?????', '?');
            ?&#x3E;
            </code>
        </pre>
    </p>
    <p>
        <b>Output:</b> <br>
        <?= rtrim('    hello    '); ?> <br>
        <?= rtrim('    bye    '); ?> <br>
        <?= rtrim('?????hello?????', '?'); ?> <br>
        <?= rtrim('?????bye?????', '?'); ?> <br>
    </p>

    <br><br>
    <h2>Left Trim (ltrim)</h2>
    <p>
    <pre>
            <code>
            &#x3C;?php
            ltrim('    hello    ');
            ltrim('    bye    ');
            ltrim('?????hello?????', '?');
            ltrim('?????bye?????', '?');
            ?&#x3E;
            </code>
        </pre>
    </p>
    <p>
        <b>Output:</b> <br>
        <?= ltrim('    hello    '); ?> <br>
        <?= ltrim('    bye    '); ?> <br>
        <?= ltrim('?????hello?????', '?'); ?> <br>
        <?= ltrim('?????bye?????', '?'); ?> <br>
    </p>

    <br><br>
    <h2>String Replace - str_replace(mixed $search, mixed $replace, mixed $subject) </h2>
    <p>
    <pre>
            <code>
            &#x3C;?php

            $source = 'Hello, my name is daniel!!'

            str_replace('!', '?', $source);
            str_replace('l', '_______', $source);
            str_replace('H', 'h', $source);

            ?&#x3E;
            </code>
        </pre>
    </p>
    <p>
        <b>Output:</b> <br>
        <?php $source = 'Hello, my name is daniel!!'; ?>

        <?= str_replace('!', '?', $source); ?> <br>
        <?= str_replace('l', '_______', $source); ?> <br>
        <?= str_replace('H', 'h', $source); ?> <br>
    </p>

    <br><br>
    <h2>String Insensitive Replace - str_ireplace(mixed $search, mixed $replace, mixed $subject) </h2>
    <p>
        Same as str_replace only not sensitive to upper or lower case
    </p>

    <br><br>
    <h2>String Length (strlen)</h2>
    <p>
    <pre>
            <code>
            &#x3C;?php
    
            $source = 'Hello, my name is daniel!!'
    
            strlen($source);
            ?&#x3E;
            </code>
        </pre>
    </p>
    <p>
        <b>Output:</b> <br>
        <?php $source = 'Hello, my name is daniel!!'; ?>

        <?= strlen($source); ?> <br>

        <br><br>
    <h2>String to Lowercase (strtolower)</h2>
    <p>
    <pre>
            <code>
            &#x3C;?php
    
            $source = 'Hello, my name is daniel!!'
    
            strtolower($source);
            ?&#x3E;
            </code>
        </pre>
    </p>
    <p>
        <b>Output:</b> <br>
        <?php $source = 'Hello, my name is daniel!!'; ?>

        <?= strtolower($source); ?> <br>
    </p>

    <br><br>
    <h2>String to Upper(strtoupper)</h2>
    <p>
    <pre>
            <code>
            &#x3C;?php
    
            $source = 'Hello, my name is daniel!!'
    
            strtoupper($source);
            ?&#x3E;
            </code>
        </pre>
    </p>
    <p>
        <b>Output:</b> <br>
        <?php $source = 'Hello, my name is daniel!!'; ?>

        <?= strtoupper($source); ?> <br>
    </p>

    <br><br>
    <h2>String Position(strpos)</h2>
    <p>
        Finds the index position of a string. If not found returns false
    </p>
    <p>
    <pre>
            <code>
            &#x3C;?php
    
            $source = 'Hello, my name is daniel!!'
    
            strpos($source, 'H');
            strpos($source, 'h');
            strpos($source, 'z');
            strpos($source, 'name');
            ?&#x3E;
            </code>
        </pre>
    </p>
    <p>
        <b>Output:</b> <br>
        <?php $source = 'Hello, my name is daniel!!'; ?>

        <?= strpos($source, 'H'); ?> <br>
        <?= strpos($source, 'h'); ?> <br>
        <?= strpos($source, 'z'); ?> <br>
        <?= strpos($source, 'name'); ?> <br>
    </p>

    <br><br>
    <h2>String Insensitive Position(stripos)</h2>
    <p>
        Insensitive find the index position of a string. If not found returns false
    </p>
    <p>
    <pre>
            <code>
            &#x3C;?php
    
            $source = 'Hello, my name is daniel!!'
    
            stripos($source, 'H');
            stripos($source, 'h');
            stripos($source, 'z');
            stripos($source, 'name');
            ?&#x3E;
            </code>
        </pre>
    </p>
    <p>
        <b>Output:</b> <br>
        <?php $source = 'Hello, my name is daniel!!'; ?>

        <?= stripos($source, 'H'); ?> <br>
        <?= stripos($source, 'h'); ?> <br>
        <?= stripos($source, 'z'); ?> <br>
        <?= stripos($source, 'name'); ?> <br>
    </p>


    <br><br>
    <h2>Implode</h2>
    <p>
        Concatenates all string values in an array with a separator as configured
    </p>
    <pre>
        <code>
        &lt;?php
        $numbers = [12, 23, 23, 554, 65, 3, 'aaaa', 'bbbb bbbb'];

        echo implode(" ----- ", $numbers);
        echo br();
        echo implode("", $numbers);
        echo br();
        echo implode(", ", $numbers);
        ?&gt;
        </code>
    </pre>
    <p>
        <b>Output:</b>
    <pre>
            <?php
            $numbers = [12, 23, 23, 554, 65, 3, 'aaaa', 'bbbb bbbb'];

            echo implode(" ----- ", $numbers);
            echo br();
            echo implode("", $numbers);
            echo br();
            echo implode(", ", $numbers);
            ?>
        </pre>
    </p>

    <br><br>
    <h2>Explode</h2>
    <p>
        Breaks string into array with separator as indication for new element
    </p>
    <pre>
        <code>
        &lt;?php
        $str = 'daneil - shalom - yoav - lora';

        var_export(explode(" - ", $str));
        ?&gt;
        </code>
    </pre>
    <p>
        <b>Output:</b>
    <pre>
            <?php
            $str = 'daneil - shalom - yoav - lora';

            var_export(explode(" - ", $str));
            ?>
        </pre>
    </p>

</body>

</html>