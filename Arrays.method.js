// *** Exercise 1
// Reduce method
// https://www.codewars.com/kata/5715eaedb436cf5606000381
//     Sum of positive
// (traditional way with for loop)

// function positiveSum(arr) {
//     let sum = 0;
//      for(let i = 0; i < arr.length; i++){
//       if(arr[i] > 0) sum += arr[i];
//      }
//     return sum;
//   }

// (with Reduce Method)
// function positiveSum(arr) {
//     return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
//  }
//  console.log(positiveSum([1,-2,3,4,5]));  // output 13

// ***  Exercise 2
//  https://www.codewars.com/kata/57a2013acf1fa5bfc4000921
//      Calculate average

// function find_average(arr) {
//     return arr.reduce ((acc, cur)=> acc + cur, 0) / arr.length;
//  }
// console.log(find_average([1, 2, 3])) // output 2

// ***  Exercise 3