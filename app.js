import {linkAction, showMenu} from "./src/js/menu.js";
import {scrollActive, scrollHeader, scrollUp} from "./src/js/scroll.js";
import {switchTheme} from "./src/js/theme.js";
import {animations} from "./src/js/animations.js";

// constants
const navLink = document.querySelectorAll('.nav__link');

//
//
//

// Menu Actions
showMenu('nav__toggle', 'nav__menu');
navLink.forEach(n => n.addEventListener('click', linkAction));

// Scroll Actions
window.addEventListener('scroll', scrollActive);
window.addEventListener('scroll', scrollHeader);
window.addEventListener('scroll', scrollUp);

// Switch Theme
switchTheme();

// Animations
animations();