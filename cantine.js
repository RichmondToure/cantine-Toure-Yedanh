const client = "Awa";
const codePlat = 3;
const quantitéText = "4";
const montantVersé = "4000";
const quantité = Number(quantitéText);
let nomPlat;
let prixUnitaire;
switch(codePlat){
    case 1:
    nomPlat:"Attiéké-poisson";
    prixUnitaire: 1500;
    console.log(`${client} a choisie ${quantité} plats d'attiéké-poisson et a versé un montant de ${montantVersé} FCFA`)
    break;
    case 2:
    nomPlat: "Riz-poulet";
    prixUnitaire: 2000;
     console.log(`${client} a choisie ${quantité} plats de Riz-poulet et a versé un montant de ${montantVersé} FCFA`)
    break;
    case 3:
    nomPlat:"Alloco-oeuf";
    prixUnitaire: 1000;
    console.log(`${client} a choisie ${quantité} plats d'Alloco-oeuf et a versé un montant de ${montantVersé} FCFA`)
    break;
    default:
    console.log("plat introuvable")

}
