const quizContainer = document.querySelector(".quiz-container");
const question = document.querySelector(".quiz-container .question");
const options = document.querySelector(".quiz-container .options");
const nextBtn = document.querySelector(".quiz-container .next-btn");
const prevBtn = document.querySelector(".quiz-container .prev-btn");
const homeButtons = document.querySelectorAll(".home-btn");
const correctCounter = document.querySelector(".correct-counter");
const incorrectCounter = document.querySelector(".incorrect-counter");
const quizResult = document.querySelector(".quiz-result");
const startBtnContainer = document.querySelector(".start-btn-container");
const startBtn = document.querySelector(".start-btn-container .start-btn");
const openQuestionsBtn = document.querySelector(".open-questions-btn");
const openQuestionsContainer = document.querySelector(".open-questions-container");
const openQuestionElement = document.querySelector(".open-question"); // Corretto: usa "Element"
const answerInput = document.querySelector(".answer-input");
const submitAnswerBtn = document.querySelector(".submit-answer");
const feedbackElement = document.querySelector(".feedback"); // Corretto: usa "Element"
const prevOpenBtn = document.querySelector(".prev-open-btn");
const nextOpenBtn = document.querySelector(".next-open-btn");

let questionNumber = 0; // Per quiz a scelta multipla
const MAX_QUESTIONS = quizData.length;
let score = 0;

let currentOpenQuestionIndex = 0; // Per domande aperte
const MAX_OPEN_QUESTIONS = openQuestionsData.length;

const shuffleArray = (array) => {
  return array.slice().sort(() => Math.random() - 0.5);
};

// Inizialmente mescola solo i dati del quiz a scelta multipla
quizData = shuffleArray(quizData);

const resetLocalStorage = () => {
  for (let i = 0; i < MAX_QUESTIONS; i++) {
    localStorage.removeItem(`userAnswer_${i}`);
  }
  // Reset anche per le domande aperte
  for (let i = 0; i < MAX_OPEN_QUESTIONS; i++) {
    localStorage.removeItem(`openAnswer_${i}`);
  }
};

const triggerFlash = (element, className) => {
  element.classList.remove(className);
  void element.offsetWidth; // forza reflow
  element.classList.add(className);
};

const updateScoreCounters = () => {
  let correct = 0;
  let incorrect = 0;
  for (let i = 0; i < MAX_QUESTIONS; i++) {
    const answer = localStorage.getItem(`userAnswer_${i}`);
    if (!answer) continue;
    if (answer === quizData[i].correct) correct++;
    else incorrect++;
  }

  correctCounter.textContent = `✔ ${correct}`;
  incorrectCounter.textContent = `✘ ${incorrect}`;
};

const checkAnswer = (e) => {
  const userAnswer = e.target.textContent;
  localStorage.setItem(`userAnswer_${questionNumber}`, userAnswer);

  const allOptions = document.querySelectorAll(".quiz-container .option");
  allOptions.forEach((o) => o.classList.add("disabled"));

  const isCorrect = userAnswer === quizData[questionNumber].correct;

  // Mostra sempre la risposta corretta
  allOptions.forEach(option => {
    if (option.textContent === quizData[questionNumber].correct) {
      option.classList.add("correct");
    }
  });

  if (!isCorrect) {
    e.target.classList.add("incorrect");
    triggerFlash(incorrectCounter, "flash-red");
  } else {
    triggerFlash(correctCounter, "flash-green");
  }

  updateScoreCounters();
  generateQuestionNav(); // Aggiorna la navigazione dopo aver risposto
};

