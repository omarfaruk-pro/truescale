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
let body = document.querySelector('body');
{
    let hamburger = document.querySelector('#hamburger');
    let menu = document.querySelector('#main_nav');
    hamburger.addEventListener('click', () => {
        menu.classList.toggle('active');
        body.classList.toggle('menu_active');
        hamburger.classList.toggle('active');
    });
}
{
    let openPopup = document.querySelectorAll('.open_popup');
    let popup = document.querySelector('#contact_modal');
    let closePopup = document.querySelector('#close_popup');
    openPopup.forEach(item => {
        item.addEventListener('click', () => {
            popup.classList.add('active');
        });
    })

    let contactForm = document.getElementById("contact_form");
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let form = e.target;
        let formData = new FormData(form);
        let formObj = Object.fromEntries(formData.entries());
        console.log(formObj);
        contactForm.reset();
        popup.classList.add('thank');
    })

    closePopup.addEventListener('click', () => {
        popup.classList.remove('active', 'thank');
    });
    body.addEventListener('click', (e) => {
        if(e.target.classList.contains('modal')){
            popup.classList.remove('active', 'thank');
        }
    });
}
{
    let header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset <= 0) {
            header.classList.remove('scrolled');
        } else {
            header.classList.add('scrolled');
        }
    });
}