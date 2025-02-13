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
            correctAnswer: "alyssa",  // Convert to lowercase
            hint: "Think harder baby" 
        },
        q2: {
            correctAnswer: "chicken",  
            hint: "It's protein-based" 
        },
        q3: {
            correctAnswer: "sapphira",  
            hint: "It's my fav color too!" 
        }
    };

    // Handle form submission
    const form = document.getElementById('quiz-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const answers = {
            q1: document.getElementById('question1').value.trim().toLowerCase(),
            q2: document.getElementById('question2').value.trim().toLowerCase(),
            q3: document.getElementById('question3').value.trim().toLowerCase(),
        };

        let resultMessage = `<h2>Results:</h2><ul>`;
        let allCorrect = true;

        // Check if answers are correct and show feedback with hints for wrong answers
        if (answers.q1 === quizData.q1.correctAnswer) {
            resultMessage += `<li>Question 1: Correct!</li>`;
        } else {
            resultMessage += `<li>Question 1: Incorrect. Hint: ${quizData.q1.hint}</li>`;
            allCorrect = false;
        }

        if (answers.q2 === quizData.q2.correctAnswer) {
            resultMessage += `<li>Question 2: Correct!</li>`;
        } else {
            resultMessage += `<li>Question 2: Incorrect. Hint: ${quizData.q2.hint}</li>`;
            allCorrect = false;
        }

        if (answers.q3 === quizData.q3.correctAnswer) {
            resultMessage += `<li>Question 3: Correct!</li>`;
        } else {
            resultMessage += `<li>Question 3: Incorrect. Hint: ${quizData.q3.hint}</li>`;
            allCorrect = false;
        }

        resultMessage += `</ul>`;
        document.getElementById('result').innerHTML = resultMessage;
        document.getElementById('result').classList.add('fade-in');

        // Redirect if all answers are correct
        if (allCorrect) {
            setTimeout(() => {
                window.location.href = "congratulations.html";  
            }, 2000);
        }
    });
};

