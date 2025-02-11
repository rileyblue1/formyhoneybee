window.onload = () => {
    // Apply fade-in to each question with a delay
    const questions = document.querySelectorAll('.question');
    questions.forEach((question, index) => {
        setTimeout(() => {
            question.classList.add('fade-in');
        }, index * 500);
    });

    // Define the correct answers and hints
    const quizData = {
        q1: {
            correctAnswer: "alyssa",  // Correct answer for the first question
            hint: "Think harder baby (also make sure its all lowercase)" // Hint for the first question
        },
        q2: {
            correctAnswer: "chikin","chickin"  // Correct answer for the second question
            hint: "its protien based" // Hint for the second question
        },
        q3: {
            correctAnswer: "sapphira",  // Correct answer for the third question
            hint: "It's my fav color too!" // Hint for the third question
        }
    };

    // Handle form submission
    const form = document.getElementById('quiz-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const answers = {
            q1: document.getElementById('question1').value.toLowerCase(),
            q2: document.getElementById('question2').value.toLowerCase(),
            q3: document.getElementById('question3').value.toLowerCase(),
        };

        let resultMessage = `<h2>Results:</h2><ul>`;
        let allCorrect = true;  // Flag to track if all answers are correct
        
        // Check if answers are correct and show feedback with hints for wrong answers
        if (answers.q1 === quizData.q1.correctAnswer) {
            resultMessage += `<li>Question 1: Correct!</li>`;
        } else {
            resultMessage += `<li>Question 1: Incorrect. Hint: ${quizData.q1.hint}</li>`;
            allCorrect = false;  // Mark as incorrect if any answer is wrong
        }

        if (answers.q2 === quizData.q2.correctAnswer) {
            resultMessage += `<li>Question 2: Correct!</li>`;
        } else {
            resultMessage += `<li>Question 2: Incorrect. Hint: ${quizData.q2.hint}</li>`;
            allCorrect = false;  // Mark as incorrect if any answer is wrong
        }

        if (answers.q3 === quizData.q3.correctAnswer) {
            resultMessage += `<li>Question 3: Correct!</li>`;
        } else {
            resultMessage += `<li>Question 3: Incorrect. Hint: ${quizData.q3.hint}</li>`;
            allCorrect = false;  // Mark as incorrect if any answer is wrong
        }

        resultMessage += `</ul>`;
        document.getElementById('result').innerHTML = resultMessage;
        document.getElementById('result').classList.add('fade-in');

        // Redirect to another page if all answers are correct
        if (allCorrect) {
            setTimeout(() => {
                window.location.href = "congratulations.html";  // Change this to your desired URL
            }, 2000);  // Redirect after 2 seconds
        }
    });
};
