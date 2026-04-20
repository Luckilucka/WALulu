// script.js - Niveau 2 (Version validée)
WA.onInit().then(() => {
    // Ce message confirme que la poignée de main a réussi
    console.log("WA initialisé. Lancement de la bulle d'accueil...");

    // On affiche la bulle au-dessus de Lulu
    WA.ui.displayBubble({
        label: "Salut bg.",
        position: "top",
        duration: 15000 // Affichage pendant 5 secondes
    });

   console.log("La bulle a été lancée !");
});
