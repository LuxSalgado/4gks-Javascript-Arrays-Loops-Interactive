let list_of_numbers = [4, 80, 85, 59, 37,25, 5, 64, 66,	81,20, 64, 41, 22, 76,76, 55, 96, 2, 68];

// your code here
function mergeTwoList (lista) {
    let odd = [];
    let even = [];
    let listaArreglada = [];
    for (let i=0; i<lista.length; i++) {
        if (lista[i]%2 === 0) {
            even.push(lista[i]);
        } else {
            odd.push(lista[i]);
        }
    }
    for (let i=0; i<odd.length; i++) {
        listaArreglada.push(odd[i]);
    }
    for (let i=0; i<even.length; i++) {
        listaArreglada.push(even[i]);
    }
    return listaArreglada;
}

console.log(mergeTwoList(list_of_numbers))
