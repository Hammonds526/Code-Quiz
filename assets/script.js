$(document).ready(function() {

// Importing Variables from DOM
let startQuizEl = $('#start-quiz')
let questionZoneEL = $('#question-zone')
let endScreenEL = $('#end-screen')
let timerEl = $('current-time')
let startButtonEl = $('start-btn')
let answersCorrect = 0

// Declaring variables
let questionIndex = 0;
let timeRemaining = 60;
let timerId;


let questions = [
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

questionZoneEL.hide()
endScreenEL.hide()

function startQuiz() {
    startQuizEl.hide();
    questionZoneEL.show();
    console.log("clicked");

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

    // If we run out of questions, end the game
    if (questionIndex === questions.length) {
        endQuiz();
    }

    let currentQuestion = questions[questionIndex];

    // With current question, text to title
  
    currentQuestion.choices.forEach(function (value) {
        console.log(`This is value: ${value}`);
        const answerBtn = $("<button>").text(value);
        answerBtn.click(function() {
        console.log($(this).text())
        });
        questionZoneEL.append(answerBtn);
        


    })

    // for (let i = 0; i < 4; ++i) {
    //     let value = currentQuestion.choices[i];
    //     console.log(`This is value: ${value}`);
    //     $("<button>").text(value)
    // }
    /* Create a loop to make 4 buttons from choices array
        Hint (forEach loop)

            --Create element button
            add attribute class
            -add attribute value 
            tempBtn.setAttriute('value', value)
            --Add some text content
            -Add onclick function to buttons
                The function is going to validate answer
            --Append to question zone
        
    */
}

function validateAnswers() {
    // Validate if answer is correct
        // This.value = value

    // Grab user choice
        // this.value

    // Grab correct answer

    // Compare and perform actions

    // increment questionsIndex
    // generateQuestion();

}



function endQuiz() {

// Game over

clearInterval(timerId)

}





$("#start-btn").on('click', function () {
    startQuiz();
})


});