// ============== Show Scroll Arow ============

let arow = document.querySelector(".arow");

let height = document.documentElement.clientHeight;

window.onscroll = function () {
    if (window.scrollY > height - 300) {
        arow.classList.add("show");
    } else {
        arow.classList.remove("show");
    }
};

// ============== Dark Mode Switch ============

let toggleBtn = document.getElementById("toggleBtn");
let bodyEle = document.querySelector("body");
let darkMode = false;

toggleBtn.addEventListener("change", (ele) => {
    bodyEle.classList.toggle("dark");
});

// ============= Typing Effect =========
var typingEffect = new Typed(".title-t", {
    strings: ["a Front End Developer", "an Electrical Engineer"],
    loop: true,
    typeSpeed: 110,
    backSpeed: 90,
    backDelay: 2000,
});
