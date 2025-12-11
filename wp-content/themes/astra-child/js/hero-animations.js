document.addEventListener("DOMContentLoaded", function () {

    const boog   = document.querySelector(".hero-boog-anim");
    const photo  = document.querySelector(".hero-photo-card");
    const title  = document.querySelector(".hero-title");
    const lead   = document.querySelector(".hero-lead");
    const ctas   = document.querySelectorAll(".hero-cta a");

    const tl = gsap.timeline({
        defaults: { duration: 1, ease: "power3.out" }
    });

    tl.add("start"); // alles tegelijk starten


    // 🌈 1. Oranje boog animatie (SNELLER)
    if (boog) {
        tl.fromTo(
            boog,
            {
                opacity: 0,
                rotate: 25,
                scale: 0.94,
                y: -40,
                x: 40,
                transformOrigin: "90% 40%"
            },
            {
                opacity: 1,
                rotate: 0,
                scale: 1,
                y: 0,
                x: 0,
                duration: 1.0,
                ease: "power2.out"
            },
        "start");
    }


    // 🖼 2. Foto: fade + slide-in van links
    if (photo) {
        tl.fromTo(
            photo,
            {
                opacity: 0,
                x: -60,
                y: 0
            },
            {
                opacity: 1,
                x: 0,
                y: 0,
                duration: 1.2
            },
        "start");
    }


    // 🔠 3. Titel fade-up
    if (title) {
        tl.fromTo(
            title,
            {
                opacity: 0,
                y: 20
            },
            {
                opacity: 1,
                y: 0
            },
        "start");
    }


    // 📄 4. Lead fade-up
    if (lead) {
        tl.fromTo(
            lead,
            {
                opacity: 0,
                y: 20
            },
            {
                opacity: 1,
                y: 0
            },
        "start");
    }


    // 🔘 5. CTA-buttons tegelijk
    if (ctas.length) {
        tl.fromTo(
            ctas,
            {
                opacity: 0,
                y: 12
            },
            {
                opacity: 1,
                y: 0
            },
        "start");
    }

});
