// Мини-игра "Викторина"


// Ваша задача - создать викторину с несколькими вопросами, каждый из которых имеет несколько вариантов ответа, но только один из них правильный. Пользователь выбирает один ответ на каждый вопрос.


// 1) Создайте массив объектов, где каждый объект представляет один вопрос, возможные ответы и правильный ответ
// 2)Сохраните этот массив в localStorage в виде JSON.
// 3)Загрузите вопросы из localStorage, выведите их на страницу и предложите пользователю выбрать ответ на каждый вопрос.
// 4)После того как пользователь ответил на все вопросы, проверьте его ответы, сравнивая их с правильными ответами из localStorage, и подсчитайте количество правильных ответов.
// 5)Сохраните результаты пользователя в localStorage и предложите ему сыграть снова. Если пользователь сыграет снова, сравните его новые результаты с предыдущими и покажите, улучшился ли он.

const arrayQuiz = [
    {
        question: "Выбери правильный ответ: 4*7 = ...",
        answers: ["21", "36", "28", "24", "20"],
        correctAnswer: "28"
    },
    {
        question: "Выбери правильный ответ: 4*8 = ...",
        answers: ["21", "32", "28", "24", "20"],
        correctAnswer: "32"
    },
    {
        question: "Выбери правильный ответ: 4*6 = ...",
        answers: ["21", "36", "28", "24", "20"],
        correctAnswer: "24"
    },
    {
        question: "Выбери правильный ответ: 4*5 = ...",
        answers: ["21", "36", "20", "24", "20"],
        correctAnswer: "20"
    },
    {
        question: "Выбери правильный ответ: 4*9 = ...",
        answers: ["21", "36", "28", "24", '20'],
        correctAnswer: "36"
    },
];
// сохраняем наш массив в localStorage
const stringArray = JSON.stringify(arrayQuiz);
localStorage.setItem('setArrayQuiz', stringArray);

// подключаем наш контейнер с вопросами
const quizContainer = document.querySelector('#quiz-container');

// создаем функцию для получения массива из localStorage и заполнения страницы
function displayQuiz() {
    // получаем массив из localStorage
    const newArrayQuiz = localStorage.getItem('setArrayQuiz');
    const downloadQuiz = JSON.parse(newArrayQuiz);

    if (downloadQuiz) {
        downloadQuiz.forEach((element, index) => {
            // создаем div для вопроса
            const divQuestion = document.createElement("div");
            // заполняем его
            divQuestion.innerHTML = `<h3>Вопрос ${index + 1}:</h3>
            <p>${element.question}</p>`;
            
            // создаем div для вариантов ответов
            const divAnswer = document.createElement("div");
            
            // проходимся по массиву с ответами и создаем инпуты со стилями
            element.answers.forEach((answer) => {
                const answerInput = document.createElement("input");
                answerInput.type = 'radio';
                answerInput.name = `вопрос ${index}`;
                answerInput.value = answer;

                // добавляем инпут и текст варианта ответа к элементу ответов
                divAnswer.appendChild(answerInput);
                divAnswer.appendChild(document.createTextNode(answer));
            });   
            
            // добавляем элемент вопроса и элемент вариантов ответов к контейнеру викторины
            divQuestion.appendChild(divAnswer);
            quizContainer.appendChild(divQuestion);
        });
    }
}

// вызываем функцию для отображения вопросов на странице
displayQuiz();

// ПРОВЕРКА ОТВЕТОВ ПОЛЬЗОВАТЕЛЯ
const submitButton = document.querySelector('#submit-button');
submitButton.addEventListener("click", checkAnswers);

// пишем функцию для проверки ответов пользователя
function checkAnswers() {
  const userAnswers = [];
  
  // достаем данные из хранилища и преобразуем их в массив
  const savedQuestions = JSON.parse(localStorage.getItem('setArrayQuiz'));
  
  if (savedQuestions) {
    // проходимся по массиву (если в нем есть данные)
    savedQuestions.forEach((element, index) => {
      // получаем ответы от пользователя
      const inputQuest = document.getElementsByName(`вопрос ${index}`);
      let answerOption = null;
      
      for (let i = 0; i < inputQuest.length; i++) {
        if (inputQuest[i].checked) {
          answerOption = inputQuest[i];
          break;
        }
      }
      
      // если пользователь выбрал вариант ответа, сохраняем его в массив
      if (answerOption) {
        userAnswers.push(answerOption.value);
      }
    });
    
    // переменная для подсчета количества правильных ответов
    let countAnswer = 0;
    
    // сравниваем ответы пользователя
    for (let i = 0; i < savedQuestions.length; i++) {
      if (userAnswers[i] === savedQuestions[i].correctAnswer) {
        countAnswer++;
      }
    }
    
    // сохраняем результат пользователя в localStorage
    const userResult = {
      count: countAnswer,
      totalQuestions: savedQuestions.length
    };
    
    // получаем предыдущие результаты пользователя из localStorage
    const previousResult = JSON.parse(localStorage.getItem('userResult'));
    
    if (previousResult) {
      const previousScore = previousResult.count;
      const previousTotalQuestions = previousResult.totalQuestions;
      
      // сравниваем новый результат с предыдущими
      let improvement = '';
      
      if (countAnswer > previousScore) {
        improvement = 'улучшился';
      } else if (countAnswer < previousScore) {
        improvement = 'ухудшился';
      } else {
        improvement = 'не изменился';
      }
      
      // отображаем результат и информацию об улучшении
      const result = document.querySelector('#result-container');
      result.innerHTML = `<p>Ваш результат: ${countAnswer}/${savedQuestions.length}</p>
                          <p>Ваш результат ${improvement} .</p>`;
    } 
    
    // Сохраняем текущий результат пользователя в localStorage
    localStorage.setItem('userResult', JSON.stringify(userResult));
  }
}

// Вызываем функцию для проверки ответов
checkAnswers ();


const revers = document.querySelector("#revers");
revers.addEventListener('click', reversPage) ;
function reversPage() {
  location.reload();
} 