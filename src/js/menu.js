export function showMenu(toggleId, navId) {
    const toggle = document.getElementById(toggleId)
    const nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu');
        });
    }
}

export function linkAction() {
    const navMenu = document.getElementById('nav__menu');

    navMenu.classList.remove('show-menu');
}