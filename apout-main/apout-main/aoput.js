
let a = 0;
const imgs = document.querySelectorAll(".shipping .slide");

setInterval(() => {
  imgs[a].classList.remove("active");
  a = (a + 1) % imgs.length;
  imgs[a].classList.add("active");
}, 3000);

let b = 0;
const imgss = document.querySelectorAll(".packaging .slide");

setInterval(() => {
  imgss[b].classList.remove("active");
  b = (b + 1) % imgss.length;
  imgss[b].classList.add("active");
}, 3000);
let c = 0;
const imgsss = document.querySelectorAll(".Payment .slide");

setInterval(() => {
  imgsss[c].classList.remove("active");
  c = (c + 1) % imgsss.length;
  imgsss[c].classList.add("active");
}, 3000);
