const client = "Awa";
const codePlat = 2;
const quantitéText = "2";
const montantVersé = "3000";
const quantité = Number(quantitéText);
let nomPlat;
let prixUnitaire;
switch(codePlat) {
    case 1:
        nomPlat ="Attiéké-poisson";
        prixUnitaire = 1500;
        break;
    case 2:
        nomPlat = "Riz-poulet";
        prixUnitaire = 2000;
        break;
    case 3:
        nomPlat = "Alloco-oeuf";
        prixUnitaire = 1000;
        break;
    default:
        nomPlat = "plat introuvable"
        prixUnitaire = 0;
}
function calculerTotal(prixUnitaire, quantité){
    return prixUnitaire*quantité;

}

const Total= calculerTotal(prixUnitaire, quantité);
console.log("client:"+client);
for (let a = 1; a <= quantité; a++){
    console.log(`portion ${a} : ${nomPlat} - ${prixUnitaire} FCFA`);
}
console.log(`Total à payer : ${Total}`);
if (montantVersé>= Total){
    console.log(`Monnaie à rendre : ${montantVersé-Total} FCFA`);
}else{
    console.log(`Monnaie manquant : ${Total-montantVersé} FCFA`);

}

