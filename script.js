const menuItems = document.querySelectorAll('.menu-item');
const contentSections = document.querySelectorAll('.content-section');

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        menuItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        contentSections.forEach(section => section.style.display = 'none');
        const target = item.dataset.target;
        document.getElementById(target).style.display = 'block';
    });
});
