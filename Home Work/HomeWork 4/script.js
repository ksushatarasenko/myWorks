const arrayImg = [
    'https://www.lotlike.ru/upload/iblock/1f8/101-roza-pink-athena.jpg', 
    'https://shop.camellia.ua/upload/kamelia_flora/photos/93/81/1200x1200/cde54ecb_60018f5cda41a.JPG',
    'https://www.lotlike.ru/upload/iblock/3c9/101-roza-belle-rose.jpg',
    'https://shop.camellia.ua/upload/kamelia_flora/photos/e1/80/1200x1200/2b1a129a_5fa3c6563de93.JPG',
    'https://shop.camellia.ua/upload/kamelia_flora/photos/6e/03/1200x1200/e37eee74_5e306fb225e6f.JPG',
];

for (let i = 0; i<arrayImg.length; i++){
    const image = document.createElement('img');
    image.setAttribute ('src', arrayImg[i]);
    document.body.append(image);

    image.onclick =() =>{
        // if(image.classList[0] !== 'clickImg'){
        //     image.classList.add('clickImg');
        // } else {
        //     image.classList.remove('clickImg');
        // }

        image.classList.toggle('clickImg');
    }
}
