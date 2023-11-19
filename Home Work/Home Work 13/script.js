// 1)Создайте функцию delayedTask, которая возвращает промис.


// Функция delayedTask должна принимать два аргумента: taskName (название задачи) и delay (задержка в миллисекундах).
// Внутри функции, используйте setTimeout для задержки выполнения задачи на указанное количество миллисекунд.
// После задержки, функция должна разрешить промис с сообщением, содержащим название задачи и время выполнения.

function delayedTask(taskName, delay){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const messege = `Задача: ${taskName} выполнена за ${delay} миллисекунд.`;
            if(messege){
                resolve(messege);
            }else{
                reject("Error");
            }
        
        }, delay)
    })
};

delayedTask('решить пример', 2000).then ((mess) => {
    console.log(mess);
}).catch((error) => {
    console.log(error);
})




// 2)Задача: Асинхронная обработка массива данных


// Ваша задача состоит в том, чтобы создать функцию processArray, которая будет принимать массив чисел и возвращать новый массив с результатами асинхронной обработки каждого элемента исходного массива.


// Создайте функцию processArray, которая принимает массив arr в качестве аргумента.
// Внутри функции, создайте новый массив results, который будет содержать результаты асинхронной обработки элементов исходного массива.
// Используйте метод map для итерации по каждому элементу массива arr.
// Для каждого элемента массива, создайте новый промис, который будет имитировать асинхронную обработку. Внутри промиса, используйте setTimeout, чтобы задержать выполнение обработки на случайное время (например, от 1 до 3 секунд).
// В функции обратного вызова промиса, разрешите промис с результатом обработки элемента массива.
// Соберите все промисы в массив results и возвращайте его из функции processArray.

function processArray(arr) {
    const results = arr.map((elem) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const newElem = elem ** 2;
          if (newElem) {
            resolve(newElem);
          } else {
            reject("Error");
          }
        }, Math.random() * 2000 + 1000);
      });
    });
    return results;
  }
  
  const arr = [2, 3, 4, 5, 6, 7];
  const newResults = processArray(arr);
  
  Promise.all(newResults)
    .then((results) => {
      console.log(results);
    })
    .catch((error) => {
      console.log(error);
    });