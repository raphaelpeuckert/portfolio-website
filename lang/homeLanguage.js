const homePage = document.querySelector('#home-page');

let language = navigator.language.split('-').slice(0,1).toString();

window.onload = () => {

    if(language === 'de') {
        document.title = 'Start | Raphael Peuckert';
        document.querySelector('.home-subtitle').innerHTML = 'FRONTEND-ENTWICKLER';
    }

};



