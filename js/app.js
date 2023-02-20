//  Global Variables
const navbar = document.getElementById("navbar__list");
const frag = document.createDocumentFragment();
const sections = document.querySelectorAll("section[data-nav]");



// build the dynamic nav with anchor to it's section
    for (let i = 1; i <= sections.length; i++) {
        const li = document.createElement("li");
        li.textContent = `Section ${i}`;
        const navLink = document.createElement("a");
        navLink.setAttribute("src", `#section${i}`);
        li.appendChild(navLink);    
        const section = document.getElementById(`section${i}`) ;
        li.addEventListener("click", evt => {
            evt.preventDefault();
            section.scrollIntoView({behavior: "smooth"});
        });
        frag.appendChild(li);
    };

navbar.appendChild(frag);
 


// Add class 'active' to section when near top of viewport
function rect () {
    for (let section of sections) { 
        let containerTop = section.getBoundingClientRect().top;
        if (containerTop < 250 && containerTop > -100 ) {
            section.classList.add("your-active-class");
        } else {
        section.classList.remove("your-active-class");
        }
    };
};

window.addEventListener("scroll", rect)



// add smooth switch from footer to header
const btn = document.getElementsByClassName("btnAnchor");
const topPage = document.getElementById("Top__page");
    btn[0].addEventListener('click', evt => {
    evt.preventDefault();
    topPage.scrollIntoView({behavior: "smooth"});
    } );



//  highlight navbar li when it's section appear near top
const navElements = document.querySelectorAll(".navbar__menu li")
function navActive () {
    for (let i = 1; i <= sections.length; i++) {
        navElements[i-1].classList.remove("navbar_active")
        if (sections[i-1].classList.contains("your-active-class")===true) {
            navElements[i-1].classList.add("navbar_active")
        } else {
            navElements[i-1].classList.remove("navbar_active")
        }
    } 
}
window.addEventListener("scroll", navActive);


