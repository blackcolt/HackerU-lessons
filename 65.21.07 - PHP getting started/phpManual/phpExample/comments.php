<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Comments</title>
</head>

<body>
    <h1>PHP Comments</h1>

    <br><br>
    <h2>Single-line Comments</h2>
    <p>Single line comment start from either "//" or "#" till end of the line</p>
    <code>
        <pre>
        &lt;?php
        echo "hello"; // a comment till the end of the line
        echo "hello"; # a comment till the end of the line
        ?&gt; 
    </pre>
    </code>

    <br><br>
    <h2>Multi-line Comments</h2>
    <p>
        Multi-line comments start from "/*" till "*/" and can be spread on multiple lines.
    </p>

    <pre>
        <code>
            &lt;?php
            /**
            * multi-line comment
            */
            ?&gt;
        </code>
    </pre>

</body>

</html>