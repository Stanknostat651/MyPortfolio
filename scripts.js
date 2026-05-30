document.addEventListener('DOMContentLoaded', () => {

    /* --- 1. Bulletproof Scroll Reveal Animation --- */
    const revealElements = document.querySelectorAll('.reveal');

    const revealOptions = { 
        threshold: 0.15, // Triggers when 15% of the element enters the screen
        rootMargin: "0px 0px -50px 0px" 
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            // Add active class to fade it in and slide it up
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // Only animate once
        });
    }, revealOptions);
    
    // Attach observer to all reveal elements
    revealElements.forEach(el => revealOnScroll.observe(el));


    /* --- 2. Smooth Scrolling & Navbar Active State --- */
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    const sections = document.querySelectorAll('section');

    // Smooth Scroll on Click
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetSection = document.querySelector(this.getAttribute('href'));
            if (targetSection) {
                window.scrollTo({ 
                    top: targetSection.offsetTop - 100, // Offset for the fixed navbar
                    behavior: 'smooth' 
                });
            }
        });
    });

    // Update Active Link on Scroll
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            // Check which section is currently in view
            if (pageYOffset >= (section.offsetTop - 250)) { 
                current = section.getAttribute('id'); 
            }
        });
        
        // Remove active class from all, add to the current section link
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) { 
                link.classList.add('active'); 
            }
        });
    });
    
    // Trigger scroll event once on load to set initial state
    window.dispatchEvent(new Event('scroll'));
});