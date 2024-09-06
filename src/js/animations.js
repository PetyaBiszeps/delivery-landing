export function animations() {
    // Scroll Reveal API
    ScrollReveal({
        reset: true,
        // distance: "50px",
        duration: 800,
        delay: 400
    })

    ScrollReveal().reveal(
        '.home__container,' +
        '.about__container,' +
        '.security__container,' +
        '.services h2, .services__container,' +
        '.app__container,' +
        '.contact__container');
}