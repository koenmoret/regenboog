document.addEventListener("DOMContentLoaded", function () {

    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(".section-intro",
        {
            opacity: 0,
            y: 40
        },
        {
            opacity: 1,
            y: 0,
            ease: "none",
            scrollTrigger: {
                trigger: ".section-intro",
                start: "top 85%",
                end: "top 35%",
                scrub: true,
            }
        }
    );


});
