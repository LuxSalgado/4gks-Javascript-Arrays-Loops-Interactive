// Code goes here
let arrayGrande = [];
function matrixBuilder(numero) {
    for (let i=0; i<numero; i++){
        arrayGrande[i] = [];
        for (let j=0; j<numero; j++){
            arrayGrande[i][j]=Math.floor(Math.random()*2);
        }
    }
    return arrayGrande;
}
// do not change anything from this line down
console.log(matrixBuilder(5))