let allNames = ["Romario","Boby","Roosevelt","Emiliy", "Michael", "Greta", "Patricia", "Danzalee"];

//your code here
var resultingNames = allNames.filter(function(item){
    if (item.charAt(0) == "R") {
        return item;
    }
});

console.log(resultingNames);