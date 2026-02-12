// Animasi Eksperimen
document.getElementById('startAnim').addEventListener('click', function() {
    const acid = document.getElementById('acid');
    const base = document.getElementById('base');
    const result = document.getElementById('result');
    
    acid.style.opacity = '1';
    setTimeout(() => {
        base.style.opacity = '1';
    }, 1000);
    setTimeout(() => {
        result.style.opacity = '1';
    }, 2000);
});

// Quiz
const questions = [
    {
        question: "Apa yang dimaksud dengan atom?",
        options: ["Partikel terkecil unsur", "Campuran dua unsur", "Reaksi kimia", "Energi panas"],
        answer: 0
    },
    {
        question: "Reaksi asam-basa menghasilkan?",
        options: ["Garam dan air", "Gas hidrogen", "Energi listrik", "Unsur logam"],
        answer: 0
    },
    {
        question: "pH netral adalah?",
        options: ["0", "7", "14", "100"],
        answer: 1
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const q = questions[currentQuestion];
    document.getElementById('question').textContent = q.question;
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';
    q.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.textContent = option;
        btn.onclick = () => checkAnswer(index);
        optionsDiv.appendChild(btn);
    });
}

function checkAnswer(selected) {
    if (selected === questions[currentQuestion].answer) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        document.getElementById('quizContainer').innerHTML = '<p>Quiz selesai!</p>';
        document.getElementById('score').textContent = `Skor: ${score}/${questions.length}`;
    }
}

loadQuestion();