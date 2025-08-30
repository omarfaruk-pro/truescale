import InfiniteMarquee from 'https://cdn.jsdelivr.net/npm/vanilla-infinite-marquee@1.0.13/infinite-marquee.bundle.js';
new InfiniteMarquee({
    element: '.marquee-container',
    speed: 80000,
    smoothEdges: true,
    duplicateCount: 2,
    pauseOnHover: true,
});
new InfiniteMarquee({
    element: '.reviewSlider',
    speed: 80000,
    smoothEdges: true,
    duplicateCount: 2,
    pauseOnHover: true,
});

{
    let hamburger = document.querySelector('#hamburger');
    let menu = document.querySelector('#main_nav');
    let body = document.querySelector('body');
    hamburger.addEventListener('click', () => {
        menu.classList.toggle('active');
        body.classList.toggle('menu_active');
        hamburger.classList.toggle('active');
    });
}