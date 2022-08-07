window.onload = function() {

document.querySelector('.black').style.border = 'solid black 1px';
document.querySelector('.aqua').style.border = 'solid black 1px';
document.querySelector('.blueviolet').style.border = 'solid black 1px';
document.querySelector('.pink').style.border = 'solid black 1px';
document.querySelector('.pink').style.border = 'solid black 1px';


function onClick() {
    alert('hora da diversao');
}
onClick();

function addSelected() {
    let selected = document.querySelector('.black');
    selected.classList.add("selected");
}
addSelected();


// let colorPalette = document.querySelector('#color-palette');
// function onClickColorcolorPalette(event) {
//     alert('Clicou');
//console.log(colorPalette); igual á:
//console.log(event.target);
// } foi pra dentro da proxima função :

function setColor() {
    let selectedColorPalette = document.querySelector('#color-palette');
    selectedColorPalette.addEventListener('click', function(event) {
      let clickedPalette = event.target;
      let getColor = document.querySelectorAll('.color');
      getColor.forEach((element) => element.classList.remove('selected'));
      clickedPalette.classList.add('selected');
    });
  }
 
setColor();


document.getElementById("pixel-board").addEventListener("click", function(event){
  let selectedColor = document.querySelector(".selected");
  let newColor = window.getComputedStyle(selectedColor).backgroundColor;

  event.target.style.backgroundColor = newColor;
})

document.getElementById("button-clear").addEventListener("click", function(){
  let pixels = document.getElementsByClassName("pixel");
  for(pixel of pixels){
    pixel.style.backgroundColor = "white";
  }
});

}