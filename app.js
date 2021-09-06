// function vartest() {
//   var x = 1;
//   if (true) {
//     var x = 2;
//     console.log(x);
//   }
//   console.log(x);
// }
// vartest();

// function lettest() {
//   let x = 1;
//   if (true) {
//     let x = 2;
//     console.log(x);
//   }
//   console.log(x);
// }
// lettest();

// const add = (a, b) => {
//   return a + b;
// };
// console.log(add(2, 2));

// const arr = [1, 2, 3];
// const arr2 = [...arr, 4];
// console.log(arr2);

// const arr = [1, 2, 3, 4, 5, 6];
// const mapedArr = arr.map((x) => x + 10);
// console.log(mapedArr);
// //resultat [11, 12, 13, 14, 15, 16]

// const filteredArr = arr.filter((num) => num > 2);
// console.log(filteredArr);
// //resultat [3, 4, 5, 6]

// arr.forEach((val) => {
//   console.log(val - 90);
// });
// //-89 -88 -87 -86 -85 -84

//destructring avec les objets
// const pays = {
//   nom: "italie",
//   pop: 60,
// };
// const { nom, pop } = pays;
// console.log(nom, pop);

//destructring avec les tableaux
// const arr = [1, 2, 3];
// const [a, b, c] = arr;
// console.log(a, b, c);

// let message = 5;
// if (9 > 2) {
//   let message = "success";
//   console.log(message);
// }

// console.log(message);

// let x = myFunction(4, 3); // Function is called, return value will end up in x

// function myFunction(a, b) {
//   return a * b; // Function returns the product of a and b
// }

// console.log(myFunction(4, 2));

// var tab = ["sourour", "skander", "leila", "molka"];
// var index = tab[1];
// console.log(index);

// var tab = ["sourour", "skander", "leila", "molka"];
// var taille = tab.length;
// console.log(taille);

// var tab = ["sourour", "skander", "leila", "molka", "amira", "bassem"];
// var tab2 = ["mahmoud", "mariem", "sarra"];
// var tab3 = tab.concat(tab2);
// console.log(tab3);

// var nbr = 3;
// nbr--;
// console.log(nbr);

var nbr = 3;
nbr += 2;
console.log(nbr);
