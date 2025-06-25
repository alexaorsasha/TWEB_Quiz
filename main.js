let quizData = [
  {
    question: "Cosa rappresenta la seguente espressione CSS: 'input[type=\"button\"]:hover'?",
    options: [
      "Seleziona tutti gli input di tipo text.",
      "Seleziona tutti gli input di tipo button.",
      "Seleziona tutti i pulsanti quando il mouse non è sopra di essi.",
      "Seleziona tutti gli input di tipo button solo quando il mouse è sopra di essi."
    ],
    correct: "Seleziona tutti gli input di tipo button solo quando il mouse è sopra di essi."
  },
  {
    question: "Quale proprietà CSS è utilizzata per impostare la larghezza di un elemento?",
    options: [
      "padding",
      "width",
      "border-radius",
      "height"
    ],
    correct: "width"
  },
  {
    question: "Quale di queste è una unità di misura relativa in CSS?",
    options: [
      "mm",
      "pt",
      "rem",
      "px"
    ],
    correct: "rem"
  },
  {
    question: "Come si definisce un selettore CSS che applica stili a tutti gli elementi di un tipo specifico, come i tag?",
    options: [
      "Selettore per ID",
      "Selettore universale",
      "Selettore per classe",
      "Selettore per tag"
    ],
    correct: "Selettore per tag"
  },
  {
    question: "Cosa rappresenta la proprietà 'margin' se utilizzata con quattro valori, come in 'margin: 5px 10px 0 20px;'?",
    options: [
      "bottom, left, top, right",
      "top, right, bottom, left",
      "left, top, right, bottom",
      "right, bottom, left, top"
    ],
    correct: "top, right, bottom, left"
  },
  {
    question: "Quale combinatore seleziona gli elementi che sono figli immediati di un altro elemento?",
    options: [
      "-",
      ">",
      "+",
      "~"
    ],
    correct: ">"
  },
  {
    question: "Quale proprietà CSS definisce come un elemento deve essere visualizzato nel suo contenitore?",
    options: [
      "float",
      "display-inside",
      "display-outside",
      "position"
    ],
    correct: "display-inside"
  },
  {
    question: "Quale valore di display rappresenta il comportamento di un elemento che occupa tutto lo spazio disponibile in orizzontale?",
    options: [
      "block",
      "inline-block",
      "inline",
      "flex"
    ],
    correct: "block"
  },
  {
    question: "Cosa seleziona il selettore '.articolo' in CSS?",
    options: [
      "Tutti gli elementi con la classe 'articolo'",
      "Tutti gli elementi di tipo DIV",
      "Tutti gli elementi con l'ID 'articolo'",
      "Tutti gli elementi di tipo h1"
    ],
    correct: "Tutti gli elementi con la classe 'articolo'"
  },
  {
    question: "Quale delle seguenti è una proprietà CSS che accetta valori predefiniti?",
    options: [
      "width",
      "color",
      "border",
      "margin"
    ],
    correct: "color"
  },
  {
    question: "Cosa significa che Javascript è debolmente tipato?",
    options: [
      "I dati possono essere convertiti automaticamente",
      "Richiede dichiarazioni di tipo",
      "I tipi di dati non possono cambiare",
      "Non supporta i tipi di dato"
    ],
    correct: "I dati possono essere convertiti automaticamente"
  },
  {
    question: "Qual è il valore predefinito per la proprietà 'display' di un elemento?",
    options: [
      "inline",
      "flex",
      "flow",
      "block"
    ],
    correct: "flow"
  },
  {
    question: "Quale proprietà CSS permette di portare un elemento 'fuori' dal flusso delle righe?",
    options: [
      "float",
      "overflow",
      "display",
      "position"
    ],
    correct: "float"
  },
  {
    question: "Qual è il display di default per tutti gli elementi HTML?",
    options: [
      "inline",
      "flex",
      "flow",
      "block"
    ],
    correct: "flow"
  },
  {
    question: "Quale proprietà CSS si utilizza per impostare il display tipo 'flex'?",
    options: [
      "tutte le precedenti",
      "display: block flex;",
      "display: inline flex;",
      "display: flex;"
    ],
    correct: "tutte le precedenti"
  },
  {
    question: "Qual è l'effetto della proprietà 'display: none' su un elemento?",
    options: [
      "Rimuove l'elemento dalla visualizzazione",
      "Rende l'elemento visibile",
      "Aggiunge un bordo all'elemento",
      "Modifica il colore dell'elemento"
    ],
    correct: "Rimuove l'elemento dalla visualizzazione"
  },
  {
    question: "Quali sono le proprietà CSS per configurare una griglia?",
    options: [
      "grid-area e grid-template-rows",
      "grid-template-rows e grid-template-columns",
      "grid-template-area e grid-template-columns",
      "grid-template-columns e grid-area"
    ],
    correct: "grid-template-rows e grid-template-columns"
  },
  {
    question: "Cosa fa la proprietà 'flex-direction' in un contenitore flex?",
    options: [
      "Definisce il margine degli elementi",
      "Determina l'allineamento verticale",
      "Determina la direzione di disposizione degli elementi",
      "Imposta il colore di sfondo"
    ],
    correct: "Determina la direzione di disposizione degli elementi"
  },
  {
    question: "Quale valore della proprietà 'justify-content' allinea gli elementi a sinistra?",
    options: [
      "center",
      "flex-start",
      "flex-end",
      "space-between"
    ],
    correct: "flex-start"
  },
  {
    question: "Qual è una caratteristica del linguaggio Javascript?",
    options: [
      "È un linguaggio compilato",
      "È un linguaggio interpretato",
      "Richiede dichiarazione di tipo",
      "È staticamente tipato"
    ],
    correct: "È un linguaggio interpretato"
  },
  {
    question: "Qual è la differenza principale tra 'undefined' e 'null' in JavaScript?",
    options: [
      "'null' rappresenta un valore assente, 'undefined' rappresenta una variabile non assegnata.",
      "'undefined' è un valore assegnato, 'null' no.",
      "'undefined' è un tipo, 'null' è un oggetto.",
      "Nessuna differenza."
    ],
    correct: "'null' rappresenta un valore assente, 'undefined' rappresenta una variabile non assegnata."
  },
  {
    question: "Che cosa è un agente di calcolo in JavaScript?",
    options: [
      "Un compilatore",
      "Un ambiente di sviluppo",
      "Un linguaggio di programmazione",
      "Un motore di esecuzione"
    ],
    correct: "Un motore di esecuzione"
  },
  {
    question: "Qual è la funzione della Java Virtual Machine?",
    options: [
      "Crea macchine virtuali",
      "Compila codice in linguaggio macchina",
      "Esegue direttamente codice Java",
      "Interpreta Java ByteCode"
    ],
    correct: "Interpreta Java ByteCode"
  },
  {
    question: "Quale tag HTML viene utilizzato per collegare uno script JavaScript a una pagina HTML?",
    options: [
      "<include>",
      "<script>",
      "<js>",
      "<link>"
    ],
    correct: "<script>"
  },
  {
    question: "Quali sono i tipi base in JavaScript?",
    options: [
      "number, string, boolean, object, null",
      "int, float, boolean",
      "integer, decimal, boolean",
      "string, boolean, array"
    ],
    correct: "number, string, boolean, object, null"
  },
  {
    question: "Come si dichiara una variabile in JavaScript?",
    options: [
      "var nome = 'Valore';",
      "tutte le precedenti",
      "let nome = 'Valore';",
      "const nome = 'Valore';"
    ],
    correct: "tutte le precedenti"
  },
  {
    question: "Che cosa restituisce metodo 'pop' sugli array in JavaScript?",
    options: [
      "Un nuovo array",
      "L'ultimo elemento e lo rimuove",
      "Il primo elemento",
      "Il numero di elementi"
    ],
    correct: "L'ultimo elemento e lo rimuove"
  },
  {
    question: "Qual è la sintassi corretta per definire un oggetto in JavaScript?",
    options: [
      "const oggetto = (proprietà: valore);",
      "const oggetto = 'proprietà: valore';",
      "const oggetto = ;",
      "const oggetto = {proprietà: valore};"
    ],
    correct: "const oggetto = {proprietà: valore};"
  },
  {
    question: "Come si accede a una proprietà di un oggetto in JavaScript?",
    options: [
      "oggetto['proprietà']",
      "oggetto.proprietà",
      "Nessuna delle precedenti",
      "Entrambi a e b sono corretti"
    ],
    correct: "Entrambi a e b sono corretti"
  },
  {
    question: "Qual è la parola chiave utilizzata per definire una classe in JavaScript?",
    options: [
      "function",
      "define",
      "class",
      "struct"
    ],
    correct: "class"
  },
  {
    question: "Qual è il ruolo del DNS nel processo di richiesta di una risorsa?",
    options: [
      "Tradurre l'hostname in un indirizzo IP",
      "Restituire la risposta HTTP",
      "Eseguire programmi server-side",
      "Identificare la risorsa sul server"
    ],
    correct: "Tradurre l'hostname in un indirizzo IP"
  },
  {
    question: "Qual è la sintassi corretta per creare un ciclo for in JavaScript?",
    options: [
      "for( inizializzazione; condizione; incremento )",
      "Tutte le precedenti",
      "for( const elem in iterable )",
      "for( const a of amici )"
    ],
    correct: "Tutte le precedenti"
  },
  {
    question: "Quali tipi di funzioni possono essere assegnate a una variabile?",
    options: [
      "Solo funzioni anonymous",
      "Named, anonymous e arrow",
      "Solo funzioni named",
      "Solo funzioni arrow"
    ],
    correct: "Named, anonymous e arrow"
  },
  {
    question: "Cosa rappresenta l'invocazione di una funzione?",
    options: [
      "Un errore di sintassi",
      "La definizione della funzione",
      "Un oggetto",
      "Un'espressione che ha un risultato"
    ],
    correct: "Un'espressione che ha un risultato"
  },
  {
    question: "Che cos'è uno scope in JavaScript?",
    options: [
      "Un oggetto di tipo array",
      "Un ambito di visibilità",
      "Una funzione di callback",
      "Un blocco di istruzioni fra parentesi quadre"
    ],
    correct: "Un ambito di visibilità"
  },
  {
    question: "Cos'è il World Wide Web (WWW)?",
    options: [
      "Un servizio di rete che utilizza solo documenti testuali",
      "Un servizio di rete basato sul protocollo FTP",
      "Un servizio di rete per la condivisione di file audio",
      "Un servizio di rete basato sul protocollo HTTP"
    ],
    correct: "Un servizio di rete basato sul protocollo HTTP"
  },
  {
    question: "Qual è l'obiettivo principale di una richiesta HTTP?",
    options: [
      "Cancellare una risorsa dal server",
      "Ottenere una risorsa specifica",
      "Inviare file al server",
      "Modificare una risorsa sul server"
    ],
    correct: "Ottenere una risorsa specifica"
  },
  {
    question: "Quale tipo di richiesta HTTP viene utilizzato per ottenere una risorsa?",
    options: [
      "POST",
      "GET",
      "DELETE",
      "PUT"
    ],
    correct: "GET"
  },
  {
    question: "Qual è la struttura generale di una URL?",
    options: [
      "protocol://hostname[:port]/path[?querystring][#fragment]",
      "protocol:hostname/path?querystring",
      "protocol://hostname/path",
      "hostname:port/path"
    ],
    correct: "protocol://hostname[:port]/path[?querystring][#fragment]"
  },
  {
    question: "Cosa rappresenta il 'path' in una URL?",
    options: [
      "Il nome del server",
      "Il protocollo utilizzato",
      "Il percorso per trovare la risorsa sul server",
      "Il numero di porta del server"
    ],
    correct: "Il percorso per trovare la risorsa sul server"
  },
  {
    question: "Cosa contiene la 'request line' in una HTTP Request?",
    options: [
      "Il contenuto del messaggio.",
      "Dettagli sul client che effettua la richiesta.",
      "La natura della richiesta al server.",
      "Le intestazioni della risposta."
    ],
    correct: "La natura della richiesta al server."
  },
  {
    question: "Qual è la funzione principale del linguaggio HTML?",
    options: [
      "Formattare i dati in un database",
      "Strutturare e visualizzare documenti web",
      "Inviare richieste HTTP al server",
      "Scrivere programmi eseguibili sul server"
    ],
    correct: "Strutturare e visualizzare documenti web"
  },
  {
    question: "Cosa indica una risorsa statica su un Web Server?",
    options: [
      "Una risorsa che richiede una connessione al database",
      "Una risorsa già esistente e restituita dal server",
      "Una risorsa che viene calcolata dinamicamente",
      "Una risorsa che non è disponibile"
    ],
    correct: "Una risorsa già esistente e restituita dal server"
  },
  {
    question: "Cosa determina se una risorsa è statica o dinamica?",
    options: [
      "La URL e il tipo di elaborazione richiesta",
      "La porta utilizzata nella richiesta",
      "Il tipo di browser utilizzato",
      "Il formato della richiesta HTTP"
    ],
    correct: "La URL e il tipo di elaborazione richiesta"
  },
  {
    question: "Che cosa rappresenta il 'fragment' in una URL?",
    options: [
      "Una porzione di dati nella risposta HTTP",
      "Un identificatore per il protocollo",
      "Una collocazione precisa all'interno di una pagina HTML",
      "La parte del server che gestisce la richiesta"
    ],
    correct: "Una collocazione precisa all'interno di una pagina HTML"
  },
  {
    question: "Qual è il codice di errore restituito quando una risorsa non è trovata?",
    options: [
      "500 Internal Server Error",
      "403 Forbidden",
      "401 Unauthorized",
      "404 Not Found"
    ],
    correct: "404 Not Found"
  },
  {
    question: "Cosa caratterizza una pagina HTML passiva?",
    options: [
      "Può solo essere guardata e letta, senza interazione.",
      "Richiede l'uso di fogli di stile CSS.",
      "Può essere letta e interagita attivamente dall'utente.",
      "Esegue codice JavaScript in risposta a eventi utente."
    ],
    correct: "Può solo essere guardata e letta, senza interazione."
  },
  {
    question: "Qual è la principale funzione di JavaScript nel browser?",
    options: [
      "Eseguire script per rendere interattive le pagine HTML.",
      "Visualizzare contenuti statici.",
      "Gestire le richieste HTTP.",
      "Modificare i fogli di stile CSS."
    ],
    correct: "Eseguire script per rendere interattive le pagine HTML."
  },
  {
    question: "Cosa si intende per 'interattività semplice' in una pagina HTML?",
    options: [
      "Effetti visivi che migliorano l'esperienza utente.",
      "Richieste asincrone al server.",
      "Modifiche strutturali alla pagina.",
      "Elaborazione dati complessa."
    ],
    correct: "Effetti visivi che migliorano l'esperienza utente."
  },
  {
    question: "Quali sono le due tipologie principali di eventi gestiti in un'applicazione client-side?",
    options: [
      "Eventi di rete e di scorrimento.",
      "Eventi di caricamento e di errore.",
      "Eventi utente e eventi di sistema.",
      "Eventi di rete e eventi utente."
    ],
    correct: "Eventi di rete e eventi utente."
  },
  {
    question: "Cosa caratterizza l'architettura a strati di un'applicazione?",
    options: [
      "Tutti gli strati devono essere modificati contemporaneamente.",
      "Non esiste comunicazione tra gli strati.",
      "Gli strati devono essere tutti sullo stesso server.",
      "Ogni strato offre servizi al livello superiore e sfrutta quelli del livello inferiore."
    ],
    correct: "Ogni strato offre servizi al livello superiore e sfrutta quelli del livello inferiore."
  },
  {
    question: "Quale metodo HTTP è utilizzato per inviare dati al server?",
    options: [
      "DELETE",
      "POST",
      "GET",
      "PUT"
    ],
    correct: "POST"
  },
  {
    question: "Cosa rappresenta uno status code HTTP 404?",
    options: [
      "Errore del server.",
      "Richiesta non valida.",
      "Risorsa non trovata.",
      "Richiesta elaborata con successo."
    ],
    correct: "Risorsa non trovata."
  },
  {
    question: "Qual è la funzione principale del browser durante il ciclo di esecuzione?",
    options: [
      "Renderizzare e mostrare le pagine HTML all'utente.",
      "Visualizzare solo pagine statiche.",
      "Effettuare richieste di rete.",
      "Eseguire esclusivamente codice server-side."
    ],
    correct: "Renderizzare e mostrare le pagine HTML all'utente."
  },
  {
    question: "Cos'è il 'body' in una risposta HTTP?",
    options: [
      "Le intestazioni della risposta.",
      "Il contenuto effettivo del messaggio.",
      "Informazioni sul server.",
      "La linea iniziale della risposta."
    ],
    correct: "Il contenuto effettivo del messaggio."
  },
  {
    question: "Quali tipi di dati possono essere indicati nel 'Content-Type' di una richiesta HTTP?",
    options: [
      "text/plain, audio/mp3, video/mp4.",
      "Tutti i precedenti.",
      "text/html, application/json, image/png.",
      "text/css, application/xml, image/jpeg."
    ],
    correct: "Tutti i precedenti."
  },
  {
    question: "Che ruolo ha il Web Server in un'applicazione client-side e server-side?",
    options: [
      "Gestire solo le richieste di rete.",
      "Fornire solo file statici all'utente.",
      "Elaborare le richieste e fornire risposte dinamiche.",
      "Visualizzare i dati nel browser."
    ],
    correct: "Elaborare le richieste e fornire risposte dinamiche."
  },
  {
    question: "Qual è l'effetto di una risposta HTTP inviata al client?",
    options: [
      "Il server ignora la richiesta.",
      "Il server si riavvia.",
      "Il client cancella la richiesta.",
      "Il browser riceve la risposta e traduce in un evento di rete."
    ],
    correct: "Il browser riceve la risposta e traduce in un evento di rete."
  },
  {
    question: "Cosa avviene quando il browser ri-renderizza una pagina?",
    options: [
      "Il browser si riavvia.",
      "La pagina viene chiusa.",
      "Solo le parti modificate della pagina vengono aggiornate.",
      "Tutte le parti della pagina vengono aggiornate."
    ],
    correct: "Solo le parti modificate della pagina vengono aggiornate."
  },
  {
    question: "Qual è la funzione principale del front-end in un'applicazione?",
    options: [
      "Gestire la persistenza dei dati.",
      "Archiviare file sul server.",
      "Interagire con l'utente.",
      "Eseguire operazioni di database."
    ],
    correct: "Interagire con l'utente."
  },
  {
    question: "Qual è la differenza principale tra un URL assoluto e un URL relativo?",
    options: [
      "L'URL assoluto specifica solo il dominio.",
      "L'URL assoluto specifica il path completo a partire dalla radice del dominio.",
      "Non ci sono differenze.",
      "L'URL relativo specifica il path completo."
    ],
    correct: "L'URL assoluto specifica il path completo a partire dalla radice del dominio."
  },
  {
    question: "Qual è il ruolo del Document Object Model (DOM)?",
    options: [
      "Gestire le richieste HTTP.",
      "Mantenere in memoria le informazioni sulla visualizzazione della pagina.",
      "Creare file di stile CSS.",
      "Definire la struttura fisica del server."
    ],
    correct: "Mantenere in memoria le informazioni sulla visualizzazione della pagina."
  },
  {
    question: "Cosa rappresenta l'elemento HTML in un documento?",
    options: [
      "Il collegamento a file esterni.",
      "La struttura logica del documento.",
      "Il contenuto testuale.",
      "La sezione di navigazione."
    ],
    correct: "La struttura logica del documento."
  },
  {
    question: "Quali elementi HTML sono usati per definire titoli?",
    options: [
      "H1, H2, H3, ..., H6",
      "P e DIV",
      "EM e STRONG",
      "SECTION e ARTICLE"
    ],
    correct: "H1, H2, H3, ..., H6"
  },
  {
    question: "Che cosa è necessario specificare per l'elemento IMG?",
    options: [
      "La URL dell'immagine.",
      "Nessun attributo è richiesto.",
      "Solo il formato dell'immagine.",
      "Solo il testo alternativo."
    ],
    correct: "La URL dell'immagine."
  },
  {
    question: "Cosa indica un elemento di tipo SECTION in HTML?",
    options: [
      "Un'immagine.",
      "Un'area di navigazione.",
      "Una suddivisione del documento in sezioni.",
      "Un articolo di lettura."
    ],
    correct: "Una suddivisione del documento in sezioni."
  },
  {
    question: "Qual è un vantaggio dell'architettura a strati?",
    options: [
      "Richiede meno codice.",
      "Non richiede interfacce.",
      "Ogni strato può essere gestito separatamente.",
      "Tutti gli strati devono essere scritti in un unico file."
    ],
    correct: "Ogni strato può essere gestito separatamente."
  },
  {
    question: "Quale attributo specifica la destinazione di un collegamento ipertestuale?",
    options: [
      "url",
      "href",
      "link",
      "target"
    ],
    correct: "href"
  },

]


