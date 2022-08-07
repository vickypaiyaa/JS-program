// const array = ['abcd', 'ab', 'abc'];

// const result = output.filter(obj => array.includes(output));
// let i;
// let char;
// let element;
// for (i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//         if (array[i] == array[j]) {
//                 console.log(array[i])
//                 console.log(array[j])
//             if (element.indexOf(array[i]) < 0) {
//                 element.push(array[i]);
//                 console.log(element);
//             }
//             // break;
//         }
//     }
// }

    



const number = 1234;
let sum = 0;
let num = number.toString().split('');
console.log(num)
// num.reduce(num, 0)
for (let i = 0; i < num.length; i++) {
  sum += Number(num[i]);
}
console.log(sum)

