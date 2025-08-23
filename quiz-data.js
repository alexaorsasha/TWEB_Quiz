let quizData =

   [
        {
            question: "Il World Wide Web è un servizio della rete Internet di tipo:",
            options: [
                "Peer-to-peer",
                "Client/server",
                "Broadcasting",
                "Multipoint"
            ],
            correct: "Client/server"
        },
        {
            question: "Su quale protocollo di livello applicativo si basa il World Wide Web?",
            options: [
                "FTP",
                "SMTP",
                "HTTP",
                "TCP"
            ],
            correct: "HTTP"
        },
        {
            question: "Qual è l'obiettivo principale di una richiesta HTTP GET?",
            options: [
                "Inviare dati al server per l'elaborazione",
                "Ottenere una risorsa dal Web Server",
                "Stabilire una connessione sicura",
                "Chiedere al server di chiudere la connessione"
            ],
            correct: "Ottenere una risorsa dal Web Server"
        },
        {
            question: "Qual è lo scopo principale di una richiesta HTTP POST?",
            options: [
                "Ottenere dati dal server",
                "Inviare dati al Web Server perché li elabori o li conservi",
                "Verificare la disponibilità di una risorsa",
                "Aggiornare una risorsa esistente"
            ],
            correct: "Inviare dati al Web Server perché li elabori o li conservi"
        },
        {
            question: "Cosa indica una URL (Uniform Resource Locator)?",
            options: [
                "Il tipo di browser utilizzato",
                "La velocità di connessione",
                "Una stringa di testo che identifica univocamente ogni risorsa disponibile sul Web",
                "Il nome dell'utente che naviga"
            ],
            correct: "Una stringa di testo che identifica univocamente ogni risorsa disponibile sul Web"
        },
        {
            question: "Quale parte di una URL identifica lo specifico Web Server a cui la richiesta è indirizzata?",
            options: [
                "Protocol",
                "Hostname",
                "Path",
                "Fragment"
            ],
            correct: "Hostname"
        },
        {
            question: "In una URL, a cosa serve il 'path'?",
            options: [
                "A specificare il numero di porta",
                "A denotare un percorso per reperire sul server la risorsa",
                "A identificare il protocollo",
                "A aggiungere informazioni chiave-valore"
            ],
            correct: "A denotare un percorso per reperire sul server la risorsa"
        },
        {
            question: "Cosa indica la 'query string' in una URL?",
            options: [
                "La versione del protocollo HTTP",
                "Informazioni aggiuntive alla richiesta, sotto forma di coppie chiave/valore",
                "Il tipo di file richiesto",
                "Una sezione specifica all'interno della pagina"
            ],
            correct: "Informazioni aggiuntive alla richiesta, sotto forma di coppie chiave/valore"
        },
        {
            question: "Quando la risorsa inviata in risposta è una pagina HTML, a cosa serve il 'fragment' nella URL?",
            options: [
                "A specificare un parametro di sicurezza",
                "A indicare una collocazione precisa all'interno della pagina HTML a cui il browser deve posizionarsi",
                "A definire il tipo di codifica dei caratteri",
                "A specificare una risorsa alternativa"
            ],
            correct: "A indicare una collocazione precisa all'interno della pagina HTML a cui il browser deve posizionarsi"
        },
        {
            question: "Qual è il servizio di livello applicativo responsabile di tradurre lo hostname nel corrispondente indirizzo IP?",
            options: [
                "HTTP",
                "FTP",
                "DNS",
                "SMTP"
            ],
            correct: "DNS"
        },
        {
            question: "Cosa sono le pagine HTML nel contesto del Web?",
            options: [
                "Programmi eseguibili lato server",
                "File che contengono solo immagini",
                "Il mattone fondamentale del Web, documenti che il browser visualizza",
                "Protocolli di comunicazione di rete"
            ],
            correct: "Il mattone fondamentale del Web, documenti che il browser visualizza"
        },
        {
            question: "Qual è la natura di HTML (HyperText Markup Language)?",
            options: [
                "È un linguaggio di programmazione",
                "È un linguaggio di markup (annotazione)",
                "È un database management system",
                "È un protocollo di rete"
            ],
            correct: "È un linguaggio di markup (annotazione)"
        },
        {
            question: "Cosa si intende per risorsa 'statica' in un Web Server?",
            options: [
                "Una risorsa che non può essere modificata",
                "Una risorsa che corrisponde a un file già esistente, restituito dal server al client",
                "Una risorsa che viene calcolata sul momento dal Web Server",
                "Una risorsa che non è accessibile pubblicamente"
            ],
            correct: "Una risorsa che corrisponde a un file già esistente, restituito dal server al client"
        },
        {
            question: "Cosa si intende per risorsa 'dinamica' in un Web Server?",
            options: [
                "Una risorsa che viene sempre aggiornata ogni secondo",
                "Una risorsa che non richiede elaborazione da parte del server",
                "Una risorsa che viene calcolata sul momento dal Web Server",
                "Una risorsa di dimensioni fisse"
            ],
            correct: "Una risorsa che viene calcolata sul momento dal Web Server"
        },
        {
            question: "Quale linguaggio è eseguito dal browser per rendere le pagine HTML interattive?",
            options: [
                "Java",
                "Python",
                "JavaScript",
                "PHP"
            ],
            correct: "JavaScript"
        },
        {
            question: "Qual è il ruolo principale del Document Object Model (DOM)?",
            options: [
                "Gestire le connessioni di rete",
                "La struttura dati in memoria che rappresenta la pagina HTML e permette la manipolazione tramite JavaScript",
                "Comprimere i file CSS",
                "Definire i protocolli di sicurezza"
            ],
            correct: "La struttura dati in memoria che rappresenta la pagina HTML e permette la manipolazione tramite JavaScript"
        },
        {
            question: "Quali sono le due tipologie principali di eventi gestiti in un'applicazione client-side?",
            options: [
                "Eventi di sistema e eventi di stampa",
                "Eventi di rete e eventi di file system",
                "Eventi utente e eventi di rete",
                "Eventi di database e eventi di logging"
            ],
            correct: "Eventi utente e eventi di rete"
        },
        {
            question: "Come sono gestite le richieste HTTP generate dal codice JavaScript lato client?",
            options: [
                "Vengono bloccate finché non arriva la risposta",
                "Sono bloccanti e fermano l'esecuzione della pagina",
                "Vengono avviate in modo asincrono, con la gestione della risposta demandata a una funzione",
                "Vengono reindirizzate a un server differente"
            ],
            correct: "Vengono avviate in modo asincrono, con la gestione della risposta demandata a una funzione"
        },
        {
            question: "Quali sono le tre parti principali di un messaggio HTTP (Request o Response)?",
            options: [
                "Payload, Query String, Fragment",
                "Start line, Header, Body",
                "Protocol, Hostname, Path",
                "Method, URL, Version"
            ],
            correct: "Start line, Header, Body"
        },
        {
            question: "In una richiesta HTTP, quale parte specifica l'azione che deve essere eseguita sul server (es. GET o POST)?",
            options: [
                "Header",
                "Body",
                "Status Code",
                "HTTP method nella Request line"
            ],
            correct: "HTTP method nella Request line"
        },
        {
            question: "Qual è l'obiettivo di una richiesta HTTP con method GET?",
            options: [
                "Inviare dati al server",
                "Il server deve fornire informazioni al client",
                "Aggiornare il database",
                "Eliminare una risorsa"
            ],
            correct: "Il server deve fornire informazioni al client"
        },
        {
            question: "Cosa indicano gli 'Header' in un messaggio HTTP?",
            options: [
                "Il contenuto vero e proprio del messaggio",
                "Meta-informazioni che dettagliamo la richiesta/risposta",
                "Solo il tipo di client che sta formulando la richiesta",
                "Il risultato di un'elaborazione"
            ],
            correct: "Meta-informazioni che dettagliamo la richiesta/risposta"
        },
        {
            question: "Quale formato è usato negli header HTTP per specificare il tipo di dato accettato o inviato?",
            options: [
                "JSON",
                "XML",
                "MIME",
                "YAML"
            ],
            correct: "MIME"
        },
        {
            question: "Quale tipo MIME si usa per le pagine HTML?",
            options: [
                "application/json",
                "text/plain",
                "text/html",
                "image/jpeg"
            ],
            correct: "text/html"
        },
        {
            question: "Perché le richieste HTTP di tipo GET non hanno un body?",
            options: [
                "Per ragioni di sicurezza",
                "Perché il loro obiettivo è ottenere dati, non inviarne",
                "Perché il body è riservato solo alle risposte",
                "Perché sono sempre molto piccole"
            ],
            correct: "Perché il loro obiettivo è ottenere dati, non inviarne"
        },
        {
            question: "Cosa indica lo 'status code' nella Response line di una risposta HTTP?",
            options: [
                "La dimensione del body",
                "Se la richiesta è stata elaborata con successo o meno",
                "La versione del protocollo",
                "Il tempo di risposta del server"
            ],
            correct: "Se la richiesta è stata elaborata con successo o meno"
        },
        {
            question: "Quale categoria di status code HTTP indica che una richiesta è stata processata con successo?",
            options: [
                "1XX",
                "2XX",
                "3XX",
                "4XX"
            ],
            correct: "2XX"
        },
        {
            question: "Quale status code HTTP indica un errore del client, come 'Not Found'?",
            options: [
                "200 OK",
                "301 Moved Permanently",
                "404 Not Found",
                "500 Internal Server Error"
            ],
            correct: "404 Not Found"
        },
        {
            question: "Qual è il concetto alla base di un framework CSS come Bootstrap?",
            options: [
                "Fornire un nuovo linguaggio per la creazione di layout",
                "Fornire un insieme di classi CSS e componenti JavaScript predefiniti per accelerare lo sviluppo di UI",
                "Sostituire completamente la necessità di scrivere HTML",
                "Essere un'alternativa a JavaScript per l'interattività"
            ],
            correct: "Fornire un insieme di classi CSS e componenti JavaScript predefiniti per accelerare lo sviluppo di UI"
        },
        {
            question: "Qual è la filosofia di un framework come Tailwind CSS?",
            options: [
                "Fornire componenti UI completi e pronti all'uso",
                "Separare completamente la struttura (HTML) dallo stile (CSS)",
                "Fornire classi di utilità a basso livello per costruire design personalizzati direttamente nell'HTML",
                "Generare automaticamente il CSS a partire da un design grafico"
            ],
            correct: "Fornire classi di utilità a basso livello per costruire design personalizzati direttamente nell'HTML"
        },
        {
            question: "Cosa si intende con 'specificità' in CSS?",
            options: [
                "La capacità di un selettore di essere applicato a più elementi",
                "Un algoritmo che determina quale regola CSS ha la precedenza quando più regole si applicano a un elemento",
                "La velocità con cui il browser applica una regola di stile",
                "La necessità di specificare ogni proprietà CSS per un elemento"
            ],
            correct: "Un algoritmo che determina quale regola CSS ha la precedenza quando più regole si applicano a un elemento"
        },
        {
            question: "Quale selettore CSS ha la specificità più alta tra i seguenti?",
            options: [
                "Un selettore di tipo (es. `p`)",
                "Un selettore di classe (es. `.button`)",
                "Un selettore di ID (es. `#header`)",
                "Uno stile in linea (attributo `style`)"
            ],
            correct: "Uno stile in linea (attributo `style`)"
        },
        {
            question: "In HTML, qual è il significato del tag `<a>`?",
            options: [
                "Immagine",
                "Paragrafo",
                "Collegamento ipertestuale",
                "Lista"
            ],
            correct: "Collegamento ipertestuale"
        },
        {
            question: "Qual è la funzione del tag `<img>` in HTML?",
            options: [
                "Creare un link",
                "Incorporare un'immagine",
                "Definire un'intestazione",
                "Creare un campo di input"
            ],
            correct: "Incorporare un'immagine"
        },
        {
            question: "Quale attributo del tag `<img>` specifica il percorso dell'immagine?",
            options: [
                "`alt`",
                "`title`",
                "`src`",
                "`href`"
            ],
            correct: "`src`"
        },
        {
            question: "Cosa rappresenta il tag `<div>` in HTML?",
            options: [
                "Un'intestazione di livello uno",
                "Un blocco di testo preformattato",
                "Un contenitore generico a livello di blocco per raggruppare elementi",
                "Un elemento di input per testo"
            ],
            correct: "Un contenitore generico a livello di blocco per raggruppare elementi"
        },
        {
            question: "Come si applica uno stile CSS a tutti gli elementi di un certo tipo?",
            options: [
                "Usando un selettore di ID",
                "Usando un selettore di classe",
                "Usando un selettore di tipo",
                "Usando uno stile in linea"
            ],
            correct: "Usando un selettore di tipo"
        },
        {
            question: "Qual è il selettore CSS per un elemento con `id=\"myId\"`?",
            options: [
                "`.myId`",
                "`#myId`",
                "`myId`",
                "`*myId`"
            ],
            correct: "`#myId`"
        },
        {
            question: "Qual è il selettore CSS per gli elementi con `class=\"myClass\"`?",
            options: [
                "`myClass`",
                "`#myClass`",
                "`.myClass`",
                "`$myClass`"
            ],
            correct: "`.myClass`"
        },
        {
            question: "Cosa si intende per 'responsive design' nel contesto web?",
            options: [
                "Un design che risponde velocemente ai click dell'utente",
                "Un design che si adatta a diverse dimensioni di schermo e dispositivi",
                "Un design che utilizza solo immagini reattive",
                "Un design che carica solo il contenuto visibile"
            ],
            correct: "Un design che si adatta a diverse dimensioni di schermo e dispositivi"
        },
        {
            question: "Qual è l'unità di misura CSS più comune per i font, che si riferisce alla dimensione del font dell'elemento radice (`<html>`)?",
            options: [
                "px",
                "em",
                "rem",
                "%"
            ],
            correct: "rem"
        },
        {
            question: "In CSS Flexbox, quale proprietà definisce la direzione degli elementi all'interno del contenitore (es. `row` o `column`)?",
            options: [
                "`justify-content`",
                "`align-items`",
                "`flex-direction`",
                "`flex-wrap`"
            ],
            correct: "`flex-direction`"
        },
        {
            question: "Qual è lo scopo principale del CSS Grid Layout?",
            options: [
                "Allineare elementi su una singola riga o colonna",
                "Creare layout complessi basati su una griglia bidimensionale di righe e colonne",
                "Gestire le animazioni degli elementi",
                "Definire gli stili del testo"
            ],
            correct: "Creare layout complessi basati su una griglia bidimensionale di righe e colonne"
        },
        {
            question: "Come si rende un elemento invisibile e non più parte del layout in CSS?",
            options: [
                "`opacity: 0;`",
                "`visibility: hidden;`",
                "`display: none;`",
                "`position: absolute;`"
            ],
            correct: "`display: none;`"
        },
        {
            question: "Qual è il vantaggio principale di usare un pre-processore CSS come SASS/SCSS?",
            options: [
                "Compila il CSS in JavaScript",
                "Permette l'uso di variabili, nidificazione e mixin, migliorando l'organizzazione e la riusabilità del codice",
                "Rende il CSS direttamente compatibile con tutti i browser",
                "Crea automaticamente il layout della pagina"
            ],
            correct: "Permette l'uso di variabili, nidificazione e mixin, migliorando l'organizzazione e la riusabilità del codice"
        },
        {
            question: "Cosa significa 'Front-end' in un'applicazione web?",
            options: [
                "La parte dell'applicazione che gestisce il database",
                "La parte dell'applicazione che risiede sul server",
                "Lo strato di un'applicazione che interagisce con l'utente (lato client)",
                "Il sistema di sicurezza dell'applicazione"
            ],
            correct: "Lo strato di un'applicazione che interagisce con l'utente (lato client)"
        },
        {
            question: "Cosa significa 'Back-end' in un'applicazione web?",
            options: [
                "La parte dell'applicazione visibile all'utente",
                "La logica di business e la persistenza dei dati, tipicamente lato server",
                "La progettazione grafica dell'interfaccia utente",
                "Il codice JavaScript eseguito nel browser"
            ],
            correct: "La logica di business e la persistenza dei dati, tipicamente lato server"
        },
        {
            question: "Qual è lo scopo principale dell'elemento `<form>` in HTML?",
            options: [
                "Visualizzare un'immagine",
                "Definire un'area per input utente e inviare dati al server",
                "Creare un collegamento ipertestuale",
                "Incorporare un video"
            ],
            correct: "Definire un'area per input utente e inviare dati al server"
        },
        {
            question: "Quale attributo HTML si usa per specificare una classe CSS a un elemento?",
            options: [
                "`id`",
                "`style`",
                "`class`",
                "`name`"
            ],
            correct: "`class`"
        },
        {
            question: "Quale attributo HTML si usa per specificare un ID univoco a un elemento?",
            options: [
                "`class`",
                "`name`",
                "`id`",
                "`type`"
            ],
            correct: "`id`"
        },
       {
           question: "Qual è la natura di Javascript rispetto alla sua esecuzione?",
           options: [
               "È un linguaggio compilato",
               "È un linguaggio interpretato",
               "È un linguaggio ibrido",
               "È un linguaggio macchina"
           ],
           correct: "È un linguaggio interpretato"
       },
       {
           question: "Qual è il nome ufficiale dello standard di Javascript?",
           options: [
               "Java",
               "JS Standard",
               "ECMAScript",
               "MozillaScript"
           ],
           correct: "ECMAScript"
       },
       {
           question: "Quale caratteristica descrive il fatto che Javascript possa convertire automaticamente i dati da un tipo all'altro?",
           options: [
               "Fortemente tipato",
               "Debolmente tipato",
               "Tipato staticamente",
               "Non tipato"
           ],
           correct: "Debolmente tipato"
       },
       {
           question: "In Javascript, quando viene stabilito il tipo di un'espressione?",
           options: [
               "Solo a compile time",
               "Solo a run time",
               "Sia a compile time che a run time",
               "Mai"
           ],
           correct: "Solo a run time"
       },
       {
           question: "Cosa si intende quando si dice che Javascript è un linguaggio object-oriented basato su prototipi?",
           options: [
               "Gli oggetti vengono creati solo tramite classi formali.",
               "Gli oggetti non hanno bisogno di classi per essere creati e possono ereditare proprietà da altri oggetti (prototipi).",
               "Gli oggetti sono strutture dati fisse e immutabili.",
               "La programmazione è interamente funzionale, senza oggetti."
           ],
           correct: "Gli oggetti non hanno bisogno di classi per essere creati e possono ereditare proprietà da altri oggetti (prototipi)."
       },
       {
           question: "Qual è il meccanismo che permette di tradurre un programma scritto per una versione più recente di ECMAScript in una versione precedente?",
           options: [
               "Compilazione",
               "Interpretazione",
               "Transpilazione",
               "Debug"
           ],
           correct: "Transpilazione"
       },
       {
           question: "Qual è il ruolo principale di un 'motore di esecuzione' in un linguaggio interpretato come Javascript?",
           options: [
               "Tradurre il codice in linguaggio macchina una volta per tutte.",
               "Eseguire direttamente le istruzioni di alto livello del linguaggio.",
               "Gestire l'interfaccia utente.",
               "Archiviare i dati su disco."
           ],
           correct: "Eseguire direttamente le istruzioni di alto livello del linguaggio."
       },
       {
           question: "Cosa si crea all'interno del browser per ogni pagina web caricata, che viene resettato al ricaricamento della pagina?",
           options: [
               "Un database",
               "Una sandbox (ambiente di esecuzione separato)",
               "Un server locale",
               "Un file di log"
           ],
           correct: "Una sandbox (ambiente di esecuzione separato)"
       },
       {
           question: "Quale oggetto è accessibile ai programmi Javascript nell'ambiente di esecuzione del browser e rappresenta la pagina HTML?",
           options: [
               "Window",
               "Navigator",
               "Document (DOM)",
               "Console"
           ],
           correct: "Document (DOM)"
       },
       {
           question: "Qual è la API utilizzata per effettuare richieste HTTP dal codice Javascript lato client?",
           options: [
               "DOM API",
               "Storage API",
               "Fetch API",
               "Geolocation API"
           ],
           correct: "Fetch API"
       },
       {
           question: "Dove è tipicamente inserito il tag `<script>` in una pagina HTML, se si desidera che lo script venga eseguito immediatamente senza aspettare il caricamento della pagina?",
           options: [
               "Nella sezione `<body>`",
               "Alla fine del file HTML",
               "Nella sezione `<head>`",
               "Dopo la chiusura dell'elemento `<html>`"
           ],
           correct: "Nella sezione `<head>`"
       },
       {
           question: "Quale attributo del tag `<script>` permette di rimandare l'esecuzione dello script a dopo che la pagina è stata caricata?",
           options: [
               "`async`",
               "`src`",
               "`defer`",
               "`type`"
           ],
           correct: "`defer`"
       },
       {
           question: "Qual è il tipo di `number` in Javascript che include sia interi che decimali?",
           options: [
               "integer",
               "float",
               "double (floating point a 64 bit)",
               "decimal"
           ],
           correct: "double (floating point a 64 bit)"
       },
       {
           question: "Quali caratteri possono essere usati per definire una stringa in Javascript, inclusi i 'template literal'?",
           options: [
               "Solo virgolette doppie (`\"`)",
               "Solo apici singoli (`'`)",
               "Virgolette doppie (`\"`), apici singoli (`'`) e backtick (`` ` ``)",
               "Solo backtick (`` ` ``)"
           ],
           correct: "Virgolette doppie (`\"`), apici singoli (`'`) e backtick (`` ` ``)"
       },
       {
           question: "Quali sono i due tipi speciali in Javascript il cui significato in parte si sovrappone e che rappresentano l'assenza di valore?",
           options: [
               "Empty e Void",
               "None e Nil",
               "Undefined e Null",
               "Zero e False"
           ],
           correct: "Undefined e Null"
       },
       {
           question: "Cosa indica il valore `undefined` in Javascript?",
           options: [
               "Un errore del programma",
               "Una variabile non assegnata o il risultato di una funzione che non restituisce nulla",
               "Un oggetto nullo",
               "Una stringa vuota"
           ],
           correct: "Una variabile non assegnata o il risultato di una funzione che non restituisce nulla"
       },
       {
           question: "Come si dichiara una variabile in Javascript il cui valore non potrà più cambiare dopo l'inizializzazione?",
           options: [
               "Con la parola chiave `var`",
               "Con la parola chiave `let`",
               "Con la parola chiave `const`",
               "Con la parola chiave `static`"
           ],
           correct: "Con la parola chiave `const`"
       },
       {
           question: "Se si assegna un oggetto o un array a una variabile dichiarata con `const`, cosa non potrà cambiare?",
           options: [
               "Il contenuto dell'oggetto/array",
               "Le proprietà dell'oggetto",
               "Il riferimento all'oggetto/array in memoria",
               "La dimensione dell'array"
           ],
           correct: "Il riferimento all'oggetto/array in memoria"
       },
       {
           question: "Qual è una caratteristica distintiva degli array in Javascript riguardo alla loro dimensione?",
           options: [
               "Hanno una dimensione fissa prestabilita",
               "La lunghezza è data dall'ultima posizione occupata + 1 e non è obbligatorio che gli elementi siano contigui",
               "Possono contenere solo un tipo di dato specifico",
               "Non possono essere modificati dopo la creazione"
           ],
           correct: "La lunghezza è data dall'ultima posizione occupata + 1 e non è obbligatorio che gli elementi siano contigui"
       },
       {
           question: "Quale metodo di un array Javascript rimuove e restituisce l'ultimo elemento?",
           options: [
               "`shift()`",
               "`push()`",
               "`pop()`",
               "`slice()`"
           ],
           correct: "`pop()`"
       },
       {
           question: "Quale metodo di un array Javascript aggiunge un elemento in coda?",
           options: [
               "`unshift()`",
               "`push()`",
               "`splice()`",
               "`join()`"
           ],
           correct: "`push()`"
       },
       {
           question: "Come si definisce un oggetto base in Javascript utilizzando la notazione 'object literal'?",
           options: [
               "Usando parentesi quadre `[]`",
               "Usando parentesi tonde `()`",
               "Usando parentesi graffe `{}`",
               "Usando il costrutto `new Object()`"
           ],
           correct: "Usando parentesi graffe `{}`"
       },
       {
           question: "Quali sono i due modi per accedere alle proprietà di un oggetto in Javascript?",
           options: [
               "Solo dot notation (`oggetto.proprietà`)",
               "Solo square bracket notation (`oggetto[\"proprietà\"]`)",
               "Dot notation (`oggetto.proprietà`) e square bracket notation (`oggetto[\"proprietà\"]`)",
               "Tramite indici numerici"
           ],
           correct: "Dot notation (`oggetto.proprietà`) e square bracket notation (`oggetto[\"proprietà\"]`)"
       },
       {
           question: "Come si definisce il costruttore all'interno di una classe Javascript?",
           options: [
               "Con la parola chiave `init`",
               "Con la parola chiave `constructor`",
               "Con la parola chiave `new`",
               "Automaticamente dal sistema"
           ],
           correct: "Con la parola chiave `constructor`"
       },
       {
           question: "In Javascript, tutte le proprietà e i metodi di una classe sono di default:",
           options: [
               "Privati",
               "Protetti",
               "Pubblici",
               "Statici"
           ],
           correct: "Pubblici"
       },
       {
           question: "Perché le classi Javascript non prevedono una sezione per l'elenco delle proprietà?",
           options: [
               "Perché le proprietà sono definite solo nel costruttore.",
               "Perché gli oggetti possono acquisire o perdere proprietà dopo essere stati creati e non ci sono controlli di tipo.",
               "Perché le proprietà sono sempre private.",
               "Perché Javascript non supporta le proprietà."
           ],
           correct: "Perché gli oggetti possono acquisire o perdere proprietà dopo essere stati creati e non ci sono controlli di tipo."
       },
       {
           question: "Come invoca una sottoclasse il costruttore della sua superclasse in Javascript?",
           options: [
               "Usando `this()`",
               "Usando `parent()`",
               "Usando `super()`",
               "Non è necessario invocarlo"
           ],
           correct: "Usando `super()`"
       },
       {
           question: "Qual è la differenza fondamentale tra l'operatore di uguaglianza `==` e `===` in Javascript?",
           options: [
               "`==` confronta solo i tipi, `===` confronta solo i valori.",
               "`==` confronta solo i valori, `===` confronta sia i valori che i tipi.",
               "`==` confronta valori convertendo i tipi se necessario, `===` confronta valori e tipi senza conversione.",
               "Sono identici, non c'è differenza."
           ],
           correct: "`==` confronta valori convertendo i tipi se necessario, `===` confronta valori e tipi senza conversione."
       },
       {
           question: "Quale ciclo `for` in Javascript è utilizzato per iterare sulle proprietà di un oggetto?",
           options: [
               "`for (let i = 0; ...)`",
               "`for (const elem of iterable)`",
               "`for (const key in object)`",
               "`for each (item in collection)`"
           ],
           correct: "`for (const key in object)`"
       },
       {
           question: "Quale ciclo `for` in Javascript è utilizzato per iterare sugli elementi di una struttura dati iterabile come un array?",
           options: [
               "`for (let i = 0; ...)`",
               "`for (const elem of iterable)`",
               "`for (const key in object)`",
               "`for (index = 0; ...)`"
           ],
           correct: "`for (const elem of iterable)`"
       },
       {
           question: "Quanti modi principali esistono per dichiarare una funzione in Javascript?",
           options: [
               "Uno",
               "Due",
               "Tre",
               "Quattro"
           ],
           correct: "Tre"
       },
       {
           question: "Se una funzione Javascript non esegue esplicitamente una `return`, quale valore restituirà?",
           options: [
               "Null",
               "0",
               "Undefined",
               "Una stringa vuota"
           ],
           correct: "Undefined"
       },
       {
           question: "Qual è il principale vantaggio di TypeScript rispetto a JavaScript?",
           options: [
               "Rende il codice più veloce a runtime",
               "Aumenta la sintassi di Javascript con un sistema di tipi, permettendo la verifica della consistenza dei tipi a compile-time",
               "Elimina la necessità di un browser per l'esecuzione",
               "Permette la creazione di siti web senza HTML o CSS"
           ],
           correct: "Aumenta la sintassi di Javascript con un sistema di tipi, permettendo la verifica della consistenza dei tipi a compile-time"
       },
       {
           question: "Cosa succede ai costrutti aggiuntivi di TypeScript (come le dichiarazioni di tipo) dopo la compilazione in JavaScript?",
           options: [
               "Vengono inclusi nel codice JavaScript compilato.",
               "Vengono ignorati durante la compilazione.",
               "Scompaiono e non hanno impatto sull'esecuzione del codice.",
               "Si trasformano in commenti."
           ],
           correct: "Scompaiono e non hanno impatto sull'esecuzione del codice."
       },
       {
           question: "Cosa si intende per 'inferenza dei tipi' in TypeScript?",
           options: [
               "La capacità del programmatore di indovinare i tipi.",
               "La determinazione del tipo risultante di funzioni ed espressioni in fase di compilazione.",
               "La conversione automatica dei tipi a runtime.",
               "La dichiarazione manuale di tutti i tipi."
           ],
           correct: "La determinazione del tipo risultante di funzioni ed espressioni in fase di compilazione."
       },
       {
           question: "Qual è il principale beneficio del type checking di TypeScript?",
           options: [
               "Accelerare l'esecuzione del codice.",
               "Prevenire molti errori di programmazione già in fase di scrittura del codice/compilazione.",
               "Rendere il codice compatibile con browser più vecchi.",
               "Ridurre la dimensione del bundle finale."
           ],
           correct: "Prevenire molti errori di programmazione già in fase di scrittura del codice/compilazione."
       },
       {
           question: "In TypeScript, cosa indica il tipo `any`?",
           options: [
               "Che il tipo è sconosciuto e non verrà controllato.",
               "Un tipo di dato generico che può essere qualsiasi cosa, ma fa perdere gran parte dei vantaggi di TypeScript.",
               "Un tipo di dato numerico.",
               "Un errore di compilazione."
           ],
           correct: "Un tipo di dato generico che può essere qualsiasi cosa, ma fa perdere gran parte dei vantaggi di TypeScript."
       },
       {
           question: "A cosa servono le dichiarazioni di tipo in TypeScript, dato che scompaiono dopo la compilazione?",
           options: [
               "A influenzare lo slot di memoria utilizzato per i dati.",
               "A verificare la consistenza dei tipi nelle espressioni e negli assegnamenti a compile-time.",
               "A migliorare la velocità di rete dell'applicazione.",
               "A generare documentazione automatica."
           ],
           correct: "A verificare la consistenza dei tipi nelle espressioni e negli assegnamenti a compile-time."
       },
       {
           question: "Quale tool è comunemente utilizzato per la gestione dei package in un progetto Javascript/Typescript?",
           options: [
               "Git",
               "Webpack",
               "npm (node package manager)",
               "Babel"
           ],
           correct: "npm (node package manager)"
       },
       {
           question: "Cosa si intende per 'package manager' nel contesto dello sviluppo web?",
           options: [
               "Un tool per creare pacchetti di installazione software.",
               "Un tool da linea di comando che permette di scaricare, installare e dichiarare dipendenze da package esterni.",
               "Una libreria per la gestione delle classi CSS.",
               "Un sistema di controllo versione per il codice."
           ],
           correct: "Un tool da linea di comando che permette di scaricare, installare e dichiarare dipendenze da package esterni."
       },
       {
           question: "Qual è la cartella generata da npm che contiene il codice dei package e che non va modificata manualmente?",
           options: [
               "`src`",
               "`dist`",
               "`node_modules`",
               "`build`"
           ],
           correct: "`node_modules`"
       },
       {
           question: "Quale file contiene la configurazione del progetto e le dipendenze, ed è gestito da npm ma può essere modificato a mano?",
           options: [
               "`.gitignore`",
               "`package-lock.json`",
               "`tsconfig.json`",
               "`package.json`"
           ],
           correct: "`package.json`"
       },
       {
           question: "Quale file viene generato da npm e contiene le dipendenze e sotto-dipendenze del progetto, e non dovrebbe essere modificato a mano?",
           options: [
               "`package.json`",
               "`package-lock.json`",
               "`tsconfig.json`",
               "`README.md`"
           ],
           correct: "`package-lock.json`"
       },
       {
           question: "Qual è la differenza principale tra 'Dev dependencies' e 'Runtime dependencies' in npm?",
           options: [
               "Le Dev dependencies sono necessarie per l'esecuzione, le Runtime dependencies per lo sviluppo.",
               "Le Dev dependencies sono per il client, le Runtime dependencies per il server.",
               "Le Dev dependencies sono necessarie in fase di sviluppo e scompaiono in distribuzione, le Runtime dependencies sono necessarie in fase di esecuzione.",
               "Le Dev dependencies sono più grandi delle Runtime dependencies."
           ],
           correct: "Le Dev dependencies sono necessarie in fase di sviluppo e scompaiono in distribuzione, le Runtime dependencies sono necessarie in fase di esecuzione."
       },
       {
           question: "Qual è il comando per installare un package come 'dev dependency' usando npm?",
           options: [
               "`npm install -g nome-package`",
               "`npm install --save nome-package`",
               "`npm install -D nome-package`",
               "`npm install nome-package`"
           ],
           correct: "`npm install -D nome-package`"
       },
       {
           question: "Qual è il comando per inizializzare un progetto all'uso di TypeScript, creando il file `tsconfig.json`?",
           options: [
               "`npm init`",
               "`npx tsc --init`",
               "`tsc --create`",
               "`npm typescript --init`"
           ],
           correct: "`npx tsc --init`"
       },
       {
           question: "Nel file `tsconfig.json`, quale opzione del compilatore specifica la versione di Javascript in cui deve essere scritto l'output della compilazione?",
           options: [
               "`module`",
               "`target`",
               "`outDir`",
               "`strict`"
           ],
           correct: "`target`"
       },
       {
           question: "Quale opzione del compilatore in `tsconfig.json` è usata per indicare la cartella di output per i file JavaScript compilati?",
           options: [
               "`rootDir`",
               "`sourceMap`",
               "`outDir`",
               "`baseUrl`"
           ],
           correct: "`outDir`"
       },
       {
           question: "In TypeScript, le dichiarazioni di tipo di variabili e parametri sono obbligatorie?",
           options: [
               "Sì, sempre.",
               "No, mai.",
               "Sì, a meno che non venga immediatamente assegnato un valore da cui TypeScript possa inferire il tipo.",
               "Solo per le funzioni."
           ],
           correct: "Sì, a meno che non venga immediatamente assegnato un valore da cui TypeScript possa inferire il tipo."
       },
       {
           question: "Come si esprime un array in TypeScript con un numero finito e predeterminato di elementi con tipi diversi, come `[number, string, Studente]`?",
           options: [
               "Array generico",
               "Array multidimensionale",
               "Tipo tupla",
               "Oggetto array"
           ],
           correct: "Tipo tupla"
       },
       {
           question: "Qual è uno degli elementi principali di un'architettura web, come descritto nelle slide?",
           options: [
               "Database",
               "Stampante",
               "Scanner",
               "Telecamera"
           ],
           correct: "Database"
       },
       {
           question: "Nel 'flow 1: retrieval + presentation', qual è il ruolo principale della Business Logic?",
           options: [
               "Solo archiviare dati",
               "Elaborare i dati e presentare elementi di presentazione",
               "Gestire le connessioni di rete",
               "Inviare email agli utenti"
           ],
           correct: "Elaborare i dati e presentare elementi di presentazione"
       },
       {
           question: "Un esempio di 'flow 2a: user action, UI-ONLY' è:",
           options: [
               "Caricare una pagina web da zero",
               "Spostare un elemento sullo schermo (es. drag-and-drop)",
               "Salvare dati su un database",
               "Inviare un modulo con dati persistenti"
           ],
           correct: "Spostare un elemento sullo schermo (es. drag-and-drop)"
       },
       {
           question: "Il 'flow 2b: user action, non-persistent' si riferisce a:",
           options: [
               "Azioni che modificano i dati sul server",
               "Azioni che non hanno impatto sulla UI",
               "Modifiche ai dati che non devono ancora essere salvate persistentemente o azioni che influenzano la presentazione ma non i dati in sé",
               "Aggiornamenti automatici da servizi esterni"
           ],
           correct: "Modifiche ai dati che non devono ancora essere salvate persistentemente o azioni che influenzano la presentazione ma non i dati in sé"
       },
       {
           question: "Qual è la differenza chiave tra 'flow 2c: user action with persistent change' e 'flow 2b: user action, non-persistent'?",
           options: [
               "Il 2c non interagisce con il server",
               "Il 2c implica una modifica dei dati salvata in modo persistente (es. su database)",
               "Il 2c è solo lato client",
               "Il 2c non prevede interazione utente"
           ],
           correct: "Il 2c implica una modifica dei dati salvata in modo persistente (es. su database)"
       },
       {
           question: "Il 'flow 3: external update' descrive:",
           options: [
               "Un'azione dell'utente sulla UI",
               "Un aggiornamento autonomo della UI che non dipende da azioni utente o richieste esplicite",
               "Una modifica dei dati da parte del client",
               "Un'interazione tra server e database"
           ],
           correct: "Un'aggiornamento autonomo della UI che non dipende da azioni utente o richieste esplicite"
       },
       {
           question: "La logica client-side si esegue:",
           options: [
               "Esclusivamente sul server",
               "Sul browser dell'utente",
               "Su un server remoto via cloud",
               "Sul database"
           ],
           correct: "Sul browser dell'utente"
       },
       {
           question: "La logica server-side si esegue:",
           options: [
               "Sull'interfaccia utente",
               "Sul browser del client",
               "Sul server web",
               "Su un dispositivo IoT"
           ],
           correct: "Sul server web"
       },
       {
           question: "Un'applicazione con 'two-sided logic' significa che la logica è distribuita tra:",
           options: [
               "Database e servizi esterni",
               "Client e server",
               "Frontend e database",
               "API e servizi di terze parti"
           ],
           correct: "Client e server"
       },
       {
           question: "React è definito principalmente come una:",
           options: [
               "Libreria",
               "Framework completo",
               "Linguaggio di programmazione",
               "Database"
           ],
           correct: "Libreria"
       },
       {
           question: "Qual è una delle caratteristiche distintive di React?",
           options: [
               "È un framework per la creazione di backend",
               "È orientato alla creazione di interfacce utente tramite componenti",
               "È un linguaggio di scripting lato server",
               "Gestisce direttamente il database"
           ],
           correct: "È orientato alla creazione di interfacce utente tramite componenti"
       },
       {
           question: "Cosa si intende per 'Single Page Application (SPA)' nel contesto di React?",
           options: [
               "Un'applicazione con una sola pagina HTML che non interagisce con JavaScript",
               "Un'applicazione che gestisce la logica interamente sul server",
               "Un'applicazione dove l'intera interazione utente avviene su un'unica pagina HTML, con contenuto che si aggiorna dinamicamente",
               "Un'applicazione desktop che non richiede una connessione a internet"
           ],
           correct: "Un'applicazione dove l'intera interazione utente avviene su un'unica pagina HTML, con contenuto che si aggiorna dinamicamente"
       },
       {
           question: "Qual è l'approccio di React riguardo all'orientamento agli oggetti?",
           options: [
               "È fortemente basato su classi e ereditarietà classica",
               "È meno orientato agli oggetti rispetto a framework come Angular, favorendo un approccio più funzionale e basato su componenti",
               "Non supporta la programmazione orientata agli oggetti",
               "Utilizza solo prototipi senza classi"
           ],
           correct: "È meno orientato agli oggetti rispetto a framework come Angular, favorendo un approccio più funzionale e basato su componenti"
       },
       {
           question: "Quale delle seguenti non è una caratteristica chiave di un componente UI?",
           options: [
               "Template",
               "Interazione con il Data Model",
               "Persistenza su disco",
               "Comportamento/Funzionalità"
           ],
           correct: "Persistenza su disco"
       },
       {
           question: "In una gerarchia di componenti, il componente che contiene altri componenti è detto:",
           options: [
               "Componente foglia",
               "Componente figlio",
               "Componente radice",
               "Componente genitore"
           ],
           correct: "Componente genitore"
       },
       {
           question: "Perché un componente in senso astratto può essere figlio di un altro componente?",
           options: [
               "Perché possono condividere gli stessi stili CSS",
               "Perché il componente genitore deve specificare come è costruito e se include sottocomponenti",
               "Perché ereditano tutti i metodi dal genitore",
               "Per motivi di performance grafica"
           ],
           correct: "Perché il componente genitore deve specificare come è costruito e se include sottocomponenti"
       },
       {
           question: "I componenti UI sono dinamici perché:",
           options: [
               "La loro definizione cambia in fase di compilazione",
               "Possono cambiare la loro view in base al contenuto del data model e all'interazione dell'utente",
               "Possono interagire direttamente con i servizi esterni",
               "La loro posizione sullo schermo è fissa"
           ],
           correct: "Possono cambiare la loro view in base al contenuto del data model e all'interazione dell'utente"
       },
       {
           question: "Qual è la differenza fondamentale tra 'mostrare/nascondere' e 'montare/smontare' un componente figlio?",
           options: [
               "Non c'è differenza significativa",
               "Montare/smontare è solo per elementi statici",
               "Mostrare/nascondere non rimuove il componente dal DOM, mentre montare/smontare sì",
               "Montare/smontare è un'operazione più leggera"
           ],
           correct: "Mostrare/nascondere non rimuove il componente dal DOM, mentre montare/smontare sì"
       },
       {
           question: "In una SPA con React, le diverse 'schermate' o 'pagine' sono realizzate come:",
           options: [
               "File HTML distinti caricati dal server",
               "Componenti React che vengono visualizzati in modo condizionale",
               "Pagine generate lato server e poi inviate al client",
               "Popup di sistema"
           ],
           correct: "Componenti React che vengono visualizzati in modo condizionale"
       },
       {
           question: "Perché in una SPA con React non ci sono 'veri' collegamenti ipertestuali che causano il ricaricamento della pagina?",
           options: [
               "Perché React non supporta i tag `<a>`",
               "Perché la navigazione è gestita da JavaScript, mantenendo l'unica pagina HTML caricata",
               "Per motivi di sicurezza",
               "Perché le SPA non necessitano di link"
           ],
           correct: "Perché la navigazione è gestita da JavaScript, mantenendo l'unica pagina HTML caricata"
       },
       {
           question: "Quali sono i due modi principali per realizzare la navigazione in una SPA basata su componenti?",
           options: [
               "Tramite URL dirette e redirect del server",
               "Manualmente (gestendo lo stato dell'applicazione) o tramite un router (libreria)",
               "Usando solo la barra di navigazione del browser",
               "Tramite file XML di configurazione"
           ],
           correct: "Manualmente (gestendo lo stato dell'applicazione) o tramite un router (libreria)"
       },
       {
           question: "Nel pattern MVVM, il 'Modello dati' è responsabile di:",
           options: [
               "La visualizzazione degli elementi all'utente",
               "L'interazione con il database e la business logic",
               "La gestione degli eventi UI",
               "Il routing della navigazione"
           ],
           correct: "L'interazione con il database e la business logic"
       },
       {
           question: "Il 'View-Model' nel pattern MVVM ha il compito di:",
           options: [
               "Gestire la persistenza dei dati",
               "Mantenere i dati e il comportamento relativi alla View, mediando tra Modello e View",
               "Disegnare l'interfaccia utente",
               "Effettuare richieste HTTP"
           ],
           correct: "Mantenere i dati e il comportamento relativi alla View, mediando tra Modello e View"
       },
       {
           question: "Cos'è la 'View' nel pattern MVVM?",
           options: [
               "La logica di business dell'applicazione",
               "L'interfaccia utente visibile all'utente e le sue interazioni",
               "Il database dell'applicazione",
               "Un modulo per la gestione degli errori"
           ],
           correct: "L'interfaccia utente visibile all'utente e le sue interazioni"
       },
       {
           question: "In MVVM, il 'property binding' serve a:",
           options: [
               "Definire le proprietà degli oggetti nel modello",
               "Legare le proprietà del View-Model alle proprietà degli elementi della View, aggiornando automaticamente la View al cambiare del View-Model",
               "Gestire gli eventi dell'utente",
               "Connettersi a servizi di terze parti"
           ],
           correct: "Legare le proprietà del View-Model alle proprietà degli elementi della View, aggiornando automaticamente la View al cambiare del View-Model"
       },
       {
           question: "In React, un componente è fondamentalmente una:",
           options: [
               "Classe HTML",
               "Funzione di rendering",
               "Variabile globale",
               "Stringa di testo"
           ],
           correct: "Funzione di rendering"
       },
       {
           question: "Il linguaggio utilizzato per scrivere i componenti React che unisce HTML e JavaScript è chiamato:",
           options: [
               "HTMLX",
               "CSSJS",
               "JSX/TSX",
               "React Markup"
           ],
           correct: "JSX/TSX"
       },
       {
           question: "React rigenera la view di un componente quando:",
           options: [
               "Ogni secondo",
               "Lo stato del componente o le sue props cambiano",
               "Il browser viene ricaricato",
               "L'utente clicca su qualsiasi elemento"
           ],
           correct: "Lo stato del componente o le sue props cambiano"
       },
       {
           question: "Cosa è un `ReactElement`?",
           options: [
               "Un tag HTML",
               "Una stringa di testo puro",
               "Una rappresentazione leggera di un elemento DOM, che descrive cosa dovrebbe apparire sullo schermo",
               "Una classe JavaScript"
           ],
           correct: "Una rappresentazione leggera di un elemento DOM, che descrive cosa dovrebbe apparire sullo schermo"
       },
       {
           question: "Qual è la regola fondamentale per un'espressione JSX/TSX riguardo al sottoalbero del DOM che deve risultare?",
           options: [
               "Deve sempre restituire un array di elementi",
               "Deve sempre restituire un singolo elemento radice",
               "Può restituire qualsiasi numero di elementi senza una radice comune",
               "Deve restituire solo testo"
           ],
           correct: "Deve sempre restituire un singolo elemento radice"
       },
       {
           question: "Se un'espressione JSX/TSX deve restituire più radici separate, come si può risolvere il problema?",
           options: [
               "Utilizzando un array di elementi",
               "Avvolgendoli in un elemento fittizio come `<Fragment>` o `<>`",
               "Non è possibile farlo in JSX/TSX",
               "Creando più componenti separati"
           ],
           correct: "Avvolgendoli in un elemento fittizio come `<Fragment>` o `<>`"
       },
       {
           question: "In JSX/TSX, come si interpolano espressioni Javascript/Typescript all'interno dell'HTML?",
           options: [
               "Usando parentesi tonde `()`",
               "Usando parentesi quadre `[]`",
               "Usando parentesi graffe `{}`",
               "Usando il simbolo `$`"
           ],
           correct: "Usando parentesi graffe `{}`"
       },
       {
           question: "Qual è il concetto di 'property binding' in React?",
           options: [
               "Legare le proprietà di un oggetto JavaScript a un database",
               "Utilizzare espressioni JavaScript per valorizzare gli attributi HTML o le props di un componente React",
               "Collegare gli stili CSS a elementi HTML",
               "Creare un nuovo componente dinamicamente"
           ],
           correct: "Utilizzare espressioni JavaScript per valorizzare gli attributi HTML o le props di un componente React"
       },
       {
           question: "Il concetto di 'event binding' in React serve a:",
           options: [
               "Legare i dati del modello a un evento",
               "Associare una funzione JavaScript a un evento della UI (es. `onClick`)",
               "Creare nuovi eventi personalizzati",
               "Rimuovere eventi esistenti"
           ],
           correct: "Associare una funzione JavaScript a un evento della UI (es. `onClick`)"
       },
       {
           question: "Cosa significa che le funzioni di rendering dei componenti React dovrebbero essere 'pure'?",
           options: [
               "Devono contenere solo matematica",
               "Non devono avere effetti collaterali, dato lo stesso input devono produrre lo stesso output e non modificare lo stato esterno",
               "Possono modificare direttamente il DOM",
               "Devono sempre restituire un valore booleano"
           ],
           correct: "Non devono avere effetti collaterali, dato lo stesso input devono produrre lo stesso output e non modificare lo stato esterno"
       },
       {
           question: "Cosa sono le 'props' di un componente in React?",
           options: [
               "Variabili globali accessibili da tutti i componenti",
               "Variabili interne del componente che cambiano nel tempo",
               "Input di un componente, che vengono valorizzati dal componente genitore",
               "Output generati dal componente"
           ],
           correct: "Input di un componente, che vengono valorizzati dal componente genitore"
       },
       {
           question: "Qual è uno dei vantaggi principali dell'utilizzo delle props in React?",
           options: [
               "Permettono ai componenti di essere più veloci",
               "Rendono i componenti riutilizzabili e facilitano il flusso unidirezionale dei dati",
               "Riducono il numero di linee di codice HTML",
               "Connettono automaticamente il componente a un database"
           ],
           correct: "Rendono i componenti riutilizzabili e facilitano il flusso unidirezionale dei dati"
       },
       {
           question: "Spiega il concetto di 'object destructuring' in JavaScript/TypeScript applicato alle props.",
           options: [
               "È un metodo per convertire un oggetto in una stringa",
               "È un modo per estrarre facilmente proprietà da un oggetto e assegnarle a variabili, spesso usato nei parametri delle funzioni per props",
               "È un'operazione che modifica l'oggetto originale",
               "È una tecnica per nascondere le proprietà degli oggetti"
           ],
           correct: "È un modo per estrarre facilmente proprietà da un oggetto e assegnarle a variabili, spesso usato nei parametri delle funzioni per props"
       },
       {
           question: "Cosa si intende per 'stato' di un componente in React?",
           options: [
               "Lo stato di salute del server",
               "Un insieme di variabili il cui cambiamento determina una ri-renderizzazione del componente",
               "Lo stato del browser dell'utente",
               "Lo stato di connessione a internet"
           ],
           correct: "Un insieme di variabili il cui cambiamento determina una ri-renderizzazione del componente"
       },
       {
           question: "Quale hook di React è utilizzato per gestire lo stato locale di un componente funzionale?",
           options: [
               "`useEffect`",
               "`useContext`",
               "`useState`",
               "`useReducer`"
           ],
           correct: "`useState`"
       },
       {
           question: "Quando si utilizza `useState`, il valore di ritorno è una tupla contenente:",
           options: [
               "Solo il valore attuale dello stato",
               "Il valore attuale dello stato e la funzione per aggiornarlo",
               "La funzione per aggiornare lo stato e il suo tipo",
               "Il valore iniziale dello stato e il valore attuale"
           ],
           correct: "Il valore attuale dello stato e la funzione per aggiornarlo"
       },
       {
           question: "Perché la funzione di modifica dello stato restituita da `useState` non può essere invocata direttamente nel codice del componente durante la sua renderizzazione?",
           options: [
               "Perché causerebbe un loop infinito di re-rendering",
               "Perché è una funzione asincrona",
               "Perché non è una funzione JavaScript valida",
               "Perché è deprecata"
           ],
           correct: "Perché causerebbe un loop infinito di re-rendering"
       },
       {
           question: "A cosa serve la 'funzione di cleanup' in React, restituita da `useEffect`?",
           options: [
               "A pulire la memoria dopo che il browser si chiude",
               "A gestire scenari in cui un effetto deve essere annullato o invalidato prima di essere completato",
               "A eliminare i dati dal database",
               "A formattare il codice"
           ],
           correct: "A gestire scenari in cui un effetto deve essere annullato o invalidato prima di essere completato"
       },
       {
           question: "Quando React invoca la funzione di cleanup restituita da un effetto?",
           options: [
               "Solo all'avvio dell'applicazione",
               "Subito dopo aver invocato il medesimo effetto e subito prima di smontare il componente",
               "Solo quando il browser viene chiuso",
               "Ogni volta che lo stato cambia"
           ],
           correct: "Subito dopo aver invocato il medesimo effetto e subito prima di smontare il componente"
       },
       {
           question: "Qual è il problema che la funzione di cleanup risolve in caso di molteplici richieste asincrone per un dato che dipende da una prop in aggiornamento?",
           options: [
               "Evita che le richieste vadano in timeout",
               "Assicura che il dato obsoleto non sovrascriva quello corretto a causa di risposte fuori ordine",
               "Riduce il numero totale di richieste al server",
               "Aumenta la velocità di risposta del server"
           ],
           correct: "Assicura che il dato obsoleto non sovrascriva quello corretto a causa di risposte fuori ordine"
       },
       {
           question: "Cosa accade se un componente viene smontato prima che un suo effetto si sia compiuto, e l'effetto cerca di modificare uno stato che non esiste più?",
           options: [
               "Il componente viene automaticamente rimontato",
               "Si verifica un errore che React rileva e per cui suggerisce di implementare una funzione di cleanup",
               "React ignora semplicemente la modifica dello stato",
               "Il browser si blocca"
           ],
           correct: "Si verifica un errore che React rileva e per cui suggerisce di implementare una funzione di cleanup"
       },
       {
           question: "Qual è il nome della libreria React più utilizzata per la navigazione in una Single Page Application?",
           options: [
               "React Router",
               "React Navigator",
               "React Linker",
               "React DOM"
           ],
           correct: "React Router"
       },
       {
           question: "In React, quando un componente 'espone' un evento al suo genitore, significa che:",
           options: [
               "Il componente figlio crea un nuovo evento JavaScript",
               "Il componente figlio ha una prop che è una funzione che il genitore gli passa, e che il figlio invoca per comunicare un evento",
               "Il componente genitore ascolta un evento generico del DOM dal figlio",
               "Il componente figlio emette un evento globale"
           ],
           correct: "Il componente figlio ha una prop che è una funzione che il genitore gli passa, e che il figlio invoca per comunicare un evento"
       },
       {
           question: "Cosa si intende per 'Property Drilling' in React?",
           options: [
               "La pratica di passare props attraverso più livelli di componenti, anche se i componenti intermedi non le usano direttamente",
               "Un metodo per ottimizzare le performance dei componenti",
               "Una tecnica per accedere direttamente al DOM",
               "Un tipo di routing avanzato"
           ],
           correct: "La pratica di passare props attraverso più livelli di componenti, anche se i componenti intermedi non le usano direttamente"
       },
       {
           question: "Quale hook di React è utile per gestire effetti collaterali nelle funzioni di rendering dei componenti?",
           options: [
               "`useState`",
               "`useContext`",
               "`useEffect`",
               "`useRef`"
           ],
           correct: "`useEffect`"
       },
       {
           question: "Qual è il secondo parametro opzionale dell'hook `useEffect` e a cosa serve?",
           options: [
               "Una funzione di cleanup, per pulire gli effetti",
               "Un array di dipendenze, per controllare quando l'effetto deve essere rieseguito",
               "Il valore iniziale dell'effetto",
               "Il nome dell'effetto"
           ],
           correct: "Un array di dipendenze, per controllare quando l'effetto deve essere rieseguito"
       },
       {
           question: "Qual è il compito principale di un Server HTTP?",
           options: [
               "Gestire l'interfaccia utente lato client.",
               "Restare in ascolto su una porta assegnata e, quando arriva una richiesta, elaborarla e fornire una risposta.",
               "Creare database e tabelle.",
               "Sviluppare applicazioni mobile."
           ],
           correct: "Restare in ascolto su una porta assegnata e, quando arriva una richiesta, elaborarla e fornire una risposta."
       },
       {
           question: "Su quale protocollo di rete si basa un Server HTTP per ricevere e rispondere alle richieste?",
           options: [
               "FTP",
               "SMTP",
               "TCP/IP",
               "UDP"
           ],
           correct: "TCP/IP"
       },
       {
           question: "Qual è la porta di default sulla quale la maggior parte degli HTTP Server è in esecuzione?",
           options: [
               "21",
               "22",
               "80",
               "443"
           ],
           correct: "80"
       },
       {
           question: "Qual è la porta di default per la variante sicura HTTPS?",
           options: [
               "80",
               "443",
               "8080",
               "21"
           ],
           correct: "443"
       },
       {
           question: "In fase di sviluppo e test, qual è l'indirizzo IP utilizzato per comunicazioni HTTP tra servizi in esecuzione sullo stesso computer?",
           options: [
               "192.168.1.1",
               "127.0.0.1",
               "0.0.0.0",
               "255.255.255.0"
           ],
           correct: "127.0.0.1"
       },
       {
           question: "Qual è lo hostname corrispondente all'indirizzo IP 127.0.0.1?",
           options: [
               "remotehost",
               "localhost",
               "gateway",
               "nameserver"
           ],
           correct: "localhost"
       },
       {
           question: "Perché è importante la porta per differenziare i servizi in esecuzione sullo stesso host?",
           options: [
               "Perché l'indirizzo IP non è sufficiente a identificare un servizio specifico sullo stesso host.",
               "Per motivi di sicurezza avanzata.",
               "Per gestire l'autenticazione degli utenti.",
               "Per ottimizzare il caching delle risposte."
           ],
           correct: "Perché l'indirizzo IP non è sufficiente a identificare un servizio specifico sullo stesso host."
       },
       {
           question: "Un Server HTTP deve gestire una grande quantità di richieste:",
           options: [
               "Sequenzialmente.",
               "In parallelo.",
               "Con un ritardo fisso.",
               "Solo una alla volta."
           ],
           correct: "In parallelo."
       },
       {
           question: "Nel modello single-thread asynchronous event loop, come vengono prese in carico le richieste?",
           options: [
               "In modo casuale.",
               "In modo sequenziale.",
               "In base alla priorità dell'utente.",
               "Simultaneamente."
           ],
           correct: "In modo sequenziale."
       },
       {
           question: "Nel modello single-thread asynchronous event loop, come devono avvenire le elaborazioni necessarie per gestire una richiesta?",
           options: [
               "In modo sincrono.",
               "In modo bloccante.",
               "In modo asincrono.",
               "In un thread separato dedicato esclusivamente."
           ],
           correct: "In modo asincrono."
       },
       {
           question: "Qual è un esempio di Server HTTP che utilizza il modello single-thread asynchronous event loop?",
           options: [
               "Apache Web",
               "Apache Tomcat",
               "Nginx",
               "IIS"
           ],
           correct: "Nginx"
       },
       {
           question: "Nel modello multi-thread, cosa genera il Server HTTP per ogni richiesta in arrivo?",
           options: [
               "Un nuovo processo.",
               "Un thread separato e dedicato.",
               "Un nuovo socket di rete.",
               "Un file temporaneo."
           ],
           correct: "Un thread separato e dedicato."
       },
       {
           question: "Qual è un esempio di Server HTTP che utilizza il modello multi-thread?",
           options: [
               "Node.js",
               "Nginx",
               "Apache Tomcat",
               "Lighttpd"
           ],
           correct: "Apache Tomcat"
       },
       {
           question: "In termini di performance sotto alto carico, quale modello di Server HTTP ha performance più prevedibili?",
           options: [
               "Multi-thread.",
               "Single-thread asynchronous event loop.",
               "Entrambi hanno la stessa prevedibilità.",
               "Nessuno dei due è prevedibile."
           ],
           correct: "Single-thread asynchronous event loop."
       },
       {
           question: "Qual è una delle principali funzioni di un Web Server, oltre a fornire contenuti statici e dinamici?",
           options: [
               "Gestione del database SQL.",
               "Gestione di host virtuali.",
               "Gestione di stampanti di rete.",
               "Sviluppo di applicazioni desktop."
           ],
           correct: "Gestione di host virtuali."
       },
       {
           question: "Cosa include la funzione di 'fornire contenuti dinamici' da parte di un Web Server?",
           options: [
               "Solo file di testo semplici.",
               "La possibilità per gli utenti di inviare dati al server per 'pubblicarli' e le vere e proprie Applicazioni Web.",
               "Solo immagini predefinite.",
               "Esclusivamente video in streaming."
           ],
           correct: "La possibilità per gli utenti di inviare dati al server per 'pubblicarli' e le vere e proprie Applicazioni Web."
       },
       {
           question: "In una moderna applicazione client-side, quale formato è principalmente utilizzato per lo scambio di dati tra client e server?",
           options: [
               "XML",
               "HTML",
               "JSON",
               "CSV"
           ],
           correct: "JSON"
       },
       {
           question: "Perché un HTTP Server che 'pubblica' un'applicazione client-side deve fornire HTML, CSS e JS?",
           options: [
               "Perché questi sono i file che costituiscono il punto di ingresso dell'applicazione lato client.",
               "Perché sono necessari per la connessione al database.",
               "Per ragioni di sicurezza.",
               "Per migliorare le performance del server."
           ],
           correct: "Perché questi sono i file che costituiscono il punto di ingresso dell'applicazione lato client."
       },
       {
           question: "Cosa si intende per 'host virtuale' nel contesto di un Server Web?",
           options: [
               "Un server fisico non esistente.",
               "Più host ospitati da un singolo Server Web, ciascuno con il proprio hostname.",
               "Un host dedicato a una singola applicazione.",
               "Un host che utilizza un indirizzo IP dinamico."
           ],
           correct: "Più host ospitati da un singolo Server Web, ciascuno con il proprio hostname."
       },
       {
           question: "Come fa un Server Web a capire quale risorsa fornire quando ospita più host virtuali sullo stesso indirizzo IP?",
           options: [
               "Esaminando la porta di destinazione.",
               "Esaminando l'indirizzo IP del mittente.",
               "Esaminando lo hostname utilizzato dal mittente nella richiesta HTTP.",
               "Consultando un database esterno."
           ],
           correct: "Esaminando lo hostname utilizzato dal mittente nella richiesta HTTP."
       },
       {
           question: "Cosa è un 'reverse proxy' in relazione a un HTTP Server?",
           options: [
               "Un server che gestisce le richieste solo lato client.",
               "Un server che inoltra le richieste direttamente al database.",
               "Un Server HTTP che riceve le richieste e le reindirizza ad altri Server Web in base al loro contenuto.",
               "Un componente che genera contenuti dinamici."
           ],
           correct: "Un Server HTTP che riceve le richieste e le reindirizza ad altri Server Web in base al loro contenuto."
       },
       {
           question: "Qual è la differenza tra autenticazione e autorizzazione?",
           options: [
               "Sono la stessa cosa, sinonimi.",
               "Autenticazione riguarda il riconoscere l'identità dell'utente, mentre autorizzazione riguarda il permettere o vietare l'accesso a una risorsa.",
               "Autenticazione è solo per gli amministratori, autorizzazione per gli utenti.",
               "Autenticazione usa le password, autorizzazione usa i certificati."
           ],
           correct: "Autenticazione riguarda il riconoscere l'identità dell'utente, mentre autorizzazione riguarda il permettere o vietare l'accesso a una risorsa."
       },
       {
           question: "Qual è l'obiettivo principale del 'caching' di richieste e risposte da parte di un Server Web?",
           options: [
               "Aumentare il carico del server.",
               "Rallentare la risposta per motivi di sicurezza.",
               "Velocizzare la risposta e diminuire il carico del server.",
               "Generare nuove richieste."
           ],
           correct: "Velocizzare la risposta e diminuire il carico del server."
       },
       {
           question: "Cos'è il 'bandwidth throttling' e a cosa serve?",
           options: [
               "Una tecnica per aumentare la banda disponibile per una singola risposta.",
               "La riduzione artificiale dell'ampiezza di banda occupata da una singola risposta per suddividere la banda disponibile tra più stream paralleli.",
               "Un metodo per criptare il traffico di rete.",
               "Un sistema di monitoraggio del traffico di rete."
           ],
           correct: "La riduzione artificiale dell'ampiezza di banda occupata da una singola risposta per suddividere la banda disponibile tra più stream paralleli."
       },
       {
           question: "Perché un 'rewrite engine' è importante quando si adotta un meccanismo di routing lato client (es. in React)?",
           options: [
               "Perché permette al server di ignorare completamente le URL del client.",
               "Perché consente di tradurre le URL 'pulite' del client in pathname interni del server e di redirigere le richieste sulla pagina dell'applicazione se l'utente digita la URL nella barra del browser.",
               "Per migliorare le performance del database.",
               "Per criptare le richieste HTTP."
           ],
           correct: "Perché consente di tradurre le URL 'pulite' del client in pathname interni del server e di redirigere le richieste sulla pagina dell'applicazione se l'utente digita la URL nella barra del browser."
       },
       {
           question: "Qual è la differenza tra un 'Web Server' e un 'Server HTTP'?",
           options: [
               "Sono sinonimi perfetti.",
               "Un Web Server è un tipo specifico di Server HTTP che realizza il 'core business' del World Wide Web, mentre un Server HTTP si riferisce al protocollo di comunicazione e può avere scopi diversi.",
               "Un Web Server è solo lato client, un Server HTTP è solo lato server.",
               "Il Server HTTP è un software, il Web Server è un hardware."
           ],
           correct: "Un Web Server è un tipo specifico di Server HTTP che realizza il 'core business' del World Wide Web, mentre un Server HTTP si riferisce al protocollo di comunicazione e può avere scopi diversi."
       },
       {
           question: "In uno dei modelli di relazione tra Server HTTP e applicazione server-side, il Server HTTP 'contiene' una o più applicazioni. Cosa significa?",
           options: [
               "Le applicazioni sono memorizzate fisicamente all'interno del codice del Server HTTP.",
               "Il Server HTTP è un applicativo che ospita e gestisce l'esecuzione delle applicazioni server-side, spesso fornendo un ambiente di esecuzione privato per ciascuna.",
               "Le applicazioni sono solo file statici serviti dal Server HTTP.",
               "Il Server HTTP è un database per le applicazioni."
           ],
           correct: "Il Server HTTP è un applicativo che ospita e gestisce l'esecuzione delle applicazioni server-side, spesso fornendo un ambiente di esecuzione privato per ciascuna."
       },
       {
           question: "Nel modello in cui l'applicazione server-side 'contiene' il Server HTTP, qual è il punto di ingresso?",
           options: [
               "Una porta di default del sistema operativo.",
               "Il motore di esecuzione del linguaggio di programmazione, all'interno del quale l'applicazione si mette in ascolto.",
               "Un reverse proxy.",
               "Il browser del client."
           ],
           correct: "Il motore di esecuzione del linguaggio di programmazione, all'interno del quale l'applicazione si mette in ascolto."
       },
       {
           question: "Cosa si intende per 'middleware' in un'applicazione server-side?",
           options: [
               "Un componente hardware che collega il server al database.",
               "Una o più funzioni che effettuano elaborazioni preliminari sulla richiesta HTTP prima che venga presa in carico dall'app principale.",
               "Un software per la gestione degli errori.",
               "Un sistema di monitoraggio delle performance."
           ],
           correct: "Una o più funzioni che effettuano elaborazioni preliminari sulla richiesta HTTP prima che venga presa in carico dall'app principale."
       },
       {
           question: "Qual è la funzione del middleware nel bloccare le richieste?",
           options: [
               "Fermare le richieste se sono troppo lunghe.",
               "Impedire che richieste non autorizzate o malformate raggiungano l'applicazione principale.",
               "Rallentare il traffico per risparmiare banda.",
               "Registrare tutti gli errori in un log."
           ],
           correct: "Impedire che richieste non autorizzate o malformate raggiungano l'applicazione principale."
       },
       {
           question: "Come avviene l'invio della risposta dal Server HTTP verso il client/browser?",
           options: [
               "In blocco, solo a richiesta completata.",
               "Come un unico pacchetto dati.",
               "In streaming, gestito come un buffer.",
               "Tramite email."
           ],
           correct: "In streaming, gestito come un buffer."
       },
       {
           question: "Cosa è il 'core' di un'applicazione server-side, una volta individuata la richiesta?",
           options: [
               "L'invio della risposta.",
               "La fase di middleware.",
               "L'elaborazione della risposta, dove l'app esegue le proprie funzionalità.",
               "La gestione dei parametri della querystring."
           ],
           correct: "L'elaborazione della risposta, dove l'app esegue le proprie funzionalità."
       },
       {
           question: "Qual è il ruolo principale dei framework nelle applicazioni server-side?",
           options: [
               "Rendere le applicazioni più lente.",
               "Automatizzare parte dei compiti e rendere più uniformi le interfacce verso il 'mondo esterno'.",
               "Aumentare la complessità del codice.",
               "Sostituire completamente il Server HTTP."
           ],
           correct: "Automatizzare parte dei compiti e rendere più uniformi le interfacce verso il 'mondo esterno'."
       },
       {
           question: "Qual è una delle combo linguaggio/framework più usate nel web (2023) menzionate nelle slide?",
           options: [
               "PHP/Ruby on Rails",
               "Java/Spring",
               "C#/ASP.NET Core",
               "Go/Gin"
           ],
           correct: "Java/Spring"
       },
       {
           question: "Perché PHP è stato per decenni il principale linguaggio per applicazioni back-end, in particolare per i CMS come Wordpress?",
           options: [
               "Perché è l'unico linguaggio che supporta i database.",
               "Perché è un linguaggio che semplifica molto la generazione dinamica di pagine HTML.",
               "Per la sua velocità di esecuzione su larga scala.",
               "Perché non richiedeva un server HTTP."
           ],
           correct: "Perché è un linguaggio che semplifica molto la generazione dinamica di pagine HTML."
       },
       {
           question: "Quale linguaggio e framework sono attualmente la combinazione più richiesta per implementare applicativi aziendali su larga scala?",
           options: [
               "PHP/Laravel",
               "Python/Django",
               "Java/Spring o Spring Boot",
               "Node.JS/Express"
           ],
           correct: "Java/Spring o Spring Boot"
       },
       {
           question: "In Node.js, quale oggetto permette di creare un server HTTP e attivarlo in ascolto su una porta?",
           options: [
               "Il modulo `fs`",
               "L'oggetto `http`",
               "Il modulo `path`",
               "L'oggetto `console`"
           ],
           correct: "L'oggetto `http`"
       },
       {
           question: "Quali sono gli argomenti che la funzione passata a `http.createServer` in Node.js deve prendere?",
           options: [
               "Solo il body della richiesta.",
               "Un oggetto `IncomingMessage` (la richiesta) e un oggetto `ServerResponse` (la risposta).",
               "Solo la porta e l'hostname.",
               "Un array di headers."
           ],
           correct: "Un oggetto `IncomingMessage` (la richiesta) e un oggetto `ServerResponse` (la risposta)."
       },
       {
           question: "In un oggetto `IncomingMessage` (req), quale proprietà contiene il valore string pari a 'GET', 'POST', ecc.?",
           options: [
               "req.headers",
               "req.url",
               "req.method",
               "req.body"
           ],
           correct: "req.method"
       },
       {
           question: "In un oggetto `IncomingMessage` (req), quale proprietà contiene la URL assoluta (senza hostname o porta)?",
           options: [
               "req.method",
               "req.headers",
               "req.url",
               "req.query"
           ],
           correct: "req.url"
       },
       {
           question: "Per leggere il body di una richiesta POST in Node.js, si può usare `req` come:",
           options: [
               "Un oggetto JSON.",
               "Un array di stringhe.",
               "Uno stream di input.",
               "Una variabile booleana."
           ],
           correct: "Uno stream di input."
       },
       {
           question: "Quale funzione di `ServerResponse` (res) in Node.js permette di specificare lo status code della risposta?",
           options: [
               "res.write()",
               "res.end()",
               "res.setStatus()",
               "res.setHeader()"
           ],
           correct: "res.setStatus()"
       },
       {
           question: "Quale funzione di `ServerResponse` (res) in Node.js permette di inviare del testo sullo stream del body della risposta?",
           options: [
               "res.end()",
               "res.pipe()",
               "res.write()",
               "res.setHeader()"
           ],
           correct: "res.write()"
       },
       {
           question: "Quando si utilizza `req.pipe(res)` in Node.js, è necessario terminare lo stream con `res.end()`?",
           options: [
               "Sì, sempre.",
               "No, termina da solo alla fine dell'inoltro.",
               "Solo se ci sono errori.",
               "Dipende dal Content-Type."
           ],
           correct: "No, termina da solo alla fine dell'inoltro."
       },
       {
           question: "Quale libreria viene spesso utilizzata con Node.js per semplificare la creazione di server-side applications, in particolare la gestione di routing e middleware?",
           options: [
               "React",
               "Angular",
               "Express",
               "Vue"
           ],
           correct: "Express"
       },
       {
           question: "Cosa fa `app.use(express.static('public'))` in un'applicazione Express?",
           options: [
               "Definisce una route dinamica.",
               "Serve file statici dalla directory 'public'.",
               "Gestisce le richieste POST.",
               "Cripta i dati in transito."
           ],
           correct: "Serve file statici dalla directory 'public'."
       },
       {
           question: "Cosa fa `app.use(express.json())` in un'applicazione Express?",
           options: [
               "Abilita la compressione dei dati JSON.",
               "Parsifica il body delle richieste in arrivo come JSON.",
               "Invia risposte in formato JSON.",
               "Valida lo schema JSON."
           ],
           correct: "Parsifica il body delle richieste in arrivo come JSON."
       },
       {
           question: "In Express, come si definisce un handler per le richieste GET a una route specifica (es. `/test/:pr1/:pr2`)?",
           options: [
               "app.post()",
               "app.get()",
               "app.use()",
               "app.listen()"
           ],
           correct: "app.get()"
       },
       {
           question: "In Express, qual è il metodo utilizzato per avviare il server e metterlo in ascolto su una porta?",
           options: [
               "app.route()",
               "app.start()",
               "app.listen()",
               "app.run()"
           ],
           correct: "app.listen()"
       }
    ]


