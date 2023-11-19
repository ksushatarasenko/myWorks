const stoune = document.querySelector("#stoune");
 const scissors = document.querySelector("#scissors");
 const paper = document.querySelector("#paper");
 const array = ["Камень", "Ножницы", "Бумага"];
 const resultStoune = document.querySelector('#resultStoune');


 const vybor = document.querySelector("#vybor");
 const error = document.querySelector("#error");

let choiceUser;
stoune.onclick = () => {
    vybor.play();
     choiceUser = "Камень";
     console.log(choiceUser);
     resu(choiceUser);
}
scissors.onclick = () => {
    vybor.play();
    choiceUser = "Ножницы";
    console.log(choiceUser);
    resu(choiceUser);
}
paper.onclick = () => {
    vybor.play();
   choiceUser = "Бумага";
   console.log(choiceUser);
   resu(choiceUser);
}

const choiceComputer = array[Math.floor(Math.random() * array.length)];
console.log(choiceComputer);

function resu(choiceUser) {
    if (choiceComputer === choiceUser){
        resultStoune.innerText = `Ничья.\n вы выбрали - ${choiceUser} \n компьютер выбрал - ${choiceComputer}\n попробуйте снова`
    } else if (
        (choiceUser === 'Камень' && choiceComputer === 'Ножницы') ||
        (choiceUser === 'Ножницы' && choiceComputer === 'Бумага') ||
        (choiceUser === 'Бумага' && choiceComputer === 'Камень') 
    ){
        resultStoune.innerText = `Вы выиграли! Поздравляем!!! \n вы выбрали - ${choiceUser} \n компьютер выбрал - ${choiceComputer}\n попробуйте снова`
    } else {
        error.play();
        resultStoune.innerText = ` Вы проиграли \n вы выбрали - ${choiceUser} \n компьютер выбрал - ${choiceComputer}\n попробуйте снова`
    }

    
}

resetStoune.onclick = () => {
    location.reload();
}
