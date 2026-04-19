// script.js - Version Niveau 2 de secours
console.log("Tentative de lancement du Niveau 2...");

WA.onInit().then(() => {
    console.log("API WorkAdventure prête !");

    // On ajoute un petit délai de 1 seconde pour être sûr que Lulu est bien là
    setTimeout(() => {
        WA.ui.displayBubble({
            label: "Welcome! Follow the arrows to discover our Community Framework.",
            position: "top",
            duration: 7000
        });
        console.log("Bulle envoyée !");
    }, 1000);
});
