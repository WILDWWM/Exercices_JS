// const choix = [{ nom: "feuille", image: "./images-pfc/feuille.jpg" }, { nom: "pierre", image: "./images-pfc/pierre.jpg" }, { nom: "ciseau", image: "./images-pfc/ciseau.jpg" }];
const choix = ["feuille", "pierre", "ciseau"];
const imageGauche = document.getElementById("image-gauche");
const imageDroite = document.getElementById("image-droite");
const resultGauche = document.getElementById("resultat-gauche");
const resultDroite = document.getElementById("resultat-droite");
const boutonRejouer = document.getElementById("boutonRejouer");
const modifTitre = document.getElementById("titre");
const sectionGauche = document.getElementById("gauche");
const sectionDroite = document.getElementById("droite");

let imageAuPifGauche;
let imageAuPifDroite;
let resultat;

imageGauche.addEventListener("click", (e) => {
    imageAuPifGauche = choixElement();    
    imageGauche.style.backgroundImage = `url("./images-pfc/${imageAuPifGauche}.jpg")`;
    sectionGauche.style.backgroundColor = "black";
    imageGauche.style.pointerEvents = "none";
    jeuFinal();
})

imageDroite.addEventListener("click", (e) => {
    imageAuPifDroite = choixElement();
    imageDroite.style.backgroundImage = `url("./images-pfc/${imageAuPifDroite}.jpg")`;
    sectionDroite.style.backgroundColor = "black";
    imageDroite.style.pointerEvents = "none";   
    jeuFinal();
})



function choixElement() {
    const nomRandom = choix[Math.floor(Math.random() * choix.length)];
    
    return nomRandom;
}

function CompareResult() {

    switch (imageAuPifGauche + '_' + imageAuPifDroite) {
        case 'feuille_ciseau':
        case 'pierre_feuille':
        case 'ciseau_pierre':
            resultat = "Perdu";
            break;
        case 'feuille_pierre':
        case 'pierre_ciseau':
        case 'ciseau_feuille':
            resultat = "Gagné";
            break;
        case 'feuille_feuille':
        case 'pierre_pierre':
        case 'ciseau_ciseau':
            resultat = "Egalité";
            break;
    }
    return resultat;
}

boutonRejouer.addEventListener("click", () => {
    location.reload();
})

function resultGame() {
    let result = CompareResult();
    
    if (result == "Gagné") {
        resultGauche.style.background = "#00ff15";
        resultGauche.textContent = result;
        resultDroite.style.background = "#ff0000";
        resultDroite.textContent = "Perdu";
    }
    else if (result == "Perdu") {
        resultGauche.style.background = "#ff0000";
        resultGauche.textContent = result;
        resultDroite.style.background = "#00ff15";
        resultDroite.textContent = "Gagné";
    }
    else if (result == "Egalité") {
        resultGauche.style.background = "#ffee00";
        resultGauche.textContent = result;
        resultDroite.style.background = "#ffee00";
        resultDroite.textContent = result;
    }
    
}

function jeuFinal() {
    if (imageGauche.style.backgroundImage === `url("./images-pfc/${imageAuPifGauche}.jpg")` && imageDroite.style.backgroundImage === `url("./images-pfc/${imageAuPifDroite}.jpg")`) {
        resultGame();
        setTimeout(boutonRejouer.style.display = "block", 5000);
    }
}