let boxes = document.querySelectorAll('.boxes');
let newGame = document.querySelector('.new-game')
let resetGame = document.querySelector('.reset-game')
let gameMsg = document.querySelector('.winner')
let msg = document.querySelector('#msg')

  let turnO = true;
  boxes.forEach((box) => {
    box.addEventListener("click", () => {
      if (turnO) {
        box.innerText = "O";
        if (box.innerText === "O") {
          box.style.color = 'aqua';
        }
        turnO = false;
      } else {
        box.innerText = "X";
        if (box.innerText === "X") {
          box.style.color = '#c3f81d';
        }
        turnO = true;
      }
      box.disabled = true;
  
      checkWinner();
    
    });
    
  });

const displayWinner = (winner)=>{
  msg.innerHTML = `Congratulations, Winner is ${winner}`
  gameMsg.classList.remove('hidden');
  disableBox();
}

let winPositions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 6, 6],
  [0, 4, 8],
];

const gameReset = ()=>{
  turnO = true;
  enableBox();
  gameMsg.classList.add('hidden');

}

const disableBox = ()=>{
  for (const box of boxes) {
    box.disabled = true;
  }
}
const enableBox = ()=>{
  for (const box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
}

  const checkWinner = ()=>{
    for (let positions of winPositions) {
      let val1 = boxes[positions[0]].innerText;
      let val2 = boxes[positions[1]].innerText;
      let val3 = boxes[positions[2]].innerText;

      if (val1 != "" && val2 != "" && val3 != "" ) {
        if (val1 === val2 && val2 === val3 && val1 === val3) {
          displayWinner(val1)
          
        }
      }
    }
}
newGame.addEventListener('click', gameReset);
resetGame.addEventListener('click', gameReset);