

document.addEventListener("DOMContentLoaded", function() {
    // Get the submit button and add the event listener
    document.getElementById("submit-answer").addEventListener("click", checkAnswer);
});

function checkAnswer() {
    let correctAnswer="4";
    let userAnswer = document.querySelector('input[name="quiz"]:checked').value;

   
        if (userAnswer === correctAnswer){
            document.getElementById("feedback").textContent = "Correct! Well done.";
        }
         else {
            document.getElementById("feedback").textContent = "That's incorrect. Try again!";
        }
   
    // Function body
}