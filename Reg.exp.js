/* Шаблоны регулярных выражений 
// В регулярных выражениях есть такие понятия, как символьный класс (Character class) и квантификатор (Quantifier).
// Символьный класс – специальное обозначение, которое соответствует любому символу из определённого набора (например, цифры):
// Квантификатор – количество раз, которое встречается символ в строке подряд:

// Слеши /.../ говорят JavaScript о том, что это регулярное выражение. Они играют здесь ту же роль, что и кавычки для обозначения строк.
// Слеши используются, когда мы на момент написания кода точно знаем, каким будет регулярное выражение – и это большинство ситуаций.
//  added the \ to escape special characters

//abc/	    Последовательность символов
/[abc]/	    Любой символ из данного набора
/[^abc]/	Любой символ, не входящий в данный набор
/[0-9]/	    Любой символ из диапазона
/x+/	    Одно или несколько вхождений символа. То же самое, что и {1,}.
/x*/	    /* Ноль или более вхождений/ То же самое, что и {0,}. То есть символ может повторяться много раз или вообще отсутствовать.
/x?/	    Ноль или одно вхождение. То же самое, что и {0,1}. По сути, делает символ необязательным.
/x{2,4}/	От двух до четырех вхождений
/(abc)/	    группа
/a|b|c/	    Любой из нескольких шаблонов
/\d/ 	    соответствует любой цифре от 0 до 9 включительно, 
\D  	    не цифра
\w  	    соответствует буквам и цифрам, подчёркивание '_'.
\W   	    не алфавитно-цифровой символ(В частности, русские буквы принадлежат этому классу.)
/\s/ 	    любой пробельный символ (табуляции \t,перевода строки \n, и некоторые др редкие пробельные символы, обозначаемые как \v, \f и \r.)
/\S/	    не пробельный символ
/./ 	    любой символ, если с флагом регулярного выражения s, в противном случае любой символ, кроме перевода строки \n
/\b/ 	    граница слова
^   	    начало строки
$   	    конец строки
*/

//Для каждого символьного класса существует «обратный класс», обозначаемый той же буквой, но в верхнем регистре.
//«Обратный» означает, что он соответствует всем другим символам, например:

//Метод str.match(regexp) ищет совпадения: все, если есть флаг g, иначе только первое.
//Метод str.replace(regexp, replacement) заменяет совпадения с regexp на replacement: все, если у регулярного выражения есть флаг g, иначе только первое.
//Метод regexp.test(str) возвращает true, если есть хоть одно совпадение, иначе false.

