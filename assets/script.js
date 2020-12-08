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
            title: "Which is not a string method?",
            choices: [".slice", ".append", ".replace", ".indexOf"],
            answer: ".replace",
        },
        {
            title: "Which is not a JavaScript Data type?",
            choices: ["String", "Number", "Program", "Boolean"],
            answer: "Program",
        },
        {
            title: "What is not a type of Pop-up box available in JavaScript?",
            choices: ["Alert", "Confirm", "Notify", "Prompt"],
            answer: "Notify",
        },
        {
            title: "Inside which HTML element do we put the JavaScript?",
            choices: ["<javascript>", "<js>", "<script>", "<scripting>"],
            answer: "<script>",
        },
        {
            title: "How to write an IF statement in JavaScript?",
            choices: ["if (i==5)", "if i==5 then", "if i=5", "if i=5 then"],
            answer: "if (i==5)",
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
            timeRemaining + 0
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