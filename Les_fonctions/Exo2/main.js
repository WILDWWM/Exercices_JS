const groupe = [42, 67, 46, 39, 72, 55, 39, 64, 44];
let valeurObjet = {};

function ageTool(monTab) {
    let age = { moyenne: 0, lePlusJeune: 0, lePlusAge: 0};

    // Calcul de la moyenne
    let somme = 0;
    for (let i = 0; i < monTab.length; i++) {
        somme = somme + monTab[i];        
    }
    age.moyenne = somme / monTab.length;

    // Calcul du plus jeune
    // let valeurPlusPetite;
    // for (let j = 0; j < monTab.length; j++) {
    //     if (monTab[j] < monTab[j+1]) {
    //         valeurPlusPetite = monTab[j];            
    //     }
    //     else {
    //         valeurPlusPetite = monTab[j + 1];
    //     }
    // }
    // age.lePlusJeune = valeurPlusPetite;
    age.lePlusJeune = monTab.sort()[0];

    // Calcul du plus âgé
    // let valeurPlusGrande;
    // for (let k = 0; k < monTab.length; k++) {
    //      if (monTab[k] > monTab[k+1]) {
    //          valeurPlusGrande = monTab[k];
    //     }       
    //      else {
    //          valeurPlusGrande = monTab[k + 1];
    //     }
    // }
    // age.lePlusAge = valeurPlusGrande;
    age.lePlusAge = monTab.sort()[monTab.length - 1];

    return age;
}

valeurObjet = ageTool(groupe);
console.log(valeurObjet.moyenne);
console.log(valeurObjet.lePlusJeune);
console.log(valeurObjet.lePlusAge);