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
    <title>Debug Functions</title>
</head>

<body>
    <h1>Debug Functions</h1>

    <?php
    $array_short_value = ['23', true, [], 44, 44.4];
    $array_constructor_value = array('23', true, [], 44, 44.4);
    $array_short_key_value = [
        23 => '23',
        50 => 44,
        0 => true,
        554 => 44.34
    ];
    $array_constructor_key_value = array(
        23 => '23',
        50 => 44,
        0 => true,
        554 => 44.34
    );
    ?>
    <pre>
        <code>
        &#x3C;?php
        $array_short_value = [&#x27;23&#x27;, true, [], 44, 44.4];
        $array_constructor_value = array(&#x27;23&#x27;, true, [], 44, 44.4);
        $array_short_key_value = [
            23 =&#x3E; &#x27;23&#x27;,
            50 =&#x3E; 44,
            0 =&#x3E; true,
            554 =&#x3E; 44.34
        ];
        $array_constructor_key_value = array(
            23 =&#x3E; &#x27;23&#x27;,
            50 =&#x3E; 44,
            0 =&#x3E; true,
            554 =&#x3E; 44.34
        );
        ?&#x3E;
        </code>
    </pre>

    <br><br>
    <h2>print_r function</h2>
    <p>
    <pre>
            <code>
            &#x3C;?php
            print_r($array_short_value);
            print_r($array_constructor_value);
            print_r($array_short_key_value);
            print_r($array_constructor_key_value);
            ?&#x3E;
            </code>
        </pre>
    </p>
    <pre>
        <?php
        print_r($array_short_value);
        print_r($array_constructor_value);
        print_r($array_short_key_value);
        print_r($array_constructor_key_value);
        ?>
    </pre>

    <br><br>
    <h2>var_export function</h2>
    <p>
    <pre>
            <code>
            &#x3C;?php
            var_export($array_short_value);
            var_export($array_constructor_value);
            var_export($array_short_key_value);
            var_export($array_constructor_key_value);
            ?&#x3E;
            </code>
        </pre>
    </p>
    <pre>
        <?php
        var_export($array_short_value);
        var_export($array_constructor_value);
        var_export($array_short_key_value);
        var_export($array_constructor_key_value);
        ?>
    </pre>

    <br><br>
    <h2>var_dump function</h2>
    <p>
    <pre>
            <code>
            &#x3C;?php
            var_dump($array_short_value);
            var_dump($array_constructor_value);
            var_dump($array_short_key_value);
            var_dump($array_constructor_key_value);
            ?&#x3E;
            </code>
        </pre>
    </p>
    <pre>
        <?php
        var_dump($array_short_value);
        var_dump($array_constructor_value);
        var_dump($array_short_key_value);
        var_dump($array_constructor_key_value);
        ?>
    </pre>


</body>

</html>