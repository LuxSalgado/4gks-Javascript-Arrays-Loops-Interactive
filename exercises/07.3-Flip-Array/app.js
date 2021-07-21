var arr = [45,67,87,23,5,32,60];

//Your code here.
let auxArray = [];
for (let i=arr.length; i>0; i--){
    auxArray.push(arr[i-1]);
}
console.log(auxArray);
