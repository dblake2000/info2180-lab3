/* lab 3 - tic tac toe */

/* wait for the page to load - script is in the head so the board doesn't exist yet */
window.addEventListener("DOMContentLoaded", function () {

    /* all 9 divs inside the board */
    const squares = document.querySelectorAll("#board div");

    /* x goes first */
    let currentPlayer = "X";

    /* keeps track of the board - used later to check for a winner */
    let gameState = ["", "", "", "", "", "", "", "", ""];

    squares.forEach(function (square, index) {

        /* layout the board */
        square.classList.add("square");

        /* click - put x or o in the square */
        square.addEventListener("click", function () {
            square.textContent = currentPlayer;
            square.classList.add(currentPlayer);   /* X or O class for the colour */
            gameState[index] = currentPlayer;

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