var textElement = document.getElementsByClassName('text-element')[0];

function setTitleColor(){
  var redRange = document.getElementsByClassName('red')[0].value;
  var greenRange = document.getElementsByClassName('green')[0].value;
  var blueRange = document.getElementsByClassName('blue')[0].value;
  textElement.style.color = `rgb(${redRange}, ${greenRange}, ${blueRange})`;
  
}
