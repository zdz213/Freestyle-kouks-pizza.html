document.addEventListener('DOMContentLoaded', () => {
    const image = document.querySelector('.centered-image');
    image.addEventListener('mouseover', () => {
        image.style.transform = 'scale(1.2)';
        image.style.transition = 'transform 0.3s';
    });
    image.addEventListener('mouseout', () => {
        image.style.transform = 'scale(1)';
    });

    const body = document.body;
    let hue = 0;
    setInterval(() => {
        hue = (hue + 1) % 360; 
        body.style.background = `hsl(${hue}, 70%, 80%)`;
    }, 50);
});