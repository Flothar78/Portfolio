const images = document.getElementsByClassName("images");
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const imagesContainer = document.getElementsByClassName("images-container")[0];
const width = 640;

nextButton.addEventListener("click", () => {
  nextProject();
});
let nextSlideIndex = 1;
function nextProject() {
  if (nextSlideIndex < images.length) {
    imagesContainer.style.left = -width * nextSlideIndex + "px";
    nextSlideIndex++;
  } else {
    nextSlideIndex = 0;
    imagesContainer.style.left = -width * nextSlideIndex + "px";
    nextSlideIndex++;
  }
}

previousButton.addEventListener("click", () => {
  previousProject();
});

function previousProject() {
  const array = Object.keys(images);
  let prevSlideIndex = array.forEach((element) => {
    element = element - 1;
    console.log(element);
  });
  //console.log(prevSlideIndex);
  imagesContainer.style.left = -width * prevSlideIndex + "px";
  console.log(imagesContainer.style.left);
}
