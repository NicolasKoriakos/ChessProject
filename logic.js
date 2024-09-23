let kingMoved = { W: false, B: false };
let rookMoved = {
  W: { kingSide: false, queenSide: false },
  B: { kingSide: false, queenSide: false },
};

//inserting the images
function insertImage() {
  document.querySelectorAll(".box").forEach((image) => {
    if (image.innerText.length !== 0) {
      if (image.innerText == "Wpawn" || image.innerText == "Bpawn") {
        image.innerHTML = `${image.innerText} <img class='all-img all-pown' src="${image.innerText}.png" alt="">`;
        image.style.cursor = "pointer";
      } else {
        image.innerHTML = `${image.innerText} <img class='all-img' src="${image.innerText}.png" alt="">`;
        image.style.cursor = "pointer";
      }
    }
  });
}
insertImage();

// Board color

function coloring() {
  const color = document.querySelectorAll(".box");

  color.forEach((color) => {
    getId = color.id;
    arr = Array.from(getId);
    arr.shift();
    aside = eval(arr.pop());
    aup = eval(arr.shift());
    a = aside + aup;

    if (a % 2 == 0) {
      color.style.backgroundColor = "rgb(236, 223, 204)";
    }
    if (a % 2 !== 0) {
      color.style.backgroundColor = "rgb(60, 61, 55)";
    }
  });
}
coloring();

//function to not remove the same team element

function reddish() {
  document.querySelectorAll(".box").forEach((i1) => {
    if (i1.style.backgroundColor == "blue") {
      document.querySelectorAll(".box").forEach((i2) => {
        if (
          i2.style.backgroundColor == "greenyellow" &&
          i2.innerText.length !== 0
        ) {
          greenyellowText = i2.innerText;

          blueText = i1.innerText;

          blueColor = Array.from(blueText).shift().toString();
          greenyellowColor = Array.from(greenyellowText).shift().toString();

          getId = i2.id;
          arr = Array.from(getId);
          arr.shift();
          aside = eval(arr.pop());
          aup = eval(arr.shift());
          a = aside + aup;

          if (a % 2 == 0 && blueColor == greenyellowColor) {
            i2.style.backgroundColor = "rgb(232 235 239)";
          }
          if (a % 2 !== 0 && blueColor == greenyellowColor) {
            i2.style.backgroundColor = "rgb(125 135 150)";
          }
        }
      });
    }
  });
}

//reset button
document.getElementById("reset-btn").addEventListener("click", function () {
  location.reload();
});

tog = 1;

