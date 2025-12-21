document.addEventListener("DOMContentLoaded", (event) => {
    let button = document.querySelector('.layout__menu-toggle'); //selecciono el boton
    let aside =  document.querySelector('.layout__aside'); //selecciono el aside
    let icon_xmark = document.querySelector('.layout__menu-toggle .fa-xmark');
    let icon_bars = document.querySelector('.layout__menu-toggle .fa-bars');        

    button.addEventListener('click', (event) => {
        
        let visible= document.querySelector('.layout__aside--visible');

        if(!visible){    
        aside.classList.add('layout__aside--visible');
        aside.classList.remove('layout__aside--hidden');
        icon_bars.style.opacity = '0';
        icon_xmark.style.opacity = '1';
        
        } else {
        aside.classList.remove('layout__aside--visible');
        aside.classList.add('layout__aside--hidden');
        icon_bars.style.opacity = '1';
        icon_xmark.style.opacity = '0';
        }
    });

    window.addEventListener('resize', (event) => {
        let size = parseInt(document.body.clientWidth);
        if(size >= 500){
            aside.classList.remove('layout__aside--visible');
            aside.classList.add('layout__aside--hidden');
            icon_bars.style.opacity = '1';
            icon_xmark.style.opacity = '0';
        }
    });
});