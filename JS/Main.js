// const prevBtn = document.getElementById("prevBtn");
// const nextBtn = document.getElementById("nextBtn");
// const carouselItems = document.querySelectorAll(".carousel-item");
// let currentIndex = 0;

// // Function to show the current slide
// function showSlide(index, direction) {
//     carouselItems.forEach(item => {
//         item.style.display = "none";
//         item.classList.remove("slideInFromLeft", "slideInFromRight");
//     });
//     carouselItems[index].style.display = "block";
//     carouselItems[index].classList.add(direction);
// }

// // Show the initial slide
// showSlide(currentIndex);

// // Event listener for previous button
// prevBtn.addEventListener("click", function (e) {
//     e.preventDefault();
//     const newIndex = (currentIndex === 0) ? carouselItems.length - 1 : currentIndex - 1;
//     showSlide(newIndex, "slideInFromLeft"); // Slide in from left
//     currentIndex = newIndex;
// });

// // Event listener for next button
// nextBtn.addEventListener("click", function (e) {
//     e.preventDefault();
//     const newIndex = (currentIndex === carouselItems.length - 1) ? 0 : currentIndex + 1;
//     showSlide(newIndex, "slideInFromRight"); // Slide in from right
//     currentIndex = newIndex;
// });

var slides = document.querySelectorAll('.swiper-slide');
var paginationBullets = document.querySelectorAll('.swiper-pagination-bullet');

currentIndex = 0;

function setActiveBullet(index) {
    paginationBullets[currentIndex].classList.remove('swiper-pagination-bullet-active');
    paginationBullets[index].classList.add('swiper-pagination-bullet-active');
    currentIndex = index;
}

setInterval(function () {
    var nextIndex = (currentIndex + 1) % slides.length;
    setActiveBullet(nextIndex);
}, 4500);

// 2nd Method for Swiper animation on Client Stories
// Changes in CSS, to make this code work:
// 1.) Remove @keyframes slide, 2.) Remove 'animation: slide 10s infinite;' this line from .swiper-wrapper
// currentIndex = 0;
// const slides = document.querySelectorAll(".swiper-slide");
// const totalSlides = slides.length;

// function updateSlidePosition() {
//     const swiperWrapper = document.querySelector(".swiper-wrapper");
//     swiperWrapper.style.transition = "transform 1s ease"; // Transition duration set to 1000ms
//     swiperWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
// }

// function autoSlide() {
//     currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
//     updateSlidePosition();
//     setTimeout(autoSlide, 3000); // Call autoSlide again after 1000ms
// }

// autoSlide();