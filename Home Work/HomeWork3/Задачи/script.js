// 1) Написать скрипт, который выводит списки с товарами в интерфейс (на основе массива с объектами).Внизу каждого списка выводится итоговая сумма товара. А так же в самом конце выводится итоговая сумма и количество всех товаров.

let array = [

    {
    
    title: "BMW",
    
    price: "40000",
    
    count: "15"
    
    },
    
    {
    
    title: "Toyota",
    
    price: "20000",
    
    count: "13"
    
    },
    
    {
    
    title: "Ford",
    
    price: "30000",
    
    count: "20"
    
    },
    
    {
    
    title: "Chevrolet",
    
    price: "60000",
    
    count: "9"
    
    },
    
    {
    
    title: "Volkswagen",
    
    price: "30000",
    
    count: "13"
    
    },
    
    ]

    
    const div = document.createElement("div");
    const itogSumma = document.createElement("h4");
    const itogCount = document.createElement('h4')
    let sumTot = 0;
    let countTotal = 0;

    for (let i = 0; i<array.length; i++){
        
        const title = document.createElement("h4");
        const price = document.createElement("p");
        const count = document.createElement("p");
        const summa = document.createElement("p");
    
        

        title.innerText = "title: "+array[i].title;
        price.innerText = "price: "+array[i].price+ " usd";
        count.innerText = " count: "+array[i].count+ " шт.";
        summa.innerText = "summa: "+array[i].price*array[i].count+" usd";
        

        const sum = Number(array[i].price*array[i].count)
        sumTot += sum;
     
        countTotal += Number(array[i].count);
        
        div.append(title, price, count, summa, itogSumma, itogCount);
        document.body.appendChild(div);
    }

    itogSumma.innerText = "Общая сумма товаров " + sumTot+ " usd";
    itogCount.innerText = "Общее количество товара " + countTotal+ " шт."
    
    
    document.body.append(div)
    

    // 2)Напишите скрипт, который выводит в интерфейс следующую таблицу(html должен быть пустым, все элементы создаются строго с помощью скриптов):

    const arraytab = [
        {
            number: "No.",
            fullName: "Full Name",
            position: "Position",
            salary: "Salary",
            
        },
        {
            number: "1",
            fullName: "Bill Gates",
            position: "Founder Microsoft",
            salary: "$1000",
            
        },

        {
        number: "2",
        fullName: "Steve Jobs",
        position: "Founder Apple",
        salary: "$1200",
        },

        {
        number: "3",
        fullName: "Larry Page",
        position: "Founder Google",
        salary: "$1100",
        },

        {
        number: "4",
        fullName: "Mark Zuckeberg",
        position: "Founder Facebook",
        salary: "$1300",
        },
       
    ]

    const table = document.createElement("table");
    const head = document.createElement("tr");
    const numberHead = document.createElement("th");
    const nameHead = document.createElement("th");
    const positionHead = document.createElement("th");
    const salaryHead = document.createElement("th");
    // const stroka = document.createElement("tr");

    numberHead.textContent = "number";
    nameHead.textContent = "fulName";
    positionHead.textContent = "position";
    salaryHead.textContent= "salary";
    
    head.append(numberHead, nameHead, positionHead, salaryHead);
    table.append(head);

    for  (let i =1; i < arraytab.length; i ++){
        const stroka = document.createElement("tr");
        const number = document.createElement("td");
        const name = document.createElement("td");
        const position = document.createElement("td");
        const salary = document.createElement("td");


        number.innerText = arraytab[i].number;
        name.innerText = arraytab[i].fullName;
        position.innerText = arraytab[i].position;
        salary.innerText = arraytab[i].salary;

        
        
        stroka.append(number, name, position, salary);
        
        table.append(stroka);
    }

    table.style.border = "2px solid black";

    table.style.borderCollapse = "collapse";
    table.style.marginTop = "40px";
    table.style.marginLeft = "40px";
    table.style.textAlignLast = "center"

    head.style.backgroundColor = "lightgray"; 
   
    

    document.body.appendChild(table);

    // 3)Дан массив из объектов, в котором хранятся породы собак и их возраст.Напишите цикл, который создаст для каждого объекта параграфы(Пример как должен выглядеть вывод первого объекта:golden retriever's age is 7 ) и добавит в body.

    const dogs = [
        {
          breed: "golden retriever",
          age: 7,
        },
        {
          breed: "labrador retriever",
          age: 4,
        },
        {
          breed: "french bulldog",
          age: 12,
        },
        {
          breed: "beagle",
          age: 6,
        },
        {
          breed: "german shepherd dog",
          age: 2,
        },
        {
          breed: "poodle",
          age: 3,
        },
        {
          breed: "bulldog",
          age: 4,
        },
    ];

    const divDog = document.createElement("div");
    
    divDog.innerText = "List of dogs";

    for( let i = 0; i < dogs.length; i ++){
        
        const pDog  = document.createElement("p");
        pDog.innerText = `${dogs[i].breed}'s age is ${dogs[i].age} year`;
    
       divDog.append(pDog);
    } 
    
    divDog.style.marginTop = "60px";
    document.body.appendChild(divDog);
        
    



    // 4)Создайте список с названиями фильмов и годов их выпуска из массива объектов. Массив с объектами создавать самому. Каждый объект должен иметь два ключа – name, year.

    const movies = [
        {
            nameMovies:"Железный человек",
            year: "2008",
        },

        {
            nameMovies:"Невероятный Халк",
            year: "2008",
        },

        {
            nameMovies:"Железный человек 2",
            year: "2010",
        },

        {
            nameMovies:"Тор",
            year: "2011",
        },

        {
            nameMovies:"Мстители",
            year: "2012",
        },
    ]


const div1 = document.createElement("div");
const ul  = document.createElement("ul");

for( let i = 0; i < movies.length; i ++){
    div1.innerText = "List of films";
    const li  = document.createElement("li");

    li.innerText = `Name movies: "${movies[i].nameMovies}"; realeased: - ${movies[i].year} year`;

    ul.append(li);
    div1.append(ul);
}

div1.style.marginTop = "60px"
document.body.appendChild(div1);
    




   






    





 
