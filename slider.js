let currentIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let slide of slides) {
    slide.style.display = "none";
  }

  currentIndex++;
  if (currentIndex > slides.length) currentIndex = 1;

  slides[currentIndex - 1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 4 sec
}
