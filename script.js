window.onload = function() {

document.querySelector('.black').style.border = 'solid black 1px';
document.querySelector('.aqua').style.border = 'solid black 1px';
document.querySelector('.blueviolet').style.border = 'solid black 1px';
document.querySelector('.pink').style.border = 'solid black 1px';
document.querySelector('.pink').style.border = 'solid black 1px';



// function criaDiv() {
// let pixelBoard = document.querySelector('#pixel-board');
// for (let index = 0; index < 25; index += 1) {
//     let pixelBoardDivs = pixelBoardDivs[index];

//     let pixelBoardElements = document.creatElement('div');
//     pixelBoard.appendChild(pixelBoardElements);
//     document.querySelector('#pixel-board').class  = "pixel";
// }
// criaDiv();
// }

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
}

