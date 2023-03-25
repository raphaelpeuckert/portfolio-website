const menuBtn = document.querySelector(".menu-btn");
const menuCtn = document.querySelector(".menu-ctn");
const root = document.querySelector(":root");
const menuContent = document.querySelector(".menu-content");
const navItems = document.querySelectorAll(".nav-item");
const contactLinks = document.querySelectorAll(".contact-links");
const menuSocial = document.querySelector(".menu-social");

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
    }
});

console.log(navItem)