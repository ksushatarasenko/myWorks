const textRu = document.querySelectorAll('.ru');
const textEn = document.querySelectorAll('.en');
const languageSelect = document.querySelector('#language');
console.log(languageSelect)
console.log(textRu)


languageSelect.addEventListener('change', function (event) {
    event.preventDefault();
    const selectedLanguage = event.target.value;
    
    console.log(selectedLanguage)
    if (selectedLanguage === 'ruOption') {
        textRu.forEach(elem => elem.classList.remove('selected')) 
        textEn.forEach(elem => elem.classList.add('selected')) 
    } else if (selectedLanguage === 'enOption') {
        textRu.forEach(elem => elem.classList.add('selected')) 
        textEn.forEach(elem => elem.classList.remove('selected')) 
    }
});