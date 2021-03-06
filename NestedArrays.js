// *** How to sort elements in given arrays with mixed numbers
// Use Array.prototype.sort() with a custom compare function to do the descending and ascending sort first:

// console.log([4,-2,9,3,-4,12,4,-4,-9].sort((a, b) => b - a))
//             [12,  9,  4,  4, 3,-2, -4, -4, -9]
   
//  console.log([4,-2,9,3,-4,12,4,-4,-9].sort((a, b) => a - b))
//              [-9, -4, -4, -2, 3, 4, 4, 9, 12]

// *** How to use Math.min and Math.max in nested arrays
//  (Ex. 1)
//   const arr = [[12,45,75], [54,45,2],[23,54,75,2]];
//   const max = Math.max(...[].concat(...arr));
//   const min = Math.min(...[].concat(...arr));
//   console.log(max);
//   console.log(min);
//  (Ex. 2)
//   function sumOfMin(arr){
//     let sum = 0;
//     for(let i = 0; i< arr.length; i++){
//       let min = Math.min(...arr[i]);
//       sum += min;
//     }
//    return sum;
//   }
//   console.log(sumOfMin([[1,2,3],[5,4],[7,-2,0]]));

//  *** How works Array.prototype.concat():
//  const letters = ['a', 'b', 'c'],
//  const numeric = [1, 2, 3];
//     console.log(letters.concat(numeric)); // output  ['a', 'b', 'c', 1, 2, 3]

// ... concat() can be used for the flat output of two-dimensional or multidimensional arrays
// const arr1=[1,2,3],arr2=[4,5,6];
//  console.log(arr1.concat(arr2));                   // (It can use an array as parameter)
//  console.log(arr1.concat(4,5,6));                  //  (also can use some values as parameters)
//  console.log(arr1.concat([4],[5],[6]));            //  (also can use more than one array as parameters)
//  console.log(arr1.concat(...arr2));                //  (use ... accept the value of an enumeration)
//  console.log(arr1.concat(4).concat(5).concat(6));  //  (It can be used continuously)
// Output in all examples will be the same [ 1, 2, 3, 4, 5, 6 ]

// const arr=[[1,2],[3,4],[5,6]];
//  let result=[].concat(...arr);      // or arr.flat() (but supports only from Node.js 11.0.0)
                                       // or (arr.toString()).split(',') // Output("1, 2, 3, 4, 5, 6") ['1', '2', '3', '4', '5', '6']
// console.log(result); // output [1, 2, 3, 4, 5, 6]


//  *** How to use Mathod map() in arrays:
    //( Ex. 1 )
     //const array1 = [1, 4, 9, 16];
     // pass a function to map
     //const map1 = array1.map(x => x * 2);
     //console.log(map1);
     // expected output: Array [2, 8, 18, 32]
    //(Ex. 2)
    // function roundElementsOfArray(arr){
    // const map1 = arr.map(x => Math.round(x));
    //    return map1;
    // }
    // console.log(roundElementsOfArray([10.23, 34.89, 0.1, 4.45, 8.5]));  // [10, 35, 0, 4, 9]

// Write a function that accepts two arguments and generates a sequence containing the integers from the first argument 
// to the second  inclusive.

//   *** Traditional way with for loop
   // function generateIntegers(m, n) {
   //   const arr = [];
   //    for(let i = m; i <= n; i++){
   //      arr.push(i);
   //    }
   //   return arr;
   // }
   // console.log(generateIntegers(2, 5));
//   *** With Method map();
   // function generateIntegers(m, n) {
   //   return Array(n - m + 1).fill().map(() => m++);
   // }
   // console.log(generateIntegers(2, 5));

    //  *** How populate an array without Method push():
