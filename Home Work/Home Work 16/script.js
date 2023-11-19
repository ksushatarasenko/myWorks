// 1)  Создайте класс ShoppingCart, который имеет свойства items и totalPrice, а также методы addItem и removeItem. Метод addItem должен добавлять товар в корзину и обновлять общую цену, а метод removeItem должен удалять товар из корзины и обновлять общую цену. Оба метода должны выдавать ошибку, если переданный аргумент не является допустимым объектом со свойствами name и price.

class ShoppingCart{
    constructor(items , totalPrice){
        this.items = [];
        this.totalPrice = totalPrice || 0;

    }

    addItem (name, price){
        try{
            if(typeof name === 'string' && typeof price === 'number'){
                const item = {name, price}
                this.items.push(item);
                this.totalPrice += item.price;
            } else {
                throw new Error("It is ERROR");
            }
        } catch (e) {
            console.log(e.message);
        }       
    }

    removeItem (name){
        try{
            let index = 0;
            for (let i =0; i < this.items.length; i ++){
                if(this.items[i].name === name){
                    index = i;
                    break;
                } else {throw new Error("Do not this name")};   
            }
          
            const remove = this.items.splice(index,1)[0];
            this.totalPrice -= remove.price
       
        } catch (e) { console.log(e.message)}
    }
}

const products = new ShoppingCart();

products.addItem('milk', 10)
console.log(products);

products.addItem('soda',20);
console.log(products);

products.addItem('salt', 5);
console.log(products);

products.removeItem('milk');
console.log(products);

products.removeItem('soda')
console.log(products);

console.log('============ 2 ============');
// -------
//

// 2)Создайте класс с именем Triangle, который имеет свойства a, b и c, представляющие длины сторон треугольника. Класс должен иметь метод getPerimeter который вычисляет периметр. Класс также должен использовать блоки try-catch для обработки ошибок при создании нового экземпляра класса, выбрасывая ошибку, если значения a, b и c не являются допустимыми числами.
 class Triangle{


    constructor(a, b, c){

        try { 
        if(typeof a !== 'number' || typeof b != 'number' || typeof c !== 'number' ||
           a <=0 || b <= 0 || c <=0){
            throw new Error("Значения a, b и c должны быть положительными числами.")
           }else{
                this.a = a;
                this.b = b;
                this.c = c;
            }
        } catch (e) {
            console.log(e.message)
        }
        
    }

    getPerimeter(a, b, c){
        console.log('Периметр треугольника = ' + (this.a + this.b + this.c) + "см");
    }
    

 }

 const treugol = new Triangle(2, 4, 5);

 treugol.getPerimeter();

 
console.log("======== 3 ========");
 
// 3)Создайте класс Circle со свойствами radius и diameter. Добавьте методы getter и setter для обоих свойств, которые обновляют другое свойство соответствующим образом. Например, если обновляется свойство radius, то свойство diameter также должно обновляться по формуле diameter = radius * 2, и наоборот. При создании экземпляра указываем только радиус.

class Circle {
    constructor(radius) {
      this._radius = radius;
      this._diameter = radius * 2;
    }
  
    get radius() {
      return (`Радиус = ${this._radius} cм`);
    }
  
    set radius(value) {
      this._radius = value;
      this._diameter = value * 2;
    }
  
    get diameter() {
      return (`Диаметер = ${this._diameter} см`);
    }
  
    set diameter(value) {
      this._diameter = value;
      this._radius = value / 2;
    }
  }
  
  const item1 = new Circle(5);
  

console.log(item1.diameter);
console.log(item1.radius);

console.log("======== 4 ========");
// 4)Создайте класс Person со свойствами firstName, lastName и age. Добавьте статическое свойство oldestPerson, которое хранит самый старый экземпляр Person, созданный на данный момент. Добавьте статический метод compareAge, который принимает два экземпляра Person и возвращает разницу в их возрасте.

class Person{
    static oldestPerson;
    static compareAge (oldPerson, newPerson){
        return oldPerson.age - newPerson.age
    }
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        if (!Person.oldestPerson || age > Person.oldestPerson.age) {
            Person.oldestPerson = this;
          }
    }


}

const person1 = new Person ("Oksana", "Tarasenko", 45);
const person2 = new Person ("Petr", 'Zhereb', 48);
const person3 = new Person ("Maryna", "Koval", 33);

console.log(Person.oldestPerson);
console.log(Person.compareAge(person3, person1));




console.log("======== 5 ========");
// 5)Создайте класс Book со свойствами title, author и yearPublished. Добавьте статическое свойство, где будут сохранены все экземпляры Book.  Добавьте статический метод listAuthors, который возвращает массив со  всеми именами авторов.

class Book{
    static listBook = [];
    
    static listAuthors() {
        const authors = [];
        Book.listBook.forEach(book =>{
        if (!authors.includes(book.author)) {
            authors.push(book.author);
          }
        });
          return authors;
    }
    constructor(title, author, yearPublished){
        this.title = title;
        this. author = author;
        this.yearPublished = yearPublished
        Book.listBook.push(this);
        Book.listAuthors(author);
    }
}

const book1 = new Book("book1", "autor1" , 2011);
const book2 = new Book("book2", "autor2" , 2010);
const book3 = new Book("book3", "autor3" , 2022);
const book4 = new Book("book4", "autor4" , 2023);

console.log(Book.listBook);

console.log(Book.listAuthors());

