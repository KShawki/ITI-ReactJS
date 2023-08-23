const marbles = document.querySelectorAll('.marble');
let currentIndex = 0; 

function showImage(index) {
  imageElement.src = 'marble2.jpg';
  currentIndex = index;
}

function changeMarble() {
  setInterval(NextPhoto, 2000); 
}

changeMarble(); 