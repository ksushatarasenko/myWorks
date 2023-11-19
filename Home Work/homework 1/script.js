// Создайте в HTML 3 картинки без атрибутов. Используя следующий массив, задайте источник и альтернативный текст для каждой картинки.
let array = [
    {
        alt: "lion",
      src: "https://www.gesser-images.com/wp-content/uploads/2016/08/Lion-046-_DS30374-300x300.jpg"
    },
    {
        alt: "elephant",
      src: "https://globalelephants.org/wp-content/uploads/2014/05/Guida-Blog-Post-424-300x300.jpg"
    },
    {
        alt: "dog",
      src: "https://dickmanroadvet.com/wp-content/uploads/2016/07/dvm2-23-300x300.jpg"
    },
    ]

    const image = document.querySelectorAll('img');
    

    for (let i = 0; i<image.length; i++)[
    
        image[i].setAttribute('alt', array[i].alt)
         
    ]
    for (let i = 0; i<image.length; i++)[
       image[i].setAttribute('src', array[i].src)
    
    ]

    // console.log(image)
    // console.log(array)

    // Задача 2:
// Создайте список с 3 пустыми пунктами в HTML.Используя следующий массив измените текст пунктов.
const array1 = ['Item 1', 'Item 2', 'Item 3'];
const text = document.getElementsByTagName('li');

for(let i = 0; i<text.length; i++){
    text[i].innerText = array1[i];
}

// console.log(array1)
// console.log(text)
