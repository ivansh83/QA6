//1 Напишите функцию, которая принимает массив чисел
// и определяет, есть ли в массиве одинаковые элементы и если есть,
// возвращает их в виде массива [element, element]
// Если таких пар несколько, вернуть первую из них 
//  function equalElementsInArray(arr){

// *** Solution with two loops
//    for (let i = 0; i < arr.length - 1; i++){
//      for (let j = i+1; j < arr.length; j++){
//        if (arr[i] === arr[j])
//          return [arr[i], arr[j]];
//      }
//     }
//   return (arr.length === 0)? []:'All elements are different';
//  }
// //console.log(equalElementsInArray([5, 1, 2, 25, 12,  50, 9,  15, 6])); 
// //console.log(equalElementsInArray([0, 1, 2, 8, 3, 14, 7, 3, 8]));

// *** Solution with one for loop and sort()
// arr.sort((a,b) => a - b);
// for(let i = 0; i < arr.length; i++){
//   if(arr[i] === arr[i + 1]){
//    return [ arr[i], arr[i] ]; 
//   }
// }
// return false;
// }

// *** Solution  with filter() and indexOf(), lastIndexOf()
// const a = arr.filter(el => {
//     if(arr.indexOf(el) !== arr.lastIndexOf(el)) {
//       return el; 
//     }
//   });
// return a.length ? a : false;
// }  
// console.log(equalElementsInArray([2,1,6,5,9,4]));
//----------------------------------------------------------------------------
// *** https://www.codewars.com/kata/558dd9a1b3f79dc88e000001/train/javascript
//You should return the duplicate value as a single integer.
// const findDup = arr => arr.filter((v, i) => arr.indexOf(v) != i)[0];
// console.log([1,2,2,3]), 2)
//-------------------------------------------------------------------
// *** https://www.codewars.com/kata/5b39e91ee7a2c103300018b3/train/javascript
// Your task is to remove all consecutive duplicate words from string, leaving only first words entries.
// const removeConsecutiveDuplicates = s => { arr = s.split(' ');
//   let unique = [];
//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] !== arr[i + 1]){
//       unique.push(arr[i]);
//     }
//   }
//   return unique.join(' ');
//}; 
// console.log(s('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta')); // Output 'alpha beta gamma delta alpha beta gamma delta'
// --------------------------------------------------------------------
//2 Напишите функцию, которая принимает массив чисел arr
// и возвращает все пары одинаковых элементов в виде двумерного массива
// Например, const arr = [2, 1, 5, 9, 6, 4, 1, 5, 6]
// Результат:            [[1, 1], [5, 5], [6, 6]]

// *** Solution 1
//  function equalElementsPairs(arr){
//    let res = [];
//    for (let i = 0; i < arr.length - 1;i++){
//      for(let j = i + 1; j < arr.length;j++){
//        if(arr[i] === arr[j])
//          res.push([arr[i],arr[j]]);
//        }
//     }
//    return res;  // or res.length // output 3
// }
//  console.log(equalElementsPairs([2, 1, 5, 9, 6, 4, 1, 5, 6])); 

// *** Solution 2
// for (let i = 0; i < (arr.sort()).length; i++){
//     if(arr[i] === arr[i + 1]) {
//       duplicate.push([arr[i], arr[i + 1]])
//     }
//   }
//  return duplicate;
//------------------------------------------------------------------
// 3. Последовательность Фибоначчи: 0,1,1,2,3,5,8,13,21,34,...
// Создайте функцию, которая получает число n и 
// возвращает последовательность n чисел Фибоначчи
//   function fibonacci(n){
//     if (n === 0) return [];
//     if (n === 1) return[0];   // not necessary, since if we have n=1, our function return arr = [0, 1]
//    const arr = [0, 1];
//      for (let i = 2; i < n; i++){       // 2 3
//       arr.push(arr[i-2] + arr[i - 1])   // [0, 1, 1, 2]
//        }
//     return arr;
//   }
//  console.log(fibonacci(10)); //[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// *** Solution 2
// function fibonacci(n){
//     if (n === 0) return [];
//     if (n === 1) return [0];
//     let arr = [0,1];             
//       for(let i = 0; i < n - 2; i++){             
//         arr.push(arr[i] + arr[ i + 1]);     
//       }
//      return arr;
//   }
//   console.log(fibonacci(10));

// *** Solution 3
//  arr.push(arr[arr.length - 2] ? arr[arr.length - 2] + arr[arr.length - 1] : 1);  
//  --> in javaScript if we need to finish loop it common practice to put -1, 
//      so as first condition will be "false" , we push 1. And for next iteration our array will have element under index 2. 
//-----------------------------------------------------------------  
//4. Последовательность Фибоначчи: 0,1,1,2,3,5,8,13,21,34,...
//  Создайте функцию, которая получает число n и возвращает n -ое число Фибоначчи
//  Например, n = 4 ---> результат: 2

//   function nthFibonacci(n){
//    // if (n === 0) return undefined;   
//    // if (n === 1) return 0;                not necessary lines, since we still got undefined and 0 by default.
//    const arr = [0, 1];
//      for (let i = 2; i < n; i++){       
//       arr.push(arr[i-2] + arr[i - 1]);   
//        }
//     return arr[n-1];  
//   }
// console.log(nthFibonacci(10)); // 34
//  console.log(nthFibonacci(5)); //  3
// *****************************************************
// Эти задачи в codewars:
// https://www.codewars.com/kata/522551eee9abb932420004a0
// https://www.codewars.com/kata/52549d3e19453df56f0000fe