document.querySelectorAll(".box").forEach((item) => {
  item.addEventListener("click", function () {
    if (
      item.style.backgroundColor == "greenyellow" &&
      item.innerText.length == 0
    ) {
      tog = tog + 1;
    } else if (
      item.style.backgroundColor == "greenyellow" &&
      item.innerText.length !== 0
    ) {
      document.querySelectorAll(".box").forEach((i) => {
        if (i.style.backgroundColor == "blue") {
          blueId = i.id;
          blueText = i.innerText;

          document.getElementById(blueId).innerText = "";
          item.innerText = blueText;
          coloring();
          insertImage();
          tog = tog + 1;
        }
      });
    }

    getId = item.id;
    arr = Array.from(getId);
    arr.shift();
    aside = eval(arr.pop());
    arr.push("0");
    aup = eval(arr.join(""));
    a = aside + aup;

    //function to display the available paths for all pieces

    function whosTurn(toggle) {
      // PAWN

      if (
        item.innerText.includes("pawn") &&
        item.innerText.includes(`${toggle}`)
      ) {
        item.style.backgroundColor = "blue";

        if (tog % 2 !== 0 && aup < 800) {
          // First move for white pawns
          if (document.getElementById(`b${a + 100}`).innerText.length == 0) {
            document.getElementById(`b${a + 100}`).style.backgroundColor =
              "greenyellow";
            if (
              document.getElementById(`b${a + 200}`).innerText.length == 0 &&
              aup < 300
            ) {
              document.getElementById(`b${a + 200}`).style.backgroundColor =
                "greenyellow";
            }
          }
          if (
            aside < 8 &&
            document.getElementById(`b${a + 100 + 1}`).innerText.length !== 0
          ) {
            document.getElementById(`b${a + 100 + 1}`).style.backgroundColor =
              "greenyellow";
          }
          if (
            aside > 1 &&
            document.getElementById(`b${a + 100 - 1}`).innerText.length !== 0
          ) {
            document.getElementById(`b${a + 100 - 1}`).style.backgroundColor =
              "greenyellow";
          }
        }

        if (tog % 2 == 0 && aup > 100) {
          // First move for black pawns
          if (document.getElementById(`b${a - 100}`).innerText.length == 0) {
            document.getElementById(`b${a - 100}`).style.backgroundColor =
              "greenyellow";
            if (
              document.getElementById(`b${a - 200}`).innerText.length == 0 &&
              aup > 600
            ) {
              document.getElementById(`b${a - 200}`).style.backgroundColor =
                "greenyellow";
            }
          }
          if (
            aside < 8 &&
            document.getElementById(`b${a - 100 + 1}`).innerText.length !== 0
          ) {
            document.getElementById(`b${a - 100 + 1}`).style.backgroundColor =
              "greenyellow";
          }
          if (
            aside > 1 &&
            document.getElementById(`b${a - 100 - 1}`).innerText.length !== 0
          ) {
            document.getElementById(`b${a - 100 - 1}`).style.backgroundColor =
              "greenyellow";
          }
        }
        // Second move for pawns
        if (tog % 2 !== 0 && aup >= 800) {
          if (document.getElementById(`b${a + 100}`).innerText.length == 0) {
            document.getElementById(`b${a + 100}`).style.backgroundColor =
              "greenyellow";
          }
          if (
            aside < 8 &&
            document.getElementById(`b${a + 100 + 1}`).innerText.length !== 0
          ) {
            document.getElementById(`b${a + 100 + 1}`).style.backgroundColor =
              "greenyellow";
          }
          if (
            aside > 1 &&
            document.getElementById(`b${a + 100 - 1}`).innerText.length !== 0
          ) {
            document.getElementById(`b${a + 100 - 1}`).style.backgroundColor =
              "greenyellow";
          }
        }
        if (tog % 2 == 0 && aup <= 100) {
          if (document.getElementById(`b${a - 100}`).innerText.length == 0) {
            document.getElementById(`b${a - 100}`).style.backgroundColor =
              "greenyellow";
          }
          if (
            aside < 8 &&
            document.getElementById(`b${a - 100 + 1}`).innerText.length !== 0
          ) {
            document.getElementById(`b${a - 100 + 1}`).style.backgroundColor =
              "greenyellow";
          }
          if (
            aside > 1 &&
            document.getElementById(`b${a - 100 - 1}`).innerText.length !== 0
          ) {
            document.getElementById(`b${a - 100 - 1}`).style.backgroundColor =
              "greenyellow";
          }
        }
      }

      // KING MOVEMENTS

      if (item.innerText == `${toggle}king`) {
        // Get the current king's position
        const kingPosition = findKingPosition(); // Assuming findKingPosition returns { row, col }

        // Highlight valid king moves
        highlightValidKingMoves(kingPosition);

        // Highlight the current king's square
        item.style.backgroundColor = "blue";
      }

      // KNIGHT

      if (
        item.innerText.includes("knight") &&
        item.innerText.includes(`${toggle}`)
      ) {
        if (aside < 7 && aup < 800) {
          document.getElementById(`b${a + 100 + 2}`).style.backgroundColor =
            "greenyellow";
        }
        if (aside < 7 && aup > 200) {
          document.getElementById(`b${a - 100 + 2}`).style.backgroundColor =
            "greenyellow";
        }
        if (aside < 8 && aup < 700) {
          document.getElementById(`b${a + 200 + 1}`).style.backgroundColor =
            "greenyellow";
        }
        if (aside > 1 && aup < 700) {
          document.getElementById(`b${a + 200 - 1}`).style.backgroundColor =
            "greenyellow";
        }
        if (aside > 2 && aup < 800) {
          document.getElementById(`b${a - 2 + 100}`).style.backgroundColor =
            "greenyellow";
        }
        if (aside > 2 && aup > 100) {
          document.getElementById(`b${a - 2 - 100}`).style.backgroundColor =
            "greenyellow";
        }
        if (aside < 8 && aup > 200) {
          document.getElementById(`b${a - 200 + 1}`).style.backgroundColor =
            "greenyellow";
        }
        if (aside > 1 && aup > 200) {
          document.getElementById(`b${a - 200 - 1}`).style.backgroundColor =
            "greenyellow";
        }

        item.style.backgroundColor = "blue";
      }

      // QUEEN

      if (
        item.innerText.includes("queen") &&
        item.innerText.includes(`${toggle}`)
      ) {
        for (let i = 1; i < 9; i++) {
          if (
            a + i * 100 < 900 &&
            document.getElementById(`b${a + i * 100}`).innerText == 0
          ) {
            document.getElementById(`b${a + i * 100}`).style.backgroundColor =
              "greenyellow";
          } else if (
            a + i * 100 < 900 &&
            document.getElementById(`b${a + i * 100}`).innerText !== 0
          ) {
            document.getElementById(`b${a + i * 100}`).style.backgroundColor =
              "greenyellow";
            break;
          }
        }

        for (let i = 1; i < 9; i++) {
          if (
            a - i * 100 > 100 &&
            document.getElementById(`b${a - i * 100}`).innerText == 0
          ) {
            document.getElementById(`b${a - i * 100}`).style.backgroundColor =
              "greenyellow";
          } else if (
            a - i * 100 > 100 &&
            document.getElementById(`b${a - i * 100}`).innerText !== 0
          ) {
            document.getElementById(`b${a - i * 100}`).style.backgroundColor =
              "greenyellow";
            break;
          }
        }

        for (let i = 1; i < 9; i++) {
          if (
            a + i < aup + 9 &&
            document.getElementById(`b${a + i}`).innerText == 0
          ) {
            document.getElementById(`b${a + i}`).style.backgroundColor =
              "greenyellow";
          } else if (
            a + i < aup + 9 &&
            document.getElementById(`b${a + i}`).innerText !== 0
          ) {
            document.getElementById(`b${a + i}`).style.backgroundColor =
              "greenyellow";
            break;
          }
        }

        for (let i = 1; i < 9; i++) {
          if (
            a - i > aup &&
            document.getElementById(`b${a - i}`).innerText == 0
          ) {
            document.getElementById(`b${a - i}`).style.backgroundColor =
              "greenyellow";
          } else if (
            a - i > aup &&
            document.getElementById(`b${a - i}`).innerText !== 0
          ) {
            document.getElementById(`b${a - i}`).style.backgroundColor =
              "greenyellow";
            break;
          }
        }

        for (let i = 1; i < 9; i++) {
          if (
            i < (900 - aup) / 100 &&
            i < 9 - aside &&
            document.getElementById(`b${a + i * 100 + i}`).innerText.length == 0
          ) {
            document.getElementById(
              `b${a + i * 100 + i}`
            ).style.backgroundColor = "greenyellow";
          } else if (
            i < (900 - aup) / 100 &&
            i < 9 - aside &&
            document.getElementById(`b${a + i * 100 + i}`).innerText.length !==
              0
          ) {
            document.getElementById(
              `b${a + i * 100 + i}`
            ).style.backgroundColor = "greenyellow";
            break;
          }
        }

        for (let i = 1; i < 9; i++) {
          if (
            i < aup / 100 &&
            i < 9 - aside &&
            document.getElementById(`b${a - i * 100 + i}`).innerText.length == 0
          ) {
            document.getElementById(
              `b${a - i * 100 + i}`
            ).style.backgroundColor = "greenyellow";
          } else if (
            i < aup / 100 &&
            i < 9 - aside &&
            document.getElementById(`b${a - i * 100 + i}`).innerText.length !==
              0
          ) {
            document.getElementById(
              `b${a - i * 100 + i}`
            ).style.backgroundColor = "greenyellow";
            break;
          }
        }

        for (let i = 1; i < 9; i++) {
          if (
            i < (900 - aup) / 100 &&
            i < aside &&
            document.getElementById(`b${a + i * 100 - i}`).innerText.length == 0
          ) {
            document.getElementById(
              `b${a + i * 100 - i}`
            ).style.backgroundColor = "greenyellow";
          } else if (
            i < (900 - aup) / 100 &&
            i < aside &&
            document.getElementById(`b${a + i * 100 - i}`).innerText.length !==
              0
          ) {
            document.getElementById(
              `b${a + i * 100 - i}`
            ).style.backgroundColor = "greenyellow";
            break;
          }
        }

        for (let i = 1; i < 9; i++) {
          if (
            i < aup / 100 &&
            i < aside &&
            document.getElementById(`b${a - i * 100 - i}`).innerText.length == 0
          ) {
            document.getElementById(
              `b${a - i * 100 - i}`
            ).style.backgroundColor = "greenyellow";
          } else if (
            i < aup / 100 &&
            i < aside &&
            document.getElementById(`b${a - i * 100 - i}`).innerText.length !==
              0
          ) {
            document.getElementById(
              `b${a - i * 100 - i}`
            ).style.backgroundColor = "greenyellow";
            break;
          }
        }

        item.style.backgroundColor = "blue";
      }

      // BISHOP

      if (
        item.innerText.includes("bishop") &&
        item.innerText.includes(`${toggle}`)
      ) {
        for (let i = 1; i < 9; i++) {
          if (
            i < (900 - aup) / 100 &&
            i < 9 - aside &&
            document.getElementById(`b${a + i * 100 + i}`).innerText.length == 0
          ) {
            document.getElementById(
              `b${a + i * 100 + i}`
            ).style.backgroundColor = "greenyellow";
          } else if (
            i < (900 - aup) / 100 &&
            i < 9 - aside &&
            document.getElementById(`b${a + i * 100 + i}`).innerText.length !==
              0
          ) {
            document.getElementById(
              `b${a + i * 100 + i}`
            ).style.backgroundColor = "greenyellow";
            break;
          }
        }

        for (let i = 1; i < 9; i++) {
          if (
            i < aup / 100 &&
            i < 9 - aside &&
            document.getElementById(`b${a - i * 100 + i}`).innerText.length == 0
          ) {
            document.getElementById(
              `b${a - i * 100 + i}`
            ).style.backgroundColor = "greenyellow";
          } else if (
            i < aup / 100 &&
            i < 9 - aside &&
            document.getElementById(`b${a - i * 100 + i}`).innerText.length !==
              0
          ) {
            document.getElementById(
              `b${a - i * 100 + i}`
            ).style.backgroundColor = "greenyellow";
            break;
          }
        }

        for (let i = 1; i < 9; i++) {
          if (
            i < (900 - aup) / 100 &&
            i < aside &&
            document.getElementById(`b${a + i * 100 - i}`).innerText.length == 0
          ) {
            document.getElementById(
              `b${a + i * 100 - i}`
            ).style.backgroundColor = "greenyellow";
          } else if (
            i < (900 - aup) / 100 &&
            i < aside &&
            document.getElementById(`b${a + i * 100 - i}`).innerText.length !==
              0
          ) {
            document.getElementById(
              `b${a + i * 100 - i}`
            ).style.backgroundColor = "greenyellow";
            break;
          }
        }

        for (let i = 1; i < 9; i++) {
          if (
            i < aup / 100 &&
            i < aside &&
            document.getElementById(`b${a - i * 100 - i}`).innerText.length == 0
          ) {
            document.getElementById(
              `b${a - i * 100 - i}`
            ).style.backgroundColor = "greenyellow";
          } else if (
            i < aup / 100 &&
            i < aside &&
            document.getElementById(`b${a - i * 100 - i}`).innerText.length !==
              0
          ) {
            document.getElementById(
              `b${a - i * 100 - i}`
            ).style.backgroundColor = "greenyellow";
            break;
          }
        }

        item.style.backgroundColor = "blue";
      }

      // ROOK

      if (
        item.innerText.includes("rook") &&
        item.innerText.includes(`${toggle}`)
      ) {
        for (let i = 1; i < 9; i++) {
          if (
            a + i * 100 < 900 &&
            document.getElementById(`b${a + i * 100}`).innerText == 0
          ) {
            document.getElementById(`b${a + i * 100}`).style.backgroundColor =
              "greenyellow";
          } else if (
            a + i * 100 < 900 &&
            document.getElementById(`b${a + i * 100}`).innerText !== 0
          ) {
            document.getElementById(`b${a + i * 100}`).style.backgroundColor =
              "greenyellow";
            break;
          }
        }

        for (let i = 1; i < 9; i++) {
          if (
            a - i * 100 > 100 &&
            document.getElementById(`b${a - i * 100}`).innerText == 0
          ) {
            document.getElementById(`b${a - i * 100}`).style.backgroundColor =
              "greenyellow";
          } else if (
            a - i * 100 > 100 &&
            document.getElementById(`b${a - i * 100}`).innerText !== 0
          ) {
            document.getElementById(`b${a - i * 100}`).style.backgroundColor =
              "greenyellow";
            break;
          }
        }

        for (let i = 1; i < 9; i++) {
          if (
            a + i < aup + 9 &&
            document.getElementById(`b${a + i}`).innerText == 0
          ) {
            document.getElementById(`b${a + i}`).style.backgroundColor =
              "greenyellow";
          } else if (
            a + i < aup + 9 &&
            document.getElementById(`b${a + i}`).innerText !== 0
          ) {
            document.getElementById(`b${a + i}`).style.backgroundColor =
              "greenyellow";
            break;
          }
        }

        for (let i = 1; i < 9; i++) {
          if (
            a - i > aup &&
            document.getElementById(`b${a - i}`).innerText == 0
          ) {
            document.getElementById(`b${a - i}`).style.backgroundColor =
              "greenyellow";
          } else if (
            a - i > aup &&
            document.getElementById(`b${a - i}`).innerText !== 0
          ) {
            document.getElementById(`b${a - i}`).style.backgroundColor =
              "greenyellow";
            break;
          }
        }

        item.style.backgroundColor = "blue";
      }
    }

    // Toggling the turn

    if (tog % 2 !== 0) {
      document.getElementById("tog").innerText = "White's Turn";
      whosTurn("W");
    }
    if (tog % 2 == 0) {
      document.getElementById("tog").innerText = "Black's Turn";
      whosTurn("B");
    }

    reddish();
  });
});

