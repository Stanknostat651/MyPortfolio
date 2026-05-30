// Tab Switching Logic
function switchTab(tabId, btnElement) {
    // 1. Remove active state from all buttons and tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelectorAll('.tab-pane').forEach(pane => {
        pane.classList.remove('active');
    });

    // 2. Add active state to the clicked button and corresponding tab content
    btnElement.classList.add('active');
    const targetPane = document.getElementById(tabId);
    targetPane.classList.add('active');

    // 3. Re-trigger animations for elements inside the newly opened tab
    const animatedElements = targetPane.querySelectorAll('.animate-up');
    animatedElements.forEach(el => {
        // Reset the animation completely
        el.style.animation = 'none';
        el.offsetHeight; /* trigger reflow */
        el.style.animation = null; 
    });
}