// script.js - Niveau 2
WA.onInit().then(() => {
    console.log("Niveau 2 : Système d'accueil activé.");

    // Affiche une bulle de texte au-dessus du joueur
    WA.ui.displayBubble({
        label: "Welcome to the EEG101 virtual lab! Follow the arrows to start your journey.",
        position: "top",
        duration: 7000 // La bulle reste visible 7 secondes pour être bien lue
    });
});
