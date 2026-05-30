document.addEventListener('DOMContentLoaded', () => {

    /* --- Smooth Scrolling --- */
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetSection = document.querySelector(this.getAttribute('href'));
            if (targetSection) {
                window.scrollTo({ 
                    top: targetSection.offsetTop - 100, // Offset for the navbar
                    behavior: 'smooth' 
                });
            }
        });
    });

    /* --- Active Navbar State --- */
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            if (pageYOffset >= (section.offsetTop - 250)) { 
                current = section.getAttribute('id'); 
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) { 
                link.classList.add('active'); 
            }
        });
    });
});