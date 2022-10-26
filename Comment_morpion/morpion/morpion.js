// Déclaration de la variable nombreCoup pour compter le nombre de coups 
let nombreCoup;
// Déclaration de l'objet emplacement pour déterminer la position du rond ou de la croix dans les différentes zones
let emplacement;
// Déclaration de la variable gagnant pour savoir le gagnant croix ou rond
let gagnant;
// Déclaration de la variable table pour cibler la table entière
let table = document.getElementById("center");
// Déclaration de la variable cells pour cibler dans le html chaque cellule
let cells = table.getElementsByTagName("td");

// On ajoute un évènement d'écoute pour le chargement du morpion avec l'exécution de la fonction initialisation
window.addEventListener('load', (event) => {
    initialisation();
});

// Déclaration de la fonction initialisation
function initialisation() {
    // Ciblage du bouton rejouer avec initialisation d'un display à none afin de faire disparaitre le bouton
    document.getElementById("rejouer").style.display = "none";
    // Ciblage du titre avec initialisation du texte à Super Morpion
    document.getElementById("titre").textContent = "Super Morpion";
     // Initialisation de la variable nombreCoup à 0
    nombreCoup = 0;
     // Initialisation de l'objet emplacement avec les différentes zones
     emplacement = {
        Zonea1: "vide",
        Zonea2: "vide",
        Zonea3: "vide",
        Zoneb1: "vide",
        Zoneb2: "vide",
        Zoneb3: "vide",
        Zonec1: "vide",
        Zonec2: "vide",
        Zonec3: "vide"
    };
    // Construction d'une boucle for afin de parcourir chaque cellule
    for (let i = 0; i < cells.length; i++) {
        // Déclaration de la variable cell avec initialisation avec la valeur de chaque cellule
        let cell = cells[i];
        // Changement de l'arrière plan de la cellule avec une position à gauche
        cell.style.backgroundPosition = "left";
        // Mise en place de l'évènement pointer afin de pointer chaque cellule automatiquement
        cell.style.pointerEvents = 'auto';
    }
}

// Déclaration de la fonction jouer avec un paramètre zone
function jouer(zone) {
    // Condition qui va permettre de positionner le rond ou la croix dans la table
    if (nombreCoup % 2 === 1) {
        document.getElementById(zone).style.backgroundPosition = "center";
        emplacement[zone] = "croix";
    } else {
        document.getElementById(zone).style.backgroundPosition = "right";
        emplacement[zone] = "rond";
    }
    document.getElementById(zone).style.pointerEvents = 'none';
    // Incrémentation de la variable nombreCoup
    nombreCoup++;
    // Appel de la fonction checkWin
    checkWin();

    // Condition qui va permettre de déterminer qu'il n'y a pas de gagnant et de faire apparaitre le bouton rejouer
    if (nombreCoup === 9 && typeof gagnant === 'undefined') {
        document.getElementById("titre").textContent = "Pas de gagnant";
        document.getElementById("rejouer").style.display = "initial";
    }
}

// Déclaration de la fonction checkWin afin de vérifier le gagnant
function checkWin() {
    // Condition qui permet de déterminer si l'on a une ligne ou une diagonale de croix ou de rond
    if (verifEgalite(emplacement["Zonea1"], emplacement["Zonea2"], emplacement["Zonea3"]) || verifEgalite(emplacement["Zoneb1"], emplacement["Zoneb2"], emplacement["Zoneb3"]) || verifEgalite(emplacement["Zonec1"], emplacement["Zonec2"], emplacement["Zonec3"]) || verifEgalite(emplacement["Zonea1"], emplacement["Zoneb1"], emplacement["Zonec1"]) || verifEgalite(emplacement["Zonea2"], emplacement["Zoneb2"], emplacement["Zonec2"]) || verifEgalite(emplacement["Zonea3"], emplacement["Zoneb3"], emplacement["Zonec3"]) || verifEgalite(emplacement["Zonea1"], emplacement["Zoneb2"], emplacement["Zonec3"]) || verifEgalite(emplacement["Zonea3"], emplacement["Zoneb2"], emplacement["Zonec1"])) {
        // Condition si le gagnant est une croix
        if (gagnant === 'croix') {
            // Modification du titre selon la condition
            document.getElementById("titre").textContent = "Les croix ont gagné";
          // Sinon le gagnant est un rond  
        } else {
            // Modification du titre selon la condition
            document.getElementById("titre").textContent = "Les ronds ont gagné";
        }
        // Ciblage de l'élément rejouer afin de faire apparaitre le bouton rejouer
        document.getElementById("rejouer").style.display = "initial";
        // Boucle qui permet de remettre à zéro les cellules
        for (let i = 0; i < cells.length; i++) {
            cells[i].style.pointerEvents = 'none';
        }
    }
}

// Déclaration de la fonction verifEgalite avec trois paramètres de zone
function verifEgalite(zone1, zone2, zone3) {
    // La condition permet de vérifier si les trois zones contiennent le même symbole et qu'elles ne soient pas vide.
    if (zone1 === zone2 && zone1 === zone3 && zone1 !== 'vide') {
        // Si c'est le cas : affection de la zone1 à la variable gagnant
        gagnant = zone1;
        // Retourne vrai si la condition est vérifiée
        return true;
    } else {
        // Sinon elle retourne faux
        return false;
    }
}