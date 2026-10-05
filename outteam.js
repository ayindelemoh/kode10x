function toggleMenu(){
    const navbar = document.getElementById("navbar");
    const menuButton = document.getElementById("menu-toggle");
    const menuIcon = document.getElementById("menu-icon");
    const isOpen = navbar.classList.toggle("is-open");

    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    menuIcon.classList.toggle("fa-bars", !isOpen);
    menuIcon.classList.toggle("fa-xmark", isOpen);
}