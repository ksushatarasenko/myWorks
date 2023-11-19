const form = document.querySelector(".form");
const name = document.querySelector("#name");
const cena = document.querySelector("#price");


// form2
const form2 = document.querySelector('.form2');
const searchInput = document.querySelector('#search');
let sum = document.querySelector("#sum");
let sumAll = document.createElement("h4");

const deletAll = document.querySelector("#deletAll");
form2.append(sumAll, deletAll);



// section for produkts
const list = document.querySelector("#produktList");
const noProduct = document.createElement("h1");
noProduct. innerText = "Нет продуктов!";
noProduct.style.textAlign = "center";
list.append(noProduct);



// 2) Создали пустой массив для создания списка товаров
let products = [];

// 3) Создали событие для кнопки
form.onsubmit = (e) => {
     e.preventDefault(); 
    //  отключили событие браузера
    products.push({title:name.value, price:cena.value})
    // заполняем наш массив данными которые вводит пользователь
    name.value = "";
    price.value = "";
    
    newProdukts(products);
    //  вызвали нашу функию, которая проходится по нашему массиву и выполняет другую функцию КреатНоде

};

// 5) создали функцию которая проходится по массиву  и вызывает другую функцию КреатНоде
function newProdukts (){
    list.innerHTML = "";
    // 6) присвоили пустую строку что бы она обнулялась после заполнения и субмита
    if(products.length === 0){
        list.append(newProdukts);
        return;
    }
    for(let i = 0; i < products.length; i++){
        createNode(products[i].title, products[i].price, i);
    }
}


// 4) Создаем функцию , которая создает (карточку товара)  сектион с дивами в котором два заголовка и заполняет их данными с массива
function createNode(title, price, index){
    const div = document.createElement('div');

    const h1 = document.createElement('h2');
    const h2 = document.createElement('h2');

    const btn = closeBtn();
    // теперь добавилт кнопку Х через нашу функцию
    btn.onclick = () => {
        list.removeChild(div);
        
        const result = [];
        if (products.length >2){
            for (let i=0; i < products.length; i++){
                if(i < index){
                    result.push(products[i]);
                }else if (i>index){
                    result.push(products[i]);
                }
            }
        }else{
            for (let i=0; i < products.length; i++){
            if( i !==index)result.push(products[i]);
            }
        }
    products = result;
    if(!products.length){
        list.append(noProduct);
        }
    };



    

    div.onmouseover = () => {
        btn.style.opacity = "1";
    }
    div.onmouseleave = () => {
        btn.style.opacity = "0";
    }

    list.append(div)
    div.append(h1, h2, btn);
    h1.innerText = title;
    h2.innerText = price;

    div.classList.add('card');

}



//  создаем функцию для кнопки Х
function closeBtn() {
    const btn = document.createElement("button");
    btn.innerText ="X";
    btn.classList.add("close");
    return btn;
}

// document.body.append(closeBtn());
// // вызвали нашу функцию и добавили кнопку в документ для ее стилизации потом мы добавим ее на карточку






// form2

form2.onsubmit = (e) => {
    e.preventDefault();
    list.innerHTML = "";
        for(let i = 0; i < products.length; i++){
            if(products[i].title === searchInput.value){
                 createNode(products[i].title, products[i].price, i);
            }
           
        }
    
};


//   onclick для кнопки для подсчета суммы
sum.onclick = () => {
    sum = 0;
    
    for(let i = 0; i < products.length; i++){
       sum += Number(products[i].price);// складываем цены всех товаров
        
    }
    console.log(sum)
    sumAll.innerText = `Общая сумма товаров  ${sum} y.e`;
};

// onclick  удаление всех товаров
deletAll.onclick = () => {
    products =[];// очищаем массив товаров
    list.innerText = " ";// очищаем список товаров на странице
    sumAll.innerText = ' ';// очищаем итоговую сумму
    
    if (!products.length) {
        list.appendChild(noProduct);
      }
};



// sort button сортируем товар по цене от меньшего
const sorBtn = document.querySelector("#sortBtn");

sorBtn.onclick = () => {
    products.sort((a,b) => a.price - b.price);
    newProdukts();
}