const createQuestion = () => {
  options.innerHTML = "";
  question.innerHTML = `<span class='question-number'>${questionNumber + 1}/${MAX_QUESTIONS}</span> ${quizData[questionNumber].question}`;

  const shuffledOptions = shuffleArray(quizData[questionNumber].options);
  const savedAnswer = localStorage.getItem(`userAnswer_${questionNumber}`);

  shuffledOptions.forEach((o) => {
    const option = document.createElement("button");
    option.classList.add("option");
    option.textContent = o;

    if (savedAnswer) {
      option.classList.add("disabled");

      if (o === quizData[questionNumber].correct) {
        option.classList.add("correct");
      } else if (o === savedAnswer) {
        option.classList.add("incorrect");
      }
    } else {
      option.addEventListener("click", checkAnswer);
    }

    options.appendChild(option);
  });

  prevBtn.disabled = questionNumber === 0;
  nextBtn.disabled = questionNumber === MAX_QUESTIONS - 1;

  updateScoreCounters();
  generateQuestionNav();
  populateQuestionSelect()
};

const retakeQuiz = () => {
  questionNumber = 0;
  score = 0;
  quizData = shuffleArray(quizData); // Rimescola le domande al retake
  resetLocalStorage();
  quizResult.style.display = "none";
  quizContainer.style.display = "block";
  document.querySelector(".score-counter").style.display = "block"; // Assicurati che il contatore sia visibile
  createQuestion();
};

const displayQuizResult = () => {
  quizResult.style.display = "flex";
  quizContainer.style.display = "none";
  document.querySelector(".score-counter").style.display = "none"; // Nascondi il contatore
  quizResult.innerHTML = "";

  const resultHeading = document.createElement("h2");
  resultHeading.textContent = `Hai completato il quiz.`;
  quizResult.appendChild(resultHeading);

  let correctCount = 0;
  let incorrectCount = 0;

  for (let i = 0; i < MAX_QUESTIONS; i++) {
    const resultItem = document.createElement("div");
    resultItem.classList.add("question-container");

    const userAnswer = localStorage.getItem(`userAnswer_${i}`);
    const correctAnswer = quizData[i].correct;
    const isCorrect = userAnswer === correctAnswer;

    if (!isCorrect) {
      resultItem.classList.add("incorrect");
      incorrectCount++;
    } else {
      correctCount++;
    }

    resultItem.innerHTML = `
      <div class="question">Domanda ${i + 1}: ${quizData[i].question}</div>
      <div class="user-answer">La tua risposta: ${userAnswer || "Non risposto"}</div>
      <div class="correct-answer">Risposta corretta: ${correctAnswer}</div>
    `;

    quizResult.appendChild(resultItem);
  }

  const finalScore = document.createElement("p");
  finalScore.textContent = `Risposte corrette: ${correctCount}, Risposte sbagliate: ${incorrectCount}`;
  quizResult.insertBefore(finalScore, quizResult.firstChild.nextSibling); // Inserisci dopo il titolo

  const retakeBtn = document.createElement("button");
  retakeBtn.classList.add("retake-btn");
  retakeBtn.textContent = "Riprova Quiz";
  retakeBtn.addEventListener("click", retakeQuiz);
  quizResult.appendChild(retakeBtn);
};

const displayNextQuestion = () => {
  if (questionNumber < MAX_QUESTIONS - 1) {
    questionNumber++;
    createQuestion();
  } else {
    displayQuizResult();
  }
};

const displayPrevQuestion = () => {
  if (questionNumber > 0) {
    questionNumber--;
    createQuestion();
  }
};

const generateQuestionNav = () => {
  const navContainer = document.querySelector(".question-nav");
  navContainer.innerHTML = "";

  for (let i = 0; i < MAX_QUESTIONS; i++) {
    const btn = document.createElement("div");
    btn.textContent = i + 1;
    btn.classList.add("nav-dot");

    const answer = localStorage.getItem(`userAnswer_${i}`);
    if (answer) {
      if (answer === quizData[i].correct) {
        btn.classList.add("correct");
      } else {
        btn.classList.add("incorrect");
      }
    }

    btn.addEventListener("click", () => {
      questionNumber = i;
      createQuestion();
    });

    navContainer.appendChild(btn);
  }
};

const populateQuestionSelect = () => {
  const sel = document.getElementById("questionSelect");
  if (!sel) return;
  sel.innerHTML = "";
  for (let i = 0; i < MAX_QUESTIONS; i++) {
    const opt = document.createElement("option");
    const stored = localStorage.getItem(`userAnswer_${i}`);
    const prefix = stored ? (stored === quizData[i].correct ? "✔ " : "✘ ") : "";
    opt.value = i;
    opt.textContent = `${prefix}Domanda ${i + 1}`;
    if (i === questionNumber) opt.selected = true;
    sel.appendChild(opt);
  }
};

