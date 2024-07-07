const quizData = [
    {
        question: "How many points are needed to win a game of badminton?",
        a: "11",
        b: "15",
        c: "21",
        d: "25",
        correct: "c",
    },
    {
        question: "Which of these is a famous badminton player?",
        a: "Roger Federer",
        b: "Rafael Nadal",
        c: "Lin Dan",
        d: "Serena Williams",
        correct: "c",
    },
    {
        question: "What is the name of the object hit back and forth in badminton?",
        a: "Birdie",
        b: "Ball",
        c: "Puck",
        d: "Shuttlecock",
        correct: "d",
    },
    {
        question: "What is the maximum height for a badminton net?",
        a: "5 feet",
        b: "6 feet",
        c: "7 feet",
        d: "8 feet",
        correct: "a",
    },
    {
        question: "How many players are on the court during a doubles match?",
        a: "2",
        b: "4",
        c: "6",
        d: "8",
        correct: "b",
    }
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});
