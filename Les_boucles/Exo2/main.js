const gafa = [{ nom: "Google", url: "https://www.google.com" }, { nom: "Amazon", url: "https://www.amazon.fr" }, { nom: "Facebook", url: "https://www.facebook.fr" }, { nom: "Apple", url: "https://www.apple.fr" }]

let monLien1 = document.getElementById("lien1");

monLien1.textContent = gafa[0].nom;
monLien1.href = gafa[0].url;

let monLien2 = document.getElementById("lien2");

monLien2.textContent = gafa[1].nom;
monLien2.href = gafa[1].url;

let monLien3 = document.getElementById("lien3");

monLien3.textContent = gafa[2].nom;
monLien3.href = gafa[2].url;

