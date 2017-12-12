// external js: masonry.pkgd.js

var grid = document.querySelector('.gridContainer');
var msnry = new Masonry( grid, {
  columnWidth: 100,
  itemSelector: '.gridItem',
  gutter: 10
});
// grid.addEventListener(whats my event?, callback function - maketheItembigger)
grid.addEventListener( 'click', function( event ) {
  // don't proceed if item was not clicked on
  if ( !matchesSelector( event.target, '.gridItem > img' ) ) {
    return;
  }
  // change size of item via class
  console.log("make big");

  var itemElem = event.target.parentNode;

  itemElem.classList.toggle('gridItem--gigante');

  // trigger layout
  msnry.layout();
});

function openModal() {
  document.getElementById('myModal').style.display = "block";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