// *****************************************************
// --------------------------------------------------
// 5. Получить n -ое число последовательности Фибоначчи : 0,1,1,2,3,5,8,...
// без создания массива. Например, n = 5 ---> результат: 3
// *** Solution without array
//  function nthFib(n){       // n = 1 --> 0 n = 2 --> 1
//    if (n <= 2) return n -1;
//     let f0 = 0;             // 0
//     let f1 = 1;             // 1
 //    let f2;                 // -
//    let i = 2;               // 2
//      while (i < n){         // 2<4        3<4          4<4
//        f2 = f0 + f1; //1    // 0+1=1      1+1=2
//        f0 = f1;             // 1           1
//        f1 = f2;             // 1           2
//        i++;                 // 3           4
//      }
//    return f2;
//  }
//  console.log(nthFib(4));    // 2
// if we want to put i = 3 then shoud be i <= 3
// --------------------------------------------------
//6. Последовательность Фибоначчи: 0,1,1,2,3,5,8,13,21,34,...
// Создайте функцию fibonacciString, которая получает число n, 
// формирует строку из чисел '01123581321345589...'
// Фиббоначчи и возвращает n-ый по счету символ этой строки(не символ с индексом n)
// Например, 5-ый символ - это "3"
// function fibonacciString(n){
    // let str = '01';
    // if (n <= 2) return n - 1;
    //   let f0 = 0;
    //   let f1 = 1;
    //   let f2;
    //   let i = 2;
    //  while(i < n){
    //    f2 = f0 + f1;
    //     str += f2;
    //    f0 = f1;
    //    f1 = f2;
    //     i++;
    //  }
    // return str[n - 1];
// }
// console.log(fibonacciString(5)); //3
// console.log(fibonacciString(7)); //8
// console.log(fibonacciString(10)); //2
// --------------------------------------------------
// 7 Палиндромы:
// 7.1 Напишите функцию, которая получает имя и выводит 
//     его в обратном порядке
//     function reverse(name){
//       let str = '';
//       for (let i = name.length - 1; i >= 0; i--){
//         str = str + name[i];
//       }
//       return str;
//     }
//     console.log(reverse('Bob'));
//  **** Solution (#2)
//    function reverse(name){
//       let str = '';
//       for (let i = 0; i < name.length; i++){
//         str = name[i] + str;
//       }
//       return str;
//     }
//     console.log(reverse('Alice'));
// --------------------------------------------------
// 7.2 Напишите функцию, которая определяет, является ли слово
//     палиндромом
//        function reverse (name){
//          let str = '';
//          for(let i =0; i < name.length; i++){
//            str = name[i] + str;      
//          }
//          return str === name;
//        }
//       console.log(reverse('day'));
// ---------------------------------------------------
// Verify if the given three-digit number is Palindrome
// function palindrome(n){
//     let lastNumber = n % 10;
//      let firstNumber = Math.trunc(n / 100);       or  let secondNumber = (n - lastNumber) / 10 % 10;
//    return firstNumber === lastNumber;                 let firstNumber = (n - secondNumber * 10 - lastNumber) / 100;
//   }
//   console.log(palindrome(141));  //Output true 
//-----------------------------------------------------
// 7.3. Напишите функцию isPalindrome, которая принимает строку и определяет, 
// //     является ли строка палиндромом после удаления из нее всех пробелов
// //     Выполните проверку на примере строки: "was it a car or a cat i saw"

//    function isPalindrome(str){
//      let strNoSpace = '';                  // ''   
//       let strReverse = '';                 // ''
     
//      for (let i = 0; i < str.length; i++){  
//        if(str[i] !== ' '){
//        strNoSpace = strNoSpace + str[i];      // pul
//        strReverse = str[i] + strReverse;      // lup
//        ///  console.log(strNoSpace);
//      }
//     }
//      return  strNoSpace === strReverse
//    }
//   console.log(isPalindrome("was it a car or a cat i saw")); //true
//   console.log(isPalindrome("pull up if i pull up")); //true
// --------------------------------------------------
//8 Simple fibonacci strings
// f0 = '0'
// f1 = '01'
// f2 =  f1 + f0 =  '010'
// f3  = f2 + f1 = '01001'
// f4  = f3 + f2 = '01001' + '010' = '01001010'
// *** 7 kyu
// https://www.codewars.com/kata/5aa39ba75084d7cf45000008
// Напишите функцию, возвращающую n-e число fn
// function solve(n){
    // let arr  = ['0', '01'];
    //     for(let i = 0; i <= n - 2; i++){
    //         arr.push(arr[i+1] + arr[i])
    //     }  
    // return arr[n];
// }
// console.log(solve(5)); // '0100101001001'
  // --- 2 Solution ---
//   const memo = {
//     0: '0',
//     1: '01',
//   }
  
//   function fib(n) {
//     if (!memo[n]) {
//       memo[n] = fib(n-1) + fib(n-2);
//     }
//     return memo[n];  
//   }
  
//   function solve(n){
//     return n < 0 ? null : fib(n);
//   }
// --------------------------------------------------
//9 функция isBalanced, которая принимает строку s, 
// содержащую скобки '[',']', проверяет правильность 
// расстановки скобок. 
// Возвращает 'valid' or 'invalid'





// console.log(isBalanced('[][][[]]')); // valid
// console.log(isBalanced('[[[[]]]][[[]]][[]][]')); // valid  
// console.log(isBalanced('[]][[[]]')); // invalid 
// console.log(isBalanced('][[[]][][')); // invalid 

//----------------------------------------------------
// 10.  Напишите функцию drawLadder(n)
// Given a number n, print a ladder of "#" 
// starting from one #, to n-times "#"
// Example: 
// n = 4
// Output:
// #
// ##
// ###
// ####
/////////////////////

// ************
// ************
// ************
// ************
// ************

