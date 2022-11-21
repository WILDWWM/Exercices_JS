const ListeApprenants = ["BAALI Ike-David", "DETHIER Maxime", "DOMERGUE Jonathan", "FALCONIER Franck", "OZMANOV Alik", "PENTEADO Anthony", "PETIT Wilfrid", "PICHOFF Brandon", "TRAVASSOS Carl-Antoine"];
const TableauApprenants = [{ nom: "BAALI", prenom: "Ike-David" }, { nom: "DETHIER", prenom: "Maxime" }, { nom: "DOMERGUE", prenom: "Jonathan" }, { nom: "FALCONIER", prenom: "Franck" }, { nom: "OZMANOV", prenom: "Alik" }, { nom: "PENTEADO", prenom: "Anthony" }, { nom: "PETIT", prenom: "Wilfrid" }, { nom: "PICHOFF", prenom: "Brandon" }, { nom: "TRAVASSOS", prenom: "Carl-Antoine" }];

const carte = document.getElementById("sizer");
const card = document.getElementById("card");
const selection = document.getElementById("numberSelect");
const textPrenom = document.getElementsByClassName("prenom");
const textNom = document.getElementsByClassName("nom");
const monBouton = document.getElementById("BoutonPlacer");
const boutonInit = document.getElementById("BoutonInitialiser");

boutonInit.addEventListener('click', (e) => {
    initialiser();
})

monBouton.addEventListener('click', (e) => {
    placerCarte();
})

selection.addEventListener('change', (e) => {
    redimensionner(e.target.value);
})

window.addEventListener("load", (e) => {
    for (let i = 0; i < TableauApprenants.length; i++) {
        let maDiv = document.createElement("div");
        maDiv.className = "flipcard h";
        maDiv.id = "card" + i;
        maDiv.innerHTML = `<div class="front interrogation">
        ?
    </div>
    <div class="back smiley" style='background-image: url("images/smiley/smiley-10.png");'>
        <div class="prenom">Prénom</div>
        <div class="nom">Nom</div>
    </div>`;
        carte.appendChild(maDiv);

    }
})

function initialiser() {
    for (let j = 0 ; j < TableauApprenants.length; j++) {       
        document.querySelector("#card" + j).classList.toggle('flip');
    }
    boutonInit.disabled = true;
    setTimeout(() => {
        monBouton.disabled = false;
        selection.disabled = false;
    }, 1500);
}

function placerCarte() {
    selection.disabled = true;
    let apprenantAleatoire = _.shuffle(TableauApprenants);
    for (let i = 0; i < apprenantAleatoire.length; i++) {
        textPrenom[i].textContent = apprenantAleatoire[i].prenom;
        textNom[i].textContent = apprenantAleatoire[i].nom;
        document.getElementsByClassName("smiley")[i].style.backgroundImage = "url('images/smiley/smiley-" + (Math.floor(Math.random() * 15) + 1) + ".png')";

            setTimeout(() => {
                document.querySelector("#card" + i).classList.toggle('flip');
            }, 100 * i);
 
    }

    monBouton.disabled = true;
    setTimeout(function () {
        boutonInit.disabled = false;
    }, 1500);
}

function redimensionner(dimension) {
    carte.style.width = dimension + 'px';
}