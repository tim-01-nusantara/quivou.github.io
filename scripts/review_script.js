const urlParams = new URLSearchParams(window.location.search);
const answerSelected = urlParams.get('listAnswer').split(',');
const score = parseInt(urlParams.get('score'));

const questions = [
        {
                question: "Which CSS property is used for setting the text color?",
                answers: [
                        { text: "Color", correct: true },
                        { text: "Font-Color", correct: false },
                ]
        },
        {
                question: "Which of the following is NOT a frontend framework?",
                answers: [
                        { text: "Angular", correct: false },
                        { text: "Django", correct: true },
                        { text: "React", correct: false },
                ]
        }
];

const questionsContainer = document.getElementById('questionsContainer');
const scoreElement = document.getElementById('score');
const correctAnswerElement = document.getElementById('correct-answer');
const wrongAnswerElement = document.getElementById('wrong-answer');

scoreElement.innerText = "Your Score: " + score;

questions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('card', 'border-dark', 'mb-3');
        
        const questionHeader = document.createElement('h5');
        questionHeader.classList.add('card-header');
        questionHeader.textContent = question.question;
    
        const answersContainer = document.createElement('div');
        answersContainer.classList.add('card-body');
    
        question.answers.forEach((answer, answerIndex) => {
            const answerDiv = document.createElement('div');
            answerDiv.classList.add('form-check');
    
            const answerInput = document.createElement('input');
            answerInput.classList.add('form-check-input');
            answerInput.type = 'radio';
            answerInput.name = `answer-${index + 1}`;
            answerInput.id = `jawaban${index + 1}-${answerIndex + 1}`;
            answerInput.disabled = true;
    
            if (answerSelected.includes(answer.text)) {
                answerInput.checked = true;
            }
    
            const answerLabel = document.createElement('label');
            answerLabel.classList.add('form-check-label');
            answerLabel.htmlFor = `jawaban${index + 1}-${answerIndex + 1}`;
    
            const answerText = document.createElement('p');
            answerText.classList.add('card-text');
            answerText.textContent = answer.text;
    
            if ((answerSelected[index] === answer.text && answer.correct === true) || answer.correct === true) {
                const checkIcon = document.createElement('i');
                checkIcon.classList.add('fa', 'fa-check-circle');
                checkIcon.style.fontSize = '15px';
                checkIcon.style.marginLeft = '5px';
                checkIcon.style.color = 'green';
                
                answerLabel.appendChild(answerText);
                answerLabel.appendChild(checkIcon);
            } else if (answerSelected[index] === answer.text && answer.correct === false) {
                const crossIcon = document.createElement('i');
                crossIcon.classList.add('fa', 'fa-times');
                crossIcon.style.fontSize = '15px';
                crossIcon.style.marginLeft = '5px';
                crossIcon.style.color = 'red';
                
                answerLabel.appendChild(answerText);
                answerLabel.appendChild(crossIcon);
            } else {
                answerLabel.appendChild(answerText);
            }
    
            answerDiv.appendChild(answerInput);
            answerDiv.appendChild(answerLabel);
            answersContainer.appendChild(answerDiv);
        });
    
        questionDiv.appendChild(questionHeader);
        questionDiv.appendChild(answersContainer);
        questionsContainer.appendChild(questionDiv);
    });



