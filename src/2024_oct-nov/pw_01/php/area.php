<?php

// Validate form data

$height = $_POST["height"];
$width = $_POST["width"];

function getArea($h, $w) {
    return $h * $w;
}

$res = getArea($height, $width);

echo "Given the height of $height and width of $width, the area is " . round($res, 2);

?>
