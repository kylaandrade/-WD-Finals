document.querySelectorAll('.experience-item').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.backgroundColor = '#ff4dff';
        item.style.transform = 'scale(1.05)';
    });
    item.addEventListener('mouseout', () => {
        item.style.backgroundColor = '#3d0059';
        item.style.transform = 'scale(1)';
    });
});