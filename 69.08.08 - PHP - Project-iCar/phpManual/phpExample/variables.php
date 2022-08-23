<?php
$title = 'PHP Variables';
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= $title; ?></title>
</head>

<body>
    <h1>PHP Variables</h1>

    <br><br>
    <h2>Regular Variable</h2>
    <p>
        Regular variable most common type of variable.
        Name must follow the following rules:
    </p>
    <ul>
        <li>only alphanumeric and underscore ([a-zA-Z0-9_])</li>
        <li>cannot start with digit</li>
        <li>GIVE A VARIABLE A NAME WHICH IMPLIES IT'S CONTENTS!!</li>
        <li>use snake case ($my_var_name)</li>
    </ul>

    <p>
        <b>Example:</b>
    <pre>
            <code>
                &#x3C;?php
                $name_for_var1 = &#x22;var1&#x22;;
                $name_for_var2 = 2;
    
                $a = $b = $c = 54;
                $name = "daniel";
                $greeting = "Welcome, $name!";
                echo "&#x3C;div&#x3E;&#x3C;b&#x3E;$greeting&#x3C;/b&#x3E;&#x3C;/div&#x3E;";
                ?&#x3E;
            </code>
        </pre>

    <b>Output:</b>
    <?php
    $name_for_var1 = "var1";
    $name_for_var2 = 2;

    $a = $b = $c = 54;

    $name = "daniel";
    $greeting = "Welcome, $name!";
    echo "<div><b>$greeting</b></div>";
    ?>
    </p>

    <br><br>
    <h2>Constant Variable</h2>
    <p>
        Constant variables cannot be changed, and are a little bit slower than normal variables.
        Name must follow the following rules:
    </p>
    <ul>
        <li>only alphanumeric and underscore ([a-zA-Z0-9_])</li>
        <li>cannot start with digit</li>
        <li>GIVE A VARIABLE A NAME WHICH IMPLIES IT'S CONTENTS!!</li>
        <li>use snake case all uppercase (MY_VAR_NAME)</li>
    </ul>

    <p>
        <b>Example:</b>
    <pre>
            <code>
                &#x3C;?php
                $name = &#x27;MY_CONSTANT_VARIABLE1&#x27;;
                $value = &#x27;MY_CONSTANT_VARIABLE1_VALUE&#x27;;
                define($name, $value);
                echo MY_CONSTANT_VARIABLE1;

                echo &#x27;&#x3C;br&#x3E;&#x27;;
                define(&#x27;SECONDS_IN_YEAR&#x27;, 365*24*60*60);
                echo &#x22;Amount of Seconds in A Year: &#x22; . SECONDS_IN_YEAR;
                ?&#x3E;
            </code>
        </pre>

    <b>Output:</b><br>
    <?php
    $name = 'MY_CONSTANT_VARIABLE1';
    $value = 'MY_CONSTANT_VARIABLE1_VALUE';
    define($name, $value);
    echo MY_CONSTANT_VARIABLE1;

    echo '<br>';
    define('SECONDS_IN_YEAR', 365 * 24 * 60 * 60);
    echo "Amount of Seconds in A Year: " . SECONDS_IN_YEAR;
    ?>
    </p>

    <br><br>
    <h2>Functions to Check and Change Variables State</h2>

    <h3>isset(VARIABLE) - check if variable exists and different of null</h3>
    <p>
    <pre>
            <code>
            $existVariable = null;
            $setWithValueVariable = 5;
            $setWithFalsyValue = 0;

            echo &#x27;isset($doesntExist) == &#x27; . (isset($doesntExist) ? &#x27;true&#x27; : &#x27;false&#x27;);
            echo &#x27;&#x3C;br&#x3E;&#x27;;
            echo &#x27;isset($existsVariable) == &#x27; . (isset($existsVariable) ? &#x27;true&#x27; : &#x27;false&#x27;);
            echo &#x27;&#x3C;br&#x3E;&#x27;;
            echo &#x27;isset($setWithValueVariable) == &#x27; . (isset($setWithValueVariable) ? &#x27;true&#x27; : &#x27;false&#x27;);
            echo &#x27;&#x3C;br&#x3E;&#x27;;
            echo &#x27;isset($setWithFalsyValue) == &#x27; . (isset($setWithFalsyValue) ? &#x27;true&#x27; : &#x27;false&#x27;);
            </code>
        </pre>
    </p>
    <p>
        <b>Output:</b><br>
        <?php
        $existVariable = null;
        $setWithValueVariable = 5;
        $setWithFalsyValue = 0;

        echo 'isset($doesntExist) == ' . (isset($doesntExist) ? 'true' : 'false');
        echo '<br>';
        echo 'isset($existsVariable) == ' . (isset($existsVariable) ? 'true' : 'false');
        echo '<br>';
        echo 'isset($setWithValueVariable) == ' . (isset($setWithValueVariable) ? 'true' : 'false');
        echo '<br>';
        echo 'isset($setWithFalsyValue) == ' . (isset($setWithFalsyValue) ? 'true' : 'false');
        ?>
    </p>

    <h3>unset(VARIABLE) - removes variable</h3>
    <p>
    <pre>
            <code>
            $setWithValueVariable = 5;
        $setWithFalsyValue = 0;


        unset($setWithValueVariable);
        unset($setWithFalsyValue);

        echo 'isset($setWithValueVariable) == ' . (isset($setWithValueVariable) ? 'true' : 'false');
        echo '<br>';
        echo 'isset($setWithFalsyValue) == ' . (isset($setWithFalsyValue) ? 'true' : 'false');
            </code>
        </pre>
    </p>
    <p>
        <b>Output:</b><br>
        <?php
        $setWithValueVariable = 5;
        $setWithFalsyValue = 0;


        unset($setWithValueVariable);
        unset($setWithFalsyValue);

        echo 'isset($setWithValueVariable) == ' . (isset($setWithValueVariable) ? 'true' : 'false');
        echo '<br>';
        echo 'isset($setWithFalsyValue) == ' . (isset($setWithFalsyValue) ? 'true' : 'false');

        ?>
    </p>

    <h3>empty(VARIABLE) - check if variable exists and different of null or any other falsy value</h3>
    <p>
    <pre>
            <code>
            $existVariable = null;
            $setWithValueVariable = 5;
            $setWithFalsyValue = 0;

            echo &#x27;empty($doesntExist) == &#x27; . (empty($doesntExist) ? &#x27;true&#x27; : &#x27;false&#x27;);
            echo &#x27;&#x3C;br&#x3E;&#x27;;
            echo &#x27;empty($existsVariable) == &#x27; . (empty($existsVariable) ? &#x27;true&#x27; : &#x27;false&#x27;);
            echo &#x27;&#x3C;br&#x3E;&#x27;;
            echo &#x27;empty($setWithValueVariable) == &#x27; . (empty($setWithValueVariable) ? &#x27;true&#x27; : &#x27;false&#x27;);
            echo &#x27;&#x3C;br&#x3E;&#x27;;
            echo &#x27;empty($setWithFalsyValue) == &#x27; . (empty($setWithFalsyValue) ? &#x27;true&#x27; : &#x27;false&#x27;);
            </code>
        </pre>
    </p>
    <p>
        <b>Output:</b><br>
        <?php
        $existVariable = null;
        $setWithValueVariable = 5;
        $setWithFalsyValue = 0;

        echo 'empty($doesntExist) == ' . (empty($doesntExist) ? 'true' : 'false');
        echo '<br>';
        echo 'empty($existsVariable) == ' . (empty($existsVariable) ? 'true' : 'false');
        echo '<br>';
        echo 'empty($setWithValueVariable) == ' . (empty($setWithValueVariable) ? 'true' : 'false');
        echo '<br>';
        echo 'empty($setWithFalsyValue) == ' . (empty($setWithFalsyValue) ? 'true' : 'false');
        ?>
    </p>


</body>

</html>