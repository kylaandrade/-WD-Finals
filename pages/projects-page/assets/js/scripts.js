document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.querySelector('.project-description').style.display = 'block';
    });
    card.addEventListener('mouseout', () => {
        card.querySelector('.project-description').style.display = 'none';
    });
});