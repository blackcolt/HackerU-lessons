<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Functions</title>
</head>

<body>
    <h1>Functions</h1>
    <p>
        Functions are case insensitive <br>
        Functions can be called before it is created <br>
        The name must follow the following rules:
    </p>
    <ul>
        <li>only alphanumeric and underscore ([a-zA-Z0-9_])</li>
        <li>cannot start with digit</li>
        <li>GIVE A FUNCTION A NAME WHICH IMPLIES IT'S PROCESS!!</li>
        <li>use snake case (my_var_name)</li>
    </ul>



    <br><br>
    <h2>Function Syntax</h2>
    <p>
    <pre>
            <code>
                &lt;?php
                name_of_function();
        
                function name_of_function()
                {
                    echo "hello from function &lt;br&gt;";
                }

                name_of_function();
                Name_OF_FUnction();
                ?&gt;
            </code>
        </pre>
    </p>
    <p>
        <b>Output:</b><br>
        <?php
        name_of_function();

        function name_of_function()
        {
            echo "hello from function <br>";
        }

        name_of_function();
        Name_OF_FUnction();
        ?>
    </p>

    <br><br>
    <h2>Global and Local Scope</h2>
    <p>
        Global scope is anything out of the function's scope. <br>
        Local scope is anything within the function's scope. <br>
        Local scope cannot access global scope unless passed by argument or with the use of "global" keyword <br>
        Global scope cannot access local scope unless passed from function with "return" keyword. <br>

    </p>

    <p>
    <pre>
            <code>
            &#x3C;?php
            $x = 10;
            $y = 20;

            function set_x($multiply = 10, $another_value = &#x22;&#x22;)
            {
                $x = 5 * $multiply;
                // echo $y; // Warning: Undefined variable $y in 
                return $x;
            }

            $x_from_function = set_x();
            echo &#x22;global scope $x&#x3C;br&#x3E;from local scope of function with return $x_from_function&#x22;;


            // With global keyword
            echo &#x22;&#x3C;br&#x3E;&#x3C;br&#x3E;--------------- WITH GLOBAL KEYWORD ---------------&#x3C;br&#x3E;&#x22;;

            function set_x_with_global($multiply = 10, $another_value = &#x22;&#x22;)
            {

                global $x, $y;
                $x = 50;

                echo &#x22;from set_x_with_global function: &#x3C;br&#x3E;\$x is $x&#x3C;br&#x3E;\$y is $y&#x22;;
            }

            set_x_with_global();
            echo &#x22;&#x3C;br&#x3E;from global scope: &#x3C;br&#x3E;\$x is $x&#x3C;br&#x3E;\$y is $y&#x22;;
            ?&#x3E;
            </code>
        </pre>
    </p>
    <p>
        <b>Output:</b><br>
        <?php
        $x = 10;
        $y = 20;

        function set_x($multiply = 10, $another_value = "")
        {
            $x = 5 * $multiply;
            // echo $y; // Warning: Undefined variable $y in 
            return $x;
        }

        $x_from_function = set_x();
        echo "global scope $x<br>from local scope of function with return $x_from_function";


        // With global keyword
        echo "<br><br>--------------- WITH GLOBAL KEYWORD ---------------<br>";

        function set_x_with_global($multiply = 10, $another_value = "")
        {

            global $x, $y;
            $x = 50;

            echo "from set_x_with_global function: <br>\$x is $x<br>\$y is $y";
        }

        set_x_with_global();
        echo "<br>from global scope: <br>\$x is $x<br>\$y is $y";
        ?>
    </p>

    <br><br>
    <h2>Reference Argument</h2>
    <p>
        Set parameter to receive a variable's reference and not value. <br>
        Be aware if such parameter exists on a function you must pass to the function a VARIABLE as argument on same position.
    </p>
    <p>
    <pre>
            <code>
            &#x3C;?php
            echo &#x27;&#x3C;br&#x3E;&#x3C;br&#x3E;----------- WITH regular parameter&#x3C;br&#x3E;&#x27;;
            function swap($a, $b)
            {
                $temp = $a;
                $a = $b;
                $b = $temp;
                echo &#x22;from local scope without reference \$a: $a, \$b: $b&#x3C;br&#x3E;&#x22;;
            }

            $a = 50;
            $b = 100;

            swap($a, $b);
            echo &#x22;from global scope without reference \$a: $a, \$b: $b&#x3C;br&#x3E;&#x22;;

            echo &#x27;&#x3C;br&#x3E;&#x3C;br&#x3E;----------- WITH global&#x3C;br&#x3E;&#x27;;

            function swap_with_global()
            {
                global $a, $b;
                $temp = $a;
                $a = $b;
                $b = $temp;
                echo &#x22;from local scope without reference \$a: $a, \$b: $b&#x3C;br&#x3E;&#x22;;
            }

            $a = 50;
            $b = 100;

            swap_with_global($a, $b);
            echo &#x22;from global scope without reference \$a: $a, \$b: $b&#x3C;br&#x3E;&#x22;;

            echo &#x27;&#x3C;br&#x3E;&#x3C;br&#x3E;----------- WITH Reference&#x3C;br&#x3E;&#x27;;

            function swap_with_reference(&#x26;$a, &#x26;$b)
            {
                $temp = $a;
                $a = $b;
                $b = $temp;
                echo &#x22;from local scope with reference \$a: $a, \$b: $b&#x3C;br&#x3E;&#x22;;
            }

            $a = 50;
            $b = 100;

            swap_with_reference($a, $b);
            echo &#x22;from global scope with reference \$a: $a, \$b: $b&#x3C;br&#x3E;&#x22;;

            ?&#x3E;
            </code>
        </pre>
    </p>
    <p>
        <?php
        echo '<br><br>----------- WITH regular parameter<br>';
        function swap($a, $b)
        {
            $temp = $a;
            $a = $b;
            $b = $temp;
            echo "from local scope without reference \$a: $a, \$b: $b<br>";
        }

        $a = 50;
        $b = 100;

        swap($a, $b);
        echo "from global scope without reference \$a: $a, \$b: $b<br>";

        echo '<br><br>----------- WITH global<br>';

        function swap_with_global()
        {
            global $a, $b;
            $temp = $a;
            $a = $b;
            $b = $temp;
            echo "from local scope without reference \$a: $a, \$b: $b<br>";
        }

        $a = 50;
        $b = 100;

        swap_with_global($a, $b);
        echo "from global scope without reference \$a: $a, \$b: $b<br>";

        echo '<br><br>----------- WITH Reference<br>';

        function swap_with_reference(&$a, &$b)
        {
            $temp = $a;
            $a = $b;
            $b = $temp;
            echo "from local scope with reference \$a: $a, \$b: $b<br>";
        }

        $a = 50;
        $b = 100;

        swap_with_reference($a, $b);
        echo "from global scope with reference \$a: $a, \$b: $b<br>";

        ?>
    </p>

    <br><br>
    <h2>Anonymous Functions</h2>
    <p>
        An anonymous function must be held in a variable, and can be passed as any other variable
        <br>
        HOW ITS DIFFERENT
        <br>
        - is like a value
        <br>
        - no name
        <br>
        - instead of gloabl use keyword can be used

    </p>
    <p>
    <pre>
            <code>
            &#x3C;?php
            $a = function ($b, $c) {
                echo &#x22;from anonymous function.&#x3C;br&#x3E;\$b: $b, \$c: $c&#x3C;br&#x3E;&#x3C;br&#x3E;&#x22;;
            };

            $a(3, 3);

            echo &#x27;-------------- From Global&#x3C;br&#x3E;&#x27;;
            $a = 50;
            $b = 100;

            $fn1 = function () {
                global $a, $b;
                $temp = $a;
                $a = $b;
                $b = $temp;
                echo &#x22;within function \$a: $a, \$b: $b&#x3C;br&#x3E;&#x22;;
            };

            $fn1();
            echo &#x22;from global \$a: $a, \$b: $b&#x3C;br&#x3E;&#x22;;

            echo &#x27;&#x3C;br&#x3E;&#x3C;br&#x3E;-------------- From Global With use Keyword&#x3C;br&#x3E;&#x27;;
            $a = 50;
            $b = 100;

            $fn1 = function () use ($a, $b) {
                $temp = $a;
                $a = $b;
                $b = $temp;
                echo &#x22;within function \$a: $a, \$b: $b&#x3C;br&#x3E;&#x22;;
            };

            $fn1();
            echo &#x22;from global \$a: $a, \$b: $b&#x3C;br&#x3E;&#x22;;

            echo &#x27;&#x3C;br&#x3E;&#x3C;br&#x3E;-------------- From Global With use Keyword By Reference&#x3C;br&#x3E;&#x27;;
            $a = 50;
            $b = 100;

            $fn1 = function () use (&#x26;$a, &#x26;$b) {
                $temp = $a;
                $a = $b;
                $b = $temp;
                echo &#x22;within function \$a: $a, \$b: $b&#x3C;br&#x3E;&#x22;;
            };

            $fn1();
            echo &#x22;from global \$a: $a, \$b: $b&#x3C;br&#x3E;&#x22;;
            ?&#x3E;
            </code>
        </pre>
    </p>
    <p>
        <?php
        $a = function ($b, $c) {
            echo "from anonymous function.<br>\$b: $b, \$c: $c<br><br>";
        };

        $a(3, 3);

        echo '-------------- From Global<br>';
        $a = 50;
        $b = 100;

        $fn1 = function () {
            global $a, $b;
            $temp = $a;
            $a = $b;
            $b = $temp;
            echo "within function \$a: $a, \$b: $b<br>";
        };

        $fn1();
        echo "from global \$a: $a, \$b: $b<br>";

        echo '<br><br>-------------- From Global With use Keyword<br>';
        $a = 50;
        $b = 100;

        $fn1 = function () use ($a, $b) {
            $temp = $a;
            $a = $b;
            $b = $temp;
            echo "within function \$a: $a, \$b: $b<br>";
        };

        $fn1();
        echo "from global \$a: $a, \$b: $b<br>";

        echo '<br><br>-------------- From Global With use Keyword By Reference (&)<br>';
        $a = 50;
        $b = 100;

        $fn1 = function () use (&$a, &$b) {
            $temp = $a;
            $a = $b;
            $b = $temp;
            echo "within function \$a: $a, \$b: $b<br>";
        };

        $fn1();
        echo "from global \$a: $a, \$b: $b<br>";


        $fn1 = function () {
            return function ($a, $b) {
                return $a + $b;
            };
        }
        ?>
    </p>



</body>

</html>