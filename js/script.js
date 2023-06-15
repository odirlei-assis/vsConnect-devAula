let menu = document.getElementById("menu_links");
let menu_barras = document.getElementById("menu_barras");

// let body = document.getElementById("body");
let body = document.getElementsByTagName("body")[0];

addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        menu.style.display = "flex"
    } else {
        menu.style.display = "none"
    }
});

function mostrarMenu (){
    if (window.getComputedStyle(menu).display == "none") {
        menu.style.display = "flex"
        menu_barras.setAttribute("aria-label", "fechar menu")
        menu_barras.setAttribute("aria-expanded", "true")
        body.style.overflow = "hidden"
    }else{
        menu.style.display = "none"
        menu_barras.setAttribute("aria-label", "abrir menu")
        menu_barras.setAttribute("aria-expanded", "false")
        body.style.overflow = "auto";
    }
}