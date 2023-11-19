// Задача 1:
// Самостоятельно изучить как "stringify" работает с разными типами данных (как переводит функции,null и остальные типы данных).


// Задача: Сохранение и извлечение сложного объекта


// 1)Создайте сложный объект JavaScript, который содержит различные типы данных, включая строки, числа, массивы и другие объекты. 
// 2)Преобразуйте этот объект в строку JSON и сохраните его в localStorage.
// 3)Затем извлеките эту строку JSON из localStorage, преобразуйте ее обратно в объект JavaScript и выведите содержимое объекта в консоль.
const array = {
    name: 'Oksana',
    age: 45,
    animals: null,
    something:undefined,
    courses:['html', 'css', 'js'],
};

const str = JSON.stringify(array);
localStorage.setItem('arr', str);
const result = localStorage.getItem('arr');
const object = JSON.parse(result);
console.log(object);

// Задача 2:
// Создание системы оценок
// Создайте HTML-страницу с тремя полями ввода: "Студент", "Предмет" и "Оценка".
// Под полями ввода разместите две кнопки: "Сохранить" и "Загрузить".
// Когда пользователь вводит информацию в поля и нажимает "Сохранить", вы должны создать объект JavaScript, содержащий эту информацию, и добавить этот объект в массив, который сохраняется в localStorage.
// Когда пользователь нажимает "Загрузить", вы должны извлечь массив из localStorage и вывести всю информацию о каждом студенте на странице.

const form = document.querySelector('#students');
const nameInput = document.querySelector('#name');
const lessonsInput = document.querySelector('#lessons');
const ratingInput = document.querySelector('#rating');
const download = document.querySelector('#download');
const list = document.querySelector('#list');


let arrayStudents = [];


function addStudent (name, lessons, rating){
    arrayStudents.push({name, lessons,rating});
};

function updateStudent(){
    list.innerHTML = "";
    arrayStudents.forEach(student =>{
        const elementStudent = document.createElement("li");
        elementStudent.innerText = `${student.name} - ${student.lessons}: ${student.rating}`;
        list.append(elementStudent);
    }); 
};

form.onsubmit = (e) => {
    e.preventDefault();
    const nameStudent = nameInput.value;
    const lessonsStudent = lessonsInput.value;
    const ratingStudent = ratingInput.value;
    addStudent(nameStudent, lessonsStudent, ratingStudent);
    updateStudent();
    setArray('Students', arrayStudents)
    nameInput.value = "";
    lessonsInput.value = "";
    ratingInput.value = "";
};

function setArray(key, array){
    const newStudent = JSON.stringify(array);
    localStorage.setItem(key, newStudent);
};

function getArray(key){
    const objectList = localStorage.getItem(key);
    if(objectList){arrayStudents = JSON.parse(objectList);
         updateStudent();
    }; 
};

download.onclick = () =>{
    getArray("Students");
}