// https://www.codewars.com/kata/56f69d9f9400f508fb000ba7  // Count the Monkeys!  
// function monkeyCount(n) {
//     const arr = [];
//     for(let i = 1; i <= n; i++){
//      arr[i - 1] = i;
//     }
//     return arr;
//   }
//--------------------------------------------------------
//                 Exercise 1
// Напишите функцию с именем countLinesWithNegativeElements, которая принимает двухмерный массив 
// arr в качестве аргумента и возвращает количество строк, содержащих хотя бы один 
// отрицательный элемент.
//   Примеры:
//   countLinesWithNegativeElements([[1, 2], [2, -2, -3], [3, 5], [3, 4, 5, -1, 8]]) 
//                                  [2, -2, -3], [3, 4, 5, -1, 8] ---> (2);

// function countLinesWithNegativeElements(arr){
 
//  let count = 0;
//   for (let i = 0; i < arr.length; i++){
//    let sum  = 0;
//      for(let j = 0; j < arr[i].length;j++){
//        if(arr[i][j] < 0)
//          sum++;
       
       
//         }
//     if(sum > 0)
//       count ++;
//    }
// return count;
// }
// console.log(countLinesWithNegativeElements([[1, -2],[2, -2, -3],[3, 5],[3, -4, 5, -1, 8]]));
// -------------------------------------------------------------------------
//        Exercise 2
// Напишите функцию с именем sumsInArray, которая принимает двухмерный массив 
// arr в качестве аргумента и возвращает массив, содержащий суммы элементов 
// вложенных массивов.

// Примеры:
// функция sumsInArray([[1, 2], [2, -3], [3, 5], [3, 7]]) 
// должна возвратить    [3, -1, 8, 10];
// функция sumsInArray([[1, 0, 0], [2, 2]])---> [1, 4];
// функция sumsInArray([[], [2, 2], [0])---> [0, 4, 0].
                    
// function sumsInArray(arr){
//   const arr1 = [];
//    for (let i = 0; i < arr.length;i++){
//      let sum = 0;
//      for (let j = 0; j < arr[i].length; j++){
//        sum += arr[i][j];
//      }
//     arr1.push(sum);
//    }
//    return arr1;
// }
// console.log(sumsInArray([[1, 2, 3], [2, 2]]));    // [6, 4]
// *** Solution #2 (with reduce method )
// function sumOfArrays(arr){
//     let sumOfarr = [];
//      for(let i =0; i < arr.length; i++){
//        let sum = 0;
//          sumOfarr.push((arr[i]).reduce((acc,cur) => acc + cur));
//         }
//     return sumOfarr;
//   }
//   console.log(sumOfArrays([[5,2], [3,5],[2,1],[0]]));
// ------ if we need to find the sum of all elements
// function sumOfarr(arr){
//     let sum = 0;
//       for(let i = 0; i < arr.length; i++){
//         sum += (arr[i]).reduce((acc,cur) => acc + cur);
//       }
//     return sum;
//   }
//   console.log(sumOfarr ([[0,1], [2,2,1],[5,5],[1,2,3,8]]));    // Output 22
//----------------------------------------------------
// How we can call elements from nested arrays,example
// const arr = [[1, 5 ,3], 4, 5, [6, 7, 8]];
//  console.log(arr[0][arr[0].length - 1]);
//  arr[arr.length - 1]
// ----------------------------------------
//      Exercise  3
// Find missing elements in array
// function findMissing(arr1, arr2) {
//     let compare = 0;
//     arr1.sort();
//     arr2.sort();
//       for(let i = 0; i < arr1.length; i++){               
//          if (arr1[i] !== arr2[i]){  
//              compare = arr1[i];
//              return compare;
//           }
//        }
//     return compare;
//    }
//    console.log(findMissing([4, 3, 3, 61, 8, 8], [8, 61, 8, 3, 4]));
//
// *** a few examples using method sort()
// --- The default sort order is ascending --- (4, 5, 8, 10)
//  Return sorted array  ordered from shortest to longest stirngs
//    function sortByLength (array) {
//     return array.sort((a,b) => a.length - b.length);
//     };
//  console.log(sortByLength(["Beg", "Life", "I", "To"]))  // ["I", "To", "Beg", "Life"]