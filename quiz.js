function checkAnswer() {
    let correctAnswer=4;
    let userAnswer = document.querySelector('input[name="quiz"]:checked');

    if (userAnswer) {
        // Convert userAnswer's value to a number for comparison
        if (correctAnswer === Number(userAnswer.value)) {
            document.getElementById("feedback").textContent = "Correct! Well done.";
        } else {
            document.getElementById("feedback").textContent = "That's incorrect. Try again!";
        }
    } else {
        // No option selected
        document.getElementById("feedback").textContent = "Please select an answer!";
    }
    // Function body
}