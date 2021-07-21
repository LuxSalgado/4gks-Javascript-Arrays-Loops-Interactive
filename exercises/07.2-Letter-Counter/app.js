let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

// your code here
for (let i=0; i<par.length; i++) {
    let sum = 0;
    let already = false;
    for (const [key, value] of Object.entries(counts)) {
        if (key == par.charAt(i).toLowerCase()) {
            already = true;
        }
    }
    if (!already && par.charAt(i).toLowerCase() != " ") {
        for (let j=i; j<par.length; j++) {
            if (par.charAt(i).toLowerCase() == par.charAt(j).toLowerCase()) {
                sum++;
            }
        }
        let keyChar = par.charAt(i).toLowerCase();
        counts[keyChar] = sum;
    }
}
console.log(counts);