<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Practical Work 01 (PHP)</title>
    <link rel="shortcut icon" href="#">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,100..1000&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./css/styles.css">
</head>
<body>
    <header></header>
    <main>
        <aside></aside>
        <article>
            <section>
                <h1>Practical Work 01</h1>

                <h2 name="task_01">Task 01</h2>
                <ul>
                    <?php
                        $a1 = 5 + 3;
                        $a2 = 5 - 3;
                        echo '<li>a1 = 5 + 3 = <strong>' . $a1 . '</strong></li>';
                        echo "<li>a2 = 5 - 3 = <strong>$a2</strong></li>";
                    ?>
                    <li>a3 = 5 * 3 = <strong><?= $a3 = 5 * 3 ?></strong></li>
                    <li>a4 = 5 / 3 = <strong><?= $a4 = 5 / 3 ?> ≈ <?= round($a4, 2) ?></strong></li>
                </ul>

                <h2 name="task_02">Task 02</h2>
                <ul>
                    <li>a6 = 5 % 3 = <strong><?= $a6 = 5 % 3 ?></strong></li>
                    <li>a7 = 3 % 5 = <strong><?= $a7 = 3 % 5 ?></strong></li>
                    <li>a8 = 5 + '3' = <strong><?= $a8 = 5 + '3' ?></strong></li>
                    <li>a9 = '5' - 3 = <strong><?= $a9 = '5' - 3 ?></strong></li>
                    <li>a10 = 75 + 'кг' = this would give <strong>Fatal error: Uncaught TypeError: Unsupported operand types</strong></li>
                    <li>a10 = 75 . 'кг' = <strong><?= $a10 = 75 . 'кг' ?></strong></li>
                </ul>

                <?php
                    function calculateArea($h, $w) {
                        return $h * $w;
                    };

                    $calcArea = function ($h, $w) {
                        return $h * $w;
                    };

                    $getArea = fn($h, $w) => $h * $w;

                    if(isset($_POST['submit_btn'])) {
                        //@TODO: Validate form data
                        // Possibly make Rectangle class, fill in with input, trigger the GetArea method

                        $height = $_POST["height"];
                        $width = $_POST["width"];

                        $result = calculateArea($height, $width);
                        $result = $calcArea($height, $width);
                        $result = $getArea($height, $width);
                    }
                    else if(isset($_POST['reset_btn'])) {
                        $height = "";
                        $width = "";

                        $result = "";
                    }
                    else {
                    // Display the Form and the Submit Button
                    }
                ?>

                <h2 name="task_03">Task 03</h2>
                <!-- <form name="rectangleForm" action="/area.php" method="POST"> -->
                <!-- <form name="rectangleForm" action="/area" method="POST"> -->
                <!-- Redirection to the same page -->
                <!-- <form name="rectangle_form" action="<?=$_SERVER['PHP_SELF'];?>" method="POST"> -->
                <a name="form_submit"></a>
                <form class="width_narrow" name="rectangle_form" action="#form_submit" method="POST">
                    <fieldset name="form_in">
                        <legend>Rectangle Area Calculation</legend>
                        <label>
                            <p>Height</p>
                            <input type="number" name="height" placeholder="must be a valid number"
                                step="any" required
                                value="<?= isset($height) ? $height : ""; ?>"
                                />
                        </label>
                        <label>
                            <p>Width</p>
                            <input type="number" name="width" placeholder="must be a valid number"
                                step="any" required
                                value="<?= isset($width) ? $width : ""; ?>"
                                />
                        </label>
                    </fieldset>

                    <fieldset name="form_ctl">
                        <input type="submit" name="submit_btn" value="Area" />
                        <input type="reset" name="reset_btn" value="Clear" />
                        <!-- <input type="submit" name="reset_btn" value="Clear" formaction="reset.php"> /> -->
                    </fieldset>

                    <fieldset name="form_out"
                              class="border_on <?= isset($result) ? "" : "type_hidden"; ?>"
                    >
                        <legend>Result</legend>
                        <output name="result_out" for="height width">
                            <?= isset($result) ? $result : ""; ?>
                        </output>
                    </fieldset>
                </form>
            </section>
        </article>
        <aside></aside>
    </main>
    <footer>
        <p class="font-size_small">Build with PHP <?= phpversion() ?></p>
    </footer>
    <script>
        rectangle_form.addEventListener("reset", (evt) => {
            evt.preventDefault(); // Disable resetting to php-defined defaults
            Array.from(evt.target.form_in.elements).forEach(el => el.value = "");
            evt.target.form_out.classList.toggle("type_hidden");
            // Alternative way
            document.location.href="";
        });
    </script>
</body>
</html>
