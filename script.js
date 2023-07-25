//When we click on hamburger menu i want to show the navbar
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
if (bar){
    bar.addEventListener('click',() =>{
        nav.classList.add('active');
    })
}
if (close){
    close.addEventListener('click',() =>{
        nav.classList.remove('active');
    })
}
