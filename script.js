// script.js - Diagnostic Niveau 3
console.log("FORCE LOAD : Le fichier script.js est bien lu par le navigateur !");

WA.onInit().then(() => {
    console.log("WA INITIALIZED : Lulu est prête. Marche vers Bob (x:244, y:362)");

    // On déclenche le popup quand on entre dans la zone npc_bob
    WA.room.area.onEnter("npc_bob").subscribe(() => {
        console.log("ZONE ENTER : Contact avec Bob réussi !");
        WA.ui.openPopup("bob_popup", "Welcome to the Validity section! Robust data is the foundation of our science.", [
            {
                label: "Understood",
                className: "primary",
                callback: (popup) => {
                    popup.close();
                }
            }
        ]);
        console.log("Lulu est entrée dans la zone de Bob !");
        
    });
});
