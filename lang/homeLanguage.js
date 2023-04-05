const homePage = document.querySelector('#home-page');
let homeAbout = document.querySelector('.home--about');

console.log(document.querySelector('.home--about').childNodes.h2)

let language = navigator.language.split('-').slice(0,1).toString();

window.onload = () => {

    if(language === 'de') {
        document.title = 'Start | Raphael Peuckert';
        document.querySelector('.home-subtitle').innerHTML = 'FRONTEND-ENTWICKLER';
        document.querySelector('.home--about').childNodes[1].innerHTML = 'Wer bin ich?';
        document.querySelector('.home--about').childNodes[3].innerHTML = 'Da du meinen Namen bereits kennst, kann ich ihn hier weglassen. Ich bin 19 Jahre alt und fand 2020 zum Programmieren, bis ich mich 2021 auf die Website Entwicklung fokussierte. Zu dieser Zeit fing ich auch an Website- und Logodesign zu lernen. Die letzten Jahre verbrachte ich mit gelegentlichen Arbeiten in verschiedensten Bereichen. Zeitweise bot ich auch Selbständig meine Dienste als Entwickler an, wobei ich sehr viel über die Geschäftswelt in dieser Branche lernen konnte.';
    }

};



