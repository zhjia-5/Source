const btn = document.querySelector("header button");
const nav_ul = document.querySelector(".nav ul");
const carousel_ul = document.querySelector(".carousel ul");
const carousel_ul_li = document.querySelector(".carousel ul li");
let index = 0;
btn.onclick = () => {
  nav_ul.classList.contains("active") ? nav_ul.classList.remove("active") : nav_ul.classList.add("active");
}

const timer = setInterval(() => {
  let width = carousel_ul_li.clientWidth;
  index ++;
  index %= 3;
    carousel_ul.style.transform = `translateX(${-index * width}px)`;
}, 3000);