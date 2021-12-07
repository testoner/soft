const catalogBtn = document.querySelector('.toggle-menu');
const catalog = document.querySelector('.menu-catalog');
const body = document.querySelector('body');

function createCatalog() {
    console.log('toggle');
    catalog.classList.toggle('block');
    body.classList.toggle('hidden');
}

console.log('ss');
catalogBtn.addEventListener('mousedown', createCatalog);