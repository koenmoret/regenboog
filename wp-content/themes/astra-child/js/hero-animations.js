document.addEventListener("DOMContentLoaded", function () {

    const boog = document.querySelector(".hero-boog-anim");

    if (!boog) {
        console.warn("GSAP: .hero-boog-anim niet gevonden!");
        return;
    }

    gsap.fromTo(
        boog,
        {
            opacity: 0,
            rotate: 35,          // ➜ tegen de klok in starten
            scale: 0.85,
            y: -40,
            x: 80,
            transformOrigin: "100% 70%", // ➜ draaipunt
        },
        {
            opacity: 1,
            rotate: 0,           // ➜ eindpositie
            scale: 1,
            y: 0,
            x: 0,
            duration: 1.8,
            ease: "power3.out",
        }
    );
});
