async function getUser(id){
    try{
        const [userDataRes, postsDataRes] = await Promise.all([
            fetch(`https://jsonplaceholder.typicode.com/users/${id}`),
            fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`),
        ]);
        if(!userDataRes.ok || !postsDataRes.ok){
            throw new Error("Такого пользователя нет.");
        }

        const user = await userDataRes.json();
        const posts = await postsDataRes.json();

        return ({user:user, posts:posts})
    } catch (e){
        return (e.message)
    }
}

const container = document.querySelector(".user-container");


async function addCard(id) {  
    
    try {
        const divUser = document.createElement("div");// создали основной div для юзера
        divUser.classList.add("user");// присвоили класс этому div

        const userName = document.createElement("p");// создали параграф для имени юзера
        const userEmail = document.createElement("p");// создали параграф для почты юзера
        
        const divPosts = document.createElement("div");// создали основной div для постов юзера
        divPosts.classList.add("posts");// присволи этому диву класс
        
        container.append(divUser, divPosts);
        divUser.append(userName, userEmail);

        const getInfo = await getUser(id);// создали переменную для хранения ответа с сервера
            console.log(getInfo);

            userName.innerText = getInfo.user.name;// заполнили данными с сервера           
            userEmail.innerText = getInfo.user.email;


            // ---проходимся по всем постам и заполняем наши параграфы постов
        getInfo.posts.forEach(element => {
            const divItemPosts = document.createElement("div");// создали див для каждого поста
            divItemPosts.classList.add("item");
            
            const postName = document.createElement("p");
            const postText = document.createElement("p");

            postName.innerText = element.title;
            postText.innerText = element.body;

            divPosts.append(divItemPosts);

        
            // ----добавление кнопки удалить пост
            const deleteButton = document.createElement('button');
            deleteButton.classList.add("delButton");
            deleteButton.innerText = 'Удалить';

            deleteButton.onclick = () => {
            const result = deletePost(element.id);
            if (result) {//если удаление прошло успешно, обновляем список постов
                divItemPosts.remove();
            } else {
                console.log('Ошибка удаления поста.');// если ошибка при удалении поста
            }
            };
            // ----------
            divItemPosts.append(postName, postText, deleteButton);            

        });
    }catch {
        const messageErrorId = document.createElement("h2");
        messageErrorId.innerText = "ТАКОГО ПОЛЬЗОВАТЕЛЯ  НЕТ";
        container.append(messageErrorId);
        console.log("Do not id")      
    }


    
}

let id = localStorage.getItem('id') || 1;
const btnNext = document.querySelector(".next");
const btnBack = document.querySelector(".back");
addCard(id);


btnBack.onclick = () => {
    if(id > 1){
    
    id--;
    localStorage.setItem('id', id)
    container.innerHTML = "";
    addCard(id);
}else{
    container.innerText = "ТАКОГО ПОЛЬЗОВАТЕЛЯ  НЕТ"
}
};
btnNext.onclick = () => { 
    id++;
    localStorage.setItem('id', id);
    container.innerHTML = "";
    addCard(id);
};

// =======
async function deletePost(postId) {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`,
       {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        throw new Error('Не удалось удалить пост.');
      }
  
      return true; // Возвращаем true в случае успешного удаления
    } catch (error) {
      console.error(error);
      return false; // Возвращаем false в случае ошибки удаления
    }
    
}
