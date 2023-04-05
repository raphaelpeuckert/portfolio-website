let language = navigator.language.split('-').slice(0,1).toString();

window.onload = () => {

    if(language === 'de') {
        document.title = 'Kontakt | Raphael Peuckert';
        document.querySelector('.contact-subtitle').innerHTML = 'SAG HALLO';
    }

};


