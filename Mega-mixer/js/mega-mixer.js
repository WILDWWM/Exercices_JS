const ListeApprenants = ["BAALI Ike-David", "DETHIER Maxime", "DOMERGUE Jonathan", "FALCONIER Franck", "OZMANOV Alik", "PENTEADO Anthony", "PETIT Wilfrid", "PICHOFF Brandon", "TRAVASSOS Carl-Antoine"];
const TableauApprenants = [{ nom: "BAALI", prenom: "Ike-David" }, { nom: "DETHIER", prenom: "Maxime" }, { nom: "DOMERGUE", prenom: "Jonathan" }, { nom: "FALCONIER", prenom: "Franck" }, { nom: "OZMANOV", prenom: "Alik" }, { nom: "PENTEADO", prenom: "Anthony" }, { nom: "PETIT", prenom: "Wilfrid" }, { nom: "PICHOFF", prenom: "Brandon" }, { nom: "TRAVASSOS", prenom: "Carl-Antoine" }];

const card = document.getElementById("card");
const boutonAEffacer = document.getElementById("ButtonToDelete");

const selection = document.getElementById("numberSelect");

const textPrenom = document.getElementsByClassName("prenom");
const textNom = document.getElementsByClassName("nom");

boutonAEffacer.addEventListener("click", function (event) {

});

function placerCarte() {
    let apprenant = choixAletoireApprenant();
    for (let i = 0; i < selectNumber; i++) {
        card.classList.toggle('flip');
        textPrenom[0].textContent = apprenant.prenom;
        textNom[0].textContent = apprenant.nom;
    }

}

function choixAletoireApprenant() {
    const apprenantRandom = TableauApprenants[Math.floor(Math.random() * TableauApprenants.length)];

    return apprenantRandom;
}


selection.addEventListener("change", (e) => {
    let selectNumber = selection.options[selection.selectedIndex].text;
})        
