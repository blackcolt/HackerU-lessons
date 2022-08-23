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
    <title>Arrays</title>
</head>

<body>
    <h1>Arrays</h1>

    <br><br>
    <h2>Create Array</h2>
    <p>
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
            )
            ?&#x3E;
            </code>
        </pre>
    </p>
    <p>
        <b>Output:</b><br>
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
    </p>

    <br><br>
    <h2>Access Array</h2>
    <pre>
        <code>
        &#x3C;?php
        echo $array_constructor_key_value[0] . br();
        echo $array_constructor_key_value[554] . br();
        // echo $array_constructor_key_value[1] . br(); // Warning: Undefined array key 1 in
        ?&#x3E;
        </code>
    </pre>
    <p>
        <b>Output:</b><br>
        <?php
        echo $array_constructor_key_value[0] . br();
        echo $array_constructor_key_value[554] . br();
        // echo $array_constructor_key_value[1] . br(); // Warning: Undefined array key 1 in
        ?>
    </p>

    <br><br>
    <h2>Updating Array</h2>
    <p>
    <pre>
            <code>
            &#x3C;?php
            $array_constructor_key_value[0]  = &#x27;33&#x27;;
            ?&#x3E;
            </code>
        </pre>
    </p>
    <p>
        <b>Output:</b><br>
        <?php
        $array_constructor_key_value[0]  = '33';
        ?>
    </p>

    <br><br>
    <h2>Remove Elements from Array</h2>
    <p>
    <pre>
            <code>
            &#x3C;?php
            echo $array_constructor_key_value[0] . br();
            echo $array_constructor_key_value[554] . br();
            // echo $array_constructor_key_value[1] . br(); // Warning: Undefined array key 1 in
            ?&#x3E;
            </code>
        </pre>
    </p>
    <p>
        <b>Output:</b><br>
        <?php
        echo $array_constructor_key_value[0] . br();
        echo $array_constructor_key_value[554] . br();
        // echo $array_constructor_key_value[1] . br(); // Warning: Undefined array key 1 in
        ?>
    </p>

    <br><br>
    <h2>Updating Array</h2>
    <p>
    <pre>
            <code>
            &#x3C;?php
            $array_constructor_key_value[0]  = &#x27;33&#x27;;
            unset($array_constructor_key_value[0]);
            // echo $array_constructor_key_value[0]; // Warning: Undefined array key 0 in
            ?&#x3E;
            </code>
        </pre>
    </p>
    <p>
        <b>Output:</b><br>
        <?php
        $array_constructor_key_value[0]  = '33';
        unset($array_constructor_key_value[0]);
        // echo $array_constructor_key_value[0]; // Warning: Undefined array key 0 in
        ?>
    </p>

    <br><br>
    <h2>Add Elements to Array</h2>
    <p>
    <pre>
            <code>
            &#x3C;?php
            $array_constructor_key_value[0]  = &#x27;33&#x27;;
            unset($array_constructor_key_value[0]);
            // echo $array_constructor_key_value[0]; // Warning: Undefined array key 0 in
            ?&#x3E;
            </code>
        </pre>
    </p>
    <pre>
        <b>Output:</b><br>
        <?php
        br(1, true);
        var_export($array_short_value);

        $array_short_value[400] = 'new value';
        $array_short_value[] = 'new value in following index of the highest index';
        array_push($array_short_value, 'new value following', 'new value following 1', 'new value following 2');

        br(2, true);
        var_export($array_short_value);
        ?>
    </pre>

    <br><br>
    <h2>Associative Array</h2>
    <p>
    <pre>
            <code>
            &#x3C;?php
            $array_short_value[&#x27;associative1&#x27;] = &#x27;associative 1&#x27;;
            $associative_array = [
                &#x27;name&#x27; =&#x3E; &#x27;daniel&#x27;,
                &#x27;age&#x27; =&#x3E; 26,
                &#x27;email&#x27; =&#x3E; &#x27;daniel@gmail.com&#x27;
            ];

            var_export($array_short_value);
            br(2, true);
            var_export($associative_array);
            br(2, true);
            echo &#x27;&#x3C;h5&#x3E;&#x27; . $associative_array[&#x27;name&#x27;] . &#x27;&#x3C;/h5&#x3E;&#x27;;
            br(2, true);
            unset($associative_array[&#x27;name&#x27;]);
            var_export($associative_array);

            ?&#x3E;
            </code>
        </pre>
    </p>
    <pre>
        <b>Output:</b><br>
        <?php
        $array_short_value['associative1'] = 'associative 1';
        $associative_array = [
            'name' => 'daniel',
            'age' => 26,
            'email' => 'daniel@gmail.com'
        ];

        var_export($array_short_value);
        br(2, true);
        var_export($associative_array);
        br(2, true);
        echo '<h5>' . $associative_array['name'] . '</h5>';
        br(2, true);
        unset($associative_array['name']);
        var_export($associative_array);

        ?>
    </pre>

    <br><br>
    <h2>Loop Through Array</h2>
    <p>
    <pre>
            <code>
            &#x3C;?php
            $mixed_array = [
                1, 2, 3, 4, 5, 6, 7, 8, 9,
                100 =&#x3E; &#x27;this is another value 100&#x27;,
                200 =&#x3E; &#x27;this is another value 200&#x27;,
                300 =&#x3E; &#x27;this is another value 300&#x27;,
                400 =&#x3E; &#x27;this is another value 400&#x27;,
                500 =&#x3E; &#x27;this is another value 500&#x27;,
                &#x27;name&#x27; =&#x3E; &#x27;daniel&#x27;,
                &#x27;age&#x27; =&#x3E; 26,
                &#x27;email&#x27; =&#x3E; &#x27;daniel@gmial.com&#x27;
            ];

            echo br() . &#x27;----------- with for loop&#x27; . br();

            function print_array_ul_for_loop($arr)
            {
                echo &#x27;&#x3C;ul&#x3E;&#x27;;
                for ($i = 0; $i &#x3C; count($arr); $i++) {
                    echo &#x27;&#x3C;li&#x3E;&#x27; . $arr[$i] . &#x27;&#x3C;/li&#x3E;&#x27;;
                }
                echo &#x27;&#x3C;/ul&#x3E;&#x27;;
            }

            print_array_ul_for_loop($mixed_array);

            echo br(2) . &#x27;----------- with for loop advanced&#x27; . br();

            function print_array_ul_for_loop_advanced($arr)
            {

                $keys = array_keys($arr);
                echo br() . &#x27;running on keys:&#x27; . br();
                var_export($keys);
                echo br(2);

                echo &#x27;&#x3C;ul&#x3E;&#x27;;
                for ($i = 0; $i &#x3C; count($keys); $i++) {
                    echo &#x27;&#x3C;li&#x3E;&#x27; . $arr[$keys[$i]] . &#x27;&#x3C;/li&#x3E;&#x27;;
                }
                echo &#x27;&#x3C;/ul&#x3E;&#x27;;
            }

            print_array_ul_for_loop_advanced($mixed_array);

            echo br(2) . &#x27;----------- with foreach loop value only&#x27; . br();

            function print_array_ul_foreach_loop_value_only($arr)
            {
                echo &#x27;&#x3C;ul&#x3E;&#x27;;
                foreach ($arr as $value) {
                    echo &#x22;&#x3C;li&#x3E;$value&#x3C;/li&#x3E;&#x22;;
                }
                echo &#x27;&#x3C;/ul&#x3E;&#x27;;
            }

            print_array_ul_foreach_loop_value_only($mixed_array);

            echo br(2) . &#x27;----------- with foreach loop key value&#x27; . br();

            function print_array_ul_foreach_loop_key_value($arr)
            {
                echo &#x27;&#x3C;ul&#x3E;&#x27;;
                foreach ($arr as $key =&#x3E; $value) {
                    echo &#x22;&#x3C;li&#x3E;$key =&#x3E; $value&#x3C;/li&#x3E;&#x22;;
                }
                echo &#x27;&#x3C;/ul&#x3E;&#x27;;
            }

            print_array_ul_foreach_loop_key_value($mixed_array);

            ?&#x3E;
            </code>
        </pre>
    </p>
    <pre>
        <b>Output:</b><br>
        <?php
        $mixed_array = [
            1, 2, 3, 4, 5, 6, 7, 8, 9,
            100 => 'this is another value 100',
            200 => 'this is another value 200',
            300 => 'this is another value 300',
            400 => 'this is another value 400',
            500 => 'this is another value 500',
            'name' => 'daniel',
            'age' => 26,
            'email' => 'daniel@gmial.com'
        ];

        echo br() . '----------- with for loop' . br();

        function print_array_ul_for_loop($arr)
        {
            echo '<ul>';
            for ($i = 0; $i < count($arr); $i++) {
                echo '<li>' . $arr[$i] . '</li>';
            }
            echo '</ul>';
        }

        print_array_ul_for_loop($mixed_array);

        echo br(2) . '----------- with for loop advanced' . br();

        function print_array_ul_for_loop_advanced($arr)
        {

            $keys = array_keys($arr);
            echo br() . 'running on keys:' . br();
            var_export($keys);
            echo br(2);

            echo '<ul>';
            for ($i = 0; $i < count($keys); $i++) {
                echo '<li>' . $arr[$keys[$i]] . '</li>';
            }
            echo '</ul>';
        }

        print_array_ul_for_loop_advanced($mixed_array);

        echo br(2) . '----------- with foreach loop value only' . br();

        function print_array_ul_foreach_loop_value_only($arr)
        {
            echo '<ul>';
            foreach ($arr as $value) {
                echo "<li>$value</li>";
            }
            echo '</ul>';
        }

        print_array_ul_foreach_loop_value_only($mixed_array);

        echo br(2) . '----------- with foreach loop key value' . br();

        function print_array_ul_foreach_loop_key_value($arr)
        {
            echo '<ul>';
            foreach ($arr as $key => $value) {
                echo "<li>$key => $value</li>";
            }
            echo '</ul>';
        }

        print_array_ul_foreach_loop_key_value($mixed_array);
        ?>
    </pre>
</body>

</html>