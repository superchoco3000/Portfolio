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

        themeSwitchCheckbox.addEventListener('change', switchTheme, false);

        // Garder le thème après un rechargement (optionnel)
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            themeSwitchCheckbox.checked = false;
            body.classList.add('theme-dark');
        } else {
            themeSwitchCheckbox.checked = true;
            body.classList.add('theme-light');
        }

     
        

