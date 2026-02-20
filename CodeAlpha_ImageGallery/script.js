const images = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let currentIndex = 0;

function showImage(index) {
    if (index >= images.length) currentIndex = 0;
    else if (index < 0) currentIndex = images.length - 1;
    else currentIndex = index;

    lightboxImg.src = images[currentIndex].src;
}

images.forEach((image, index) => {
    image.addEventListener('click', () => {
        currentIndex = index;
        showImage(currentIndex);
        lightbox.style.display = 'block';
    });
});

nextBtn.addEventListener('click', () => {
    showImage(currentIndex + 1);
});

prevBtn.addEventListener('click', () => {
    showImage(currentIndex - 1);
});

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});

document.addEventListener('keydown', (e) => {
    if (lightbox.style.display === 'block') {
        if (e.key === 'ArrowRight') showImage(currentIndex + 1);
        if (e.key === 'ArrowLeft') showImage(currentIndex - 1);
        if (e.key === 'Escape') lightbox.style.display = 'none';
    }
});