document.addEventListener("DOMContentLoaded", function() {
    alert("Bienvenue sur mon portfolio !");
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche l'envoi réel du formulaire
    
    let isValid = true;
    
    // Récupération des champs
    const prenom = document.getElementById("prenom");
    const nom = document.getElementById("nom");
    const sujet = document.getElementById("sujet");
    const message = document.getElementById("message");

    // Vérification des champs
    isValid = checkField(prenom, "Le prénom est requis.") && isValid;
    isValid = checkField(nom, "Le nom est requis.") && isValid;
    isValid = checkField(sujet, "Le sujet est requis.") && isValid;
    isValid = checkField(message, "Le message est requis.") && isValid;

    // Si tout est valide, afficher le message de confirmation
    if (isValid) {
        document.getElementById("successMessage").classList.remove("hidden");
        setTimeout(() => {
            document.getElementById("successMessage").classList.add("hidden");
            document.getElementById("contactForm").reset(); // Réinitialiser le formulaire
        }, 3000);
    }
});

// Fonction pour vérifier un champ
function checkField(field, errorMessage) {
    const errorText = field.nextElementSibling;
    if (field.value.trim() === "") {
        errorText.textContent = errorMessage;
        return false;
    } else {
        errorText.textContent = "";
        return true;
    }
}


function afficherCalculateur() {
    let calculateur = document.getElementById("calculateur");
    let overlay = document.getElementById("overlay");

    if (calculateur.style.display === "none" || calculateur.style.display === "") {
        calculateur.style.display = "block"; // Afficher le calculateur
        overlay.style.display = "block"; // Afficher l'overlay
        document.body.style.overflow = "hidden"; // Désactiver le défilement
    } else {
        calculateur.style.display = "none"; // Masquer le calculateur
        overlay.style.display = "none"; // Masquer l'overlay
        document.body.style.overflow = "auto"; // Réactiver le défilement

        // Réinitialiser les champs (optionnel)
        document.getElementById("montant").value = "";
        document.getElementById("taux").value = "";
        document.getElementById("duree").value = "";
        document.getElementById("resultat").innerText = "";
    }
}

function afficherDetailsProjet(idProjet) {
    // Récupérer les détails du projet
    let details = document.getElementById(idProjet);

    // Basculer l'affichage des détails
    if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block"; // Afficher les détails
    } else {
        details.style.display = "none"; // Masquer les détails
    }
}