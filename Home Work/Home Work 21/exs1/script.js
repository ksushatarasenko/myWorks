const root = document.querySelector("#root");

const images = [
    "https://print4you.com.ua/upload/medialibrary/148/14811801f098c8e4af77396b1baaee90.jpg",
    "https://print4you.com.ua/upload/medialibrary/ad1/ad1efe18170fb8dd3f723764bed88df4.jpg",
    "https://print4you.com.ua/upload/medialibrary/c3a/c3a0fc810221181dcfac5c520e7828db.jpg",
    "https://print4you.com.ua/upload/medialibrary/713/7134d69a702f6fd36751310bff878448.jpg",
    "https://print4you.com.ua/upload/medialibrary/67e/67e4654f03e4d9f453b3debe13a34104.jpg",
];

//   создаем два контейнера : один- для рамки второй для карточек

const frame = document.createElement("div");
frame.classList.add("frame");

const btn_wrapper = document.createElement("div");
btn_wrapper.classList.add("btn_wrapper");

const left = document.createElement("button");
left.classList.add("arrows");
left.style.backgroundImage = "url('images/left.png')";
const right = document.createElement("button");
right.classList.add("arrows");
right.style.backgroundImage = "url('images/right.png')";
btn_wrapper.append(left, frame, right);



const cards = document.createElement("div");
cards.classList.add("cards");

frame.append(cards);
root.append(btn_wrapper );

for(let i = 0; i < images.length; i ++){
    const card = document.createElement("div");
    card.classList.add ("card");
    card.style.backgroundImage = `url("${images[i]}")`;
    cards.append(card);
}

// создаем кнопки для клика

const rounds = document.createElement("div");
rounds.classList.add("rounds");

frame.append(rounds);
 
const all_btns = [];

for(let i =0; i < images.length; i++){
    const  round = document.createElement("button");
    rounds.append(round);
    all_btns.push(round);

    round.onclick = function() {
        indexActive = i;
            updateActive();
           
    }
            
       
}

let indexActive = 0;
//  функция обновления класса и позиции карточек
function updateActive() {
    for (let i = 0; i < all_btns.length; i++) {
      if (i === indexActive) {
        all_btns[i].classList.add("active");
      } else {
        all_btns[i].classList.remove("active");
      }
    }
    cards.style.left = `${-1 * indexActive * 100}%`;
  }

//  события наших стрелок
left.addEventListener("click", () => {
    if(indexActive <= 0){
        indexActive = images.length -1 ;
    }else {
        indexActive--;
    }
    updateActive();
});


right.addEventListener("click", () => {
    if(indexActive >= images.length-1){
        indexActive = 0;
    }else {
        indexActive++;
    }
    updateActive();
});

updateActive();
