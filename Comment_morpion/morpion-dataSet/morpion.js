// Déclaration d'une variable info qui permet de cibler l'élément titre
let info = document.getElementById("titre");
// Ciblage du bouton rejouer avec initialisation d'un display à none afin de faire disparaitre le bouton
document.getElementById("rejouer").style.display = "none";
// Initialisation du titre avec le texte Super Morpion
info.textContent = "Super Morpion";

// On ajoute un évènement d'écoute pour le chargement du morpion
window.addEventListener('load', (event) => {
    // Déclaration de la variable getAllCells et intialisation avec la valeur d'un tableau qui cible toutes les cellules
    let getAllCells = Array.from(document.querySelectorAll('td'));
    // Parcours de toutes les cellules avec une boucle
    getAllCells.forEach(cell => {
        // On ajoute un évènement d'écoute click à chaque cellule
        cell.addEventListener("click", function () {
            // Exécution de la fonction jouer qui prend en paramètre l'id d'une cellule
            jouer(cell.id);            
        })
    })
});
// On ajoute un évènement d'écoute au click tout en sélectionnant le bouton rejouer
document.querySelector("#boutonRejouer").addEventListener("click", function () {
    // Ciblage du bouton rejouer avec initialisation d'un display à none afin de faire disparaitre le bouton
    document.getElementById("rejouer").style.display = "none";
    // Initialisation du titre avec le texte Super Morpion
    info.textContent = "Super Morpion";
    // Déclaration de la variable getAllCells et intialisation avec la valeur d'un tableau qui cible toutes les cellules
    let getAllCells = Array.from(document.querySelectorAll('td'));
    // Parcours de toutes les cellules avec une boucle
    getAllCells.forEach(cell => {
        // Changement de l'arrière plan de la cellule avec une position à gauche
        cell.style.backgroundPosition = "left";
        // Mise en place de l'évènement pointer afin de pointer chaque cellule automatiquement
        cell.style.pointerEvents = 'auto';
        // On supprime ensuite les cellules jouées
        delete cell.dataset.played;
    })
})

// Déclaration de la fonction jouer avec un paramètre zone
function jouer(zone) {
    // Déclaration d'une variable elements qui sélectionne depuis le document les données jouées dans un tableau
    let elements = Array.from(document.querySelectorAll('[data-played]'));
    // Déclaration et initialisation d'une variable carre afin de récupérer une zone
    let carre = document.getElementById(zone);
    // Condition pour jouer soit une croix
    if (elements.length % 2 === 1) {
        carre.style.backgroundPosition = "center";
        carre.dataset.played = "croix";
    // soit un rond
    } else {
        carre.style.backgroundPosition = "right";
        carre.dataset.played = "rond";
    }
    // Rinitialisation à vide du carré pointé
    carre.style.pointerEvents = 'none';
    // Condition qui permet d'afficher le bouton rejouer lorqu'il n'y a pas de gagnant
    if (!checkWin() && Array.from(document.querySelectorAll('[data-played]')).length === 9) {
        document.getElementById("titre").textContent = "Pas de gagnant";
        document.getElementById("rejouer").style.display = "initial";
    }

}

// Déclaration de la fonction checkWin
function checkWin() {
    // Condition avec la fonction verifEgalite qui retourne vrai si la zone est jouée
    if (
        verifEgalite(document.getElementById("Zonea1").dataset.played, document.getElementById("Zonea2").dataset.played, document.getElementById("Zonea3").dataset.played)
        ||
        verifEgalite(document.getElementById("Zoneb1").dataset.played, document.getElementById("Zoneb2").dataset.played, document.getElementById("Zoneb3").dataset.played)
        ||
        verifEgalite(document.getElementById("Zonec1").dataset.played, document.getElementById("Zonec2").dataset.played, document.getElementById("Zonec3").dataset.played)
        ||
        verifEgalite(document.getElementById("Zonea1").dataset.played, document.getElementById("Zoneb1").dataset.played, document.getElementById("Zonec1").dataset.played)
        ||
        verifEgalite(document.getElementById("Zonea2").dataset.played, document.getElementById("Zoneb2").dataset.played, document.getElementById("Zonec2").dataset.played)
        ||
        verifEgalite(document.getElementById("Zonea3").dataset.played, document.getElementById("Zoneb3").dataset.played, document.getElementById("Zonec3").dataset.played)
        ||
        verifEgalite(document.getElementById("Zonea1").dataset.played, document.getElementById("Zoneb2").dataset.played, document.getElementById("Zonec3").dataset.played)
        ||
        verifEgalite(document.getElementById("Zonea3").dataset.played, document.getElementById("Zoneb2").dataset.played, document.getElementById("Zonec1").dataset.played)
    ) {
        return true;
    // Sinon elle retourne Faux
    } else {
        return false;
    }
}

// Déclaration de la fonction verifEgalite avec trois paramètres de zone
function verifEgalite(zone1, zone2, zone3) {
    // On log les trois zones dans la console
    console.log(zone1 + zone2 + zone3);
    // La condition permet de vérifier si les trois zones contiennent le même symbole et qu'elles ne soient pas vide.
    if (zone1 === zone2 && zone1 === zone3 && zone1 !== undefined) {
        // Remplace le texte au niveau info avec les zones qui ont gagné
        info.textContent = `Les ${zone1} ont gagné`;
        // Fait apparaitre le bouton rejouer
        document.getElementById("rejouer").style.display = "initial";
        // Déclaration de la variable getAllCells et intialisation avec la valeur d'un tableau qui cible toutes les cellules
        let getAllCells = Array.from(document.querySelectorAll('td'));
        // Une boucle for pour parcourir toutes les cellules
        for (let i = 0; i < getAllCells.length; i++) {
            // Remise à zéro de chaque cellule
            getAllCells[i].style.pointerEvents = 'none';
        }
    }
}