const populateOpenQuestionSelect = () => {
  const sel = document.getElementById("openQuestionSelect");
  if (!sel) return;
  sel.innerHTML = "";
  for (let i = 0; i < MAX_OPEN_QUESTIONS; i++) {
    const answered = localStorage.getItem(`openAnswer_${i}`) ? "• " : "";
    const opt = document.createElement("option");
    opt.value = i;
    opt.textContent = `${answered}Domanda ${i + 1}`;
    if (i === currentOpenQuestionIndex) opt.selected = true;
    sel.appendChild(opt);
  }
};


// --- Funzioni per le Domande Aperte ---

const displayOpenQuestion = () => {
  openQuestionElement.textContent = `${currentOpenQuestionIndex + 1}/${MAX_OPEN_QUESTIONS}: ${openQuestionsData[currentOpenQuestionIndex].question}`; // Accedi a .question
  answerInput.value = localStorage.getItem(`openAnswer_${currentOpenQuestionIndex}`) || "";
  feedbackElement.style.display = "none";

  prevOpenBtn.disabled = currentOpenQuestionIndex === 0;
  nextOpenBtn.disabled = currentOpenQuestionIndex === MAX_OPEN_QUESTIONS - 1;

  generateOpenQuestionNavDots(); // Genera i "pallini" di navigazione per le domande aperte
  populateOpenQuestionSelect(); // Popola il select delle domande aperte
};

const submitAnswer = () => {
  const userAnswer = answerInput.value.trim();
  if (!userAnswer) {
    alert("Per favore, scrivi una risposta prima di inviare.");
    return;
  }

  localStorage.setItem(`openAnswer_${currentOpenQuestionIndex}`, userAnswer);

  const currentQuestionData = openQuestionsData[currentOpenQuestionIndex];
  const correctAnswer = currentQuestionData.correctAnswer;

  feedbackElement.innerHTML = `
  <div class="feedback-section user-response">
    <h3>La tua risposta</h3>
    <p>${userAnswer}</p>
  </div>
  <div class="feedback-section model-response">
    <h3>Risposta consigliata</h3>
    ${formatAnswer(correctAnswer)}
  </div>
`;


  feedbackElement.className = "feedback info"; // Useremo una nuova classe 'info' per uno stile neutro
  feedbackElement.style.display = "block";

  generateOpenQuestionNavDots(); // Aggiorna lo stato dei pallini dopo aver risposto
};

const displayNextOpenQuestion = () => {
  if (currentOpenQuestionIndex < MAX_OPEN_QUESTIONS - 1) {
    currentOpenQuestionIndex++;
    displayOpenQuestion();
  }
};

const displayPrevOpenQuestion = () => {
  if (currentOpenQuestionIndex > 0) {
    currentOpenQuestionIndex--;
    displayOpenQuestion();
  }
};

const generateOpenQuestionNavDots = () => {
  const navContainer = document.querySelector(".open-question-nav");
  navContainer.innerHTML = "";

  for (let i = 0; i < MAX_OPEN_QUESTIONS; i++) {
    const btn = document.createElement("div");
    btn.textContent = i + 1;
    btn.classList.add("open-nav-dot");

    const answer = localStorage.getItem(`openAnswer_${i}`);
    if (answer) {
      btn.classList.add("answered");
    }

    btn.addEventListener("click", () => {
      currentOpenQuestionIndex = i;
      displayOpenQuestion();
    });

    navContainer.appendChild(btn);
  }
};

// Funzione unificata per tornare alla home
const goToHome = () => {
  questionNumber = 0;
  currentOpenQuestionIndex = 0;
  score = 0;
  quizContainer.style.display = "none";
  quizResult.style.display = "none";
  openQuestionsContainer.style.display = "none"; // Assicurati che sia nascosto
  startBtnContainer.style.display = "flex";
  document.querySelector(".score-counter").style.display = "none"; // Nascondi il contatore
  resetLocalStorage(); // Resetta tutte le risposte salvate
  updateScoreCounters(); // Resetta i contatori visualizzati
};

