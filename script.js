const menuButton = document.querySelector(".menu-button");
const menuContainer = document.querySelector(".menu-container");
const root = document.querySelector(":root");
const menuContent = document.querySelector(".menu-content");
const navItems = document.querySelectorAll(".nav-item");
const contactLinks = document.querySelectorAll(".contact-links");
const menuSocial = document.querySelector(".menu-social");
const body = document.querySelector("body");
const hamburger = document.querySelector(".hamburger");


function removeFocus(){
    document.menuButton.blur();  
}

menuButton.addEventListener("click", () => {
    const currentState = menuButton.getAttribute("data-state");

    if(!currentState || currentState == "closed") {
        menuButton.setAttribute("data-state", "opened");
        menuButton.setAttribute("aria-expanded", "true");
        
        menuContainer.setAttribute("aria-expanded", "true");

        root.style.setProperty("--menu-primary-color", "white");
        root.style.setProperty("--menu-secondary-color", "black");

        menuContent.style.setProperty("display", "flex");

        for(i=0; i<navItems.length; i++) {
            navItems[i].setAttribute("aria-expanded", "true");
        }
        
        for(i=0; i<contactLinks.length; i++) {
            contactLinks[i].setAttribute("aria-expanded", "true");
        }
        menuSocial.setAttribute("aria-expanded", "true");

        body.classList.add("prevent-scroll");

        setTimeout(function(){
            menuButton.style.backgroundColor = "var(--menu-primary-color)";
            hamburger.style.stroke = "var(--menu-secondary-color)";
        }, 300);
    } else {
        menuButton.setAttribute("data-state", "closed");
        menuButton.setAttribute("aria-expanded", "false");

        menuContainer.setAttribute("aria-expanded", "false");

        root.style.setProperty("--menu-primary-color", "black");
        root.style.setProperty("--menu-secondary-color", "white");

        menuContent.style.setProperty("display", "none");

        for(i=0; i<navItems.length; i++) {
            navItems[i].setAttribute("aria-expanded", "false");
        }

        for(i=0; i<contactLinks.length; i++) {
            contactLinks[i].setAttribute("aria-expanded", "false");
        }
        menuSocial.setAttribute("aria-expanded", "false");

        body.classList.remove("prevent-scroll");

        setTimeout(function(){
            menuButton.style.backgroundColor = "var(--menu-primary-color)";
            hamburger.style.stroke = "var(--menu-secondary-color)";
        }, 300);
    }
});



let pageTitle = document.querySelector(".page-title-container");

window.addEventListener('scroll', () => {
    let scrollValue = window.scrollY;

    pageTitle.style.marginTop = scrollValue * -1 + 'px';
});




function reveal() {
    var reveals = document.querySelectorAll(".home--projects-card-container");
  
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
    
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("fadeIn");
        } else {
            reveals[i].classList.remove("fadeIn");
        }
    }
}
  
window.addEventListener("scroll", reveal);


