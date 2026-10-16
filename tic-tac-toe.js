/* lab 3 - tic tac toe */

/* wait for the page to load - script is in the head so the board doesn't exist yet */
window.addEventListener("DOMContentLoaded", function () {

    /* all 9 divs inside the board */
    const squares = document.querySelectorAll("#board div");

    /* the message box above the board */
    const statusDiv = document.getElementById("status");

    /* x goes first */
    let currentPlayer = "X";

    /* keeps track of the board - used to check for a winner */
    let gameState = ["", "", "", "", "", "", "", "", ""];

    /* every way to win - numbers are the square positions 0 to 8 */
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],   /* rows */
        [0, 3, 6], [1, 4, 7], [2, 5, 8],   /* columns */
        [0, 4, 8], [2, 4, 6]               /* diagonals */
    ];

    /* check if the player has 3 in a row - true if they won */
    function checkWinner(player) {
        for (let i = 0; i < winningCombos.length; i++) {
            const combo = winningCombos[i];
            if (gameState[combo[0]] === player &&
                gameState[combo[1]] === player &&
                gameState[combo[2]] === player) {
                return true;
            }
        }
        return false;
    }

    squares.forEach(function (square, index) {

        /* layout the board */
        square.classList.add("square");

        /* click - put x or o in the square */
        square.addEventListener("click", function () {
            square.textContent = currentPlayer;
            square.classList.add(currentPlayer);   /* X or O class for the colour */
            gameState[index] = currentPlayer;

            /* winner check - has to happen before switching turns */
            if (checkWinner(currentPlayer)) {
                statusDiv.textContent = "Congratulations! " + currentPlayer + " is the Winner!";
                statusDiv.classList.add("you-won");
            }

            /* switch turns */
            if (currentPlayer === "X") {
                currentPlayer = "O";
            } else {
                currentPlayer = "X";
            }
        });

        /* hover on */
        square.addEventListener("mouseover", function () {
            square.classList.add("hover");
        });

        /* hover off - back to normal */
        square.addEventListener("mouseout", function () {
            square.classList.remove("hover");
        });

    });

});