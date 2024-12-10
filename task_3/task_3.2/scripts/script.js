//Начинаю с селеторов элементов, которые будут необходимы
const carouselImages = document.querySelector('.carousel-images');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

//Записываю индекс текущего изображения в переменную
let currentIndex = 0;

//Создаю массив из всех изображений (использованы изображения без авторского права)
const images = document.querySelectorAll('.carousel__img');
const totalImages = images.length;

//Функция для обновления карусели, которая сдвигает на 500px каждое изображение
function updateCarousel() {
    const offset = -currentIndex * 500;
    carouselImages.style.transform = `translateX(${offset}px)`;
}

//Функция для перелистывания вперел
function nextImage() {
    currentIndex = (currentIndex + 1) % totalImages; 
    updateCarousel();
}

//Функция для перелистывания назад
function prevImage() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateCarousel();
}

//Слушатели событий для кнопок
nextButton.addEventListener('click', nextImage);
prevButton.addEventListener('click', prevImage);

// Таймер для автоматической смены изображений каждые 3 секунды
setInterval(nextImage, 3000); 