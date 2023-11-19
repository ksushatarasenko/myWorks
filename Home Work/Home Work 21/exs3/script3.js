const wrapper = document.querySelector(".wrapper");

const gallery = document.createElement("div");
gallery.classList.add("gallery");
const listCards = document.createElement("div");
listCards.classList.add("list");

wrapper.append(gallery, listCards);


const array = [
    "https://zhenskiyray.ru/wp-content/uploads/2023/02/330844663_5854715644584359_2764662850800556285_n.jpg",
    "https://i.pinimg.com/564x/aa/69/77/aa6977e2b9fda80e16f27a2a7808f858.jpg",
    "https://i.pinimg.com/564x/da/a0/fe/daa0fe9bee7804c60101f8be2704d428.jpg",
    "https://i.pinimg.com/564x/2c/62/fd/2c62fdaf41d9892d662cc88be6cb3772.jpg",
    "https://i.pinimg.com/564x/02/cf/41/02cf41c7a68824255f5fb163c9640dc5.jpg",
    "https://i.pinimg.com/564x/c1/ce/ee/c1ceeea5d6567680a189db6618f94e2a.jpg",
    "https://i.pinimg.com/564x/52/4d/cd/524dcde165f54546ee5f6547e1140e51.jpg",
    "https://i.pinimg.com/564x/82/14/10/8214105b9b21d2220328e87479ec1e31.jpg",
];

array.forEach ((elem, index) => {
    const cards = document.createElement("div");
    cards.classList.add("cards");
    listCards.append(cards);
    cards.style.backgroundImage = `url(${elem})`;
    console.log (cards);

    cards.addEventListener("click", () => {
        gallery.style.backgroundImage = `url(${elem})`;
        gallery.classList.add("active");
    });
    if (index === 0){
        cards.click();
    }   
});





