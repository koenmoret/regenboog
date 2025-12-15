document.addEventListener("DOMContentLoaded", function () {

  gsap.registerPlugin(ScrollTrigger);

  const texts  = document.querySelectorAll('.generations-inner_div.gen-text');
  const medias = document.querySelectorAll('.generations-inner_div.gen-media');

  if (!texts.length && !medias.length) return;

  // TEXT → links naar rechts (fade in / fade out)
  texts.forEach(el => {

    ScrollTrigger.create({
        trigger: el,
        start: 'top 75%',
        end: 'bottom 25%',

        onEnter: () => {
        gsap.fromTo(
            el,
            { autoAlpha: 0, x: -60 },
            {
            autoAlpha: 1,
            x: 0,
            duration: 1.1,
            ease: 'power3.out'
            }
        );
        },

        onLeaveBack: () => {
        gsap.to(el, {
            autoAlpha: 0,
            duration: 0.5,
            ease: 'power2.out'
        });
        }
    });

 });



  // IMAGE → rechts naar links (fade in / fade out)
  medias.forEach(el => {

    ScrollTrigger.create({
        trigger: el,
        start: 'top 75%',
        end: 'bottom 25%',

        // ⬇️ Scroll naar beneden → animatie opnieuw
        onEnter: () => {
        gsap.fromTo(
            el,
            { autoAlpha: 0, x: 60 },
            {
            autoAlpha: 1,
            x: 0,
            duration: 1.4,
            ease: 'power3.out'
            }
        );
        },

        // ⬆️ Scroll naar boven → alleen fade out
        onLeaveBack: () => {
        gsap.to(el, {
            autoAlpha: 0,
            duration: 0.6,
            ease: 'power2.out'
        });
        }
    });

    });




});