document.querySelectorAll(".box").forEach((hathiTest) => {
  hathiTest.addEventListener("click", function () {
    const kingOriginalPosition = findKingPosition();
    
    if (hathiTest.style.backgroundColor == "blue") {
      blueId = hathiTest.id;
      blueText = hathiTest.innerText;

      document.querySelectorAll(".box").forEach((hathiTest2) => {
        hathiTest2.addEventListener("click", function () {

          if (hathiTest2.style.backgroundColor == "greenyellow" && hathiTest2.innerText.length == 0) {

            if (blueText.toLowerCase().includes("king")) {
              tog = tog - 1
              
              if (parseInt(hathiTest2.id.slice(-1), 10) > findKingPosition().col + 1 && canCastle("kingSide")) {
                let rookNewPosition = "b"+ findKingPosition().row + "0" + (findKingPosition().col+1)
                document.getElementById(getRooks()[1]).innerText = "";
                document.getElementById(rookNewPosition).innerText = tog % 2!=0 ? "Wrook" : "Brook"
                insertImage();
              } else if (parseInt(hathiTest2.id.slice(-1), 10) < kingOriginalPosition.col - 1 && canCastle("queenSide")
              ) {
                let rookNewPosition = "b"+ findKingPosition().row + "0" + (findKingPosition().col-1)
                document.getElementById(getRooks()[0]).innerText = "";
                document.getElementById(rookNewPosition).innerText = tog % 2!=0 ? "Wrook" : "Brook"
              }
              kingMoved[tog % 2 !== 0 ? 'W' : 'B'] = true;
              tog = tog + 1
            }

            document.getElementById(blueId).innerText = "";
            hathiTest2.innerText = blueText;
            coloring();
            insertImage();
          }
          afterMove();
        });
      });
    }
  });
});

