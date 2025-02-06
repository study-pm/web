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
        <ul id="task01">
            <?php
                $a1 = 5 + 3;
                $a2 = 5 - 3;
                echo '<li>a1 = 5 + 3 = <strong>' . $a1 . '</strong></li>';
                echo "<li>a2 = 5 - 3 = <strong>$a2</strong></li>";
            ?>
            <li>a4 = 5 / 3 = <strong><?= $a4 = 5 / 3 ?></strong></li>
        </ul>
    </main>
    <footer>
        <p>Build with PHP <?= phpversion() ?></p>
    </footer>
</body>
</html>
