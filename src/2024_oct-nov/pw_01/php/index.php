<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Practical Work 01 (PHP)</title>
    <link rel="shortcut icon" href="#">
    <link rel="stylesheet" href="./css/styles.css">
</head>
<body>
    <header></header>
    <main>
        <h1>Practical Work 01 Oh</h1>

        <h2 name="task_01">Task 01</h2>
        <ul>
            <?php
                $a1 = 5 + 3;
                $a2 = 5 - 3;
                echo '<li>a1 = 5 + 3 = <strong>' . $a1 . '</strong></li>';
                echo "<li>a2 = 5 - 3 = <strong>$a2</strong></li>";
            ?>
            <li>a3 = 5 * 3 = <strong><?= $a3 = 5 * 3 ?></strong></li>
            <li>a4 = 5 / 3 = <strong><?= $a4 = 5 / 3 ?></strong></li>
        </ul>

        <h2 name="task_02">Task 02</h2>
        <ul>
            <li>a6 = 5 % 3 = <strong><?= $a6 = 5 % 3 ?></strong></li>
            <li>a7 = 3 % 5 = <strong><?= $a7 = 3 % 5 ?></strong></li>
            <li>a8 = 5 + '3' = <strong><?= $a8 = 5 + '3' ?></strong></li>
            <li>a9 = '5' - 3 = <strong><?= $a9 = '5' - 3 ?></strong></li>
            <li>a10 = 75 + 'кг' = would give <strong>Fatal error: Uncaught TypeError: Unsupported operand types</strong></li>
            <li>a10 = 75 . 'кг' = <strong><?= $a10 = 75 . 'кг' ?></strong></li>
        </ul>

        <h2 name="task_03">Task 03</h2>
        <form name="rectangleForm" action="/area.php" method="POST">
            <label>
                <p>Height</p>
                <input type="number" name="height" step="any" required />
            </label>
            <label>
                <p>Width</p>
                <input type="number" name="width" step="any" required />
            </label>
            <p class="buttons">
                <input type="submit" name="submitBtn" value="Area" />
                <input type="reset" name="resetBtn" value="Clear" />
            </p>
            <output name="result" for="height width"></output>
        </form>
    </main>
    <footer>
        <p>Build with PHP <?= phpversion() ?></p>
    </footer>
</body>
</html>
