// Работа с объектами
//Проверка, что объект пустой

// function isEmptyObject(obj) {
//   for (let key in obj){
//     if (obj.hasOwnProperty(key)){
//       return false;
//     }
//   }
//   return true;
// }	
// let obj = {
//   name: "Bob",
//   age: undefined,
// };

// console.log(Object.keys(obj));
// if (Object.keys(obj).length === 0){
//   console.log('Empty');
// } else {
//   console.log('Not empty');
// }

// console.log(Object.values(obj));
// console.log(Object.values(obj).length === 0);

// console.log(Object.entries(obj));

// console.log(Object.keys(obj).length);
//-----------------------------------------------------------------------------------------------------------------------
// Посчитать, сколько раз встречается каждая буква в строке
// function countLetters(str) {
//  // str = str.toLowerCase();
//  //str = str.replace(/ /g, '');
//   console.log(str);
//   let obj = {};
//   for (let i = 0; i <str.length; i++){
//     if (obj[str[i]]){
//       obj[str[i]]++;
//     } else {
//       obj[str[i]] = 1;
//     }
//   }
//  return obj;
// }
// console.log(countLetters('I like Javascript and Python'));
//  (*** 2 Solution)
//  function countLetters(str){
//  let obj = {};
//   let arr = str.toLowerCase().replace(/ /g,'').split('');
//   arr.forEach(el => obj[el] = ( obj[el] || 0 ) + 1);      // or  arr.forEach(el => obj[el] ? obj[el]++ : obj[el] = 1);
//  return obj;
//}
//console.log(countLetters('be Happy and Smile'))
//--------------------------
// проверка циклов:
// let str = 'hello';
// for (let i in str){
//   console.log(i);
// }
// for (let char of str){
//   console.log(char);
// }

// let str = 'hello';
// function countLetters(str) {
//   str = str.toLowerCase();
//   str = str.replace(/ /g, '');
//   console.log(str);
//   let obj = {};
//   for (let char of str){
//     if (obj[char]){
//       obj[char]++;
//     } else {
//       obj[char] = 1;
//     }
//   }
//  return obj;
// }

// let obj = countLetters('I like Javascript and Python');
// for (let key in obj){
//   console.log(obj[key]);
// }

// for (let key in obj){
//   console.log(key);
// }


//-------------------------------------------------
//Найти количество различных слов в строке
// function countWords(text){
//  text = text.toLowerCase().split(' ')
//  console.log(text);
//  let words = {};
//  for (let el of text) {
//    if (words[el]){
//      words[el]++;
//    } else {
//      words[el] = 1;
//    }
//  }
//  // return words;  //объект, содержащий слова и количество каждого слова
//   return Object.keys(words).length; //количество различных слов
// }
// console.log(countWords("Roses are red violets are blue roses and violets are nice"))

//--------------------------------------------------
// Count words in the text (2 способ) 
// function countWords(text){
    
// }
//console.log(countWords("Roses are red violets are blue roses and violets are nice"))
// -----------------------------------------------------




// Дана строка s = "five nine eight two four" 
// Найти среднее арифметическое чисел в вывести в виде строки(округлить до целого)

// function averageStr(str){
//     let digits = {
//       zero: 0,
//       one: 1,
//       two: 2,
//       three: 3,
//       four: 4,
//       five: 5,
//       six: 6,
//       seven: 7,
//       eight: 8,
//       nine: 9
//     }
//     let arr = str.split(' ');
//     console.log(arr);
//      let sum = 0;
//     for (let el of arr){
//       sum = sum + digits[el]
//     } 
//      console.log(sum);
//      let average = Math.round(sum /arr.length);
//      console.log(average);
     
//      for (let i in digits){
//        if (digits[i] === average){
//          return i
//        }
//      }
//    }
//    let s = "five nine eight two four"; 
//    console.log(averageStr(s));

// https://www.codewars.com/kata/5656b6906de340bd1b0000ac
// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, 
// the longest possible, containing distinct letters

