let sexe;
let age;

sexe = window.prompt("Quel est votre sexe ? : ");
age = window.prompt("Quel est votre âge ? : ");

if (age < 12) {
    console.log("C'est un enfant");
}
else if (age >= 12 && age <= 16) {
    if (sexe == "homme") {
        console.log("C'est un adolescent");
    }
    else {
        console.log("C'est une adolescente");
    }
}
else if (age > 16 && age <= 30) {
    if (sexe == "homme") {
        console.log("C'est un jeune homme");
    }
    else {
        console.log("C'est une jeune femme");
    }
}
else if (age > 30 && age <= 62) {
    if (sexe == "homme") {
        console.log("c'est un homme dans la force de l'âge");
    }
    else {
        console.log("c'est une femme dans la force de l'âge");
    }
}
else if (age > 62) {
    if (sexe == "homme") {
        console.log("c'est un retraité");
    }
    else {
        console.log("c'est une retraitée");
    }
}
else {
    console.log("difficile de dire qui est cette personne...");
}