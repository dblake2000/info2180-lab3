/* lab 3 - tic tac toe */

/* wait for the page to load - script is in the head so the board doesn't exist yet */
window.addEventListener("DOMContentLoaded", function () {

    /* all 9 divs inside the board */
    const squares = document.querySelectorAll("#board div");

    /* give each div the square class */
    squares.forEach(function (square) {
        square.classList.add("square");
    });

});