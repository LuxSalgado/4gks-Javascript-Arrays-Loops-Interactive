function lyricsGenerator (arreglo) {
    let lyrics = "";
    let sum = 0;
    arreglo.forEach(function(item){
        if (item == 1) {
            lyrics += "Drop the base ";
            sum++;
        } else if (item == 0) {
            lyrics += "Boom ";
        }
        if (sum == 3) {
            lyrics += '!!!Break the base!!! ';
            sum=0;
        }  
    });
    return lyrics.trim();
}
// test Data
console.log(lyricsGenerator([0,0,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,1,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,0]))
console.log(lyricsGenerator([1,0,1]))
console.log(lyricsGenerator([1,1,1]))