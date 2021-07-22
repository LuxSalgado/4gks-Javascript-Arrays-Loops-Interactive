var people = ['juan','ana','michelle','daniella','stefany','lucy','barak'];

function deletePerson(personName)
{
	//your code here
	let auxArray = [];
	for (let i=0 ; i<people.length ; i++ ) {
		if (people[i] != personName) {
			auxArray.push(people[i]);
		}
	}
	return auxArray;
}

console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));