document.getElementById("quiz-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevents the form from submitting normally
    
    // Get the input value from the user
    const answer = document.getElementById("question1").value.trim().toLowerCase();
    
    // Correct answer (you can change this as needed)
    const correctAnswer = "Sapphia";  // Replace with the actual answer
    
    const result = document.getElementById("result");
    
    // Check if the answer is correct
    if (answer === correctAnswer.toLowerCase()) {
        result.textContent = "Nailed it";
        
        // Redirect to another page after a short delay (3 seconds)
        setTimeout(function() {
            window.location.href = "congratulations.html";  // The page you want to redirect to
        }, 3000);  // Delay of 3 seconds before redirection
    } else {
        result.textContent = "Nuh uh";
    }
});

