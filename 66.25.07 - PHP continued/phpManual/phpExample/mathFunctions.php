<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Math Functions</title>
</head>

<body>
    <h1>Math Functions</h1>
    <p>
        <a href="https://www.php.net/manual/en/ref.math.php">Reference</a>
    </p>

    <br><br>
    <h2>Absolute - abs(int | float $num)</h2>
    <p>
    <pre>
            <code>
            &#x3C;?php
            abs(-23);
            abs(-5.2);
            abs(23);
            abs(5.2);
            ?&#x3E;
            </code>
        </pre>
    </p>
    <p>
        <b>Output:</b> <br>
        <?= abs(-23); ?> <br>
        <?= abs(-5.2); ?> <br>
        <?= abs(23); ?> <br>
        <?= abs(5.2); ?> <br>
    </p>

    <br><br>
    <h2>Power - pow(number $base, number $ex): number</h2>
    <p>
    <pre>
            <code>
            &#x3C;?php
            pow(2, 2);
            pow(3, 2);
            pow(0, 2);
            pow(1, 2);
            ?&#x3E;
            </code>
        </pre>
    </p>
    <p>
        <b>Output:</b> <br>
        <?= pow(2, 2); ?> <br>
        <?= pow(3, 2); ?> <br>
        <?= pow(0, 2); ?> <br>
        <?= pow(1, 2); ?> <br>
    </p>

    <br><br>
    <h2>Square - sqrt(int | float $num)</h2>
    <p>
    <pre>
            <code>
            &#x3C;?php
            sqrt(81);
            sqrt(9);
            sqrt(16);
            sqrt(36);
            ?&#x3E;
            </code>
        </pre>
    </p>
    <p>
        <b>Output:</b> <br>
        <?= sqrt(81); ?> <br>
        <?= sqrt(9); ?> <br>
        <?= sqrt(16); ?> <br>
        <?= sqrt(36); ?> <br>
    </p>

    <br><br>
    <h2>Random Number - rand(int $min = 0, int $max = getrandmax()) : int</h2>
    <p>
    <pre>
            <code>
            &#x3C;?php
            rand();
            rand(9, 1000);
            rand(-100, -50);
            rand(20, 30);
            ?&#x3E;
            </code>
        </pre>
    </p>
    <p>
        <b>Output:</b> <br>
        <?= rand(); ?> <br>
        <?= rand(9, 1000); ?> <br>
        <?= rand(-100, -50); ?> <br>
        <?= rand(20, 30); ?> <br>
    </p>

    <h2>Ceil - round up</h2>
    <p>
    <pre>
            <code>
            &#x3C;?php
            ceil(2.8);
            ceil(2.5);
            ceil(2.2);
            ceil(2);
            ?&#x3E;
            </code>
        </pre>
    </p>
    <p>
        <b>Output:</b> <br>
        <?= ceil(2.8); ?> <br>
        <?= ceil(2.5); ?> <br>
        <?= ceil(2.2); ?> <br>
        <?= ceil(2); ?> <br>
    </p>

    <h2>Floor - round down</h2>
    <p>
    <pre>
            <code>
            &#x3C;?php
            floor(2.8);
            floor(2.5);
            floor(2.2);
            floor(2);
            ?&#x3E;
            </code>
        </pre>
    </p>
    <p>
        <b>Output:</b> <br>
        <?= floor(2.8); ?> <br>
        <?= floor(2.5); ?> <br>
        <?= floor(2.2); ?> <br>
        <?= floor(2); ?> <br>
    </p>

    <h2>Round - mathematic round (0.5+ up)</h2>
    <p>
    <pre>
            <code>
            &#x3C;?php
            round(2.8);
            round(2.5);
            round(2.2);
            round(2);
            ?&#x3E;
            </code>
        </pre>
    </p>
    <p>
        <b>Output:</b> <br>
        <?= round(2.8); ?> <br>
        <?= round(2.5); ?> <br>
        <?= round(2.2); ?> <br>
        <?= round(2); ?> <br>
    </p>
</body>

</html>