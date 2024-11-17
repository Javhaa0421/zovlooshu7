let menuBtn = document.querySelector('.menu');
let tab = document.querySelector('.tab');
let xBtn = document.querySelector('.x');
let overlay = document.querySelector('.overlay');

menuBtn.addEventListener('click', () => {
    tab.classList.add('show-tab');
    overlay.classList.add('show-overlay');
});

xBtn.addEventListener('click', () => {
    tab.classList.remove('show-tab');
    overlay.classList.remove('show-overlay');
});

// Close the tab when the overlay is clicked
overlay.addEventListener('click', () => {
    tab.classList.remove('show-tab');
    overlay.classList.remove('show-overlay');
});
const dynamicText = document.querySelector('.dynamic-text');
const words = ["developer", "student", ];
let wordIndex = 0;
let charIndex = 0;

function typeWords() {
    const currentWord = words[wordIndex];
    
    if (charIndex < currentWord.length) {
        dynamicText.innerHTML += currentWord.charAt(charIndex);
        charIndex++;
        setTimeout(typeWords, 200); // Typing speed
    } else {
        setTimeout(deleteWords, 1000); // Pause before deleting
    }
}

function deleteWords() {
    const currentWord = words[wordIndex];
    
    if (charIndex > 0) {
        dynamicText.innerHTML = currentWord.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(deleteWords, 100); // Deleting speed
    } else {
        wordIndex = (wordIndex + 1) % words.length; // Move to the next word
        setTimeout(typeWords, 200);
    }
}

// Start the typing effect after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(typeWords, 1000); // Delay before starting the typing effect
});