<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Data Types</title>
</head>

<body>
    <h1>PHP Data Types</h1>
    <p>
        <a href="https://www.php.net/manual/en/language.types.intro.php">REFERENCES</a>
    </p>

    <br><br>
    <h2>Scalar</h2>
    <p>
        Scalar values are values which holds a single value. <br>
        and includes the followings:
    </p>
    <ul>
        <li>
            <b>String (a.k.a string)</b> - "str" / 'str' / &lt;&lt;EOT / &lt;&lt'EOT'
        </li>
        <li>
            <b>Integer (a.k.a. int)</b> - 44 / 23 / 58 ...
        </li>
        <li>
            <b>Float (a.k.a float, double)</b> - 2.3 / 44.3 / 43.0 ...
        </li>
        <li>
            <b>Boolean (a.k.a bool)</b> - true / false
        </li>
    </ul>

    <br><br>
    <h2>Compound</h2>
    <p>
        Compound values are values which groups several other scalar or compound values. <br>
        and includes the followings:
    </p>
    <ul>
        <li>Array</li>
        <li>Object</li>
        <li>Callable</li>
        <li>Iterable</li>
    </ul>

    <br><br>
    <h2>Special Types</h2>
    <ul>
        <li>Resource</li>
        <li>NULL</li>
    </ul>

    <br><br>
    <h2>Functions to Check the Value Type (is_***)</h2>
    <p>
        <a href="https://www.php.net/manual/en/function.gettype.php">REFERENCE</a>
    </p>
    <ul>
        <li>is_int(VALUE) / is_integer(VALUE) - is of type integer</li>
        <li>is_numeric(VALUE) - is of type integer/float/string with numbers at the beginning</li>
        <li>is_string(VALUE) - is of type string</li>
        <li>is_float(VALUE) - is of type float</li>
        <li>is_scalar(VALUE) - is of any types of scalar values</li>
        <li>is_bool(VALUE) - is of type boolean</li>
        <li>is_null(VALUE) - is of type null</li>
    </ul>

</html>