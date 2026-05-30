// 1. Dynamic Typing Effect for Hero Section
const phrases = [
    "Kubernetes & EKS",
    "Cloud Infrastructure",
    "DevSecOps",
    "CI/CD Automation",
    "AIOps & LLM Agents"
];
let currentPhraseIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
const typingSpeed = 100;
const deletingSpeed = 50;
const delayBetweenPhrases = 2000;

function typeEffect() {
    const typingElement = document.getElementById('typing-text');
    const currentPhrase = phrases[currentPhraseIndex];

    if (isDeleting) {
        typingElement.textContent = currentPhrase.substring(0, currentCharIndex - 1);
        currentCharIndex--;
    } else {
        typingElement.textContent = currentPhrase.substring(0, currentCharIndex + 1);
        currentCharIndex++;
    }

    let timeoutSpeed = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && currentCharIndex === currentPhrase.length) {
        isDeleting = true;
        timeoutSpeed = delayBetweenPhrases; // Pause at the end of the word
    } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        timeoutSpeed = 500; // Pause before starting new word
    }

    setTimeout(typeEffect, timeoutSpeed);
}
// Start typing effect on load
document.addEventListener('DOMContentLoaded', typeEffect);

// 2. Scroll Reveal Animation
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;
    const elementVisible = 100;

    reveals.forEach(reveal => {
        const elementTop = reveal.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add('active');
        }
    });
}
window.addEventListener('scroll', revealOnScroll);
// Trigger once on load
revealOnScroll();

// 3. Interactive Modals for Projects
const modal = document.getElementById('projectModal');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');

function openModal(title, descriptionHTML) {
    modalTitle.innerText = title;
    modalDesc.innerHTML = descriptionHTML; // Using innerHTML to render bullet points
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto'; // Restore background scrolling
}

// Close modal when clicking outside the box
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}

// 4. Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});