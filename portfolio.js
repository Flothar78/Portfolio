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
  if (slideIndex < images.length) {
    imagesContainer.style.left = -width * slideIndex + "px";
    slideIndex++;
  } else {
    slideIndex = 0;
    imagesContainer.style.left = -width * slideIndex + "px";
    slideIndex++;
  }
}

function previousProject() {
  console.log(slideIndex);
  imagesContainer.style.left = -width * slideIndex + "px";
  if (slideIndex > 0 && slideIndex < 5) {
    slideIndex--;
  } else {
    slideIndex = 3;
  }
}