// Prvents from selecting multiple elements
z = 0;
document.querySelectorAll(".box").forEach((ee) => {
  ee.addEventListener("click", function () {
    z = z + 1;
    if (z % 2 == 0 && ee.style.backgroundColor !== "greenyellow") {
      coloring();
    }
  });
});



function canPieceAttack(piece, targetRow, targetCol) {
  if (
    !piece ||
    !piece.id ||
    typeof targetRow !== "number" ||
    typeof targetCol !== "number"
  ) {
    console.error("Invalid piece or target position");
    return false;
  }

  const pieceText = piece.innerText.toLowerCase(); // Ensure comparison is case-insensitive
  const pieceRow = parseInt(piece.id[1]);
  const pieceCol = parseInt(piece.id.slice(2));

  // Defensive check: Ensure pieceRow and pieceCol are numbers
  if (isNaN(pieceRow) || isNaN(pieceCol)) {
    console.error("Invalid piece position data");
    return false;
  }

  switch (true) {
    case pieceText.includes("pawn"):
      // Pawns attack one step diagonally forward
      // Assuming white pawns move up (row decreasing) and black pawns move down (row increasing)
      return (
        Math.abs(pieceCol - targetCol) === 1 &&
        (pieceRow - targetRow === 1 || pieceRow - targetRow === -1)
      );

    case pieceText.includes("knight"):
      // Knights move in an "L" shape
      return (
        (Math.abs(pieceRow - targetRow) === 2 &&
          Math.abs(pieceCol - targetCol) === 1) ||
        (Math.abs(pieceRow - targetRow) === 1 &&
          Math.abs(pieceCol - targetCol) === 2)
      );

    case pieceText.includes("bishop"):
      // Bishops move diagonally
      return Math.abs(pieceRow - targetRow) === Math.abs(pieceCol - targetCol);

    case pieceText.includes("rook"):
      // Rooks move horizontally or vertically
      return pieceRow === targetRow || pieceCol === targetCol;

    case pieceText.includes("queen"):
      // Queens move like both rooks and bishops
      return (
        pieceRow === targetRow ||
        pieceCol === targetCol ||
        Math.abs(pieceRow - targetRow) === Math.abs(pieceCol - targetCol)
      );

    case pieceText.includes("king"):
      // Kings move one square in any direction
      return (
        Math.abs(pieceRow - targetRow) <= 1 &&
        Math.abs(pieceCol - targetCol) <= 1
      );

    default:
      // In case of an unrecognized piece, log an error
      console.error("Unrecognized piece type");
      return false;
  }
}

