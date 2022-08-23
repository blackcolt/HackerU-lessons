<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercise</title>
</head>

<body>
    <ol>
        <li> show select of numbers</li>
        <li> ul with numbers only even</li>
        <li> ul with numbers even red odd blue</li>
    </ol>



    <br><br>
    <h1>1. show select of numbers</h1>
    <br>

    <select>
        <?php
        for ($i = 1; $i <= 10; $i++) {
            echo "<option value=\"$i\">$i</option>";
        }
        ?>
    </select>

    <br><br>

    <select>
        <?php for ($i = 1; $i <= 10; $i++) : ?>
            <option value="<?= $i; ?>"><?= $i; ?></option>
        <?php endfor; ?>
    </select>

    <br><br>
    <h1>2. ul with numbers only even</h1>
    <ul>
        <?php
        for ($i = 2; $i <= 10; $i += 2) {
            echo "<li>$i</li>";
        }
        ?>
    </ul>
    <ul>
        <?php for ($i = 2; $i <= 10; $i += 2) : ?>
            <li><?= $i; ?></li>
        <?php endfor; ?>
    </ul>

    <br>

    <ul>
        <?php
        for ($i = 1; $i <= 10; $i++) {
            if ($i % 2 === 0) {
                echo "<li>$i</li>";
            }
        }
        ?>
    </ul>

    <ul>
        <?php for ($i = 1; $i <= 10; $i++) : ?>
            <?php if ($i % 2 === 0) : ?>
                <li><?= $i; ?></li>
            <?php endif; ?>
        <?php endfor; ?>
    </ul>


    <br></br>
    <h1>3. ul with numbers even red odd blue</h1>
    <ul>
        <?php
        for ($i = 1; $i <= 10; $i++) {
            $color = $i % 2 === 0 ? 'red' : 'blue';

            echo "<li style=\"background-color: $color\">$i</li>";
        }
        ?>
    </ul>




</body>

</html>