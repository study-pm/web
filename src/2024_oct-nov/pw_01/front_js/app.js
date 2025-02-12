import Math from "./js/math.js"

console.log("App");

document.getElementsByName("rectangle_form")[0].addEventListener("submit", (evt) => {
    evt.preventDefault(); // Disable reloading the page on form submit
    const res = Math.getRectangleArea(evt.target.height.value, evt.target.width.value);
    evt.target.result.value = res.toFixed(2);
    evt.target.form_out.classList.add("is_on");
    // evt.target.res.classList.toggle("is_on");
});

document.rectangle_form.addEventListener("reset", (evt) => {
    // evt.target.res.classList.toggle("is_on");
    evt.target.form_out.classList.remove("is_on");
});

document.rectangle_form.addEventListener("input", (evt) => {
    rectangle_form.form_out.classList.remove("is_on");
});

const inputs = document.rectangle_form.form_in.elements;

for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("input", (evt) => {
        console.log("in");
    })
}

["height", "width"].forEach((n) => {
    document.rectangle_form[n].addEventListener("input", (evt) => {
        // document.rectangleForm.res.classList.add("")
    })
});