// Example of integration after a move is made
function afterMove() {
  isKingInCheck(findKingPosition());
}

// Helper function to get element's position (row and column)
function getElementPosition(element) {
  const id = element.id;
  const row = parseInt(id.charAt(1), 10); // Assuming the ID format is 'b<row><col>'
  const col = parseInt(id.charAt(2), 10);
  return { row, col };
}

// Function to handle king moves
function handleKingMove(king, targetRow, targetCol) {
  if (canMoveKingSafely(king, targetRow, targetCol)) {
    // Allow the move
    movePiece(king, targetRow, targetCol);
    console.log("4.King moved safely");
    return true;
  } else {
    console.log("5.Move not allowed: King would be in check.");
    return false;
  }
}

// Function to simulate a move and check if it would place the king in check
function canMoveKingSafely(targetRow, targetCol) {
  // Simulate the move
  const newKingPosition = { row: targetRow, col: targetCol };

  // Check if the king would be in check at the new position
  const inCheck = isKingInCheck(newKingPosition);

  // Return false if the king would be in check; true otherwise
  return !inCheck;
}

// Function to get all valid moves for the king
function getAllPossibleKingMoves(kingPosition) {
  const moves = [];
  const directions = [
    { row: -1, col: 0 }, // up
    { row: 1, col: 0 }, // down
    { row: 0, col: -1 }, // left
    { row: 0, col: 1 }, // right
    { row: -1, col: -1 }, // up-left
    { row: -1, col: 1 }, // up-right
    { row: 1, col: -1 }, // down-left
    { row: 1, col: 1 }, // down-right
  ];

  directions.forEach((direction) => {
    const newRow = kingPosition.row + direction.row;
    const newCol = kingPosition.col + direction.col;

    if (isValidPosition(newRow, newCol) && canMoveKingSafely(newRow, newCol)) {
      moves.push({ row: newRow, col: newCol });
    }
  });

  return moves;
}

