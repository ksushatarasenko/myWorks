
const btn = document.querySelector("#search");

async function searchPhotos() {
  const apiKey = "EyqxVbSoVnTrotVNbObRyuC5t7XppIoguaiBo34M";
  const apiUrl = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos";

  // получение выбранного критерия поиска (камеры)
  const selectedCamera = document.querySelector("#cameraSelect").value;

  // отправка запроса и обработка ответа
  const response = await fetch(`${apiUrl}?sol=1000&api_key=${apiKey}&camera=${selectedCamera}`);
  const data = await response.json();

  // очистка контейнера с фотографиями
  const photosContainer = document.querySelector("#photosContainer");
  photosContainer.innerHTML = "";

  // проверка наличия фотографий
  if (data.photos.length > 0) {
    // создание элементов для отображения фотографий
    data.photos.forEach(elem => {
      const img = document.createElement("img");
      img.src = elem.img_src;
      photosContainer.append(img);
    });
  } else {
    const message = document.createElement("p");
    message.textContent = "Фотографии не найдены.";
    photosContainer.append(message);
  }
}

btn.onclick = () => {
  searchPhotos();
};

//   --------
// функция для скролла

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  
