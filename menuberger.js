document.addEventListener('DOMContentLoaded', function() {
    const hamburgerButton = document.querySelector('.button');
    const mainMenu = document.getElementById('menu');

    // Fonction pour fermer le menu
    function closeMenu() {
        mainMenu.classList.remove('open');
        hamburgerButton.setAttribute('aria-expanded', 'false');
    }

    // Ouvre le menu au clic sur le bouton
    hamburgerButton.addEventListener('click', function(event) {
        // Empêche le clic de se propager et d'activer l'écouteur du body
        event.stopPropagation();
        const isExpanded = hamburgerButton.getAttribute('aria-expanded') === 'true';
        hamburgerButton.setAttribute('aria-expanded', !isExpanded);
        mainMenu.classList.toggle('open');
    });

    // Ferme le menu lorsque l'on clique en dehors
    document.body.addEventListener('click', function(event) {
        if (!mainMenu.contains(event.target) && mainMenu.classList.contains('open')) {
            closeMenu();
        }
    });

    // Ferme le menu lorsqu'on clique sur un lien à l'intérieur
    mainMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });
});
