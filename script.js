// ----------------- HOTLINE WIDGET -----------------
const hotline = document.getElementById("hotline");

// "API" is detecting state by browser locale.
function getHotline() {
    const userLocale = Intl.DateTimeFormat().resolvedOptions().timeZone;

    // Default hotline: national Election Protection hotline
    let number = "866-OUR-VOTE (866-687-8683)";

    // If user is in New York, customize it (just for demonstration)
    if (userLocale.includes("New_York")) {
        number = "866-VOTE-NYC (866-868-3692)";
    }

    hotline.textContent = "Your hotline: " + number;
}

getHotline();


// ----------------- QUIZ -----------------
const quizQuestions = [
    {
        q: "If your name is missing from the voter list, what should you do?",
        answers: ["Give up on voting this time", "Demand a normal ballot", "Request an affidavit (provisional) ballot"],
        correct: 2
    },
    {
        q: "You may bring someone to help you vote if you:",
        answers: ["Need language assistance", "Have a disability", "Either of the above"],
        correct: 2
    },
      {
        q: "Who is NOT allowed to assist you while voting?",
        answers: ["A friend", "A family member", "Your employer or union representative"],
        correct: 2
    },
    {
        q: "Voter intimidation is:",
        answers: ["Illegal", "To be expected", "Only illegal during federal elections"],
        correct: 0
    }
];

const quizContainer = document.getElementById("quiz");

quizQuestions.forEach((item, index) => {
    const block = document.createElement("div");
    block.innerHTML = `
        <p><strong>${item.q}</strong></p>
        ${item.answers.map((ans, i) =>
            `<label><input type="radio" name="q${index}" value="${i}" /> ${ans}</label><br>`
        ).join("")}
    `;
    quizContainer.appendChild(block);
});

document.getElementById("submitQuiz").addEventListener("click", () => {
    let score = 0;

    quizQuestions.forEach((item, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);
        if (selected && parseInt(selected.value) === item.correct) {
            score++;
        }
    });

    document.getElementById("quizResult").textContent =
        `You scored ${score} out of ${quizQuestions.length}.`;
});
