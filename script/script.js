// NAVBAR JS 
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.mynavbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}


// PLANET JS 

function showText(element) {
    var gist = element.querySelector('.gist');
    gist.style.display = "block";
}

function hide(element) {
    var gist = element.querySelector('.gist');
    gist.style.display = "none";
}