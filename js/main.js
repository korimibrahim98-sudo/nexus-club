
/* =========================================
   NEXUS UNIVERSITY CLUB
   Main JavaScript
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    // Update footer year automatically
    const footerCopy = document.querySelector(".footer-copy");

    if (footerCopy) {

        const currentYear = new Date().getFullYear();

        footerCopy.textContent =
            `© ${currentYear} NEXUS University Club. جميع الحقوق محفوظة.`;

    }

    // Prevent empty links from jumping to the top
    document.querySelectorAll('a[href="#"]').forEach(link => {

        link.addEventListener("click", event => {
            event.preventDefault();
        });

    });

});
