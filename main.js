const current = document.getElementById("current");
const imgs = document.querySelectorAll(".imgs img");
const opacity = 0.6;

//set first img opacity
imgs[0].style.opacity = opacity;

imgs.forEach((img) => img.addEventListener("click", imageClick));

function imageClick(e) {
  // reset the opacity off all image
  imgs.forEach((img) => (img.style.opacity = 1));
  //change current image to src of clicked image
  current.src = e.target.src;

  //add fadeIn class
  current.classList.add("fade-in");

  //Remove fadeIn class after 0.5s
  setTimeout(() => {
    current.classList.remove("fade-in");
  }, 500);

  // Change the opacity to opacity  var
  e.target.style.opacity = opacity;
}
