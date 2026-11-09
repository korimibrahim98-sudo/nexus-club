
document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.querySelector("#menuToggle, .menu-toggle");
    const navMenu = document.querySelector("#navMenu, .nav-menu");

    if (!menuToggle || !navMenu) return;

    function openMenu() {
        navMenu.classList.add("open");
        menuToggle.classList.add("active");
        menuToggle.setAttribute("aria-expanded", "true");
    }

    function closeMenu() {
        navMenu.classList.remove("open");
        menuToggle.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
    }

    // Open and close using the three-lines button
    menuToggle.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();

        if (navMenu.classList.contains("open")) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    // Keep clicks inside the menu from triggering outside-click
    navMenu.addEventListener("click", (event) => {
        event.stopPropagation();

        if (event.target.closest("a")) {
            closeMenu();
        }
    });

    // Close when clicking anywhere outside
    document.addEventListener("click", () => {
        closeMenu();
    });

    // Close with Escape
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeMenu();
        }
    });

});
