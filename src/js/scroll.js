export function scrollActive() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    });
}

export function scrollHeader() {
    const header = document.getElementById('header');

    if (scrollY >= 80) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
}

export function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');

    if (scrollY >= 550) {
        scrollUp.classList.add('show-scroll-top');
    } else {
        scrollUp.classList.remove('show-scroll-top');
    }
}