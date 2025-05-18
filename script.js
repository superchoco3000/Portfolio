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

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', async (event) => {
        event.preventDefault(); // Empêche la soumission par défaut du formulaire

        const formData = new FormData(contactForm);
        const formDataObject = {};
        formData.forEach((value, key) => {
            formDataObject[key] = value;
        });

        try {
            const response = await fetch('procesar_formulario.php', { // Nueva URL
                method: 'POST',
                //No necesitamos la cabecera 'Content-Type: application/json'
                body: formData // Enviamos el objeto FormData directamente
            });

            if (response.ok) {
                const responseData = await response.text();
                alert(responseData); // Affiche la réponse du serveur (Message received successfully!)
                contactForm.reset(); // Réinitialise le formulaire
            } else {
                alert('Erreur lors de l\'envoi du message.');
                console.error('Erreur:', response);
            }
        } catch (error) {
            alert('Une erreur s\'est produite lors de la communication avec le serveur.');
            console.error('Erreur:', error);
        }
    });
});        
        

