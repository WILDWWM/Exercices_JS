// Création d'un tableau vide
let monTableau = [];

monTableau.push("Crevettes");
monTableau.push("nems");
monTableau.push("salade");
monTableau.push("fruits");
monTableau.push("chocolat");

console.log(monTableau);

monTableau[2] = "cassoulet";
console.log(monTableau);

monTableau.splice(3, 1, "frites");
console.log(monTableau);


// Création de l'objet
let monObjet = {};

monObjet = { nom: "Petit", prenom: "Wilfrid", naissance: "29-01-1974", films: ["D.A.R.Y.L", "Le Cobaye", "Dune"] };

console.log(monObjet);

monObjet.films[2] = "eXistenZ";
console.log(monObjet);
