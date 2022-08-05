<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Echo v.s. Print</title>
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
    <h1>Echo v.s. Print</h1>

    <br><br>
    <h2>Echo Statement</h2>
    <p>
        Echo is a statement which is newer than print <br>
        It is considered faster than print function and can output few values at once <br>
        Because it is a statement parenthesis are not allowed.
    </p>

    <b>Examples:</b> <br>
    <ul>
        <li>echo "hello", "other value", 45, true</li>
        <li>echo "hello"</li>
        <li>echo 45</li>
        <li>echo true</li>
    </ul>

    <br><br>
    <h2>Print Function</h2>
    <p>
        Print is a function which doesn't require parenthesis. <br>
        Print can only output one value at a time, and returns 1 on successful output.
    </p>

    <b>Examples:</b> <br>
    <ul>
        <li>print "hello" ==> returns 1</li>
        <li>print 2.2 ==> returns 1</li>
        <li>print("hello") ==> returns 1</li>
        <li>print(23.4) ==> returns 1</li>
    </ul>


    <br><br>
    <h2>sprintf() vs printf()</h2>
    <p>
        <a href="https://www.php.net/manual/en/function.printf">printf() Reference</a>
        <a href="https://www.php.net/manual/en/function.sprintf">sprintf() Reference</a>
    </p>

    <p>
        will allow to print a string with formatted data
        <br>
        printf() - formatts a string and prints it
        <br>
        sprintf() - formats a string and returns a string after the formatting without printing
    </p>
    <pre>


    <?php

    $protocol = 'http';
    $port = 8888845.55555;

    $format = 'Request to %2$s protocol on port %1$d';

    $a =  sprintf('%1$f - %1$d - %1$b - %1$x - %1$X - %2$s ', $port, $protocol);
    echo $a;
    echo '<br>';
    echo sprintf('%d %s ', $port, $protocol);
    echo '<br>';
    echo sprintf('%1$d %2$s ', $port, $protocol);
    echo '<br>';
    echo sprintf('%1$\'655.20f %2$s ', $port, $protocol);
    echo '<br>';
    printf('%.3f', 44);


    ?>

</pre>

    <br><br>
    <h2>Print V.S. Echo</h2>
    <table>
        <thead>
            <th>
                Echo
            </th>
            <th>
                Print
            </th>
        </thead>
        <tbody>
            <tr>
                <td>Is a statement</td>
                <td>Is a function</td>
            </tr>
            <tr>
                <td>Newer</td>
                <td>Older</td>
            </tr>
            <tr>
                <td>Faster</td>
                <td>Slower</td>
            </tr>
            <tr>
                <td>Outputs one or more values</td>
                <td>Outputs only one value</td>
            </tr>
            <tr>
                <td> - </td>
                <td>Returns 1 on success</td>
            </tr>
            <tr>
                <td>Parenthesis are not allowed</td>
                <td>Parenthesis can be used or not</td>
            </tr>
        </tbody>
    </table>
</body>

</html>