// function longest(s1, s2) {
//     let obj = {};
//       for (let i = 0; i < s1.length; i++){
//         if(obj[s1[i]]) {
//            obj[s1[i]] ++;
//          } else {
//           obj[s1[i]] = 1;
//          }
//       }
//       for(let i = 0; i < s2.length; i++){
//        if(obj[s2[i]]) {
//           obj[s2[i]]++;
//         } else {
//          obj[s2[i]] = 1;
//         } 
//       }
//         let str = '';
//         for(let keys in obj){
//           str += keys;
//          }
//        str = str.split('').sort().join('');
//      return str;
//     }
// console.log(longest("aretheyhere", "yestheyarehere")); //Output "aehrsty"

// *** Numbers to Objects
// https://www.codewars.com/kata/57ced2c1c6fdc22123000316
// function numObj(s){
//     const arr = [];
//     for(let el of s){
//        let obj = {};
//        obj[el]=String.fromCharCode(el);
//        arr.push(obj);
//     }
//    return arr;
// }
// console.log(numObj([118,117,120]);  //Output [{'118':'v'}, {'117':'u'}, {'120':'x'}];

//  *** TV channels
// https://www.codewars.com/kata/5836dce6966f8d1d43000007
// function redarr(arr) {
//     let arr2 = [...new Set(arr)].sort();
//     let obj = {};    
//       for (let i = 0; i < arr2.length; i++){
//           obj[i] = arr2[i];
//      }
//     return obj;
//   }

// *** Make a function that does arithmetic!
// https://www.codewars.com/kata/583f158ea20cfcbeb400000a
// --- (1 Solution with switch case)
// function arithmetic(a, b, operator){
//     switch (operator){
//      case 'add': return a + b;
//      case 'subtract': return a - b;
//      case 'multiply':  return a * b;
//      case 'divide': return a / b;
//     }
//   }
// console.log(arithmetic(1, 2, "add"))  // should return 3

// --- (2 solution with object )
// const arithmetic = (a, b, operator) => ({
//     'add'     : a + b,
//     'subtract': a - b,
//     'multiply': a * b,
//     'divide'  : a / b
//   }[operator]);

// *** Dictionary from two lists
// https://www.codewars.com/kata/5533c2a50c4fea6832000101
// function createDict(keys, values){
//     console.log(keys,values)
//       let obj = {};
//       for (let i = 0,j = 0; i <keys.length, j <keys.length; i++,j++){
//         if (values[j] === undefined) obj[keys[i]] = null;
//          else
//         obj[keys[i]] = values[j];
//       }
//       return obj;
//     }
// console.log(createDict([ 'a', 'b', 'c', 'd', 'e' ], [ 1, 2, 0, false, '' ])); //Output '{ a: 1, b: 2, c: 0, d: false, e: \'\' }'

// *** What is my name score? #1
// https://www.codewars.com/kata/576a29ab726f4bba4b000bb1
// function nameScore(name){
//     let name1 = name.toUpperCase();
//       let result = 0;
//          for(let i = 0; i < name1.length; i++){
//            for(let key in alpha){
//             if(key.includes(name1[i])) result += alpha[key];  
//            }
//          }
//       return {[name]:result};
//   }
// console.log(nameScore('Mary Jane'));  Output {"Mary Jane":20};

// Alternating between three values
// https://www.codewars.com/kata/596776fbb4f24d0d82000141
// ---(1 Solution)
// function f(x, cc) {                                             // f(a) = b
//     for (let keys in cc){                                       // f(b) = c
//       if(cc[keys] === x){                                       // f(c) = a
//        if (keys === 'a')  return cc['b'];
//        if (keys === 'b')  return cc['c'];
//        if (keys === 'c')  return cc['a'];
//       } 
//     }
//   }
// --- (2 Solution with switching key value);
// function f(x, cc) { 
//     let key ;
//     for (let keys in cc){
//       if( cc[keys] === x ) key = keys ;
//     }
//         cc.a = cc.a + cc.b;   
//         cc.b = cc.a - cc.b;    
//          cc.a = cc.a - cc.b;  
//         cc.c = cc.c + cc.b;  
//          cc.b = cc.c - cc.b;  
//          cc.c = cc.c - cc.b;  
//   return cc[key];
//  }
// console.log( f( 3, { a:3, b:4, c:5 } );    //Output  4

