document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.hero-slider');
    
    // قائمة الصور التي ستظهر في السلايدر
    const images = [
        'images/slider-globe.png',
        'images/slider-beach.png',
        'images/slider-zipline.png',
        'images/slider-temple.png',
        'images/slider-machu.png'
    ];

    let currentImageIndex = 0;

    // إنشاء عناصر الصور وإضافتها للسلايدر
    images.forEach((imgSrc, index) => {
        const slide = document.createElement('div');
        slide.classList.add('slide');
        slide.style.backgroundImage = `url('${imgSrc}')`;
        if (index === 0) {
            slide.classList.add('active');
        }
        slider.prepend(slide); // نستخدم prepend لوضعها خلف النص
    });

    const slides = document.querySelectorAll('.hero-slider .slide');

    // دالة تغيير الصورة
    function changeSlide() {
        slides[currentImageIndex].classList.remove('active');
        currentImageIndex = (currentImageIndex + 1) % slides.length;
        slides[currentImageIndex].classList.add('active');
    }

    // تغيير الصورة كل 5 ثوانٍ
    setInterval(changeSlide, 4000);
});
