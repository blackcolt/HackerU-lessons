<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Info</title>
</head>

<body>
    <h1>PHP Info</h1>

    <br><br>
    <h2>PHP Version</h2>
    <p>
    <pre>
            <code>
            &lt;?= phpversion(); ?&gt;
            </code>
        </pre>
    </p>
    <p>
        <b>Output:</b><br>
        <?= phpversion(); ?>
    </p>

    <br><br>
    <h2>PHP Info</h2>
    <p>
    <pre>
            <code>
            &lt;?php phpinfo(); ?&gt;
            </code>
        </pre>
    </p>
    <p>
        <b>Output:</b><br>
        <?php phpinfo(); ?>
    </p>
</body>

</html>