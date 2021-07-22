let theBools = [0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1];

//your code here

var myFunction = function(dato){
    if (dato == 0){
        return "woko";
    } else if (dato ==1) {
        return "wiki"
    }
}
 var newArray = theBools.map(myFunction);
 console.log(newArray);