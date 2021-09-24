let hover = document.getElementById("li-3");
let a = document.querySelector('.a');
let b = document.querySelector('.b');
let c = document.querySelector('.c');
let d = document.querySelector('.d');
// console.log(hover, dropdown);
hover.addEventListener("click", () => {
    a.classList.toggle("hidden")
    b.classList.toggle("hidden")
    c.classList.toggle("hidden")
    d.classList.toggle("hidden")
})