function isKingInCheck(kingPosition) {
  let kingColor = tog % 2 !== 0 ? "W" : "B";
  const opponentPieces = getOpponentPieces(kingColor);

  if (!opponentPieces || opponentPieces.length === 0) {
    console.log("No opponent pieces found");
    return false;
  }

  for (let piece of opponentPieces) {
    const moves = getValidMoves(piece);

    if (!moves || moves.length === 0) {
      continue;
    }

    for (let i = 0; i < moves.length; i++) {
      let move = moves[i];

      // Skip moves where a pawn would move into the same column as the king
      if (piece.type.toLowerCase().includes("pawn")) {
        if (move.row === kingPosition.row) {
          if (move.col === kingPosition.col) {
            moves.splice(i, 1);
            i--;
            continue;
          } else {
            if (kingColor == "W") {
              if (
                parseInt(move.col) + 1 === kingPosition.col ||
                parseInt(move.col) - 1 === kingPosition.col
              ) {
                return true;
              }
            } else {
              if (
                parseInt(move.col) + 1 === kingPosition.col ||
                parseInt(move.col) - 1 === kingPosition.col
              ) {
                return true;
              }
            }
          }
        }
      }

      if (move.row === kingPosition.row && move.col === kingPosition.col) {
        return true; // King is in check, stop further checks
      }
    }
  }

  return false;
}

function isValidPosition(row, col) {
  return row > 0 && row <= 8 && col > 0 && col <= 8;
}

// Function to get all opponent pieces on the board
function getOpponentPieces(color) {
  const allPieces = getAllPieces();
  return allPieces.filter(
    (piece) => piece.type.trim().charAt(0).toUpperCase() !== color
  );
}

// Function to get valid moves for a piece
// Function to get all pieces on the board from the HTML
function getAllPieces() {
  const pieces = [];
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    const id = box.id;
    const pieceType = box.textContent.trim();

    if (pieceType) {
      // Extract row and column from the ID
      const row = parseInt(id.charAt(1));
      const col = parseInt(id.charAt(3));
      pieces.push({
        type: pieceType.toLowerCase(), // Convert to lowercase for consistency
        row: row,
        col: col,
        color: pieceType.charAt(0).toLowerCase(), // Assuming 'b' for black, 'w' for white
      });
    }
  });
  return pieces;
}

