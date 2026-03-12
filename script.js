console.log("WebJay Portfolio Ready");

window.addEventListener("scroll",function(){

const nav = document.querySelector(".navbar");

nav.classList.toggle("sticky",window.scrollY>50)

})