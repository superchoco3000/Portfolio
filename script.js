document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mainNav = document.getElementById('mainNav');

    if (hamburgerMenu && mainNav) {
        hamburgerMenu.addEventListener('click', function() {
            mainNav.classList.toggle('open');
            hamburgerMenu.classList.toggle('open'); // Pour l'animation de l'icône (optionnel)
        });
    }

    const themeSwitchCheckbox = document.querySelector('#checkbox');
    const body = document.body;

    function switchTheme(e) {
        if (e.target.checked) {
            body.classList.remove('theme-dark');
            body.classList.add('theme-light');
        } else {
            body.classList.remove('theme-light');
            body.classList.add('theme-dark');
        }
    }

    if (themeSwitchCheckbox) {
        themeSwitchCheckbox.addEventListener('change', switchTheme, false);

        // Garder le thème après un rechargement (optionnel)
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            themeSwitchCheckbox.checked = false;
            body.classList.add('theme-dark');
        } else {
            themeSwitchCheckbox.checked = true;
            body.classList.add('theme-light');
        }
    }
});