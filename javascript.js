let p;
function init() {
    p = document.getElementById("menu");
    p.addEventListener("mouseover", over);
    p.addEventListener("mouseout", out);
}
function over() {
    p.style.backgroundColor= "#1E3269";
}
function out() {
    p.style.backgroundColor= "#3C467D";
}