const quizContainer = document.querySelector(".quiz-container");
const question = document.querySelector(".quiz-container .question");
const options = document.querySelector(".quiz-container .options");
const nextBtn = document.querySelector(".quiz-container .next-btn");
const prevBtn = document.querySelector(".quiz-container .prev-btn");
const homeBtn = document.querySelector(".quiz-container .home-btn");
const correctCounter = document.querySelector(".correct-counter");
const incorrectCounter = document.querySelector(".incorrect-counter");
const quizResult = document.querySelector(".quiz-result");
const startBtnContainer = document.querySelector(".start-btn-container");
const startBtn = document.querySelector(".start-btn-container .start-btn");

let questionNumber = 0;
const MAX_QUESTIONS = quizData.length;
let score = 0;

const shuffleArray = (array) => {
  return array.slice().sort(() => Math.random() - 0.5);
};

quizData = shuffleArray(quizData);

const resetLocalStorage = () => {
  for (let i = 0; i < MAX_QUESTIONS; i++) {
    localStorage.removeItem(`userAnswer_${i}`);
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

  if (isCorrect) {
    e.target.classList.add("correct");
    triggerFlash(correctCounter, "flash-green");
  } else {
    e.target.classList.add("incorrect");
    triggerFlash(incorrectCounter, "flash-red");
  }

  updateScoreCounters(); // aggiorna i numeri
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

    // Se c'è una risposta salvata
    if (savedAnswer) {
      option.classList.add("disabled"); // blocca click

      if (o === savedAnswer) {
        // Evidenzia la risposta data
        if (savedAnswer === quizData[questionNumber].correct) {
          option.classList.add("correct");
        } else {
          option.classList.add("incorrect");
        }
      }
    } else {
      // Se non è ancora stata risposta, permetti il click
      option.addEventListener("click", checkAnswer);
    }

    options.appendChild(option);
  });

  updateScoreCounters();
  generateQuestionNav();
};


