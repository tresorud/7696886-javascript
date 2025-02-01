// Déclaration du tableau contenant la liste des mots proposés à l'utilisateur
const listeMots = ['Cachalot', 'Pétunia', 'Serviette']
let score = 0

// Déclaration de la variable contenant le mot saisi par l'utilisateur
// Le prompt sert à afficher une popup demandant à l'utilisateur de saisir un mot
for (var i = 0; i < 3;i++){
let motUtilisateur = prompt('Entrez le mot : ' + listeMots[i])

// Vérification du mot saisi par l'utilisateur : on vérifie qu'il correspond au premier mot du tableau "listeMots"
if (motUtilisateur === listeMots[i]) {
    score++
}
}
console.log(score)

const listePhrases = ["Pas de panique !”, “La vie, l’univers et le reste”, “Merci pour le poisson”]
let choix = ''

while (choix !== 'mot' || choix !== 'phrase'){
    choix = prompt('choisissez entre mot et phrase ')
}
if (choix === 'mot'){
    for(let i = 0;i < 3;i++){
        console.log(listeMots[i])
    }
}else {
    for(let i = 0;i < 3;i++){
        console.log(listePhrases[i])
    }
}