// *** Permute a Palindrome
// https://www.codewars.com/kata/58ae6ae22c3aaafc58000079
// function permuteAPalindrome (input) { 
//     if (!input.length || input.length === 1) return true;
//      const obj = {};
//      let count = 0;
//        for (let i = 0; i < input.length; i++){
//         if(obj[input[i]]) obj[input[i]] ++;
//          else obj[input[i]] = 1;
//        }
//          for(let keys in obj){
//           if(obj[keys] % 2 !== 0) count++;
//          }
//     return (count === 1 || count === 0);
//    }
//console.log(permuteAPalindrome ("baabcd"));  //Output false
                               //("aab") ---> true
// if we have Palindrome we can have  only one odd letter in the middle or zero.

// *** Most valuable character
// https://www.codewars.com/kata/5dd5128f16eced000e4c42ba
// function solve(st) {
//     if(st.length === 1) return st;
//       const obj = {};
//       for(let i = 0; i < st.length; i++){
//         obj[st[i]] = st.lastIndexOf(st[i]) - st.indexOf(st[i]);
//        }
//      let max = Math.max(...Object.values(obj));
//      let arr =  Object.entries(obj);
//          arr = arr.filter(el => el[1] === max).sort();
//       return arr[0][0];
//     }
// console.log(solve('axyzxyz'));   Output 'x';
//                    'aabccc' ---> 'c'     

// Remove duplicates from list
// https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118
// function distinct(a) {
//     const obj = {};
//     const arr = [];
//       for(let i = 0; i < a.length; i++){
//        if(!obj[a[i]]) {
//          obj[a[i]] = 1;
//          arr.push(a[i])
//         }
//       }
//      return arr;
//     }
// console.log(distinct([1,1,2]));   //Output [1, 2]

// *** (last ex. from JS Practice)
// --- return the most often repeatable number, if there're a few qual then return all of them
// function mostFrequentElement(arr){
//     if(!arr.length)  return [];
//      const num = {};
//      let arr1 = [];
//       for(let i = 0; i< arr.length; i++){
//         if(num[arr[i]]) num[arr[i]]++;
//          else num[arr[i]] = 1;
//        }
//      let max = Math.max(...Object.values(num));
//      for(let keys in num){
//        if(num[keys] >= max) arr1.push(+keys)
//      }
//     return arr1;
//    }
//    console.log(mostFrequentElement([0,3,1,4,7,6,7,4,5,2,3,5]));    // Output [3, 4, 5, 7]

// https://www.codewars.com/kata/5b358a1e228d316283001892/train/javascript
// *** Interview Question (easy)
// function getStrings(city){
//     city = city.toLowerCase().replace(/\s/g, '');
//     let obj = {};
//       for (let i = 0; i < city.length; i++){
//          if (obj[city[i]]){
//            obj[city[i]] ++;
//          } else {
//            obj[city[i]] = 1;
//          }
//        }
//        let str = '';
//        for (let key in obj){
//          str += key + ':' + '*'.repeat([obj[key]]) + ',';
//        }
//     return str.replace(/,$/, ''); 
// }
//  "Chicago" ---> output  "c:**,h:*,i:*,a:*,g:*,o:*"

// *** 6 kyu
// https://www.codewars.com/kata/5a434a9dc5e284724f000011
// The most common letter

// *** 7 kyu
// https://www.codewars.com/kata/5a25ac6ac5e284cfbe000111/train/javascript
// Coloured Triangles
// function triangle(row) {                                  R R G B R G B B
//     let colour = {                                         R B R G B R B
//     'GG': 'G',                                              G G B R G G
//     'BB': 'B',                                               G R G B G
//     'RR': 'R',                                                B B R R
//     'BG': 'R',                                                 B G R
//     'GB': 'R',                                                  R B
//     'RG': 'B',                                                   G
//     'GR': 'B', 
//     'BR': 'G',
//     'RB': 'G'
//   }
    
//   let triangleC = '\n';
//   let rowC = '';
//   for(let i = 0; i < row.length - 1; i++){
//        let str = '';
//        if (rowC.length){
//          for(let j = 0; j < rowC.length - 1; j++){
//            str += colour[rowC[j]+rowC[j + 1]];
//          }
//         } else {
//           for(let j = 0; j < row.length - 1; j++){  
//             str += colour[row[j]+row[j + 1]];
//           }
//        }
//       rowC = str;
//       triangleC += rowC + '\n';
//  }
//     return (row.length === 1 ) ? row : (row.length < 3 )? colour[row]:rowC ;
//  }
 

//lecture for 05.30.20

