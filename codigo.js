const searchBtn = document.getElementById("search-btn");
const searchInp = document.querySelector(".search-form");

const cartBtn = document.getElementById("cart-btn");
const cartCon = document.querySelector(".cart-items-container");

const menuBtn = document.getElementById("menu-btn");
const navBar = document.querySelector(".nav");

const header = document.querySelector("#header");

const navA1 = document.querySelector(".nav-a1");
const navA2 = document.querySelector(".nav-a2");
const navA3 = document.querySelector(".nav-a3");
const navA4 = document.querySelector(".nav-a4");
const navA5 = document.querySelector(".nav-a5");


searchBtn.addEventListener("click", () => {
    searchInp.classList.toggle("active");
    navBar.classList.remove("active");
    cartCon.classList.remove("active");
})

cartBtn.addEventListener("click", () => {
    cartCon.classList.toggle("active");
    navBar.classList.remove("active");
    searchInp.classList.remove("active");
})

menuBtn.addEventListener("click", () => {
    navBar.classList.toggle("active");
    searchInp.classList.remove("active");
    cartCon.classList.remove("active");
})

window.onscroll = () => {
    if(window.scrollY > 40){
        header.classList.add("active-header");
        navA1.classList.add("active");  
        navA2.classList.add("active");  
        navA3.classList.add("active");  
        navA4.classList.add("active");  
        navA5.classList.add("active");  
    }else{
        header.classList.remove("active-header");
        navA1.classList.remove("active");  
        navA2.classList.remove("active");  
        navA3.classList.remove("active");  
        navA4.classList.remove("active");  
        navA5.classList.remove("active");  
    }
    
};
