//anstatt die fib Funktion hier direkt zu übergeben, wird die Dependency von außen als fn übergeben. So können verschiedene Funktionen angesteuert werden. Die Dependency wird hier als erster Parameter in die Funktion Sequence übergeben.

const range = n => [...Array(n).keys()]

// function sequence(fn, value) {
//     let output = [];
//     for (let i = 0; i < value; i++) {
//         output.push(fn(i));
//     }
//     return output;
// }

const sequence = (fn, value) => range(value).map(fn)

module.exports = sequence;

