<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Strings</title>
</head>

<body>
    <h1>PHP Data Types - String</h1>

    <br><br>
    <h2>Double Quote ("")</h2>
    <p>
        Double Quote is a little slower than single quote.
        It enables variable concatenation.
        Can use special characters (\r\n, \t)
    </p>
    <p>
        <b>Example:</b><br>
        <?php
        $stringValue = 'some string';
        echo "$stringValue, is printed";
        ?>
        <br>
        <?php
        // Escaping
        echo "escape double quote\" ", "<br>escape back-slash \\";
        ?>
    </p>

    <br><br>
    <h2>Single Quote ('')</h2>
    <p>
        Single Quote is a little faster than double quote.
        It does not enable variable concatenation.
        Can't use special characters (\r\n, \t)
    </p>
    <p>
        <b>Example:</b><br>
        <?php
        $stringValue = 'some string';
        echo '$stringValue, is printed';
        ?>
        <br>
        <?php
        // Escaping
        echo 'escape single quote\' ', '<br>escape back-slash \\\' \r\n hello';
        ?>
    </p>

    <br><br>
    <h2>HereDoc</h2>
    <p>
        It enables variable concatenation. <br>
        Can spread on multiple lines. <br>
        No need to escape '/" <br>
        Be aware to close the HereDoc with same indentation of the opening tag.
    </p>
    <p>
        <b>Example:</b><br>
        <?php
        $a = 32332;

        $stringValue = <<<EOT
        hello world! 
        ' just kidding. " also works without escaping.
        $a
        EOT;

        echo $stringValue;
        ?>
    </p>

    <br><br>
    <h2>NowDoc</h2>
    <p>
        It enables variable concatenation when used with "EOT". <br>
        It does not enable variable concatenation when used with 'EOT'. <br>
        Can spread on multiple lines. <br>
        No need to escape '/" <br>
        Be aware to close the HereDoc with same indentation of the opening tag.
    </p>
    <p>
        <b>Example:</b><br>
        <?php
        $a = 32332;

        $stringValue = <<<'EOT'
        hello world! 
        ' just kidding. " also works without escaping.
        $a
        EOT;

        echo $stringValue;

        $stringValue = <<<"EOT"
        hello world! 
        ' just kidding. " also works without escaping.
        $a
        EOT;

        echo $stringValue;
        ?>
    </p>
</body>

</html>