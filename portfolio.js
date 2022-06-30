const images = document.getElementsByClassName("images");
const button = document.getElementById("next");
const imagesContainer = document.getElementsByClassName("images-container")[0];
const width = 640;
let slideIndex = 1;

const next = button.addEventListener("click", () => {
  nextPhoto();
  console.log(imagesContainer.style.left);
});

function nextPhoto() {
  console.log(slideIndex);
  if (slideIndex < images.length) {
    imagesContainer.style.left = -width * slideIndex + "px";
    slideIndex++;
    console.log(slideIndex);
  } else {
    slideIndex = 0;
    imagesContainer.style.left = -width * slideIndex + "px";
    slideIndex++;
    console.log(slideIndex);
  }
}