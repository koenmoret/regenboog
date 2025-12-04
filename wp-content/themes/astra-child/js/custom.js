document.addEventListener('DOMContentLoaded', () => {

    /* -------------------------------
       1. Voeg MENU TITEL toe bovenaan
    --------------------------------*/
    function injectMenuTitle() {
        const ul = document.querySelector('#ast-hf-mobile-menu');

        if (!ul) return;

        // voorkomen dat titel dubbel komt
        if (!ul.querySelector('.menu-title-regenboog')) {
            const li = document.createElement('li');
            li.className = 'menu-title-regenboog';
            li.textContent = 'Menu';
            ul.prepend(li);
        }
    }

    /* -------------------------------
       2. Injecteer toolbar ONDERIN
    --------------------------------*/
    function injectToolbar() {

        const inner = document.querySelector('#ast-mobile-popup .ast-mobile-popup-inner');
        const content = document.querySelector('#ast-mobile-popup .ast-mobile-popup-content');

        if (!inner || !content || document.getElementById('rb-mobile-toolbar')) return;

        const bar = document.createElement('div');
        bar.className = 'regenboog-mobile-toolbar';
        bar.id = 'rb-mobile-toolbar';

        bar.innerHTML = `
            <button class="toolbar-btn rb-close"  type="button" aria-label="Sluit">✕</button>
            <button class="toolbar-btn rb-search" type="button" aria-label="Zoek">🔍</button>
            <a class="toolbar-btn rb-train" href="/trainingen" aria-label="Trainingen">🎓</a>
            <a class="toolbar-btn rb-contact" href="/contact" aria-label="Contact">❔</a>
        `;

        // Voeg toolbar NA de inhoud toe
        inner.appendChild(bar);
    }


    /* -------------------------------
       3. Detecteer het openen van het menu
    --------------------------------*/
    document.addEventListener('click', (e) => {
        // triggers die Astra gebruikt voor het openen van het mobiele menu
        if (
            e.target.closest('.menu-toggle') ||
            e.target.closest('.ast-mobile-menu-trigger-minimal') ||
            e.target.closest('.ast-button-wrap')
        ) {
            requestAnimationFrame(() => {
                injectMenuTitle();
                injectToolbar();
            });
        }
    });

    /* -------------------------------
       4. Sluitknop functionaliteit
    --------------------------------*/
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.rb-close');
        if (!btn) return;

        const close = document.getElementById('menu-toggle-close');
        if (close) close.click();
    });

});
