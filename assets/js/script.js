

{
    let swiper2 = new Swiper(".reviewSlider", {
        slidesPerView: "auto",
        spaceBetween: 24,
        loop: true,
        autoplay: {
            delay: 0,
            pauseOnMouseHover: true,
        },
        freeMode: {
            enabled: true,
            momentum: false,
            sticky: false
        },
        speed: 8000,
    });
}
{
    let swiper = new Swiper(".smarterSlider", {
        slidesPerView: "auto",
        spaceBetween: 16,
        center: true,
        loop: true,
        autoplay: {
            delay: 0,
        },
        freeMode: {
            enabled: true,
            momentum: false,
            sticky: false
        },
        speed: 8000,
    });
    const swiperEl = document.querySelector(".smarterSlider");

    swiperEl.addEventListener("mouseenter", () => {
        swiper.autoplay.stop();
    });

    swiperEl.addEventListener("mouseleave", () => {
        swiper.autoplay.start();
    });
}