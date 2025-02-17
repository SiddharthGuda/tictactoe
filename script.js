const container = document.querySelector('.container');
const cells = document.getElementsByClassName('cell');
const winningCombinations = [[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6]]
let turn = 'X';
for (let i = 0; i < cells.length; i++)
  cells[i].addEventListener('click', ()=>clicked(i));


function clicked(i){
  if (cells[i].textContent === '') {
    cells[i].innerText = turn;    
    let status = checkWin();
    if (status == 1 || status == 2) {
      setTimeout(reset, 2000);
      return;
    }
    turn == 'X' ? turn = 'O' : turn = 'X';
  }
}


function checkWin() {
  for ([a, b, c] of winningCombinations) {
    if (cells[a].textContent === cells[b].textContent && cells[b].textContent === cells[c].textContent && cells[a].textContent !== '') {
      cells[a].style.backgroundColor = 'green';
      cells[b].style.backgroundColor = 'green';
      cells[c].style.backgroundColor = 'green';
      cells[a].style.borderRadius = '25%';
      cells[b].style.borderRadius = '25%';
      cells[b].style.borderRadius = '25%';
      return 1
    }
  }
  for (let i = 0; i < 9; i++)
    if (cells[i].textContent === '') return 0;
  return 2;

}

function reset() {
  for (let i = 0; i < 9; i++) {
    cells[i].textContent = '';
    cells[i].style.backgroundColor = 'tomato';
    cells[i].style.borderRadius = '0%';
  }
  turn = 'X';
}