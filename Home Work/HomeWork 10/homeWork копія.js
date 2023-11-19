
console.log("-----Задание 1(Пример: [1,2,3] => 1,2,3-----");

const nums = [1, 2, 3];
const string = nums.reduce((acc, curret) => `${acc},${curret}`);
 console.log(string);

// 2)Используя метод reduce, посчитайте сколько людей проголосовали.
console.log("-----Задание 2(Сколько людей проголосовали ЗА)-----");

const voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];


const otbor = voters.reduce((acc, curret) => {
    return curret.voted ? acc +1 : acc
}, 0);

console.log(`"За" проголосовалo ${otbor} людей.`);



// 3)Получив массив всех товаров из вашего списка желаний, прикиньте, сколько будет стоить купить все сразу.
console.log("-----Задание 3(Сколько будет стоить купить все сразу)-----");

const wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];
const sum = wishlist.reduce ((acc, curret) => {
    return acc + curret.price
}, 0);

console.log(`Что бы купить все сразу из списка понадобится - ${sum}`);

// 4) У вас есть массив объектов, представляющих список клиентов с их заказами. Каждый объект имеет свойства name и orders, где orders - это массив строк, представляющих товары, которые заказал клиент. Ваша задача - создать новый массив объектов, где каждый объект имеет свойства name и totalOrders, где totalOrders - общее количество товаров, заказанных клиентом.
console.log("-----Задание 4 (общее количество заказов)-----");

const clientss = [
    {name:"Oksana", orders:["laptop", "charge", "lamp"]},
    {name:"Petr", orders:["sofa", "table", "chair", "lamp"]},
    {name:"Roman", orders:["laptop", "table"]},
    {name:"Maryna", orders:["smartphone", "charge", "table"]},
] 
const newClients = clientss.map((elem) =>{
    return {name:elem.name, totalOrders:elem.orders.length};
})
console.log(newClients);


// 5)Создайте массив объектов со свойствами 'name' и 'age'. Вычислите количество совершенолетних и несовершеннолетних людей.
console.log("-----Задание 5 (Количество совершенолетних и несовершеннолетних людей)-----");

const clients = [
        {name:"Oksana", age: 20},
        {name:"Petr", age: 17},
        {name:"Roman", age: 18},
        {name:"Maryna", age: 21},
        {name:"Maryna", age: 15},
        {name:"Maryna", age: 24},
        {name:"Maryna", age: 30},
    ]

//     const overAge = clients.reduce((acc, curr) => {curr.age >=18 ? acc.adult++: acc.minor++;
//     return acc
// },
// {adult:0, minor:0 }
// );

// console.log(overAge);
// ----------- second variant--------

const adult = clients.filter((elem) => elem.age >= 18);
const minor = clients.filter((elem) => elem.age <18 );

const countAdult = adult.length;
const countMinor = minor.length;

console.log("Количество совершеннолетних людей составляет: " + countAdult );
console.log("Количество несовершеннолетних людей составляет: " + countMinor );

// 6)Создайте массив объектов со свойствами 'name' и 'age'. Используя методы массива, создайте новый массив, содержащий только те объекты, возраст которых больше 30 лет.
console.log("-----Задание 6 (Создайть новый массив, содержащий только те объекты, возраст которых больше 30 лет)-----");
const clients1 = [
    {name:"Oksana", age: 50},
    {name:"Petr", age: 47},
    {name:"Roman", age: 18},
    {name:"Maryna", age: 31},
    {name:"Maryna", age: 15},
    {name:"Maryna", age: 24},
    {name:"Maryna", age: 30},
];

const overThirty = clients1.filter((elem) => elem.age > 30);

console.log(overThirty);