// Converte testo multilinea in lista leggibile
function formatAnswer(text) {
  if (!text) return "";

  const t = text.trim();

  let parts;
  if (/\n/.test(t)) {
    // righe già spezzate
    parts = t.split(/\n+/);
  } else if (/\([a-z]\)/i.test(t)) {
    // pattern (a) (b) (c) ...
    parts = t.split(/\s*\([a-z]\)\s*/i).filter(Boolean);
  } else if (t.includes(";")) {
    // voci separate da ;
    parts = t.split(/\s*;\s*/);
  } else if (/\s-\s/.test(t)) {
    // voci separate da " - "
    parts = t.split(/\s-\s/);
  } else {
    // fallback: spezza in frasi con punto seguito da maiuscola
    parts = t.split(/(?<=\.)\s+(?=[A-ZÀ-ÖØ-Þ])/).filter(Boolean);
    // se è rimasto un unico elemento, non forzare l'elenco
    if (parts.length <= 1) return `<p>${t}</p>`;
  }

  parts = parts.map(s => s.trim()).filter(Boolean);
  return `<ul>${parts.map(s => `<li>${s}</li>`).join("")}</ul>`;
}



// --- Event Listeners ---

startBtn.addEventListener("click", () => {
  questionNumber = 0;
  score = 0;
  resetLocalStorage(); // Resetta tutte le risposte salvate
  document.querySelector(".score-counter").style.display = "flex"; // Mostra il contatore
  startBtnContainer.style.display = "none";
  quizResult.style.display = "none";
  openQuestionsContainer.style.display = "none"; // Assicurati che sia nascosto
  quizContainer.style.display = "block";
  createQuestion();
});

openQuestionsBtn.addEventListener("click", () => {
  currentOpenQuestionIndex = 0; // Inizia sempre dalla prima domanda aperta
  openQuestionsData = shuffleArray(openQuestionsData);
  resetLocalStorage(); // Potrebbe essere opportuno resettare solo le risposte aperte se necessario
  startBtnContainer.style.display = "none";
  quizContainer.style.display = "none"; // Assicurati che sia nascosto
  quizResult.style.display = "none"; // Assicurati che sia nascosto
  document.querySelector(".score-counter").style.display = "none"; // Nascondi il contatore
  openQuestionsContainer.style.display = "block";
  displayOpenQuestion();
});

nextBtn.addEventListener("click", displayNextQuestion);
prevBtn.addEventListener("click", displayPrevQuestion);
homeButtons.forEach(button => {
  button.addEventListener("click", goToHome);
});


submitAnswerBtn.addEventListener("click", submitAnswer);
prevOpenBtn.addEventListener("click", displayPrevOpenQuestion);
nextOpenBtn.addEventListener("click", displayNextOpenQuestion);

// L'evento DOMContentLoaded non è più strettamente necessario per la logica iniziale,
// dato che i listener sono attaccati direttamente ai bottoni,
// ma può essere utile se ci fossero altre inizializzazioni da fare all'avvio.
document.addEventListener("DOMContentLoaded", () => {
  // Potresti voler inizializzare lo stato iniziale qui, ad esempio,
  // assicurandoti che solo la schermata iniziale sia visibile.
  startBtnContainer.style.display = "flex";
  quizContainer.style.display = "none";
  quizResult.style.display = "none";
  openQuestionsContainer.style.display = "none";
  document.querySelector(".score-counter").style.display = "none";
});

document.addEventListener("change", (e) => {
  if (e.target && e.target.id === "questionSelect") {
    questionNumber = parseInt(e.target.value, 10) || 0;
    createQuestion();
  }
  if (e.target && e.target.id === "openQuestionSelect") {
    currentOpenQuestionIndex = parseInt(e.target.value, 10) || 0;
    displayOpenQuestion();
  }
});