const retakeQuiz = () => {
  questionNumber = 0;
  score = 0;
  quizData = shuffleArray(quizData);
  resetLocalStorage();
  quizResult.style.display = "none";
  quizContainer.style.display = "block";
  createQuestion();
};

const displayQuizResult = () => {
  quizResult.style.display = "flex";
  quizContainer.style.display = "none";
  quizResult.innerHTML = "";

  const resultHeading = document.createElement("h2");
  resultHeading.textContent = `You have completed the quiz.`;
  quizResult.appendChild(resultHeading);

  for (let i = 0; i < MAX_QUESTIONS; i++) {
    const resultItem = document.createElement("div");
    resultItem.classList.add("question-container");

    const userAnswer = localStorage.getItem(`userAnswer_${i}`);
    const correctAnswer = quizData[i].correct;
    const isCorrect = userAnswer === correctAnswer;

    if (!isCorrect) resultItem.classList.add("incorrect");

    resultItem.innerHTML = `
      <div class="question">Question ${i + 1}: ${quizData[i].question}</div>
      <div class="user-answer">Your answer: ${userAnswer || "Not Answered"}</div>
      <div class="correct-answer">Correct answer: ${correctAnswer}</div>
    `;

    quizResult.appendChild(resultItem);
  }

  const retakeBtn = document.createElement("button");
  retakeBtn.classList.add("retake-btn");
  retakeBtn.textContent = "Retake Quiz";
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

const goToHome = () => {
  questionNumber = 0;
  score = 0;
  quizContainer.style.display = "none";
  quizResult.style.display = "none";
  startBtnContainer.style.display = "block";
  resetLocalStorage();
  updateScoreCounters();
};

startBtn.addEventListener("click", () => {
  questionNumber = 0;
  score = 0;
  resetLocalStorage();

  document.querySelector(".score-counter").style.display = "block";
  startBtnContainer.style.display = "none";
  quizResult.style.display = "none";
  quizContainer.style.display = "block";

  createQuestion();
});


nextBtn.addEventListener("click", displayNextQuestion);
prevBtn.addEventListener("click", displayPrevQuestion);
homeBtn.addEventListener("click", goToHome);

const generateQuestionNav = () => {
  const navContainer = document.querySelector(".question-nav");
  navContainer.innerHTML = "";

  for (let i = 0; i < MAX_QUESTIONS; i++) {
    const btn = document.createElement("button");
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

