function showNavbar () {
    const items = document.querySelector('.items');
    const menu = document.getElementById('menu');
    const navlink = document.getElementsByClassName('navlink');

    if (items.style.opacity == '1') {
        items.style.pointerEvents='none';
        items.style.opacity = '0';
        for (let i = 0; i < navlink.length; i++) {
            navlink[i].style.display = 'none';
        }
        menu.src = 'images/hamburger.svg';
    }
    else {
        items.style.pointerEvents = 'auto';
        items.style.opacity = '1';
        for (let i = 0; i < navlink.length; i++) {
            navlink[i].style.display = 'block';
        }
        menu.src = 'images/close.svg';
    }
}