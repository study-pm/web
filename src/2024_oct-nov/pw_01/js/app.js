import Math from "./math.js"

console.log("App");

document.getElementsByName("rectangleForm")[0].addEventListener("submit", (evt) => {
    evt.preventDefault();
    const res = Math.getRectangleArea(evt.target.height.value, evt.target.width.value);
    evt.target.result.value = res;
});

document.rectangleForm.addEventListener("reset", (evt) => {
    console.log("reset");
});

const inputs = document.rectangleForm.elements;

for (let i = 0; i < inputs.length; i++) {
    console.log(inputs[i]);
}

["height", "width"].forEach((n) => {
    document.rectangleForm[n].addEventListener("input", (evt) => {
        document.rectangleForm.result.value = "";
    })
});
