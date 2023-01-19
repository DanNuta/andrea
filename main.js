
const divGalery = document.querySelector(".gallery_shr_img");
const images = ["images/1.png", "images/2.png", "images/3.png", "images/4.png"];
const sliderLength = images.length-1;

let counter = 0;

images.forEach(item => {
    const randomElement = Math.floor(Math.random()*10);
    const img = document.createElement("img");
    img.src = item;
    img.classList.add("img_shr");
    divGalery.append(img)
})

const gallery = document.querySelectorAll(".img_shr");


setInterval(function(){
    if(counter > sliderLength){
        counter = 0;
    }else{
        const activeClassGalery = document.querySelector(".active");
        activeClassGalery?.classList.remove("active");
        gallery[counter].classList.add("active");
        counter++
    }
}, 1000)



