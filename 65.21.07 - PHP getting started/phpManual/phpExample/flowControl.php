<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flow Control Statements</title>
</head>

<body>
    <h1>Flow Control Statements</h1>
    <p>
        <a href="https://www.php.net/manual/en/language.control-structures.php">Reference</a>
    </p>


    <br><br>
    <h2>if(CONDITION){}</h2>
    <p>
    <pre>
            <code>
                &lt;?php 
                if(CONDITION) {
                    // do if true
                }
                ?&gt;
            </code>
            <br>
            <code>
                &lt;?php 
                if(CONDITION) {
                    // do if true
                } else {
                    // do if false
                }
                ?&gt;
            </code>
            <br>
            <code>
                &lt;?php 
                if(CONDITION) {
                    // do if true
                } elseif(CONDITION) {
                    // do if first is false and second is true
                } else if(CONDITION) {
                    // do if first is false and second is false and third is true
                } else {
                    // do if all are false
                }
                ?&gt;
            </code>
        </pre>
    </p>

    <br><br>
    <h2>Ternary (CONDITION ? valueIfTrue : valueIfFalse)</h2>
    <p>
    <pre>
            <code>
                &lt;?php 
                $ifTrue = "value in case of true";
                $ifFalse = "value in case of false"
                $condition = 5>6

                echo condition ? $ifTrue : $ifFalse; 
                ?&gt;
            </code>
        </pre>
    </p>

    <br><br>
    <h2>Loops</h2>
    <p>
    <pre>
            <code>
                &lt;?php 
                while(CONDITION) {
                    // do as long as CONDITION is true
                }
                ?&gt;
            </code>
            <br>
            <code>
                &lt;?php 
                do {
                    // do once and then do as long as CONDITION is true
                } while(CONDITION)
                ?&gt;
            </code>
            <br>
            <code>
                &lt;?php 
                for($i = 0 ; $i < 10 ; $i++) {
                    // do as long condition is true
                    // perform third part between each iteration
                }
                ?&gt;
            </code>
            <br>
            <code>
                &lt;?php 
                foreach($arr as $value) {
                    // do for every value in the array
                }
                ?&gt;
            </code>
            <br>
            <code>
                &lt;?php 
                foreach($arr as $key => $value) {
                    // do for every value in the array
                }
                ?&gt;
            </code>
        </pre>
    </p>

    <br><br>
    <h2>Switch</h2>
    <p>
    <pre>
            <code>
                &lt;?php 
                switch($valueToCheckAgainst) {
                    case VALUE:
                        // do if $valueToCheckAgainst is equal to VALUE;
                        break; // stop code from running once case is true
                    case VALUE:
                        // do if $valueToCheckAgainst is equal to VALUE;
                        break; // stop code from running once case is true
                    default: 
                        // default value in case $valueToCheckAgainst doesn't equal to any of the cases
                }
                ?&gt;
            </code>
    </p>

    <br><br>
    <h2>Alternative Syntax</h2>
    <p>
    <pre>
            <code>
            &#x3C;?php for ($i = 0; $i &#x3C; 10; $i++) <b style="color: red;">:</b> ?&#x3E;
                &#x3C;div&#x3E;$i is now &#x3C;?= $i ?&#x3E;&#x3C;/div&#x3E;
            &#x3C;?php <b style="color: red;">endfor;</b> ?&#x3E;
            </code>
    </p>
    <p>
        <b>Output:</b><br>
        <?php for ($i = 0; $i < 10; $i++) : ?>
                    <div>$i is now <?= $i ?></div>
        <?php endfor; ?>
    </p>


    <?php 
    for($i = 0  ; $i  <10 ; $i++){
        echo '<div>$i is now ' . $i . '</div>';
    }
    ?>


</body>

</html>