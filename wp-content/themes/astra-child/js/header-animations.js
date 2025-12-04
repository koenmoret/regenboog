document.addEventListener("DOMContentLoaded", function () {
    const headerBar = document.querySelector(".ast-primary-header-bar");

    if (headerBar) {
        gsap.to(headerBar, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out"
        });
    }
});
