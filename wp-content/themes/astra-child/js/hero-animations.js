document.addEventListener("DOMContentLoaded", function () {

    const boog   = document.querySelector(".hero-boog-anim");
    const photo  = document.querySelector(".hero-photo-card");
    const title  = document.querySelector(".hero-title");
    const lead   = document.querySelector(".hero-lead");
    const ctas   = document.querySelectorAll(".hero-cta a");

    const tl = gsap.timeline({
        defaults: { duration: 0.9, ease: "power3.out", opacity: 0 }
    });

    if (!boog) {
        console.warn("GSAP: geen .hero-boog-anim gevonden");
        return;
    }

    // 🌈 1. Oranje boog animatie
    tl.fromTo(
        boog,
        {
            opacity: 0,
            rotate: 35,
            scale: 0.88,
            y: -60,
            x: 60,
            transformOrigin: "90% 40%"
        },
        {
            opacity: 1,
            rotate: 0,
            scale: 1,
            y: 0,
            x: 0,
            duration: 1.6
        }
    );

    

    // 🔠 3. Titel fade-up
    if (title) {
        tl.from(title, {
            y: 20
        }, "-=0.8");
    }

    // 📄 4. Lead-paragraaf fade-up
    if (lead) {
        tl.from(lead, {
            y: 20
        }, "-=0.8");
    }

    // 🔘 5. CTA knoppen stagger binnenrollen
    tl.from(ctas, {
        y: 12,
        stagger: 0.01 
    }, "-=0.8");

    // 🖼 2. Fotokaart (subtiel omhoog + fade)
    if (photo) {
        tl.from(photo, {
            y: 40,
            duration: 0.9,
            ease: "power3.out"
        }, "-=0.8"); // begint terwijl de boog al bezig is
    }


});
