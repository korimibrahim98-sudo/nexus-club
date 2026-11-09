
/* =========================================
   NEXUS UNIVERSITY CLUB
   Navigation Controller
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    // Get all navigation links
    const navLinks = document.querySelectorAll(".nav-links a");

    // Mobile Menu
    if (menuToggle && navMenu) {

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

        function toggleMenu() {
            const isOpen = navMenu.classList.contains("open");

            if (isOpen) {
                closeMenu();
            } else {
                openMenu();
            }
        }

        // Toggle button
        menuToggle.addEventListener("click", (event) => {
            event.stopPropagation();
            toggleMenu();
        });

        // Close after clicking a link
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                closeMenu();
            });
        });

        // Close when clicking outside
        document.addEventListener("click", (event) => {
            if (
                !navMenu.contains(event.target) &&
                !menuToggle.contains(event.target)
            ) {
                closeMenu();
            }
        });

        // Close with Escape key
        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                closeMenu();
            }
        });

    }

    // Highlight current page
    const currentPage = window.location.pathname.split("/").pop();

    navLinks.forEach(link => {

        const href = link.getAttribute("href");

        if (!href) return;

        const linkPage = href.split("/").pop();

        if (linkPage === currentPage) {
            navLinks.forEach(item => {
                item.classList.remove("active");
            });

            link.classList.add("active");
        }

    });

});
