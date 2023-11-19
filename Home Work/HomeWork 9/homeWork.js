// 1) Напишите функцию printWithDelay, которая принимает в качестве аргумента массив строк. Функция должна выводить каждую строку из массива на консоль с задержкой в 1 секунду между каждой строкой.

const fruitis = ['apple', 'kiwi', 'banana', 'cherry'];
function printWithDelay (fruitis){
    fruitis.forEach((element, index) => {
         setTimeout(() => {
    console.log(element);
}, index*1000);
    });
}
console.log(printWithDelay(fruitis));
// --------------------------------------------
// 2)Напишите функцию getSquares, которая принимает в качестве аргумента массив чисел. Функция должна использовать метод map для возведения в квадрат каждого числа в массиве и возвращать новый массив, содержащий возведенные в квадрат числа.

// const array = [2, 6, 4 ,5, 7, 8];
// const getSquares = array.map((elem) =>{
//     return elem ** 2;
// });
// console.log(getSquares);
// --------------------------------------------

// 3)Напишите функцию sumEvenSquares, которая принимает в качестве аргумента массив чисел. Функция должна использовать методы map и filter  и вернуть сумму оставшихся четных чисел.

// const nums = [1, 2, -5, 15, -6, -8, 1, 6, 7, -1, 10, -3];
// let sum = 0;
// const evenNums = nums.filter((element1) => element1%2 === 0);

// const sumEvenSquares = evenNums.map((element) => {
// return sum += element;
// });
// console.log(sumEvenSquares);
// console.log(sum);
 


// 4)Напишите функцию с именем delayedUpperCase, которая принимает в качестве аргумента массив строк. Функция должна использовать метод forEach для перебора каждой строки в массиве и выводить на консоль версию строки в верхнем регистре с задержкой в 2 секунды.
 
// const fruitis1 = ['apple', 'kiwi', 'banana', 'cherry'];
//  function delayedUpperCase (){
//     fruitis1.forEach((element2, index2) =>{
//         setTimeout (()=>{
//             console.log(element2.toUpperCase());
//         }, index2 * 2000);
//     });
//  }
//  delayedUpperCase(fruitis1)

// 5)Напишите функцию countDown, принимающую в качестве аргумента число. Функция должна использовать метод setTimeout для печати чисел от заданного числа до 1, с задержкой в 1 секунду между каждым числом.


// function countDown (number){

//     for(let i = number; i>1; i--){

//     setTimeout(() => {
//        console.log(i);
      
//         }, (number - i)*1000);
//     };
// };

// countDown(5);


// 6)Напишите функцию filterNamesByLetter, которая принимает в качестве аргументов массив имен и букву. Функция должна использовать метод filter, чтобы вернуть новый массив, содержащий только те имена из исходного массива, которые начинаются с заданной буквы. 

//  function filterNamesByLetter (names, letter){
//     return names.filter((element) => element[0].toUpperCase() == letter);
//  }

//  const names = ['Oksana', 'olya', 'Kolya', 'Alla', 'sveta', 'larisa', 'Sasha']
//  console.log(filterNamesByLetter(names, 'O'));
