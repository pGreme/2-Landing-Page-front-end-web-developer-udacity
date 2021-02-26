/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
/**
 * Define Global Variables
*/
// Navigationspunkte deklarieren
// DocumentFragment: Änderungen an einem DocumentFragment erfolgen außerhalb des Bildschirms. leichtgewichtige Variante des Document , die einen Ausschnitt einer Dokumentstruktur aus Element-Knoten abbildet.
const fragment = document.createDocumentFragment();
const secList =  document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 *   
*/ 
// Link für jede section generieren
function createItemHtml(id, name) {
    const itemSec = `<a class ="menu__link" data-id="${id}">${name}</a>`;
    return itemSec;
}
// Anzeige im Viewport
//Die Methode Element.getBoundingClientRect() gibt die Größe eines Elementes und dessen relative Position zum Viewport zurück.
function inViewPort(e) {
    const bounding = e.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 && 
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );  
};
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
// build the nav
// Für jede section ein Listenelement mit den dazugehörigen Attributen generieren
function buildNav() {
    for (let i = 0; i < secList.length; i++ ) {
       const navLi = document.createElement('li');
       const secName = secList[i].getAttribute('data-nav')
       const secId = secList[i].getAttribute('id')
       navLi.innerHTML = createItemHtml(secId, secName)
       fragment.appendChild(navLi);
        }
    const navBarList = document.getElementById('navbar__list')
    navBarList.appendChild(fragment);
}
// Add class 'active' to section when near top of viewport
// Der aktiv angezeigter Abschnitt wird optisch hervorgehoben mit "your-active-class"
function setActive() {
    for ( let i = 0; i < secList.length; i++ )
        if (inViewPort(secList[i])) {
            secList[i].classList.add("your-active-class");
        } else {
            secList[i].classList.remove("your-active-class");
        }
}
// Scroll to anchor ID using scrollTO event
// strikte Gleichheit === Wenn die Werte verschiedene Datentypen haben, werden die Werte als ungleich betrachtet.
function scrollToElement(ev) {
    if(ev.target.nodeName === 'A') {
        const secId = ev.target.getAttribute('data-id')
        const section = document.getElementById(secId);
        section.scrollIntoView({behavior: "smooth"});
    } 
}
/**
 * End Main Functions
 * Begin Events
 * 
*/
document.addEventListener('scroll', function() {
    setActive();
});
const navBarList = document.getElementById('navbar__list')
navBarList.addEventListener('click', function(ev) {
    scrollToElement(ev)
})
// Build menu
buildNav() 
// Scroll to section on link click
// Set sections as active