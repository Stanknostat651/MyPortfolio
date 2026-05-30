const modal = document.getElementById('projectModal');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');

function openModal(title, description) {
    modalTitle.innerText = title;
    modalDesc.innerText = description;
    modal.style.display = 'flex';
    
    document.querySelector('.modal-content').animate([
        { transform: 'scale(0.9)', opacity: 0 },
        { transform: 'scale(1)', opacity: 1 }
    ], { duration: 200, easing: 'ease-out' });
}

function closeModal() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});