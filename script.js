const themeSwitchCheckbox = document.querySelector('#checkbox');
const body = document.body;
const hamburgerMenu = document.querySelector('.hamburger-menu');
const mainNav = document.querySelector('#mainNav > ul');

function switchTheme(e) {
    if (e.target.checked) {
        body.classList.remove('theme-dark');
        body.classList.add('theme-light');
    } else {
        body.classList.remove('theme-light');
        body.classList.add('theme-dark');
    }
}

themeSwitchCheckbox.addEventListener('change', switchTheme, false);

// Garder le thème après un rechargement (optionnel)
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    themeSwitchCheckbox.checked = false;
    body.classList.add('theme-dark');
} else {
    themeSwitchCheckbox.checked = true;
    body.classList.add('theme-light');
}

// Gestion du menu hamburger
if (hamburgerMenu && mainNav) {
    hamburgerMenu.addEventListener('click', () => {
        mainNav.classList.toggle('open');
        hamburgerMenu.classList.toggle('open'); // Optionnel: pour animer l'icône hamburger
    });

    // Fermer le menu quand un lien est cliqué (optionnel)
    const navLinks = mainNav.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mainNav.classList.remove('open');
            hamburgerMenu.classList.remove('open'); // Optionnel
        });
    });
}