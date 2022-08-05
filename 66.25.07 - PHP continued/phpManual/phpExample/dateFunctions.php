<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Date Functions</title>
</head>

<body>
    <h1>Date Functions</h1>

    <br><br>
    <h2>time</h2>
    <p>
        returns unix time
    </p>
    <pre>
        <code>
            &lt;?php
            echo time();
            ?&gt;
        </code>
    </pre>
    <p>
        <b>Output:</b><br>
        <?php
        echo time();
        ?>
    </p>

    <br><br>
    <h2>date</h2>
    <p>
        Formats unix time into readable string
    </p>
    <pre>
        <code>
            &lt;?php

            ?&gt;
        </code>
    </pre>
    <p>
        <b>Output:</b><br>
        <?php
        define('WEEK_SECONDS', 7 * 24 * 60 * 60);
        echo date('d/m/Y H:i:s', time() + WEEK_SECONDS);
        ?>
    </p>

    <br><br>
    <h2>date</h2>
    <p>
        Extracts unix time from readable string
    </p>
    <pre>
        <code>
            &lt;?php

            ?&gt;
        </code>
    </pre>
    <p>
        <b>Output:</b><br>
        <?php
        $readable_date =  date('d/m/Y H:i:s', time() + WEEK_SECONDS);
        echo strtotime($readable_date);
        ?>
    </p>
</body>

</html>