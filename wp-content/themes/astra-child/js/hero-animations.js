document.addEventListener("DOMContentLoaded", function () {

    const boog   = document.querySelector(".hero-boog-anim");
    const photo  = document.querySelector(".hero-photo-card");
    const title  = document.querySelector(".hero-title");
    const lead   = document.querySelector(".hero-lead");
    const ctas   = document.querySelectorAll(".hero-cta a");

    const tl = gsap.timeline({
        defaults: { duration: 1, ease: "power3.out", opacity: 0 }
    });

    tl.add("start"); // 👉 alles tegelijk starten

    // 🌈 SNELLERE boog animatie
    if (boog) {
        tl.fromTo(boog, 
            {
                opacity: 0,
                rotate: 25,        // iets minder rotatie → voelt sneller
                scale: 0.94,       // licht vergroot → snappy
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
                duration: 1.0,     // ⚡ sneller!
                ease: "power2.out" // ⚡ betere snelheid-curve
            },
        "start");
    }

    // 🖼 Foto: slide-in van links
    if (photo) {
        tl.from(photo, {
            x: -60,
            opacity: 0,
            duration: 1.2
        }, "start");
    }

    // 🔠 Titel
    if (title) {
        tl.from(title, {
            y: 20,
            opacity: 0
        }, "start");
    }

    // 📄 Lead
    if (lead) {
        tl.from(lead, {
            y: 20,
            opacity: 0
        }, "start");
    }

    // 🔘 CTA’s tegelijk
    if (ctas.length) {
        tl.from(ctas, {
            y: 12,
            opacity: 0
        }, "start");
    }

});
