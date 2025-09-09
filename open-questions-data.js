let openQuestionsData = [
    {
        question: "Spiega la differenza tra una richiesta HTTP GET e POST, fornendo un esempio pratico.",
        correctAnswer: "GET serve a leggere dati dal server, inviando i parametri nella URL (es. /search?q=scarpe). È più veloce e usato per richieste idempotenti. POST invia dati nel body della richiesta (es. invio form di registrazione), utile per operazioni che modificano lo stato e non devono essere esposte nella URL."
    },
    {
        question: "Descrivi la struttura di una URL e spiega il ruolo della query string e del fragment.",
        correctAnswer: "Una URL è composta da protocollo, host, porta (opzionale), path, query string e fragment. La query string (?id=10) trasmette parametri al server per generare risposte dinamiche; il fragment (#section1) indica una sezione interna della pagina ed è gestito solo dal browser, non inviato al server."
    },
    {
        question: "Cosa si intende per risorsa statica e risorsa dinamica? Porta un esempio di ciascuna.",
        correctAnswer: "Le risorse statiche sono file fissi sul server (immagini, CSS, JS) e non cambiano da utente a utente. Le risorse dinamiche sono generate al momento in base ai dati o all’utente, ad esempio una pagina HTML personalizzata con dati estratti da un database."
    },
    {
        question: "In cosa consiste l’interattività di una pagina HTML? Spiega la differenza tra interattività semplice e complessa.",
        correctAnswer: "L’interattività è la capacità della pagina di reagire alle azioni dell’utente. Interattività semplice: effetti grafici e animazioni base (hover, toggle di un menu). Interattività complessa: vere e proprie applicazioni web (come Gmail) che usano JavaScript e API per gestire logica, dati e interfaccia."
    },
    {
        question: "Descrivi il ciclo del browser dal caricamento di una pagina HTML fino alla gestione degli eventi.",
        correctAnswer: "Il browser scarica l’HTML, costruisce il DOM, applica i CSS creando il CSSOM, unisce DOM+CSSOM nel render tree e disegna la pagina. Poi scarica ed esegue JavaScript, che può manipolare il DOM. Infine gestisce input ed eventi attraverso l’event loop, garantendo interattività continua."
    },
    {
        question: "Quali sono i principali componenti di una HTTP Response? Fai un esempio di codice di stato e spiegane il significato.",
        correctAnswer: "Una response HTTP ha: status line (es. 200 OK = successo, 404 Not Found = risorsa mancante), header (Content-Type, Cache-Control, ecc.) e body (contenuto, es. HTML o JSON). Insieme comunicano al client sia lo stato che i dati richiesti."
    },
    {
        question: "Spiega cosa si intende per front-end e back-end in un’applicazione web, e perché spesso si parla di architettura a strati.",
        correctAnswer: "Il front-end è l’interfaccia utente nel browser (HTML, CSS, JS), mentre il back-end gestisce logica, sicurezza e dati sul server. L’architettura a strati divide UI, logica applicativa e persistenza dati, migliorando modularità, scalabilità e manutenzione del sistema."
    },
    {
        question: "Descrivi il ruolo del DOM nel ciclo di vita di una pagina e spiega perché viene definito una struttura ad albero.",
        correctAnswer: "Il DOM rappresenta la pagina come una struttura ad albero di nodi, dove ogni tag è un nodo collegato gerarchicamente. Questa struttura permette al browser e a JavaScript di navigare, cercare e modificare dinamicamente elementi della pagina."
    },
    {
        question: "Spiega la differenza tra elementi a blocco e in linea, fornendo esempi pratici di ciascuno.",
        correctAnswer: "Gli elementi a blocco (div, p, section) occupano tutta la larghezza disponibile e iniziano su una nuova riga. Gli elementi inline (span, a, strong) restano nello stesso flusso del testo e occupano solo lo spazio necessario."
    },
    {
        question: "Confronta i tre tipi di fogli di stile (esterno, interno, inline) e discuti i pro e contro di ciascuno.",
        correctAnswer: "Esterni (file .css): ordinati, riutilizzabili e scalabili → consigliati. Interni (<'style>): utili per pagine singole o test veloci, ma meno riusabili. Inline (style=\"...\"): pratici per modifiche mirate, ma poco manutenibili e confondono la struttura HTML con la presentazione."
    },
    {
        question: "Illustra il funzionamento della cascata e della specificità nei CSS con un esempio.",
        correctAnswer: "La cascata decide quale regola prevale in caso di conflitti. Conta: ordine di definizione, specificità del selettore (id > classi > tag) e l’uso di !important. Esempio: #id {color:red} ha priorità su .classe {color:blue} e su div {color:green}."
    },
    {
        question: "Descrivi come funziona un layout basato su flexbox e quando è preferibile usarlo rispetto al modello tradizionale.",
        correctAnswer: "Flexbox organizza gli elementi lungo un asse principale (row o column) e li allinea facilmente con spazi dinamici, ridimensionamenti e distribuzioni. È preferibile per layout fluidi e responsive, dove il modello a blocchi tradizionale richiederebbe molto CSS complesso."
    },
    {
        question: "Confronta le unità di misura relative ed assolute in CSS e spiega in quali casi usare ciascuna.",
        correctAnswer: "Le unità assolute (px, pt, cm) danno dimensioni fisse e precise, utili per elementi stampabili o che non devono adattarsi. Le relative (%, em, rem, vw, vh) si adattano al contesto o al viewport, ideali per design responsive e accessibilità."
    },
    {
        question: "Spiega la differenza tra linguaggi compilati e interpretati, portando esempi concreti.",
        correctAnswer: "I linguaggi compilati (C, C++, Java → bytecode) vengono tradotti in codice eseguibile prima dell’esecuzione, risultando più veloci ma meno flessibili. I linguaggi interpretati (JavaScript, Python) vengono eseguiti riga per riga dal runtime, facilitando la portabilità e lo sviluppo rapido."
    },
    {
        question: "Che differenza c’è tra undefined e null in JavaScript? Porta un esempio pratico di utilizzo.",
        correctAnswer: "undefined significa che una variabile è stata dichiarata ma non ha valore. null è un valore intenzionalmente vuoto che rappresenta l’assenza di oggetto o dato. Esempio: let x; → undefined; let y = null; → valore vuoto esplicito."
    },
    {
        question: "Descrivi il concetto di prototype chain e spiega cosa succede se una proprietà non è trovata in un oggetto.",
        correctAnswer: "Ogni oggetto in JavaScript ha un prototype, che è un altro oggetto da cui eredita proprietà. Se la proprietà cercata non è nell’oggetto, il motore JS risale la prototype chain fino ad arrivare a Object.prototype. Se non la trova, restituisce undefined."
    },
    {
        question: "Confronta i tre modi di dichiarare funzioni in JavaScript (named, anonymous, arrow) e spiega vantaggi e svantaggi.",
        correctAnswer: "Le funzioni named hanno un nome e sono riutilizzabili, ideali per debug e leggibilità. Le anonymous sono senza nome, usate come callback o funzioni inline. Le arrow sono più compatte, mantengono il this lessicale, ma non hanno arguments né possono essere usate come costruttori."
    },
    {
        question: "Descrivi come funziona il bubbling degli eventi e perché è utile in una pagina web.",
        correctAnswer: "Con l’event bubbling, un evento parte dall’elemento target e risale l’albero DOM fino al document, attivando i listener lungo il percorso. È utile per l’event delegation: un unico listener su un genitore può gestire eventi di molti figli dinamici."
    },
    {
        question: "Cos’è una closure e in quali casi pratici può essere utile?",
        correctAnswer: "Una closure è una funzione che mantiene accesso alle variabili dello scope in cui è stata creata, anche dopo che quello scope è terminato. È utile per incapsulare stato privato, come nei contatori o nelle funzioni che ricordano configurazioni."
    },
    {
        question: "Illustra la differenza tra export default e export standard nei moduli JavaScript.",
        correctAnswer: "export default consente di esportare un singolo valore o funzione per file, importabile con nome arbitrario. Gli export nominati permettono di esportare più elementi dallo stesso modulo, che vanno importati con i loro nomi esatti racchiusi tra parentesi graffe."
    },
    {
        question: "Descrivi i passi fondamentali per modificare dinamicamente il DOM con JavaScript.",
        correctAnswer: "1. Selezionare un elemento (querySelector, getElementById). 2. Creare o modificare un nodo (createElement, textContent, setAttribute). 3. Inserirlo o sostituirlo nel DOM (append, prepend, insertBefore, replaceChild)."
    },
    {
        question: "Descrivi la differenza tra libreria e framework front-end e spiega in che senso React è una libreria.",
        correctAnswer: "Una libreria è un insieme di funzioni usate quando serve, lasciando il controllo allo sviluppatore. Un framework impone un flusso di lavoro e struttura. React è considerata una libreria perché si occupa solo della view e può essere integrata liberamente con altre tecnologie."
    },
    {
        question: "Illustra il concetto di gerarchia di componenti in React, distinguendo genitori e figli.",
        correctAnswer: "In React un componente può includere altri componenti al suo interno. Il componente contenitore è il genitore, mentre quelli inclusi sono figli. Questa gerarchia riflette la struttura dell’interfaccia e permette il passaggio di dati tramite props."
    },
    {
        question: "Confronta la tecnica di show/hide con quella di mount/unmount dei componenti figli. In quali casi useresti ciascuna?",
        correctAnswer: "Show/hide usa CSS (es. display:none) per nascondere un componente senza rimuoverlo dal DOM: veloce, utile per elementi mostrati spesso. Mount/unmount aggiunge o rimuove completamente il componente dal DOM: consigliato per elementi pesanti o che dipendono da dati caricati dinamicamente."
    },
    {
        question: "Spiega il pattern MVVM e come React implementa property binding ed event binding.",
        correctAnswer: "Il pattern MVVM separa Model (dati), View (interfaccia) e ViewModel (logica e binding). In React il property binding avviene passando props ai componenti, mentre l’event binding si realizza con handler come onClick, collegando eventi a funzioni del componente."
    },
    {
        question: "Scrivi un esempio di componente React con props e mostra come il genitore passa valori differenti a istanze diverse.",
        correctAnswer: "Esempio: function Book(props){ return <'h2>{props.title}</h2> }. Il genitore può renderizzare <Book title='Uno'/> e <Book title='Due'/>. Ogni istanza riceve un titolo diverso e mostra un output personalizzato."
    },
    {
        question: "Perché React richiede che i componenti siano funzioni pure? Quali problemi evita?",
        correctAnswer: "React vuole componenti puri perché devono produrre sempre lo stesso output a parità di input (props e state). Questo evita effetti collaterali imprevedibili, rende il rendering più efficiente e semplifica il debug e la prevedibilità dell’interfaccia."
    },
    {
        question: "Mostra con un esempio come intercettare un evento click in React e modificare lo stato di un componente.",
        correctAnswer: "Esempio: function Btn(){ const [count, setCount] = useState(0); return <'button onClick={()=>setCount(count+1)}>Cliccato {count} volte</button>; }. Ogni click incrementa lo stato e aggiorna la view."
    },
    {
        question: "Spiega le differenze tra modello single-thread event loop e modello multi-thread nella gestione delle richieste HTTP.",
        correctAnswer: "Il modello single-thread con event loop (Node.js) gestisce le richieste in asincrono, delegando le operazioni I/O e rispondendo senza blocchi. Il modello multi-thread (Apache) crea un thread per ogni richiesta: più intuitivo, ma con overhead maggiore in scenari di molte connessioni simultanee."
    },
    {
        question: "Descrivi il ruolo del caching in un Web Server e i benefici che apporta.",
        correctAnswer: "Il caching memorizza risposte già calcolate o file statici per velocizzare richieste future. Riduce il carico sul server, migliora i tempi di risposta e ottimizza la scalabilità. Esempio: cache di immagini statiche o risultati di query frequenti."
    },
    {
        question: "Illustra la differenza tra autenticazione e autorizzazione, portando esempi in ambito Web Server.",
        correctAnswer: "Autenticazione = verifica dell’identità dell’utente (login con username e password). Autorizzazione = definizione dei permessi di accesso a risorse. Esempio: autenticazione per accedere al sito, autorizzazione per consentire solo agli admin di accedere al pannello di controllo."
    },
    {
        question: "Cosa fa un Rewrite Engine e perché è importante in combinazione con routing client-side?",
        correctAnswer: "Un Rewrite Engine (es. mod_rewrite in Apache) riscrive URL leggibili in percorsi interni reali. È fondamentale con routing client-side (SPA) perché redirige tutte le richieste all’entry point (index.html), evitando errori 404 quando un utente ricarica una rotta gestita dal client."
    },
    {
        question: "Spiega la differenza tra modello (a) Server HTTP che contiene app e modello (b) app che contiene un Server HTTP.",
        correctAnswer: "(a) Server HTTP che contiene app: il server ospita più applicazioni e gestisce routing e cicli di vita (es. Tomcat con app Java). (b) App che contiene server HTTP: l’app stessa avvia e controlla il server (es. Express su Node.js). Differenza: chi ha il controllo principale, il server o l’app."
    },
    {
        question: "Scrivi lo scheletro di un server Node.js base che risponde a GET e POST sulla stessa route.",
        correctAnswer: "Esempio: const http=require('http'); http.createServer((req,res)=>{ if(req.method==='GET'){ res.end('GET'); } else if(req.method==='POST'){ res.end('POST'); } }).listen(3000);. Gestisce due tipi di richieste sulla stessa route."
    },
    {
        question: "Descrivi il ruolo del middleware in Express e come può influire sulla sicurezza di un’applicazione.",
        correctAnswer: "Un middleware è una funzione che intercetta richieste e risposte tra client e controller. Serve per logging, parsing, validazione, autenticazione. Aumenta la sicurezza bloccando richieste malevole, gestendo sessioni o applicando controlli di accesso centralizzati."
    },
    {
        question: "Confronta i framework server-side PHP/Laravel, Python/Django e Java/Spring, evidenziando differenze di approccio.",
        correctAnswer: "Laravel (PHP): semplice, veloce, adatto a CMS e siti medi. Django (Python): produttivo, con convenzioni forti, ideale per prototipi e applicazioni scalabili. Spring (Java): modulare e potente, adatto a sistemi enterprise complessi. La scelta dipende da linguaggio, team e contesto."
    },
    {
        question: "Spiega la differenza tra Jakarta, Spring e Spring Boot e come si relazionano tra loro.",
        correctAnswer: "Jakarta EE definisce specifiche standard per applicazioni enterprise Java. Spring semplifica lo sviluppo Java rispetto a Jakarta, fornendo un ecosistema flessibile. Spring Boot estende Spring, automatizzando configurazioni e riducendo il codice boilerplate per avviare rapidamente applicazioni."
    },
    {
        question: "Descrivi il ruolo delle annotazioni @Entity e @Repository in Spring JPA.",
        correctAnswer: "@Entity indica che una classe Java è mappata su una tabella del database. @Repository definisce un’interfaccia per operazioni CRUD e query, gestita da Spring con implementazioni automatiche, semplificando l’accesso ai dati."
    },
    {
        question: "Illustra cosa fa JDBC e perché rende indipendente l’accesso ai dati dal tipo di database.",
        correctAnswer: "JDBC fornisce un’API standard per connettere applicazioni Java a database diversi. L’unica cosa che cambia è il driver JDBC specifico del DB. In questo modo il codice applicativo resta lo stesso per MySQL, PostgreSQL, Oracle, ecc."
    },
    {
        question: "Parlami del ciclo di vita di una servlet e di come il container lo gestisce.",
        correctAnswer: "Il container crea la servlet, invoca init() una sola volta per inizializzarla, poi chiama service() per ogni richiesta. Al termine della vita della servlet, richiama destroy() per rilasciare risorse. Questo ciclo è gestito interamente dal container (es. Tomcat)."
    },
    {
        question: "Spiega cos’è una callback in JavaScript/TypeScript e porta un esempio pratico.",
        correctAnswer: "Una callback è una funzione passata come argomento ad un’altra funzione, che verrà eseguita successivamente. Utile per operazioni asincrone. Esempio: setTimeout(()=>console.log('Ciao!'),1000); esegue la callback dopo 1 secondo."
    }
]
