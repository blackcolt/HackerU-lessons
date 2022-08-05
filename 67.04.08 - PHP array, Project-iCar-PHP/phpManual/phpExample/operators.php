<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Operators</title>
    <style>
        table,
        th,
        td {
            border: 1px solid black;
            border-collapse: collapse;
            padding: 5px;
        }
    </style>
</head>

<body>
    <h1>PHP Operators</h1>
    <p>
        <a href="https://www.php.net/manual/en/language.operators.php" target="_blank">Reference</a>
    </p>


    <br><br>
    <h2>Arithmetic Operators</h2>
    <p>
        Operators for math
    </p>
    <table>
        <caption><strong>Arithmetic Operators</strong></caption>

        <thead>
            <tr>
                <th>Example</th>
                <th>Name</th>
                <th>Result</th>
            </tr>

        </thead>

        <tbody class="tbody">
            <tr>
                <td>+$a</td>
                <td>Identity</td>
                <td>
                    Conversion of <var class="varname">$a</var> to <span class="type">int</span> or
                    <span class="type">float</span> as appropriate.
                </td>
            </tr>

            <tr>
                <td>-$a</td>
                <td>Negation</td>
                <td>Opposite of <var class="varname">$a</var>.</td>
            </tr>

            <tr>
                <td>$a + $b</td>
                <td>Addition</td>
                <td>Sum of <var class="varname">$a</var> and <var class="varname">$b</var>.</td>
            </tr>

            <tr>
                <td>$a - $b</td>
                <td>Subtraction</td>
                <td>Difference of <var class="varname">$a</var> and <var class="varname">$b</var>.</td>
            </tr>

            <tr>
                <td>$a * $b</td>
                <td>Multiplication</td>
                <td>Product of <var class="varname">$a</var> and <var class="varname">$b</var>.</td>
            </tr>

            <tr>
                <td>$a / $b</td>
                <td>Division</td>
                <td>Quotient of <var class="varname">$a</var> and <var class="varname">$b</var>.</td>
            </tr>

            <tr>
                <td>$a % $b</td>
                <td>Modulo</td>
                <td>Remainder of <var class="varname">$a</var> divided by <var class="varname">$b</var>.</td>
            </tr>

            <tr>
                <td>$a ** $b</td>
                <td>Exponentiation</td>
                <td>Result of raising <var class="varname">$a</var> to the <var class="varname">$b</var>'th power.</td>
            </tr>

        </tbody>

    </table>


    <br><br>
    <h2>Arithmetic Assignment Operators</h2>
    <p>
        Assigns value based on the value of the variable itself
    </p>
    <table>

        <thead>
            <tr>
                <th>Example</th>
                <th>Equivalent</th>
                <th>Operation</th>
            </tr>

        </thead>

        <tbody>
            <tr>
                <td>$a += $b</td>
                <td>$a = $a + $b</td>
                <td>Addition</td>
            </tr>

            <tr>
                <td>$a -= $b</td>
                <td>$a = $a - $b</td>
                <td>Subtraction</td>
            </tr>

            <tr>
                <td>$a *= $b</td>
                <td>$a = $a * $b</td>
                <td>Multiplication</td>
            </tr>

            <tr>
                <td>$a /= $b</td>
                <td>$a = $a / $b</td>
                <td>Division</td>
            </tr>

            <tr>
                <td>$a %= $b</td>
                <td>$a = $a % $b</td>
                <td>Modulus</td>
            </tr>

            <tr>
                <td>$a **= $b</td>
                <td>$a = $a ** $b</td>
                <td>Exponentiation</td>
            </tr>

        </tbody>


    </table>
    <h3>Null Coalescing (??/ ??=)</h3>
    <p>
        An operator which will figure out whether the variable is set and return it if it does else will return the right hand value as default
    </p>
    <p>
    <pre>
            <code>
            &#x3C;?php
            // Example usage for: Null Coalesce Operator
            $action = $_POST[&#x27;action&#x27;] ?? &#x27;default&#x27;;

            // The above is identical to this if/else statement
            if (isset($_POST[&#x27;action&#x27;])) {
                $action = $_POST[&#x27;action&#x27;];
            } else {
                $action = &#x27;default&#x27;;
            }

            ?&#x3E;
            </code>
        </pre>
    </p>

    <h3>String Concatenation (./ .=)</h3>
    <p>Concatenates two or more strings into one</p>
    <p>
    <pre>
            <code>
            &#x3C;?php
            $greeting = &#x22;Welcome&#x22;;
            $name = &#x22;Daniel&#x22;;
            // echo &#x22;$greeting, $name!&#x22;;
            echo $greeting . &#x27;, &#x27; . $name . &#x27;!&#x27;;
            ?&#x3E;
            </code>
        </pre>

    </p>
    <p>
        <b>output:</b>
        <?php
        $greeting = "Welcome";
        $name = "Daniel";
        // echo "$greeting, $name!";
        echo $greeting . ', ' . $name . '!';
        ?>
    </p>

    <br><br>
    <h2>Comparison Operators</h2>
    <p>
        Operators to compare two values
    </p>
    <table>
        <caption><strong>Comparison Operators</strong></caption>

        <thead>
            <tr>
                <th>Example</th>
                <th>Name</th>
                <th>Result</th>
            </tr>

        </thead>

        <tbody class="tbody">
            <tr>
                <td>$a == $b</td>
                <td>Equal</td>
                <td><strong><code>true</code></strong> if <var class="varname">$a</var> is equal to <var class="varname">$b</var> after type juggling.</td>
            </tr>

            <tr>
                <td>$a === $b</td>
                <td>Identical</td>
                <td>
                    <strong><code>true</code></strong> if <var class="varname">$a</var> is equal to <var class="varname">$b</var>, and they are of the same
                    type.
                </td>
            </tr>

            <tr>
                <td>$a != $b</td>
                <td>Not equal</td>
                <td><strong><code>true</code></strong> if <var class="varname">$a</var> is not equal to <var class="varname">$b</var> after type juggling.</td>
            </tr>

            <tr>
                <td>$a &lt;&gt; $b</td>
                <td>Not equal</td>
                <td><strong><code>true</code></strong> if <var class="varname">$a</var> is not equal to <var class="varname">$b</var> after type juggling.</td>
            </tr>

            <tr>
                <td>$a !== $b</td>
                <td>Not identical</td>
                <td>
                    <strong><code>true</code></strong> if <var class="varname">$a</var> is not equal to <var class="varname">$b</var>, or they are not of the same
                    type.
                </td>
            </tr>

            <tr>
                <td>$a &lt; $b</td>
                <td>Less than</td>
                <td><strong><code>true</code></strong> if <var class="varname">$a</var> is strictly less than <var class="varname">$b</var>.</td>
            </tr>

            <tr>
                <td>$a &gt; $b</td>
                <td>Greater than</td>
                <td><strong><code>true</code></strong> if <var class="varname">$a</var> is strictly greater than <var class="varname">$b</var>.</td>
            </tr>

            <tr>
                <td>$a &lt;= $b</td>
                <td>Less than or equal to </td>
                <td><strong><code>true</code></strong> if <var class="varname">$a</var> is less than or equal to <var class="varname">$b</var>.</td>
            </tr>

            <tr>
                <td>$a &gt;= $b</td>
                <td>Greater than or equal to </td>
                <td><strong><code>true</code></strong> if <var class="varname">$a</var> is greater than or equal to <var class="varname">$b</var>.</td>
            </tr>

            <tr>
                <td>$a &lt;=&gt; $b</td>
                <td>Spaceship</td>
                <td>
                    An <span class="type">int</span> less than, equal to, or greater than zero when
                    <var class="varname">$a</var> is less than, equal to, or greater than
                    <var class="varname">$b</var>, respectively.
                </td>
            </tr>

        </tbody>

    </table>

    <h3>Spaceship Operator (<=>)</h3>
    <p>
        Use spaceship operator to compare two values. <br>
        If the left hand value is bigger than the right hand value returns 1. <br>
        If the right hand value is bigger than the left hand value returns -1 <br>
        If the values are equals returns 0.
    </p>
    <p>
    <pre>
                <code>
                &#x3C;?php 
                echo &#x27;1 &#x3C;=&#x3E; 1&#x27; . &#x27; ==&#x3E; &#x27; . (1 &#x3C;=&#x3E; 1) . &#x27;&#x3C;br&#x3E;&#x27;; 
                echo &#x27;12 &#x3C;=&#x3E; 1&#x27; . &#x27; ==&#x3E; &#x27; . (12 &#x3C;=&#x3E; 1) . &#x27;&#x3C;br&#x3E;&#x27;; 
                echo &#x27;1 &#x3C;=&#x3E; 12&#x27; . &#x27; ==&#x3E; &#x27; . (1 &#x3C;=&#x3E; 12) . &#x27;&#x3C;br&#x3E;&#x27;; 
                echo &#x27;&#x22;a&#x22; &#x3C;=&#x3E; &#x22;b&#x22;&#x27; . &#x27; ==&#x3E; &#x27; . (&#x22;a&#x22; &#x3C;=&#x3E; &#x22;b&#x22;) . &#x27;&#x3C;br&#x3E;&#x27;; 
                echo &#x27;&#x22;b&#x22; &#x3C;=&#x3E; &#x22;a&#x22;&#x27; . &#x27; ==&#x3E; &#x27; . (&#x22;b&#x22; &#x3C;=&#x3E; &#x22;a&#x22;) . &#x27;&#x3C;br&#x3E;&#x27;; 
                echo &#x27;&#x22;a&#x22; &#x3C;=&#x3E; &#x22;a&#x22;&#x27; . &#x27; ==&#x3E; &#x27; . (&#x22;a&#x22; &#x3C;=&#x3E; &#x22;a&#x22;) . &#x27;&#x3C;br&#x3E;&#x27;; 
                ?&#x3E;
                </code>
            </pre>
    </p>
    <p>
        <b>Output:</b>
        <?php
        echo '1 <=> 1' . ' ==> ' . (1 <=> 1) . '<br>';
        echo '12 <=> 1' . ' ==> ' . (12 <=> 1) . '<br>';
        echo '1 <=> 12' . ' ==> ' . (1 <=> 12) . '<br>';
        echo '"a" <=> "b"' . ' ==> ' . ("a" <=> "b") . '<br>';
        echo '"b" <=> "a"' . ' ==> ' . ("b" <=> "a") . '<br>';
        echo '"a" <=> "a"' . ' ==> ' . ("a" <=> "a") . '<br>';
        echo '"Alibaba" <=> "Zadok"' . ' ==> ' . ("Alibaba" <=> "Zadok") . '<br>';
        echo '"Alibaba" <=> "Aadok"' . ' ==> ' . ("Alibaba" <=> "Aadok") . '<br>';
        ?>
    </p>

    <br><br>
    <h2>Incrementing/Decrementing Operators (++/--)</h2>
    <table>
        <caption><strong>Increment/decrement Operators</strong></caption>

        <thead>
            <tr>
                <th>Example</th>
                <th>Name</th>
                <th>Effect</th>
            </tr>

        </thead>

        <tbody class="tbody">
            <tr>
                <td>++$a</td>
                <td>Pre-increment</td>
                <td>Increments <var class="varname">$a</var> by one, then returns <var class="varname">$a</var>.</td>
            </tr>

            <tr>
                <td>$a++</td>
                <td>Post-increment</td>
                <td>Returns <var class="varname">$a</var>, then increments <var class="varname">$a</var> by one.</td>
            </tr>

            <tr>
                <td>--$a</td>
                <td>Pre-decrement</td>
                <td>Decrements <var class="varname">$a</var> by one, then returns <var class="varname">$a</var>.</td>
            </tr>

            <tr>
                <td>$a--</td>
                <td>Post-decrement</td>
                <td>Returns <var class="varname">$a</var>, then decrements <var class="varname">$a</var> by one.</td>
            </tr>

        </tbody>

    </table>

    <br><br>
    <h2>Logical Operators</h2>
    <table>
        <caption><strong>Logical Operators</strong></caption>

        <thead>
            <tr>
                <th>Example</th>
                <th>Name</th>
                <th>Result</th>
            </tr>

        </thead>

        <tbody class="tbody">
            <tr>
                <td>$a and $b</td>
                <td>And</td>
                <td><strong><code>true</code></strong> if both <var class="varname">$a</var> and <var class="varname">$b</var> are <strong><code>true</code></strong>.</td>
            </tr>

            <tr>
                <td>$a or $b</td>
                <td>Or</td>
                <td><strong><code>true</code></strong> if either <var class="varname">$a</var> or <var class="varname">$b</var> is <strong><code>true</code></strong>.</td>
            </tr>

            <tr>
                <td>$a xor $b</td>
                <td>Xor</td>
                <td><strong><code>true</code></strong> if either <var class="varname">$a</var> or <var class="varname">$b</var> is <strong><code>true</code></strong>, but not both.</td>
            </tr>

            <tr>
                <td>! $a</td>
                <td>Not</td>
                <td><strong><code>true</code></strong> if <var class="varname">$a</var> is not <strong><code>true</code></strong>.</td>
            </tr>

            <tr>
                <td>$a &amp;&amp; $b</td>
                <td>And</td>
                <td><strong><code>true</code></strong> if both <var class="varname">$a</var> and <var class="varname">$b</var> are <strong><code>true</code></strong>.</td>
            </tr>

            <tr>
                <td>$a || $b</td>
                <td>Or</td>
                <td><strong><code>true</code></strong> if either <var class="varname">$a</var> or <var class="varname">$b</var> is <strong><code>true</code></strong>.</td>
            </tr>

        </tbody>

    </table>
</body>

</html>