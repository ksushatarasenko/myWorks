// https://learn.javascript.ru/function-basics 
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function  

// // 1)Найдите общие элементы(в виде массива) между двумя массивами.
// // Пример: [1,2,3], [4,2,1] => [1,2]
const array1 = [1,2,3];
const array2 = [4,2,1];
const filtr = [];

for(let i=0; i<array1.length; i++){
    for(let j=0; j<array2.length; j++){
        if(array1[i]==array2[j]){
            filtr.push(array1[i]);
        }
    }
}console.log(filtr);



// // 2)Создать функцию, которая получает в качестве аргумента число и возвращает массив из чисел от 0 до указанного числа.
let newArray = [];
function array(num){
    for (let i = 0; i <= num; i++){
        newArray.push(i);
    }console.log(newArray);
}
array(5);

// // 3)Предыдущее задание делаем с объектом. (как ключ передаем i).
 
let object = {};
 function array3(num1){
    for (let i = 0; i <= num1; i++){
        object[i] = i;
    }return object;
}
let result1 = array3(4);
console.log(result1);


// // 4)Описать функцию, которая получает в качестве аргумента число и строку, где число обозначает сколько раз должна быть добавлена эта строка в массив. Возвращает массив из этих строк. Например: передаем строку “dog” и цифру 3, в результате мы получаем [“dog”,”dog”,”dog”].
 
const array4 = [];

function myFun(num, str){
    for (let i = 0; i < num; i++){
        array4.push(str);
    }return array4;
}
let result2 = myFun(3, 'dog');
console.log(result2);


// // 5)Создайте функцию, которая как аргумент принимает одну строку.Функция возвращает это слово в развернутов виде. Пример: “cat” => “tac”

function perev(strok){
    let revers = ""; 
        for( let i = strok.lenght -1; i >=0; i--){
            revers += strok[i];
        }
        return revers
 }
 console.log(perev('cat'));


// 6)Напишите функцию, которая в качестве аргументов получает слово и определяет, является ли оно палиндромом. Если да, функция возвращает true, в ином случае false

function palindrome(word){
    
    for(let i=0; i<word.length; i++){
            if (word[i] !== word[word.length - 1-i]){
        return false;
    }

    }
    return true;
 }
 

 let result3 = palindrome('annah');
 console.log(result3);



// 7)Написать функцию, которая получает в качестве аргумента массив из объектов и возвращает объект с самым дорогим товаром.


let obj = [
    {name: 'laptop', price:1200},
    {name: 'Mouse', price:20},
    {name: 'Keyboard', price:50},
    {name: 'Monitor', price:300},

];


function fun(tovar){
    let max = 0;
    for (let i = 0; i < tovar.length; i++){
        if (max === 0 || tovar[i].price > max.price){
                max = tovar[i];
        }
    }return max;
}
let result = fun(obj);

console.log(result);
  