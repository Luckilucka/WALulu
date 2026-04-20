// script.js - Niveau 3 : Interaction Zone
WA.onInit().then(() => {
    console.log("Système d'interaction prêt. Marche sur la zone de Bob !");

    // On écoute l'entrée dans la zone 'npc_bob'
    WA.room.area.onEnter("npc_bob").subscribe(() => {
        console.log("Lulu est entrée dans la zone de Bob !");
        
        WA.ui.openPopup("bob_popup", "Welcome to the Validity section! Robust data is the foundation of our science.", [
            {
                label: "I understand",
                className: "primary",
                callback: (popup) => {
                    popup.close();
                }
            }
        ]);
        console.log("Lulu a vu le pop up !");
    });
});
