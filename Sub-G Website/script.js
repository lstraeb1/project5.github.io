document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.toggle-button');
    const navbarLinks = document.querySelector('.nav-list');

    toggleButton.addEventListener('click', () => {
        toggleButton.classList.toggle('active');
        navbarLinks.classList.toggle('active');
    });
});

const reviewBoxes = document.querySelectorAll('.review-box');

function checkSlide() {
    reviewBoxes.forEach(reviewBox => {
        const slideInAt = window.scrollY + window.innerHeight - reviewBox.clientHeight / 2;
        const reviewBoxBottom = reviewBox.offsetTop + reviewBox.clientHeight;

        const isReviewBoxVisible = slideInAt > reviewBox.offsetTop && window.scrollY < reviewBoxBottom;

        if (isReviewBoxVisible) {
            reviewBox.style.transform = 'translateX(0)';
            reviewBox.style.opacity = '1';
        } else {
            reviewBox.style.transform = 'translateX(100%)';
            reviewBox.style.opacity = '0';
        }
    });
}

window.addEventListener('scroll', checkSlide);
checkSlide(); // Initial check when the page loads

