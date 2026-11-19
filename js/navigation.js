
/* =====================================
   NEXUS - Navigation Controller
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.querySelector(".navbar .menu-toggle");
    const navMenu = document.querySelector(".navbar .nav-menu");

    if (!menuToggle || !navMenu) return;

    // Open menu
    const openMenu = () => {
        navMenu.classList.add("open");
        menuToggle.classList.add("active");
        menuToggle.setAttribute("aria-expanded", "true");
    };

    // Close menu
    const closeMenu = () => {
        navMenu.classList.remove("open");
        menuToggle.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
    };

    // Toggle menu
    menuToggle.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();

        if (navMenu.classList.contains("open")) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    // Close immediately when touching a navigation link
    const handleNavigation = (event) => {
        const target = event.target;

        if (!(target instanceof Element)) return;

        const link = target.closest("a");

        if (link && navMenu.contains(link)) {
            closeMenu();
        }
    };

    // Before the click event (especially on mobile)
    navMenu.addEventListener(
        "pointerdown",
        handleNavigation,
        true
    );

    // Fallback for normal clicks
    navMenu.addEventListener(
        "click",
        handleNavigation,
        true
    );

    // Close when clicking outside
    document.addEventListener("click", (event) => {
        if (
            !navMenu.contains(event.target) &&
            !menuToggle.contains(event.target)
        ) {
            closeMenu();
        }
    });

    // Close with Escape
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeMenu();
        }
    });

    // Close when page loads or returns from cache
    window.addEventListener("pageshow", closeMenu);

    // Close when browser tab becomes hidden
    document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
            closeMenu();
        }
    });

    // Highlight current page
    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";

    document.querySelectorAll(".nav-links a").forEach(link => {

        const href = link.getAttribute("href");

        if (!href) return;

        const linkPage = href.split("/").pop().split("?")[0];

        if (linkPage === currentPage) {
            link.classList.add("active");
        }

    });

});
