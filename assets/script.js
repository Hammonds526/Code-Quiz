$(document).ready(function () {

    // Importing Variables from DOM
    let startQuizEl = $('#start-quiz')
    let questionZoneEL = $('#question-zone')
    let endScreenEL = $('#end-screen')
    let timerEl = document.querySelector('.current-time')
    
    // Declaring variables
    let timerId;
    let questionIndex = 0;
    let timeRemaining = 60;
    let answersCorrect = 0

    // Questions and answers
    let questions = [
        {
            title: "what is 1 + 1",
            choices: [1, 2, 3, 4],
            answer: 2,
        },
        {
            title: "what is 2 + 2",
            choices: [4, 5, 6, 7],
            answer: 4,
        },
        {
            title: "what is 1 + 1",
            choices: [1, 2, 3, 4],
            answer: 2,
        },
        {
            title: "what is 1 + 1",
            choices: [1, 2, 3, 4],
            answer: 2,
        },
        {
            title: "what is 1 + 1",
            choices: [1, 2, 3, 4],
            answer: 2,
        }
    ];

    // Hiding questions and end-screen
    questionZoneEL.hide()
    endScreenEL.hide()

    // When start button is pressed, hides first screen and shows 
    function startQuiz() {
        startQuizEl.hide();
        questionZoneEL.show();

        timerId = setInterval(clockTick, 1000);

        generateQuestion();
    }

    function clockTick() {

        // Perfrom action every second
        // Decrement time
        timeRemaining--;
        // Update DOM
        timerEl.textContent = `Time: ${timeRemaining}`

        if (timeRemaining <= 0) {
            endQuiz();
        }
    }

    function generateQuestion() {

        if (questionIndex === questions.length) {
            endQuiz();
        }

        let choicesEl = document.querySelector('#question-choices');
        choicesEl.innerHTML = '';
        // current question
        let currentQuestion = questions[questionIndex];
        $("#question-title").text(currentQuestion.title);
        // 
        currentQuestion.choices.forEach(function (option) {

            let answerBtn = document.createElement('button');
            answerBtn.setAttribute('class', 'choices');
            answerBtn.setAttribute('value', option);
            answerBtn.textContent = option;
            answerBtn.onclick = validateAnswers;


            choicesEl.append(answerBtn)
        });
    };


    function validateAnswers() {

        // Validate if answer is correct
        // This.value = value
        const userChoice = this.value;
        const correctAnswer = questions[questionIndex].answer;

        if (userChoice === correctAnswer) {
            answersCorrect++
        }
        else {
            timeRemaining -= 10
        }


        questionIndex++
        generateQuestion()


        // Grab user choice
        // this.value

        // Grab correct answer

        // Compare and perform actions

        // increment questionsIndex
        // generateQuestion();

    }

    function endQuiz() {
        
        questionZoneEL.hide();
        endScreenEL.show();

    }

    function endQuiz() {

        // Game over

        clearInterval(timerId)

    }





    $("#start-btn").on('click', function () {
        startQuiz();
    })


});