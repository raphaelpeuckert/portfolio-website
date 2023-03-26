const menuBtn = document.querySelector(".menu-btn");
const menuCtn = document.querySelector(".menu-ctn");
const root = document.querySelector(":root");
const menuContent = document.querySelector(".menu-content");
const navItems = document.querySelectorAll(".nav-item");
const contactLinks = document.querySelectorAll(".contact-links");
const menuSocial = document.querySelector(".menu-social");
const body = document.querySelector("body");

menuBtn.addEventListener("click", () => {
    const currentState = menuBtn.getAttribute("data-state");

    if(!currentState || currentState == "closed") {
        menuBtn.setAttribute("data-state", "opened");
        menuBtn.setAttribute("aria-expanded", "true");
        
        menuCtn.setAttribute("aria-expanded", "true");

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
    } else {
        menuBtn.setAttribute("data-state", "closed");
        menuBtn.setAttribute("aria-expanded", "false");

        menuCtn.setAttribute("aria-expanded", "false");

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
    }
});



let pageTitle = document.querySelector(".page-title-ctn");

window.addEventListener('scroll', () => {
    let scrollValue = window.scrollY;

    pageTitle.style.marginTop = scrollValue * -1 + 'px';
});