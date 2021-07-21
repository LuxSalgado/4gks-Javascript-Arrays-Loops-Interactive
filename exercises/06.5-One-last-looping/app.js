let mySampleArray = ['Esmeralda', 'Kiko', 'Ruth', 'Lebron', 'Pedro', 'Maria', 'Lou', 'Fernando', 'Cesco', 'Bart', 'Annie'];

//your code here
let auxArray = [];
for (let i=mySampleArray.length-1; i>=0; i--) {
    auxArray.push(mySampleArray[i]);
    console.log(mySampleArray[i]);
}