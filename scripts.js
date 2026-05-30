document.addEventListener('DOMContentLoaded', () => {
    
    /* =========================================
       1. BULLETPROOF TAB SWITCHING LOGIC
       ========================================= */
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Get the target tab ID from the data attribute
            const targetId = button.getAttribute('data-target');

            // Remove 'active' class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            // Add 'active' class to the clicked button
            button.classList.add('active');

            // Hide all tab content panes
            tabPanes.forEach(pane => pane.classList.remove('active'));
            
            // Show the target tab content pane
            const targetPane = document.getElementById(targetId);
            if (targetPane) {
                targetPane.classList.add('active');
            }
        });
    });

    /* =========================================
       2. SCROLL REVEAL ANIMATIONS
       ========================================= */
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Triggers when 10% of element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the visible class to trigger CSS transition
                entry.target.classList.add('visible');
                // Unobserve so it only animates once
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Grab all elements with the 'fade-in' class and observe them
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

    /* =========================================
       3. SMOOTH SCROLLING FOR NAVBAR LINKS
       ========================================= */
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    // Offset for fixed navbar height
                    top: targetSection.offsetTop - 80, 
                    behavior: 'smooth'
                });
            }
        });
    });
});