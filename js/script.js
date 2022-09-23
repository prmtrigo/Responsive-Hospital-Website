let botaoMenu= document.querySelector('#menu-btn');
let navBar = document.querySelector('.navbar');

botaoMenu.onclick = () =>{

    botaoMenu.classList.toggle('fa-times');
    navBar.classList.toggle('active');

}

window.onscroll = () =>{

    botaoMenu.classList.remove('fa-times');
    navBar.classList.remove('active');

}