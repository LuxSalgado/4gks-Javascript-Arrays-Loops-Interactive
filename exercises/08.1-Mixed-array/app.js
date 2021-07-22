var mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];
let auxArray = [];
//your code here
for ( let i=0 ; i < mix.length ; i++ ) {
    auxArray.push(typeof mix[i]);
}
console.log(auxArray);