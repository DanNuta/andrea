import { getCustomProperty, setProperty } from "./helper.js";

const divGalery = document.querySelector(".gallery_shr_img");
const images = ["images/1.png", "images/2.png", "images/3.png", "images/4.png"];
const sliderLength = images.length - 1;

let counter = 0;

images.forEach((item) => {
  const randomElement = Math.floor(Math.random() * 10);
  const img = document.createElement("img");
  img.src = item;
  img.classList.add("img_shr");
  divGalery.append(img);
});

const gallery = document.querySelectorAll(".img_shr");

setInterval(function () {
  if (counter > sliderLength) {
    counter = 0;
  } else {
    const activeClassGalery = document.querySelector(".active");
    activeClassGalery?.classList.remove("active");
    gallery[counter].classList.add("active");
    counter++;
  }
}, 1000);

// slider

const widthWindow = window.innerWidth;
const lengthWidth = widthWindow / 3;

const sliderParent = document.querySelector("[data-slider]");
const sliderSrc = [
  "./images/animation/1.png",
  "./images/animation/2.png",
  "./images/animation/3.png",
  "./images/animation/4.png",
];

sliderSrc.forEach((item, i) => {
  const img = document.createElement("img");
  const divImg = document.createElement("div");
  img.src = item;
  divImg.classList.add("slider_shr_img");
  divImg.style.setProperty("--left", i * lengthWidth);
  divImg.dataset.img = true;

  divImg.append(img);
  sliderParent.append(divImg);
});

const slider = [...document.querySelectorAll("[data-img]")];
const sliderParentGalery = document.querySelector("[data-slider]");

slider.forEach((element, i) => {
  if (i === 2) {
    element.classList.add("active_slider");
  }
});

let widthElement;

const resizer = new ResizeObserver(enstries => {
    widthElement = enstries[0].contentRect.width.toFixed();
});

resizer.observe(sliderParentGalery);



// slider

const TIME = 1;
let index;
const lasteElement = getCustomProperty(slider[slider.length - 1], "--left");

function sliderMove(curentTime) {
  if (index === undefined) {
    index = curentTime;
    window.requestAnimationFrame(sliderMove);
    return;
  }

  let delta = (curentTime - index) / 1000;
  window.requestAnimationFrame(sliderMove);

  if (delta < TIME) return;

  slider.forEach((item, i) => {
    const styleCss = getCustomProperty(item, "--left");
    const value = styleCss - lengthWidth;
    if (styleCss === 0) {
      setProperty(item, "--left", lasteElement);
    } else {
      setProperty(item, "--left", value);
    }
  });

  index = curentTime;
}

window.requestAnimationFrame(sliderMove);
