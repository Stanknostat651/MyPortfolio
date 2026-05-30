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
    // Resume data mapped to icons[cite: 3]
    const orbitData = {
        aws: {
            title: "Cloud & AWS",
            content: "<ul><li>AWS (EC2, EKS, S3, VPC)[cite: 3].</li><li>Provisioned AWS infrastructure using Terraform[cite: 3].</li><li>AWS Cloud Practitioner[cite: 3].</li></ul>"
        },
        docker: {
            title: "Containers",
            content: "<ul><li>Docker, Kubernetes, EKS[cite: 3].</li><li>Containerized workloads with Docker/K8s[cite: 3].</li></ul>"
        },
        python: {
            title: "AI & Scripting",
            content: "<ul><li>Python, Bash, Shell[cite: 3].</li><li>LLM Agents, Model Context Protocol (MCP)[cite: 3].</li></ul>"
        },
        linux: {
            title: "Security & OS",
            content: "<ul><li>RHEL, Linux[cite: 3].</li><li>Red Hat Certified System Administrator[cite: 3].</li><li>DevSecOps, Container Hardening[cite: 3].</li></ul>"
        },
        k8s: {
            title: "Kubernetes & CI/CD",
            content: "<ul><li>Managed 6+ Kubernetes environments[cite: 3].</li><li>GitOps workflows with ArgoCD[cite: 3].</li></ul>"
        }
    };

    const orbitButtons = document.querySelectorAll('.orbit-node');
    const profileImageState = document.querySelector('.profile-image-state');
    const profileInfoState = document.querySelector('.profile-info-state');
    const orbitTitle = document.getElementById('orbit-title');
    const orbitContent = document.getElementById('orbit-content');
    const closeInfoBtn = document.querySelector('.close-info');

    // Handle clicks on orbiting icons
    orbitButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const tech = button.getAttribute('data-tech');
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

    /* --- 3. Scroll Reveal Animation --- */
    const revealElements = document.querySelectorAll('.reveal');
    const revealOptions = { threshold: 0.15, rootMargin: "0px 0px -50px 0px" };
    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('active');
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