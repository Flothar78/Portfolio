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

function idProjectDisplay() {
  document.getElementById("id-project-display").innerHTML = slideIndex + 1;
}

function nextProject() {
  if (slideIndex < images.length - 1) {
    slideIndex++;
    imagesContainer.style.left = -width * slideIndex + "px";
    idProjectDisplay();
  } else {
    slideIndex = 0;
    imagesContainer.style.left = -width * slideIndex + "px";
    idProjectDisplay();
  }
}

function previousProject() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = images.length - 1;
    imagesContainer.style.left = -width * slideIndex + "px";
    idProjectDisplay();
  } else {
    imagesContainer.style.left = -width * slideIndex + "px";
    idProjectDisplay();
  }
}
