<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First PHP Site</title>
</head>

<body>
    <h1>hello</h1>


    <?php
    /*
    comment 
    commnet 
    comment
    comment
    */
    echo "<h2>hello with php</h2>"; # comment
    echo "<p>hello again</p>"; // comment
    ?>

    <br>

    <?= "hello with shortend"; ?>
    <p>&lt;?php echo "hello with shorthand"; ?&gt;</p>

    <?php
    echo 'is_integer(55)&nbsp;&nbsp;&nbsp; => ' . (is_integer(55) ? "true" : "false");
    echo '<br>';
    echo 'is_int("444sss")&nbsp;&nbsp;&nbsp; => ' . (is_int("444sss") ? "true" : "false");
    echo '<br>';
    echo 'is_numeric(555)&nbsp;&nbsp;&nbsp; => ' . (is_numeric(555) ? "true" : "false");
    echo '<br>';
    echo 'is_numeric(5.555)&nbsp;&nbsp;&nbsp; => ' . (is_numeric(5.555) ? "true" : "false");
    echo '<br>';
    echo 'is_numeric(" 555 ")&nbsp;&nbsp;&nbsp; => ' . (is_numeric(" 555 ") ? "true" : "false");
    echo '<br>';
    echo 'is_numeric("aa555")&nbsp;&nbsp;&nbsp; => ' . (is_numeric("aa555") ? "true" : "false");
    echo '<br>';
    echo 'is_string("sdf")&nbsp;&nbsp;&nbsp; => ' . (is_string("sdf") ? "true" : "false");
    echo '<br>';
    echo 'is_float(6.3333)&nbsp;&nbsp;&nbsp; => ' . (is_float(6.3333) ? "true" : "false");
    echo '<br>';
    echo 'is_scalar(true)&nbsp;&nbsp;&nbsp; => ' . (is_scalar(true) ? "true" : "false");
    echo '<br>';
    echo 'is_scalar(false)&nbsp;&nbsp;&nbsp; => ' . (is_scalar(false) ? "true" : "false");
    echo '<br>';
    echo 'is_scalar(55)&nbsp;&nbsp;&nbsp; => ' . (is_scalar(55) ? "true" : "false");
    echo '<br>';
    echo 'is_scalar(55.222)&nbsp;&nbsp;&nbsp; => ' . (is_scalar(55.222) ? "true" : "false");
    echo '<br>';
    echo 'is_scalar("dsfasdf")&nbsp;&nbsp;&nbsp; => ' . (is_scalar("dsfasdf") ? "true" : "false");
    echo '<br>';
    echo 'is_bool(true)&nbsp;&nbsp;&nbsp; => ' . (is_bool(true) ? "true" : "false");
    echo '<br>';
    echo 'is_bool(false)&nbsp;&nbsp;&nbsp; => ' . (is_bool(false) ? "true" : "false");
    echo '<br>';
    echo 'is_null(null)&nbsp;&nbsp;&nbsp; => ' . (is_null(null) ? "true" : "false");
    echo '<br>';




    ?>




</body>

</html>