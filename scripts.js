document.addEventListener('DOMContentLoaded', () => {

    const dynamicContent = document.getElementById('dynamic-content');
    const navItems = document.querySelectorAll('.nav-item');
    const orbitIcons = document.querySelectorAll('.icon-box');

    // ==========================================
    // 1. DATA REPOSITORY (Direct from Resume)
    // ==========================================
    const portfolioData = {
        // --- NAVBAR VIEWS ---
        home: `
            <p class="greeting">Hi, I'm</p>
            <h1 class="name">Bellam Hemanth<br>Kumar Reddy</h1>
            <h2 class="role">Senior Cloud DevOps Engineer</h2>
            <p class="summary">
                DevOps / SRE Engineer with hands-on experience in Site Reliability Engineering, DevSecOps, AIOps, and cloud infrastructure. Proven track record of reducing patching time by 75% and accelerating deployments by 50%+.
            </p>
            <div class="social-tray">
                <a href="https://linkedin.com/in/hemanthkumarb651" target="_blank" class="social-icon"><i class="fab fa-linkedin-in"></i></a>
                <a href="https://github.com/" target="_blank" class="social-icon"><i class="fab fa-github"></i></a>
                <a href="mailto:hemanthkumarb651@gmail.com" class="social-icon"><i class="fas fa-envelope"></i></a>
                <a href="tel:+917674833609" class="social-icon"><i class="fas fa-phone-alt"></i></a>
            </div>
            <a href="#" data-target="projects" class="btn-primary trigger-link">View My Work</a>
        `,
        experience: `
            <h2 class="view-title" style="color: #fff;">Professional Experience</h2>
            <h3 class="view-subtitle" style="color: var(--accent-cyan);">DevOps Engineer @ Accenture</h3>
            <p style="color: var(--text-muted); margin-bottom: 1.5rem;">Feb 2024 - Present</p>
            <ul class="view-list">
                <li>Managed 6+ Kubernetes and WebLogic environments ensuring 99.9% availability across dev, test, and staging.</li>
                <li>Automated infrastructure provisioning and patching with Ansible and Terraform (IaC), reducing patching time by 75%.</li>
                <li>Built and optimized CI/CD pipelines (Jenkins, GitHub Actions), accelerating deployments by 50%+.</li>
                <li>Implemented centralized monitoring (Prometheus, Grafana), reducing Mean Time to Resolution (MTTR) by 30-50%.</li>
                <li>Deployed GitOps workflows with ArgoCD for zero-downtime, version-controlled Kubernetes releases.</li>
            </ul>
        `,
        projects: `
            <h2 class="view-title" style="color: #fff;">Key Deployments</h2>
            
            <h3 class="view-subtitle" style="color: var(--accent-cyan);">Jira MCP Server on Kubernetes</h3>
            <ul class="view-list">
                <li>Architected and deployed a production-grade AI integration platform using the Model Context Protocol (MCP).</li>
                <li>Enabled LLM agents (GitHub Copilot) to perform Jira operations via natural language.</li>
                <li>Implemented multi-user PAT authentication, hardened Docker image, and Kubernetes manifests with Kustomize.</li>
            </ul>
            
            <h3 class="view-subtitle" style="color: var(--accent-cyan); margin-top: 1.5rem;">End-to-End Cloud Architecture</h3>
            <ul class="view-list">
                <li>Provisioned production AWS infrastructure (VPC, EKS, EC2, S3, IAM, Route53) using Terraform.</li>
                <li>Containerized workloads with Docker/Kubernetes (EKS); implemented GitOps (ArgoCD) for zero-downtime.</li>
                <li>Configured Route53 DNS, Ingress Controllers, and Prometheus/Grafana observability stack.</li>
            </ul>
        `,
        
        // --- ORBIT ICON VIEWS ---
        aws: `
            <h2 class="view-title" style="color: #ff9900;"><i class="fab fa-aws"></i> AWS & Cloud</h2>
            <h3 class="view-subtitle">Infrastructure as Code</h3>
            <ul class="view-list">
                <li>Provisioned production AWS infrastructure (VPC, EKS, EC2, S3, IAM, Route53) using Terraform.</li>
                <li>Hosted end-to-end cloud architectures with zero-downtime deployment capabilities.</li>
            </ul>
            <h3 class="view-subtitle" style="margin-top: 1.5rem;">Certification</h3>
            <ul class="view-list">
                <li>AWS Certified Cloud Practitioner - AWS Cloud Fundamentals and Architecture</li>
                <li>HashiCorp Certified: Terraform Associate</li>
            </ul>
        `,
        docker: `
            <h2 class="view-title" style="color: #2496ed;"><i class="fab fa-docker"></i> Containerization</h2>
            <h3 class="view-subtitle">Docker & Hardening</h3>
            <ul class="view-list">
                <li>Containerized enterprise workloads with Docker.</li>
                <li>Hardened Docker images (non-root, read-only FS, dropped capabilities) for DevSecOps compliance.</li>
                <li>Implemented GitOps (ArgoCD) for zero-downtime deployments.</li>
            </ul>
        `,
        python: `
            <h2 class="view-title" style="color: #3776ab;"><i class="fab fa-python"></i> AI & Scripting</h2>
            <h3 class="view-subtitle">Automation & MLOps</h3>
            <ul class="view-list">
                <li>Built AI-integrated automation platforms using LLM agents and the Model Context Protocol (MCP).</li>
                <li>Enabled LLM agents (GitHub Copilot) to perform operations via natural language.</li>
                <li>Proficient in Python, Bash, and Shell scripting for CI/CD automation.</li>
                <li>Claude Code Architect Certified.</li>
            </ul>
        `,
        linux: `
            <h2 class="view-title" style="color: #fcc624;"><i class="fab fa-linux"></i> Linux & Security</h2>
            <h3 class="view-subtitle">Administration & DevSecOps</h3>
            <ul class="view-list">
                <li>Extensive experience in RHEL and general Linux OS administration.</li>
                <li>Integrated DevSecOps practices - security scanning, policy-as-code, and RBAC enforcement.</li>
            </ul>
            <h3 class="view-subtitle" style="margin-top: 1.5rem;">Certification</h3>
            <ul class="view-list">
                <li>Red Hat Certified System Administrator (RHCSA)</li>
            </ul>
        `,
        k8s: `
            <h2 class="view-title" style="color: #326ce5;"><i class="fas fa-dharmachakra"></i> Kubernetes</h2>
            <h3 class="view-subtitle">Orchestration & SRE</h3>
            <ul class="view-list">
                <li>Managed 6+ Kubernetes and WebLogic environments ensuring 99.9% availability.</li>
                <li>Secured Kubernetes manifests with Kustomize, health probes, and resource limits.</li>
                <li>Deployed GitOps workflows with ArgoCD for version-controlled Kubernetes releases.</li>
            </ul>
        `
    };

    // ==========================================
    // 2. VIEW SWITCHER ENGINE
    // ==========================================
    function updateContent(targetKey) {
        if (!portfolioData[targetKey]) return;

        // Briefly remove animation class to reset it
        dynamicContent.classList.remove('fade-in');
        
        // Small timeout allows DOM to register the class removal before re-adding it
        setTimeout(() => {
            dynamicContent.innerHTML = portfolioData[targetKey];
            dynamicContent.classList.add('fade-in');
            
            // Re-bind any internal links injected (like the "View My Work" button)
            bindInternalLinks();
        }, 50);
    }

    function updateNavActive(targetKey) {
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('data-target') === targetKey) {
                item.classList.add('active');
            }
        });
    }

    function bindInternalLinks() {
        const internalLinks = document.querySelectorAll('.trigger-link');
        internalLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = link.getAttribute('data-target');
                updateContent(target);
                updateNavActive(target);
            });
        });
    }

    // ==========================================
    // 3. EVENT LISTENERS
    // ==========================================
    
    // Top Navigation Clicks
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const target = item.getAttribute('data-target');
            updateContent(target);
            updateNavActive(target);
        });
    });

    // Orbit Icon Clicks
    orbitIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            const target = icon.getAttribute('data-target');
            updateContent(target);
            // Remove active state from top nav since we are looking at a specific tech stack
            navItems.forEach(item => item.classList.remove('active'));
        });
    });

    // Initialize Home View on Load
    updateContent('home');
});