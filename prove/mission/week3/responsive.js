const gallery = document.querySelector('.all_my_photos');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

let btn = document.querySelector('.menu-button');

const menu = document.querySelectorAll('nav a');

btn.addEventListener('click', showNav);
    
    function showNav(){

        menu.forEach(a => a.classList.toggle("show"));
        console.log("works");

        
    }



gallery.addEventListener('click', openModal);

function openModal(e){
    console.log(e.target);

    const img = e.target

    const src = img.getAttribute('src');

    const alt = img.getAttribute('alt');

    const full = src.replace('sm', 'full')

    modalImage.src = full;

    modalImage.alt = alt;

    modal.showModal();
}

closeButton.addEventListener('click', () => {
        modal.close();
    })


