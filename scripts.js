document.addEventListener('DOMContentLoaded', () => {
    // 1. Get all the buttons and panes
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    // 2. Loop through all buttons and add a click event
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Get the ID of the target tab from data-target attribute
            const targetId = button.getAttribute('data-target');

            // Remove 'active' class from ALL buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            // Remove 'active' class from ALL panes
            tabPanes.forEach(pane => pane.classList.remove('active'));

            // Add 'active' class to the clicked button
            button.classList.add('active');
            
            // Find the pane with the matching ID and make it active
            const targetPane = document.getElementById(targetId);
            if (targetPane) {
                targetPane.classList.add('active');
            }
        });
    });
});