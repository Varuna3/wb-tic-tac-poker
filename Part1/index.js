const board = Array(9).fill(null);

const play = (ID) => {
  let box = document.getElementById(`${ID}`);
  let player = document.getElementById("player");

  box.innerText = player.innerText;
  board[ID] = box.innerText;

  player.innerText === "X"
    ? (player.innerText = "O")
    : (player.innerText = "X");
  setTimeout(() => {
    if (detWin(board) === "X") alert("X wins");
    else if (detWin(board) === "O") alert("O wins");
    else if (detWin(board) === "CAT") alert("CAT's game");
  }, 300);
};

const detWin = (b) => {
  if (b[0] === b[1] && b[1] === b[2]) return b[0];
  else if (b[3] === b[4] && b[4] === b[5]) return b[3];
  else if (b[6] === b[7] && b[7] === b[8]) return b[6];
  else if (b[0] === b[3] && b[3] === b[6]) return b[0];
  else if (b[1] === b[4] && b[4] === b[7]) return b[1];
  else if (b[2] === b[5] && b[5] === b[8]) return b[2];
  else if (b[0] === b[4] && b[4] === b[8]) return b[0];
  else if (b[2] === b[4] && b[4] === b[6]) return b[2];
  else if (b.filter((e) => e !== null).length === 9) return "CAT";
};
