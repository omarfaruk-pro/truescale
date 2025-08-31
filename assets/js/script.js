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

{
    const scrollLinks = document.querySelectorAll('.scroll, #main_nav a, .footer_grid ul a');
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetEl = document.getElementById(targetId);

            if (targetEl) {
                // Dynamically get header height
                const header = document.querySelector('header'); // or specific header selector
                const headerHeight = header ? header.offsetHeight : 0;

                const elementPosition = targetEl.getBoundingClientRect().top + window.scrollY;
                const offsetPosition = elementPosition - headerHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

{
    const videoLink = document.querySelector('.play');
    const modal = document.getElementById('videoModal');
    const iframe = document.getElementById('videoFrame');
    const closeBtn = document.querySelector('.close');

    videoLink.addEventListener('click', function(e) {
        e.preventDefault();

        // Extract YouTube video ID from URL
        const videoURL = this.getAttribute('href');
        const videoId = videoURL.split('v=')[1].split('&')[0];

        // Use embed URL
        const embedURL = "https://www.youtube.com/embed/" + videoId + "?autoplay=1";
        iframe.setAttribute('src', embedURL);

        modal.style.display = "flex";
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = "none";
        iframe.setAttribute('src', ''); // Stop video when modal closes
    });

    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = "none";
            iframe.setAttribute('src', '');
        }
    });
}