// 1 Создание и заполнение объекта
// создайте объект user со свойствами name, age, isStudent 
// let user = {
//     name: 'Alice',
//     age: 30,
//     isStudent: true,
// }
// console.log(user);
// ------------------------------------------------
//2 Напечатать значение свойства name
// console.log(user.name);
// console.log(user['name']);
// -------------------------------------------------
//3 Добавление свойства объекта
//  добавьте свойства: city, isAdult, hobby, hasChild 
  // user.city = 'Miami';
  // user['isAdult'] = true;
  // user.hobby = 'sport';
  // console.log(user);
// ------------------------------------------------
//4 Удаление свойства  - удалите свойствo hasChild
  // delete user.hobby;
  // console.log(user);
  
  // user.age++;
  // console.log(user);
  // user['city'] = 'LA';
  // console.log(user);
 // ----------------------------------------------
// 5 Есть ли это свойство у объекта?
//  Определите, есть ли у объекта свойства age, lastname
  // console.log(!!user.age); //true
  // console.log(!!user.lastname); //false
  
  // if (user['age']) {
  //   console.log('YES');
  // } else console.log('NO');
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // console.log(user.hasOwnProperty('isStudent'));
  // console.log('isStudent' in user);
  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// -------------------------------------------
//6  Проход по объекту
// 6а)  Напечатать ключи (свойства объекта)
//  ("name" "age" "city" "isStudent" "isAdult"...)
    // for (let key in user){
    //   console.log (key)
    // }
// ------------------------------------------------
// 6б) Напечатать значения свойств: 
// Задание 7. В прошлом году создан объект person. 
  // Если у него есть свойство age, добавить к значению свойство 1, 
  // если свойства нет, создать это свойство со значением 20.
  //1 вариант) свойства age нет:

  // let person = {
  //   firstName: "Bob",
  //   lastName: "Jonson",
  // }
//----------------
  //2 вариант) свойство age есть:
  // let person1 = {
  //   firstName: "Bob",
  //   lastName: "Jonson",
  //   age: 10
  // }
// =============================================
// Задание 8. Создать объект со свойствами '0','1','2','3' 
// и значениями 'zero', 'one', 'two', 'three'
  // let words = ['zero', 'one', 'two', 'three']
    //  let words = ['zero', 'one', 'two', 'three'];
    //  let word = {};
    //  for(let i = 0; i < words.length; i++){
    //    word[i] = words[i];
    //  }
    //  console.log(word);
// ---------------------------------
// Задание 9. Создать объект со свойствами 
// 'zero', 'one', 'two', 'three'  и значениями 0,1,2,3
   //  let words = ['zero', 'one', 'two', 'three'];
   //  let word = {};
   //  for(let i = 0; i < words.length; i++){
   //    word[words[i]] = i;
   //  }
  //   console.log(word);
//----------------------------------------------
// Задание 10. Дан номер дня недели. Вернуть название дня недели.
  //   function daysOfWeek(day) {
  //     let week = {
  //      1: 'Monday',
  //      2: 'Tuesday',
  //      3: 'Wednesday',
  //      4: 'Thursday',
  //      5: 'Friday',
  //      6: 'Saturday',
  //      7: 'Sunday'
  //     }
  //     if (day in week){ return week[day ]} 
  //       else {return 'Error';}
  //     }
  //    console.log(daysOfWeek(7));
  //  }
// ==============================================
// Задание 11  - Get Planet Name By ID
// https://www.codewars.com/kata/515e188a311df01cba000003
  //  function getPlanetName(id){
  //     return {
  //        1: 'Mercury',
  //        2: 'Venus',
  //        3: 'Earth',
  //        4: 'Mars',
  //        5: 'Jupiter',
  //        6: 'Saturn',
  //        7: 'Uranus',
  //        8: 'Neptune',
  //     }[id];
  //   }
  //  }
  //console.log(getPlanetName(3));
//============================================
// https://www.codewars.com/kata/577ff15ad648a14b780000e7
// Задание 12.Напишите функцию greet, которая принимает параметр 
// language и возвращает приветствие на этом языке. 
// Если язык не входит в словарь, возвратить Welcome! 
  // function greet(language) {
  //   let ob = {
  //     english: 'Welcome',
  //     czech: 'Vitejte',
  //     danish: 'Velkomst',
  //     dutch: 'Welkom',
  //     estonian: 'Tere tulemast',
  //     finnish: 'Tervetuloa',
  //     flemish: 'Welgekomen',
  //     french: 'Bienvenue',
  //     german: 'Willkommen',
  //     irish: 'Failte',
  //     italian: 'Benvenuto',
  //     latvian: 'Gaidits',
  //     lithuanian: 'Laukiamas',
  //     polish: 'Witamy',
  //     spanish: 'Bienvenido',
  //     swedish: 'Valkommen',
  //     welsh: 'Croeso'
  //   };
  // }
  //console.log(greet('dutch'))
// ==============================================================
//  *** С Object.fromEntries вы можете преобразовать Map в Object:
    // const map = new Map([ ['foo', 'bar'], ['baz', 42] ]);
    // const obj = Object.fromEntries(map);
    // console.log(obj); // { foo: "bar", baz: 42 }
  
//  *** С Object.fromEntries вы можете преобразовать Array в Object: 
   // const arr = [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ];
   // const obj = Object.fromEntries(arr);
   // console.log(obj); // { 0: "a", 1: "b", 2: "c" }

// С Object.fromEntries, обратным ему методом Object.entries() и методами манипулирования массивами вы можете 
// преобразовывать объекты следующим образом:
   // const object1 = { a: 1, b: 2, c: 3 };
   // const object2 = Object.fromEntries(
   //   Object.entries(object1)
   //   .map(([ key, val ]) => [ key, val * 2 ])
   // );
   // console.log(object2);
   // { a: 2, b: 4, c: 6 }
// ============================================================
// 7 kyu
// https://www.codewars.com/kata/5b16490986b6d336c900007d/train/javascript
// My Languages (1 Solution)
//  function myLanguages(results) {
//   let arr = [];
//   let result = Object.entries(results).sort(function(a,b){
//                                            return  b[1] - a[1];
//    })
//    for (let i = 0; i < result.length; i++){
//         if(result[i][1] >= 60){
//           arr.push(result[i][0]);
//         }
//    }
//    return arr;
//  }
// console.log(myLanguages({"C++": 75, "ASM": 80, "Haskell": 55}));   // Output ["ASM", "C++"];
// ----------- (2 Solution)
// function myLanguages(results) {
//   return Object.keys(results).filter(r => results[r] > 59).sort((a,b) => results[b] - results[a]);
// } 






















