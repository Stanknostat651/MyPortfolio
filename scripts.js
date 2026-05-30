document.addEventListener('DOMContentLoaded', () => {

    /* --- 1. Typewriter Effect --- */
    const roles = ["DevOps Engineer", "Site Reliability Engineer", "DevSecOps Specialist"];
    let roleIndex = 0; let charIndex = 0; let isDeleting = false;
    const typingElement = document.querySelector('.typewriter');

    function typeEffect() {
        const currentRole = roles[roleIndex];
        if (isDeleting) {
            typingElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
        }
        let typeSpeed = isDeleting ? 50 : 100;
        if (!isDeleting && charIndex === currentRole.length) {
            typeSpeed = 2000; isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false; roleIndex = (roleIndex + 1) % roles.length; typeSpeed = 500;
        }
        setTimeout(typeEffect, typeSpeed);
    }
    setTimeout(typeEffect, 1000);

    /* --- 2. Interactive Orbit Icons Logic --- */
    // Detailed data mapped directly from your resume
    const orbitData = {
        aws: {
            title: "Cloud & AWS",
            content: "<ul><li>Provisioned AWS infrastructure (VPC, EKS, EC2, S3, IAM, Route53).</li><li>AWS Certified Cloud Practitioner.</li></ul>"
        },
        docker: {
            title: "Containers",
            content: "<ul><li>Containerized workloads with Docker.</li><li>Hardened Docker images (non-root, read-only FS).</li></ul>"
        },
        python: {
            title: "AI & Scripting",
            content: "<ul><li>Built AI-integrated automation platforms using LLM agents and MCP.</li><li>Scripting in Python, Bash, Shell.</li></ul>"
        },
        linux: {
            title: "Security & OS",
            content: "<ul><li>Red Hat Certified System Administrator (RHCSA).</li><li>Integrated DevSecOps practices and security scanning.</li></ul>"
        },
        k8s: {
            title: "Kubernetes & CI/CD",
            content: "<ul><li>Managed 6+ enterprise Kubernetes environments.</li><li>Deployed GitOps workflows with ArgoCD.</li></ul>"
        }
    };

    const orbitButtons = document.querySelectorAll('.orbit-node');
    const profileImageState = document.querySelector('.profile-image-state');
    const profileInfoState = document.querySelector('.profile-info-state');
    const orbitTitle = document.getElementById('orbit-title');
    const orbitContent = document.getElementById('orbit-content');
    const closeInfoBtn = document.querySelector('.close-info');

    // Handle clicks on orbiting buttons
    orbitButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            // Forcefully get the data-tech from the button itself
            const tech = this.getAttribute('data-tech');
            const data = orbitData[tech];

            if (data) {
                // Populate data
                orbitTitle.textContent = data.title;
                orbitContent.innerHTML = data.content;

                // Hide Image, Show Info Panel
                profileImageState.classList.add('hidden');
                profileInfoState.classList.remove('hidden');
            }
        });
    });

    // Close Info Panel
    closeInfoBtn.addEventListener('click', () => {
        profileInfoState.classList.add('hidden');
        profileImageState.classList.remove('hidden');
    });

    /* --- 3. Bulletproof Scroll Reveal Animation --- */
    const revealElements = document.querySelectorAll('.reveal');
    
    // First, hide all elements so they can fade in
    revealElements.forEach(el => el.classList.add('is-hidden'));

    const revealOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            // Remove the hidden class to trigger the CSS transition
            entry.target.classList.remove('is-hidden');
            observer.unobserve(entry.target);
        });
    }, revealOptions);
    
    revealElements.forEach(el => revealOnScroll.observe(el));

    /* --- 4. Smooth Scrolling & Navbar Active State --- */
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    const sections = document.querySelectorAll('section');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetSection = document.querySelector(this.getAttribute('href'));
            if (targetSection) {
                window.scrollTo({ top: targetSection.offsetTop - 80, behavior: 'smooth' });
            }
        });
    });

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            if (pageYOffset >= (section.offsetTop - 200)) { current = section.getAttribute('id'); }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) { link.classList.add('active'); }
        });
    });
});