// wait for the DOM to load before running the game.
//get the button element and add eventlisteners
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });
    }

    runGame("addition");

});
/** the main Game "loop" called when script is loaded
 * after the user answer the processed.
 */

function runGame(gameType) {

    // Create two random numbers 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else if (gameType === "multiply"){
        displayMultiplyQuestion(num1, num2)
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }

}
/** checks the answer agains the  first element  in the returned calculateCorrectAnswer*/
function checkAnswer() {
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        alert('Hey! you got it right! :D');
        incrementScore();
    } else {
        alert(`awww... you answer ${userAnswer}.the correct answer was ${calculatedAnswer[0]}!`)
        incrementWrongAnswer();
    }

    runGame(calculatedAnswer[1]);
}

/** get the Dom operands from numbers and the calculation sign and return the corrected answer. */
function calculateCorrectAnswer() {
    let operand1 = parseInt(document.getElementById("operand1").innerText);
    let operand2 = parseInt(document.getElementById("operand2").innerText);
    let operator = document.getElementById('operator').innerText;

    if (operator === "+") {
        return [operand1 + operand2, "addition"];
    } else if (operator === "x"){
        return [operand1 * operand2, "multiply"];
    }
    else {
        alert(`Unimplemented operator ${operator}`)
        throw `Unimplemented operator ${operator}. Aborting!`;
    }

}
/** get current score from the DOM and increase it by 1 */
function incrementScore() {
    let oldScore = parseInt(document.getElementById("score").innerText);

    document.getElementById("score").innerText = ++oldScore;
}
/**Get the current tally of the increment answer from the dom and increase it by 1 */
function incrementWrongAnswer() {
    let oldScore = parseInt(document.getElementById("incorrect").innerText);

    document.getElementById("incorrect").innerText = ++oldScore;
}
function displayAdditionQuestion(operand1, operand2) {

    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";
}
function displaySubtrackQuestion() {

}
function displayMultiplyQuestion(operand1, operand2 ) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "x";
}