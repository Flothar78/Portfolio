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
    slideIndex++;
    imagesContainer.style.left = -width * slideIndex + "px";
    document.getElementById("name-project-display").innerHTML = slideIndex + 1;
  } else {
    slideIndex = 0;
    imagesContainer.style.left = -width * slideIndex + "px";
    document.getElementById("name-project-display").innerHTML = slideIndex + 1;
  }
}

function previousProject() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = images.length - 1;
    imagesContainer.style.left = -width * slideIndex + "px";
    document.getElementById("name-project-display").innerHTML = slideIndex + 1;
  } else {
    imagesContainer.style.left = -width * slideIndex + "px";
    document.getElementById("name-project-display").innerHTML = slideIndex + 1;
  }
}
