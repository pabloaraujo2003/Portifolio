function toggleMenu() {
    let menu = document.getElementById("menu");
    let body = document.body;
    
    menu.classList.toggle("active");
    body.classList.toggle("menu-open"); // Empurra o conteúdo
}

// Fecha o menu ao clicar fora dele
document.addEventListener("click", function (event) {
    let menu = document.getElementById("menu");
    let button = document.querySelector(".menu-toggle");

    if (!menu.contains(event.target) && !button.contains(event.target)) {
        menu.classList.remove("active");
        document.body.classList.remove("menu-open"); // Remove o ajuste do conteúdo
    }
});

// Fecha o menu ao clicar em um item
document.querySelectorAll("#menu ul li a").forEach(item => {
    item.addEventListener("click", () => {
        document.getElementById("menu").classList.remove("active");
        document.body.classList.remove("menu-open"); // Ajusta o conteúdo de volta
    });
});
