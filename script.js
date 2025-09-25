document.addEventListener('DOMContentLoaded', function() {
    // ======== كود السلايدر ========
    const slider = document.querySelector('.hero-slider');
    if (slider) {
        const images = [
            'images/hero-background.png',
            'images/slider-beach.png',
            'images/slider-zipline.png',
            'images/slider-temple.png',
            'images/slider-machu.png'
        ];
        let currentImageIndex = 0;

        images.forEach((imgSrc, index) => {
            const slide = document.createElement('div');
            slide.classList.add('slide');
            slide.style.backgroundImage = `url('${imgSrc}')`;
            if (index === 0) {
                slide.classList.add('active');
            }
            slider.prepend(slide);
        });

        const slides = document.querySelectorAll('.hero-slider .slide');

        function changeSlide() {
            if (slides.length > 0) {
                slides[currentImageIndex].classList.remove('active');
                currentImageIndex = (currentImageIndex + 1) % slides.length;
                slides[currentImageIndex].classList.add('active');
            }
        }
        setInterval(changeSlide, 4000);
    }

    // ======== كود قائمة الهامبرغر ========
    const hamburgerButton = document.getElementById('hamburger-button');
    const navLinksMenu = document.getElementById('nav-links-menu');
    const dropdowns = document.querySelectorAll('.nav-links .dropdown');

    if (hamburgerButton && navLinksMenu) {
        hamburgerButton.addEventListener('click', () => {
            navLinksMenu.classList.toggle('active');
        });
    }

    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('a');
        link.addEventListener('click', (event) => {
            if (window.innerWidth <= 768) {
                event.preventDefault();
                dropdown.classList.toggle('open');
            }
        });
    });
});
