
document.addEventListener("DOMContentLoaded", () => {

    // Select every element that should appear on scroll
    const revealElements = document.querySelectorAll(".reveal");

    // Fallback for browsers without IntersectionObserver
    if (!("IntersectionObserver" in window)) {
        revealElements.forEach(element => {
            element.classList.add("revealed");
        });
        return;
    }

    const observer = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("revealed");
                observer.unobserve(entry.target);
            }

        });

    }, {
        threshold: 0.08
    });

    revealElements.forEach(element => {
        observer.observe(element);
    });

});
