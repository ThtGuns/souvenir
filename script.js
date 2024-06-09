const elementsSidebar = document.querySelectorAll('.sidebar .item');
const lignesTableau = document.querySelectorAll('.main table tbody tr');

const boutonMenu = document.getElementById('menu-btn');
const sectionGauche = document.querySelector('.left-section');

let estMenuOuvert = false;

elementsSidebar.forEach(elementSidebar => {
    elementSidebar.addEventListener('click', () => {
        elementsSidebar.forEach(item => {
            item.classList.remove('active');
        });
        elementSidebar.classList.add('active');
    });
});

lignesTableau.forEach(ligneTableau => {
    ligneTableau.addEventListener('click', () => {
        lignesTableau.forEach(item => {
            item.classList.remove('selected');
        });
        ligneTableau.classList.add('selected');
    });
});

boutonMenu.addEventListener('click', () => {
    if (!estMenuOuvert) {
        sectionGauche.style.left = '0';
    } else {
        sectionGauche.style.left = '-160px';
    }
    estMenuOuvert = !estMenuOuvert;
});
