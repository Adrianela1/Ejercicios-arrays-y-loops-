console.log('Archivo de loops');

//bucle:algo que se repite

const names = ["adrian", "paulita", "adriana"]
console.log(names.length);

//for
for(let count = 0; count <= names.length; count++){
    console.log(names[count]);
}

for (let i = 0; i <= names.length -1; i++) {
    console.log(names[i]);
}
//while

let count = 1;

// while (count <= 5) {
//     console.log(count);
//     count++
// }
//while (count <= 5) {
    //count++
//}
//do while
//el procedimiento interno se realiza si o si al menos una vez
do {
    console.log(count);
    count++;
} while (count < 1);

// forEach
// Realiza un procedimiento / bloque de codigo por cada elemento dentro de un array
//El bloque de codigo dentro de un forEach puede ser cualquier instruccion 
names.forEach(name => console.log(name));


names.forEach(user =>{
    console.log(`Hola ${user}`);
})