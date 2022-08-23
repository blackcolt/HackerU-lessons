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
    <title>Array Functions</title>
</head>

<body>
    <h1>Array Functions</h1>
    <p>
        <a href="https://www.php.net/manual/en/ref.array.php">Reference</a>
    </p>

    <br><br>
    <h2>count</h2>
    <pre>
        <code>
        &#x3C;?php
        $arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        echo count($arr);
        ?&#x3E;
        </code>
    </pre>
    <pre>
        <?php
        $arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        echo count($arr);
        ?>
    </pre>

    <br><br>
    <h2>is_array</h2>
    <pre>
        <code>
        &#x3C;?php
        $arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        echo br();
        var_export(is_array($arr));
        echo br();
        var_export(is_array('434343'));
        ?&#x3E;
        </code>
    </pre>
    <pre>
        <?php
        $arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        echo br();
        var_export(is_array($arr));
        echo br();
        var_export(is_array('434343'));
        ?>
    </pre>

    <br><br>
    <h2>in_array (case sensitive)</h2>
    <pre>
        <code>
        &#x3C;?php
        $arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        echo br();
        var_export(in_array(1, $arr));
        echo br();
        var_export(in_array('1', $arr));
        echo br();
        var_export(in_array('hello', $arr));
        ?&#x3E;
        </code>
    </pre>
    <pre>
        <?php
        $arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        echo br();
        var_export(in_array(1, $arr));
        echo br();
        var_export(in_array('1', $arr));
        echo br();
        var_export(in_array('hello', $arr));
        ?>
    </pre>

    <br><br>
    <h2>array_sum</h2>
    <pre>
        <code>
        &#x3C;?php
        $arr = [1, 2, 3, 4, 5, 6, 7, "string", true, 8, 9];
        echo br();
        echo array_sum($arr);
        ?&#x3E;
        </code>
    </pre>
    <pre>
        <?php
        $arr = [1, 2, 3, 4, 5, 6, 7, "string", true, 8, 9];
        echo br();
        echo array_sum($arr);
        ?>
    </pre>

    <br><br>
    <h2>array_merge</h2>
    <pre>
        <code>
        &#x3C;?php
        $arr1 = [
            1, 2, 3, 4, 5, 6, 7, 8, 9,
            444 => 444,
            'associative' => 'assoc'
        ];
        $arr2 = [
            1, 2, 3, 4, 5, 6, 7, 8, 9,
            444 => 'digital indexes are overwritten',
            'name' => 'daniel',
            'associative' => 'assoc took last'
        ];
        echo br();
        var_export(array_merge($arr1, $arr2));
        ?&#x3E;
        </code>
    </pre>
    <pre>
        <?php
        $arr1 = [
            1, 2, 3, 4, 5, 6, 7, 8, 9,
            444 => 444,
            'associative' => 'assoc'
        ];
        $arr2 = [
            1, 2, 3, 4, 5, 6, 7, 8, 9,
            444 => 'digital indexes are overwritten',
            'name' => 'daniel',
            'associative' => 'assoc took last'
        ];
        echo br();
        var_export(array_merge($arr1, $arr2));
        ?>
    </pre>

    <br><br>
    <h2>array_search</h2>
    <pre>
        <code>
        &#x3C;?php
        $arr1 = [
            1, 2, 3, 4, 5, 6, 7, 8, 9, "daniel"
        ];
        echo br();
        var_export(array_search('shalom', $arr1));
        echo br();
        var_export(array_search('daniel', $arr1));
        ?&#x3E;
        </code>
    </pre>
    <pre>
        <?php
        $arr1 = [
            1, 2, 3, 4, 5, 6, 7, 8, 9, "daniel"
        ];
        echo br();
        var_export(array_search('shalom', $arr1));
        echo br();
        var_export(array_search('daniel', $arr1));
        ?>
    </pre>

    <br><br>
    <h2>end</h2>
    <pre>
        <code>
        &#x3C;?php
        $arr1 = [
            1, 2, 3, 4, 5, 6, 7, 8, 9, "daniel"
        ];
        echo br();
        var_export(end($arr1));
        ?&#x3E;
        </code>
    </pre>
    <pre>
        <?php
        $arr1 = [
            1, 2, 3, 4, 5, 6, 7, 8, 9, "daniel"
        ];
        echo br();
        var_export(end($arr1));
        ?>
    </pre>

    <br><br>
    <h2>array_key_exists</h2>
    <pre>
        <code>
        &#x3C;?php
        $arr1 = [
            1, 2, 3, 4, 5, 6, 7, 8, 9, "daniel",
            'name' => 'daniel'
        ];
        echo br();
        var_export(array_key_exists('name', $arr1));
        echo br();
        var_export(array_key_exists(3, $arr1));
        echo br();
        var_export(array_key_exists(444, $arr1));
        ?&#x3E;
        </code>
    </pre>
    <pre>
        <?php
        $arr1 = [
            1, 2, 3, 4, 5, 6, 7, 8, 9, "daniel",
            'name' => 'daniel'
        ];
        echo br();
        var_export(array_key_exists('name', $arr1));
        echo br();
        var_export(array_key_exists(3, $arr1));
        echo br();
        var_export(array_key_exists(444, $arr1));

        ?>
    </pre>

    <br><br>
    <h2>array_map</h2>
    <pre>
        <code>
        &#x3C;?php
        $arr1 = [
            1, 2, 3, 4, 5, 6, 7, 8, 9, "daniel",
            'name' => 'daniel'
        ];
        $mapped_array = array_map(function ($item) {
            if (is_numeric($item)) {
                return $item * 2;
            }
            return $item;
        }, $arr1);

        echo br() . 'mapped' . br();
        var_export($mapped_array);
        echo br(2) . 'original' . br();
        var_export($arr1);
        ?&#x3E;
        </code>
    </pre>
    <pre>
        <?php
        $arr1 = [
            1, 2, 3, 4, 5, 6, 7, 8, 9, "daniel",
            'name' => 'daniel'
        ];
        $mapped_array = array_map(function ($item) {
            if (is_numeric($item)) {
                return $item * 2;
            }
            return $item;
        }, $arr1);

        echo br() . 'mapped' . br();
        var_export($mapped_array);
        echo br(2) . 'original' . br();
        var_export($arr1);
        ?>
    </pre>

    <br><br>
    <h2>shuffle</h2>
    <pre>
        <code>
        &#x3C;?php
        $arr1 = [
            1, 2, 3, 4, 5, 6, 7, 8, 9, "daniel",
            'name' => 'daniel'
        ];

        echo br();
        var_export(shuffle($arr1));
        echo br();
        var_export($arr1);
        ?&#x3E;
        </code>
    </pre>
    <pre>
        <?php
        $arr1 = [
            1, 2, 3, 4, 5, 6, 7, 8, 9, "daniel",
            'name' => 'daniel'
        ];

        echo br();
        var_export(shuffle($arr1));
        echo br();
        var_export($arr1);
        ?>
    </pre>

    <br><br>
    <h2>sort</h2>
    <pre>
        <code>
        &#x3C;?php
        $arr1 = [
            1, 2, 3, 4, 5, 6, 7, 8, 9, "daniel",
            'name' => 'daniel'
        ];

        echo br();

        shuffle($arr1);
        var_export($arr1);

        echo br(2) . 'after sort' . br();
        sort($arr1); // sort($arr1, SORT_REGULAR)
        var_export($arr1);
        ?&#x3E;
        </code>
    </pre>
    <pre>
        <?php
        $arr1 = [
            1, 2, 3, 4, 5, 6, 7, 8, 9, "daniel",
            'name' => 'daniel'
        ];

        echo br();

        shuffle($arr1);
        var_export($arr1);

        echo br(2) . 'after sort' . br();
        sort($arr1); // sort($arr1, SORT_REGULAR)
        var_export($arr1);
        ?>
    </pre>

    <br><br>
    <h2>extract</h2>
    <p>
        Receives an associative array and creates variables based on the array.
    </p>
    <pre>
        <code>
        &#x3C;?php
        $arr1 = [
            1, 2, 3, 4, 5, 6, 7, 8, 9, "daniel",
            'name' => 'daniel',
            'email' => 'daniel@gmail.com',
            'age' => 235,
        ];

        echo br();
        var_export(isset($name));
        echo br();
        extract($arr1);
        var_export(isset($name));
        echo br() . "$name ($age) - $email";
        ?&#x3E;
        </code>
    </pre>
    <pre>
        <?php
        $arr1 = [
            1, 2, 3, 4, 5, 6, 7, 8, 9, "daniel",
            'name' => 'daniel',
            'email' => 'daniel@gmail.com',
            'age' => 235,
        ];

        echo br();
        var_export(isset($name));
        echo br();
        extract($arr1);
        var_export(isset($name));
        echo br() . "$name ($age) - $email";
        ?>
    </pre>

    <br><br>
    <h2>compact</h2>
    <p>
        Receives variables and compacts them into an associative array.
    </p>
    <pre>
        <code>
        &#x3C;?php
        $name = 'daniel';
        $email = 'daniel@gmail.com';
        $age = 235;

        echo br();
        var_export(compact('name', 'email', 'age'));
        ?&#x3E;
        </code>
    </pre>
    <pre>
        <?php
        $name = 'daniel';
        $email = 'daniel@gmail.com';
        $age = 235;

        echo br();
        var_export(compact('name', 'email', 'age'));
        ?>
    </pre>



</body>

</html>