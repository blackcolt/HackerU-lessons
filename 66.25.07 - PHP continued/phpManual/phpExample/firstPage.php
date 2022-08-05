<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />
</head>

<body>


    <div class="container">
        <div class="row">
            <div class="col">
                <h2>PHP Tags</h2>
                <ul>
                    <li>
                        <span class="fw-bold">Standard Tag:</span> &lt;?php <i>SOME_PHP_CODE ?&gt;</i>
                    </li>
                    <li>
                        <span class="fw-bold">Short Tag:</span> &lt;?= <i>SOME_VALUE_TO_ECHO ?&gt;</i>
                    </li>
                </ul>
            </div>
        </div>
        <div class="row">
            <span class="fw-bold my-4">Examples</span>


            <?php
            $name = "Daniel";
            echo "<h1>hello, $name from php with love xoxo</h1>";
            ?>

            <h2><?php echo $name; ?></h2>
            <h2><?= $name; ?></h2>



        </div>
    </div>
</body>

</html>