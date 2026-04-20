// script.js - Test de Popup (Niveau 3)
WA.onInit().then(() => {
    console.log("WA initialisé. Tentative d'ouverture de Popup...");

    // Au lieu d'une bulle, on ouvre une fenêtre au milieu de l'écran
    WA.ui.openPopup("intro_popup", "Welcome to the EEG101 Virtual Lab! Here you will learn about scientific validity and responsibility.", [
        {
            label: "Let's go!",
            className: "primary",
            callback: (popup) => {
                popup.close(); // Ferme le popup quand on clique
                console.log("L'utilisateur a fermé le popup.");
            }
        }
    ]);

    console.log("Ca a marché ...???");

    
});
