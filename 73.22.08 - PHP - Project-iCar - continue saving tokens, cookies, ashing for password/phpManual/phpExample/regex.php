<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Regular Expressions</title>
</head>

<body>
    <h1>Regular Expressions</h1>

    <br><br>
    <h2>preg_replace</h2>
    <p>
        will search for a regular expression in a string and replace all occurrences to a selected string
    </p>
    <p>
    <pre>
            <code></code>
        </pre>
    </p>
    <p>
        <b>Output:</b><br>
        <code>
            <?php
            $numbers =  '43434asd2323dsf24sdf435dsfa32';
            $digit = preg_replace('/[a-zA-Z]+/', '-', $numbers);

            echo $digit;
            ?>
        </code>
    </p>

    <br><br>
    <h2>preg_match_all</h2>
    <p>
        will search for a regular expression in a string and replace all occurrences to a selected string
    </p>
    <p>
    <pre>
            <code></code>
        </pre>
    </p>
    <p>
        <b>Output:</b><br>
    <pre>
            <code>
                <?php
                $str = 'find! my,words and $%# 1_2_3 #in ***this !string!';
                $count_match = preg_match_all('/\w+/', $str, $words);

                echo 'Count Match: ' . $count_match . '<br>';
                var_export($words);

                ?>
            </code>
        </pre>
    </p>
</body>

</html>