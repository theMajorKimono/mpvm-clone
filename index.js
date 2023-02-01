
function installListeners() {
    var nav_button = document.getElementById('nav-btn');
    nav_button.addEventListener('click', () => {
        var nav = document.querySelector('#nav-menu');
        nav.style.right = '0%';
    });
}


window.onload = () => {
    installListeners();
}