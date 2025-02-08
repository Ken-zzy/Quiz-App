# Quiz App

This is a simple Quiz App built using HTML, CSS, and JavaScript. The app allows users to answer multiple-choice questions, track their progress, and restart the quiz after completion.

## Features
- Displays a series of multiple-choice questions.
- Highlights the selected answer.
- Tracks progress and displays the current question number.
- Calculates and displays the final score at the end of the quiz.
- Provides a "Restart Quiz" button to allow users to retake the quiz.

## Functions Explanation

### 1. `loadQuiz()`
- Loads the current question and its options.
- Updates the progress indicator.
- Clears previously selected answers.
- Hides the "Next" button initially.

### 2. `selectAnswer(answer)`
- Highlights the selected answer.
- Enables the "Next" button.

### 3. `checkAnswer()`
- Compares the selected answer with the correct answer.
- Updates the score if the answer is correct.

### 4. `nextQuestion()`
- Checks the answer of the current question.
- Moves to the next question if available.
- If no more questions remain, displays the final results.

### 5. `showResults()`
- Displays the user's score.
- Hides the question and options.
- Shows the "Restart Quiz" button.

### 6. `restartQuiz()`
- Resets the question index and score.
- Hides the results section.
- Restores the quiz to its initial state.
