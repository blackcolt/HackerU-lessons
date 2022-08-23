<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>By Reference</title>
</head>

<body>
    <h1>By Reference</h1>
    <p>
        <a href="https://www.php.net/manual/en/language.references.pass.php">Reference</a>
    </p>

    <br><br>
    <h2>& Operator</h2>
    <p>
        by using & before a variable name, the returned value will be the address
    </p>

    <pre>
        <code>
        &lt;?php
        $a = 10;
        $b = $a;
        $a = 30;

        echo "a: $a, b: $b&lt;br&gt;";
        
        $a = 10;
        $b =& $a;
        $a = 30;

        echo "a: $a, b: $b&lt;br&gt;";

        function changeValue(&$c)
        {
            $c = 'changed';
        }

        changeValue($a);
        echo 'changedValue($a): ' . $a;
        ?&gt;
        </code>
    </pre>
    <p>
        <b>Output:</b><br>
        <?php
        $a = 10;
        $b = $a;
        $a = 30;

        echo "a: $a, b: $b<br>";

        $a = 10;
        $b = &$a;
        $a = 30;

        echo "a: $a, b: $b<br>";

        function changeValue(&$c)
        {
            $c = 'changed';
        }

        changeValue($a);
        echo 'changedValue($a): ' . $a;






        ?>
    </p>
</body>

</html>