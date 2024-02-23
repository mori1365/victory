const activePage = window. location. pathname;
const navLinks = document. querySelectorAll('.navbar a').
forEach(link => {
    if(link.href.includes(`${activePage}`)){
        link.classList.add('active');
    }
})



let menu = document.getElementById('menu');
let navbar = document.querySelector(".navbar");
let closes = document.querySelector(".closes");
menu.onclick = () => {
    navbar.style.left = "0";
    menu.style.display="none";
    closes.style.display="block";
}
closes.onclick = () => {
    navbar.style.left = "100%";
    menu.style.display="block";
    closes.style.display="none";
}
window.onscroll = () =>{
    navbar.style.left = "100%";
    menu.style.display="block";
    closes.style.display="none";
} 

const header = document.querySelector('.header');
window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", this.scrollY > 140)
})

let fullscreen = document.querySelector(".fullscreen");
let clos = document.querySelector(".clos");
let iframe = fullscreen.querySelector("iframe");
function openmaster(url){
    fullscreen.style.left = "0";
    iframe.src= url;
}
clos.onclick = () => {
    fullscreen.style.left="100%";
}