// Function to get a piece at a specific row and column
function getPieceAt(row, col) {
  const allPieces = getAllPieces();
  return allPieces.find((piece) => piece.row === row && piece.col === col);
}

function getAllValidKingMoves(kingPosition) {
  const moves = [];
  const directions = [
    { row: -1, col: 0 }, // up
    { row: 1, col: 0 }, // down
    { row: 0, col: -1 }, // left
    { row: 0, col: 1 }, // right
    { row: -1, col: -1 }, // up-left
    { row: -1, col: 1 }, // up-right
    { row: 1, col: -1 }, // down-left
    { row: 1, col: 1 }, // down-right
  ];

  directions.forEach((direction) => {
    const newRow = kingPosition.row + direction.row;
    const newCol = kingPosition.col + direction.col;
    if (isValidPosition(newRow, newCol)) {
      // Check if the move is safe
      if (canMoveKingSafely(kingPosition, newRow, newCol)) {
        moves.push({ row: newRow, col: newCol });
      }
    }
  });

  return moves;
}

function highlightValidKingMoves(kingPosition) {
  let validMoves = []
  validMoves = getAllPossibleKingMoves(kingPosition);

  // Add castling moves if castling is allowed
  if (canCastle("kingSide")) {
    console.log("allowed to castle kingside")
    validMoves.push({ row: kingPosition.row, col: 7 }); // King-side castling
  }
  if (canCastle("queenSide")) {
    validMoves.push({ row: kingPosition.row, col: 3 }); // Queen-side castling
  }

  // Highlight valid king moves
  validMoves.forEach((move) => {
    const { row, col } = move;
    const boxId = `b${row}0${col}`;
    const box = document.getElementById(boxId);
    if (box) {
      box.style.backgroundColor = "greenyellow"; // Highlight valid move
    }
  });

  // Highlight the current king's square
  const kingBoxId = `b${kingPosition.row}0${kingPosition.col}`;
  const kingBox = document.getElementById(kingBoxId);
  if (kingBox) {
    kingBox.style.backgroundColor = "blue"; // Highlight king's current position
  }
}

// Function to get valid moves for a piece
function getValidMoves(piece) {
  const moves = [];
  const { type, row, col, color } = piece;

  if (type.includes("king")) {
    // King logic
    const directions = [
      { row: -1, col: 0 }, // up
      { row: 1, col: 0 }, // down
      { row: 0, col: -1 }, // left
      { row: 0, col: 1 }, // right
      { row: -1, col: -1 }, // up-left
      { row: -1, col: 1 }, // up-right
      { row: 1, col: -1 }, // down-left
      { row: 1, col: 1 }, // down-right
    ];

    directions.forEach((direction) => {
      const newRow = row + direction.row;
      const newCol = col + direction.col;
      if (isValidPosition(newRow, newCol)) {
        const targetPiece = getPieceAt(newRow, newCol);
        if (!targetPiece || targetPiece.color !== color) {
          moves.push({ row: newRow, col: newCol });
        }
      }
    });
  } else if (
    type.includes("queen") ||
    type.includes("rook") ||
    type.includes("bishop")
  ) {
    const directions = [];

    // Rook/Queen directions
    if (type.includes("queen") || type.includes("rook")) {
      directions.push(
        { row: -1, col: 0 }, // up
        { row: 1, col: 0 }, // down
        { row: 0, col: -1 }, // left
        { row: 0, col: 1 } // right
      );
    }
    // Bishop/Queen directions
    if (type.includes("queen") || type.includes("bishop")) {
      directions.push(
        { row: -1, col: -1 }, // up-left
        { row: -1, col: 1 }, // up-right
        { row: 1, col: -1 }, // down-left
        { row: 1, col: 1 } // down-right
      );
    }

    directions.forEach((direction) => {
      let newRow = row + direction.row;
      let newCol = col + direction.col;

      // Loop to handle multi-square movements
      while (isValidPosition(newRow, newCol)) {
        const targetPiece = getPieceAt(newRow, newCol);
        if (targetPiece) {
          if (targetPiece.color !== color) {
            moves.push({ row: newRow, col: newCol });
          }
          break; // Stop if blocked by a piece
        }
        moves.push({ row: newRow, col: newCol });
        newRow += direction.row;
        newCol += direction.col;
      }
    });
  } else if (type.includes("knight")) {
    // Knight logic
    const knightMoves = [
      { row: -2, col: -1 },
      { row: -2, col: 1 },
      { row: -1, col: -2 },
      { row: -1, col: 2 },
      { row: 1, col: -2 },
      { row: 1, col: 2 },
      { row: 2, col: -1 },
      { row: 2, col: 1 },
    ];

    knightMoves.forEach((move) => {
      const newRow = row + move.row;
      const newCol = col + move.col;
      if (isValidPosition(newRow, newCol)) {
        const targetPiece = getPieceAt(newRow, newCol);
        if (!targetPiece || targetPiece.color !== color) {
          moves.push({ row: newRow, col: newCol });
        }
      }
    });
  } else if (type.includes("pawn")) {
    // Pawn logic
    const direction = color === "w" ? 1 : -1;
    const startRow = color === "w" ? 2 : 7;
    const forwardRow = row + direction;

    // Move forward one square
    if (isValidPosition(forwardRow, col)) {
      moves.push({ row: forwardRow, col: col });
    }

    // Move forward two squares from starting position
    const doubleForwardRow = row + 2 * direction;
    if (
      row === startRow &&
      isValidPosition(doubleForwardRow, col) &&
      !getPieceAt(forwardRow, col) &&
      !getPieceAt(doubleForwardRow, col)
    ) {
      moves.push({ row: doubleForwardRow, col: col });
    }

    // Capture diagonally
    const captureCols = [col - 1, col + 1];
    captureCols.forEach((captureCol) => {
      if (isValidPosition(forwardRow, captureCol)) {
        const targetPiece = getPieceAt(forwardRow, captureCol);
        if (targetPiece && targetPiece.color !== color) {
          moves.push({ row: forwardRow, col: captureCol });
        }
      }
    });
  }

  return moves;
}

