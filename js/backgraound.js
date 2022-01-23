//image import
const images =["0.webp", "1.jpg", "2.jpg"];
const randomNum = Math.floor(Math.random() * images.length);
const chooseImage = images[randomNum];

const bgImage = document.createElement("img");
bgImage.src = `img/${chooseImage}`;
console.log(bgImage);

document.body.appendChild(bgImage);