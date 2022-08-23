<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First PHP Site</title>
</head>

<body>
    <h1>hello</h1>


    <?php
    /*
    comment 
    commnet 
    comment
    comment
    */
    echo "<h2>hello with php</h2>"; # comment
    echo "<p>hello again</p>"; // comment

    $x = 5 + 5;
    ?>

    <br>

    <?= "hello with shortend"; ?>
    <p>&lt;?php echo "hello with shorthand"; ?&gt;</p>

    <?php
    echo 'is_integer(55)&nbsp;&nbsp;&nbsp; => ' . (is_integer(55) ? "true" : "false");
    echo '<br>';
    echo 'is_int("444sss")&nbsp;&nbsp;&nbsp; => ' . (is_int("444sss") ? "true" : "false");
    echo '<br>';
    echo 'is_numeric(555)&nbsp;&nbsp;&nbsp; => ' . (is_numeric(555) ? "true" : "false");
    echo '<br>';
    echo 'is_numeric(5.555)&nbsp;&nbsp;&nbsp; => ' . (is_numeric(5.555) ? "true" : "false");
    echo '<br>';
    echo 'is_numeric(" 555 ")&nbsp;&nbsp;&nbsp; => ' . (is_numeric(" 555 ") ? "true" : "false");
    echo '<br>';
    echo 'is_numeric("aa555")&nbsp;&nbsp;&nbsp; => ' . (is_numeric("aa555") ? "true" : "false");
    echo '<br>';
    echo 'is_string("sdf")&nbsp;&nbsp;&nbsp; => ' . (is_string("sdf") ? "true" : "false");
    echo '<br>';
    echo 'is_float(6.3333)&nbsp;&nbsp;&nbsp; => ' . (is_float(6.3333) ? "true" : "false");
    echo '<br>';
    echo 'is_scalar(true)&nbsp;&nbsp;&nbsp; => ' . (is_scalar(true) ? "true" : "false");
    echo '<br>';
    echo 'is_scalar(false)&nbsp;&nbsp;&nbsp; => ' . (is_scalar(false) ? "true" : "false");
    echo '<br>';
    echo 'is_scalar(55)&nbsp;&nbsp;&nbsp; => ' . (is_scalar(55) ? "true" : "false");
    echo '<br>';
    echo 'is_scalar(55.222)&nbsp;&nbsp;&nbsp; => ' . (is_scalar(55.222) ? "true" : "false");
    echo '<br>';
    echo 'is_scalar("dsfasdf")&nbsp;&nbsp;&nbsp; => ' . (is_scalar("dsfasdf") ? "true" : "false");
    echo '<br>';
    echo 'is_bool(true)&nbsp;&nbsp;&nbsp; => ' . (is_bool(true) ? "true" : "false");
    echo '<br>';
    echo 'is_bool(false)&nbsp;&nbsp;&nbsp; => ' . (is_bool(false) ? "true" : "false");
    echo '<br>';
    echo 'is_null(null)&nbsp;&nbsp;&nbsp; => ' . (is_null(null) ? "true" : "false");
    echo '<br>';



    define("THE_NAME_OF_THE_CONSTANT", "hello,");

    define("MY_NAME", THE_NAME_OF_THE_CONSTANT . " daniel")



    ?>

    <?php phpinfo(); ?>




    <?php

    $name = "Daniel Zadok";

    function firstName(&$received_name)
    {
        $received_name = explode(' ', trim($received_name))[0];
    }


    firstName($name);

    echo  $name;


    function add_greet(&$str)
    {
        $greetings = ['Welcome', 'Hello', 'Hawdi', 'Aviderachi'];
        $greet = $greetings[array_rand($greetings)];
        $str = $greet . ', ' . $str;
        return $greet;
    }


    $result = add_greet($name);



    function swap_variables(&$z, &$y)
    {
        $temp = $z;
        $z = $y;
        $y = $temp;
    }


    $a =  10;
    $b = 20;

    // $c = $a;
    // $a = $b;
    // $b = $c;

    swap_variables($a, $b);

    echo $a, $b;



    ?>

    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>


    <ul>
        <?php
        for ($i = 3; $i < 20; $i++) {
            if ($i % 2 === 0) {
                echo "<li>$i</li>";
            }
        }
        ?>
    </ul>


    <ul>
        <?php
        for ($i = 3; $i < 20; $i++) {
            echo "<li style=\"color: " . ($i % 2 === 0 ? 'red'  : 'green') . "\">$i</li>";
        }
        ?>
    </ul>



    <?php for ($i = 0; $i < 100; $i++) : ?>
        hello
        <?= $i; ?>
    <?php endfor; ?>

    <ul>
        <?php for ($i = 0; $i < 200; $i++) : ?>
            <li style="color: <?= $i % 2 === 0 ? 'red' : 'blue'; ?>"><?= $i; ?></li>
        <?php endfor; ?>
    </ul>

    <ul>
        <?php for ($i = 3; $i < 20; $i++) : ?>
            <?php if ($i % 2 === 0) : ?>
                <li><?= $i; ?></li>
            <?php endif; ?>
        <?php endfor; ?>

    </ul>


    <?php
    $from_global = 'hello from global';

    // $greet =  function () {
    //     // global $from_global;

    //     // echo $from_global;
    //     return "hello";
    // };

    $greet =  function () use (&$from_global) {
        // global $from_global;

        // echo $from_global;

        $from_global = '44';
        return "hello";
    };


    function say_hi($name, $greet_fn)
    {
        echo $greet_fn() . ' ' . $name;
    }

    say_hi('daniel', $greet);

    echo $from_global;


    ?>


    <hr>

    <?php

    $format = '%.3f, %.3f = %.3f';



    function run_operation($num1, $num2, $operation_fn)
    {
        global $format;

        return sprintf($format, $num1, $num2, $operation_fn($num1, $num2));
    }

    $add = function ($num1, $num2) {
        return $num1 + $num2;
    };

    $sub = function ($num1, $num2) {
        return $num1 - $num2;
    };

    $multiply = function ($num1, $num2) {
        return $num1 * $num2;
    };

    echo run_operation(3, 5, $add);
    echo '<br>';
    echo run_operation(3, 5, $sub);
    echo '<br>';
    echo run_operation(3, 5, $multiply);

    ?>


    <hr>

    <pre>

    <?php

    $arr = [
        'a', 'b', 'c',
        23 => '23',
        50 => 44,
        'd', 'e', 'f',
        0 => true,
        'name' => 'daniel',
        'g', 'h', 'i',
        554 => 44.34,
    ];

    var_export($arr);
    echo '<br>';
    echo $arr[23];

    echo '<br>';
    $arr[50] = 88;
    $arr[52] = "created";
    $arr[] = 'after the highest index';
    $arr['email'] = 'd@gmail.com';

    var_export($arr);

    echo '<br>';
    unset($arr[50]);

    var_export($arr);



    $users = [
        'daniel' => [
            'age' => 23,
            'email' => 'd@gmail.com'
        ],
        'shalom' => [
            'age' => 23,
            'email' => 'd@gmail.com',
            'city' => 'tlv'
        ],
        'lora' => [
            'age' => 23,
            'email' => 'd@gmail.com',
        ],
    ];


    $name = "daniel";
    $daniel = "my name is";




    ?>
</pre>

    <ul>
        <?php foreach ($users as $name => $information) : ?>
            <li>
                <?= $name; ?>
                <ul>
                    <?php foreach ($information as $info_key => $info_value) : ?>
                        <li><?= $info_key; ?>: <?= $info_value; ?></li>
                    <?php endforeach; ?>
                </ul>
            </li>
        <?php endforeach; ?>
    </ul>
</body>

</html>