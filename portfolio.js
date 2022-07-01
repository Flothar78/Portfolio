const images = document.getElementsByClassName("images");
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const imagesContainer = document.getElementsByClassName("images-container")[0];
const width = 640;
let slideIndex = 0;

nextButton.addEventListener("click", () => {
  nextProject();
});

previousButton.addEventListener("click", () => {
  previousProject();
});

function nextProject() {
  if (slideIndex < images.length - 1) {
    console.log(slideIndex);
    slideIndex++;
    imagesContainer.style.left = -width * slideIndex + "px";
    console.log(slideIndex);
  } else {
    slideIndex = 0;
    imagesContainer.style.left = -width * slideIndex + "px";

    console.log(slideIndex);
  }
}

function previousProject() {
  console.log(slideIndex);
  slideIndex--;
  console.log(slideIndex);
  if (slideIndex < 0) {
    slideIndex = images.length - 1;
    console.log(slideIndex);
    imagesContainer.style.left = -width * slideIndex + "px";
  } else {
    imagesContainer.style.left = -width * slideIndex + "px";
  }
}
