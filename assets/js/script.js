// wait for the DOM to load before running the game.
//get the button element and add eventlisteners
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons){
        button.addEventListener('click', function() {
            if (this.getAttribute("data-type") === "submit"){
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        })
    }
})
/** the main Game "loop" called when script is loaded
 * after the user answer the processed.
 */

function runGame(){
    //Created 2 random numbers between 1-25.
    let num1 = Math.floor(Math.random() * 25) +1 ;
    let num2 = Math.floor(Math.random() * 25) +1 ;
}

function checkAnswer() {

}
function calculateCorrectAnswer() {

}
function incrementScore() {

}
function incrementWrongAnswer() {

}
function displayAdditionQuestion() {

}
function displaySubtrackQuestion() {

}
function displayMultiplyQuestion() {

}

