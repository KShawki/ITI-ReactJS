const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];
const imageElement = document.getElementById('image');
let currentIndex = 0;
let slideshowInterval;

function showImage(index) {
  imageElement.src = images[index];
  currentIndex = index;
}

function PreviousPhoto() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

function NextPhoto() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}


function SlideShow() {
  slideshowInterval = setInterval(NextPhoto, 2000);
}

showImage(currentIndex);
