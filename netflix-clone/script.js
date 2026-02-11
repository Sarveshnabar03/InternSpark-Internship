window.addEventListener("scroll", function() {
    const nav = document.querySelector(".navbar");
    nav.style.background = window.scrollY > 50 ? "black" : "transparent";
});