function canCastle(side) {
  const kingRow = tog % 2 !== 0 ? "1" : "8"; // Determine which player's turn it is
  const range = side === "kingSide" ? [6, 7] : [2, 3, 4]; // Columns to check for empty squares
  console.log(tog)
  console.log(kingMoved.W)
  console.log(rookMoved.W)
  if(tog % 2 !== 0){
    if(side="kingside"){
      if (kingMoved.W || rookMoved.W.kingSide) {
        console.log("not failing here")
        return false;
      }
    }
  }else{
    if(side="kingside"){
    if (kingMoved.B || rookMoved.B.kingSide) {
      console.log("piece moved");
      return false;}
  }}

  // Ensure the king is not in check and won't pass through or end up in check
  if (
    isKingInCheck(findKingPosition()) || // King is in check before castling
    !canMoveKingSafely(kingRow, 5) || // Check if king can safely pass through column 5 (for both king and queen side)
    !canMoveKingSafely(kingRow, range[range.length - 1]) // Check if king can safely land in final column (7 for king-side, 3 for queen-side)
  ) {
    console.log("failed");
    return false;
  }

  // Castling is allowed
  console.log("can castle in: ", side)
  return true;
}

function getRooks (){
  const allBoxes = document.querySelectorAll(".box");

    const rooks = []

    if (tog % 2 !== 0) {
      if (
        (!kingMoved.W && !rookMoved.W.kingSide) ||
        (!kingMoved.W && !rookMoved.W.queenSide)
      ) {
        console.log("getting white rooks")
        allBoxes.forEach((box) => {
          if (box.innerText.trim().toLowerCase().includes("wrook")) {
            rooks.push(box.id)
          }
        });
      }
    } else {
      if (
        (!kingMoved.B && !rookMoved.B.kingSide) ||
        (!kingMoved.B && !rookMoved.B.queenSide)
      ) {
        console.log("getting black rooks")
          allBoxes.forEach((box) => {
            if (box.innerText.trim().toLowerCase().includes("brook")) {
              rooks.push(box.id)
            }
          });
      }
    }
    return rooks
}

function findKingPosition() {
  let kingText = tog % 2 !== 0 ? "wking" : "bking";
  const allBoxes = document.querySelectorAll(".box");

  let king = null;

  allBoxes.forEach((box) => {
      if (kingText.toLowerCase() === box.innerText.trim().toLowerCase()) {
          king = box;
      }
  });

  if (!king) {
      console.error(`No king found for color ${color}`);
      return null;
  }

  const kingId = king.id;

  if (!kingId || kingId.length < 3) {
      console.error(`Invalid king ID: ${kingId}`);
      return null;
  }

  const row = parseInt(kingId[1]);
  const col = parseInt(kingId.slice(2));

  if (isNaN(row) || isNaN(col)) {
      console.error(`Invalid row or column for king with ID: ${kingId}`);
      return null;
  }
  return { row, col };
}


function handleCastle() {}
