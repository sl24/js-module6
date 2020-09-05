// codewars задача 2

// You are given an array(which will have a length of at least 3, but could be very large)
// containing integers.The array is either entirely comprised of odd integers or entirely
// comprised of even integers except for a single integer N.Write a method that takes
// the array as an argument and returns this "outlier" N.

const firstArray = [2, 4, 0, 100, 4, 11, 2602, 36];
const secondArray = [160, 3, 1719, 19, 11, 13, -21];

// function findOutlier(integers) {
//   let evens = [];
//   let odds = [];
//   for (let i = 0; i < integers.length; i += 1) {
//     if (integers[i] % 2) {
//       evens.push(integers[i]);
//     } else {
//       odds.push(integers[i]);
//     }
//   }
//   const elen = evens.length;
//   const olen = odds.length;
//   let oddNum;
//   let evenNum;

//   if (elen > olen) {
//     oddNum = odds[0];
//     return oddNum;
//   } else {
//     evenNum = evens[0];
//     return evenNum;
//   }
// }

// function findOutlier(integers) {
//   const even = integers.filter((a) => a % 2 == 0);
//   const odd = integers.filter((a) => a % 2 !== 0);
//   return even.length == 1 ? even[0] : odd[0];
// }

function findOutlier(integers) {
  return integers.filter((a) => a % 2 == 0).length == 1
    ? integers.filter((a) => a % 2 == 0)[0]
    : integers.filter((a) => a % 2 !== 0)[0];
}

console.log(findOutlier(firstArray));
console.log(findOutlier(secondArray));
