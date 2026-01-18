let a = 0;
const imgs = document.querySelectorAll(".my-slider .slide");

setInterval(() => {
  imgs[a].classList.remove("active");
  a = (a + 1) % imgs.length;
  imgs[a].classList.add("active");
}, 3000);

let b = 0;
const imgss = document.querySelectorAll(".my-sliderr .slide");

setInterval(() => {
  imgss[b].classList.remove("active");
  b = (b + 1) % imgss.length;
  imgss[b].classList.add("active");
}, 3000);



let c = 0;
const imgsss = document.querySelectorAll(".my-sliderr_2 .slide");

setInterval(() => {
  imgsss[c].classList.remove("active");
  c = (c + 1) % imgsss.length;
  imgsss[c].classList.add("active");
}, 3000);

let d = 0;
const imgssss = document.querySelectorAll(".my-sliderr_3 .slide");

setInterval(() => {
  imgssss[d].classList.remove("active");
  d = (d + 1) % imgssss.length;
  imgssss[d].classList.add("active");
}, 3000);

let e = 0;
const imgsssss = document.querySelectorAll(".my-sliderr_4 .slide");

setInterval(() => {
  imgsssss[e].classList.remove("active");
  e = (e + 1) % imgsssss.length;
  imgsssss[e].classList.add("active");
}, 3000);

let f = 0;
const imgssssss = document.querySelectorAll(".my-sliderr_5 .slide");

setInterval(() => {
  imgssssss[f].classList.remove("active");
  f = (f + 1) % imgssssss.length;
  imgssssss[f].classList.add("active");
}, 3000);

let g = 0;
const imgsssssss = document.querySelectorAll(".my-sliderr_6 .slide");

setInterval(() => {
  imgsssssss[g].classList.remove("active");
  g = (g + 1) % imgsssssss.length;
  imgsssssss[g].classList.add("active");
}, 3000);

let h = 0;
const imgssssssss = document.querySelectorAll(".my-sliderr_7 .slide");

setInterval(() => {
  imgssssssss[h].classList.remove("active");
  h = (h + 1) % imgssssssss.length;
  imgssssssss[h].classList.add("active");
}, 3000);

