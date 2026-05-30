// Ensure animations trigger on initial load for the visible tab
document.addEventListener('DOMContentLoaded', () => {
    triggerAnimations('skills');
});

// Tab Switching Logic with Staggered Animations
function switchTab(tabId, btnElement) {
    // Remove active states from all buttons and content panels
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    
    // Set new active states for the clicked button and target content
    btnElement.classList.add('active');
    document.getElementById(tabId).classList.add('active');

    // Trigger stagger animations for the newly active tab
    triggerAnimations(tabId);
}

// Function to handle staggered fade-in animations for internal elements
function triggerAnimations(tabId) {
    const elements = document.querySelectorAll(`#${tabId} .stagg-item`);
    
    // Reset animations instantly
    elements.forEach(el => {
        el.style.opacity = '0';
        el.classList.remove('animate-in');
    });

    // Apply staggered delays and trigger animation
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('animate-in');
        }, index * 100); // 100ms delay between each element popping up
    });
}

// Project Accordion Logic
function toggleProject(card) {
    // Close any other open project cards
    document.querySelectorAll('.project-card').forEach(c => {
        if (c !== card) c.classList.remove('expanded');
    });
    
    // Toggle the clicked card
    card.classList.toggle('expanded');
}