let quizData =
    [
        {
            question: "Quale protocollo è alla base del World Wide Web?",
            options: ["FTP", "HTTP", "SMTP", "SSH"],
            correct: "HTTP"
        },
        {
            question: "Quale metodo HTTP è usato per inviare dati al server?",
            options: ["GET", "POST", "PUT", "HEAD"],
            correct: "POST"
        },
        {
            question: "In una URL, cosa identifica il 'fragment' (#...)?",
            options: [
                "Un percorso logico sul server",
                "Una sezione interna della pagina HTML",
                "La porta di comunicazione",
                "La query string da inviare al server"
            ],
            correct: "Una sezione interna della pagina HTML"
        },
        {
            question: "Qual è il compito del DNS nel contesto del Web?",
            options: [
                "Tradurre un hostname in indirizzo IP",
                "Connettere il browser al server tramite HTTPS",
                "Memorizzare le pagine web più visitate",
                "Eseguire script lato client"
            ],
            correct: "Tradurre un hostname in indirizzo IP"
        },
        {
            question: "Quale delle seguenti affermazioni descrive meglio una risorsa dinamica?",
            options: [
                "È sempre un file già presente sul server",
                "Viene generata al momento da un programma o script",
                "Può essere recuperata solo tramite protocollo HTTPS",
                "È un documento HTML con link ipertestuali"
            ],
            correct: "Viene generata al momento da un programma o script"
        },
        {
            question: "Cosa indica il codice di stato HTTP 404?",
            options: [
                "Richiesta processata con successo",
                "Errore del client: risorsa non trovata",
                "Errore del server: elaborazione fallita",
                "Connessione rifiutata dal server"
            ],
            correct: "Errore del client: risorsa non trovata"
        },
        {
            question: "Quale linguaggio permette di rendere interattive le pagine web nel browser?",
            options: ["PHP", "JavaScript", "CSS", "SQL"],
            correct: "JavaScript"
        },
        {
            question: "Nell’architettura a strati, quale vantaggio principale offre la separazione in layer?",
            options: [
                "Ogni strato può evolvere indipendentemente senza rompere l’interfaccia",
                "Riduce la necessità di definire interfacce",
                "Permette di evitare l’uso di database",
                "Garantisce che front-end e back-end siano sempre nello stesso linguaggio"
            ],
            correct: "Ogni strato può evolvere indipendentemente senza rompere l’interfaccia"
        },
        {
            question: "Quale tra questi NON è un elemento strutturale semantico di HTML?",
            options: ["SECTION", "ARTICLE", "DIV", "SCRIPT"],
            correct: "SCRIPT"
        },
        {
            question: "Cosa succede al DOM quando una pagina web viene ricaricata?",
            options: [
                "Viene mantenuto in memoria dal browser",
                "Viene distrutto e ricreato da zero",
                "Viene congelato e riutilizzato alla prossima visita",
                "Viene convertito in JSON e salvato localmente"
            ],
            correct: "Viene distrutto e ricreato da zero"
        },
        {
            question: "Quale attributo è obbligatorio per tutti gli elementi <'input>?",
            options: ["id", "name", "value", "placeholder"],
            correct: "name"
        },
        {
            question: "Quale combinatore CSS seleziona un elemento che segue immediatamente un altro con lo stesso genitore?",
            options: ["Spazio (discendente)", ">", "~", "+"],
            correct: "+"
        },
        {
            question: "Nell’algoritmo della cascata CSS, quale dichiarazione prevale?",
            options: [
                "Regola interna",
                "Regola esterna",
                "Regola inline",
                "Dipende dall’ordine nel file"
            ],
            correct: "Regola inline"
        },
        {
            question: "In un layout flex, cosa fa la proprietà 'justify-content: space-between'?",
            options: [
                "Allinea gli elementi al centro",
                "Distribuisce lo spazio in eccesso solo a destra",
                "Distribuisce lo spazio in eccesso tra gli elementi",
                "Riduce le dimensioni degli elementi fino a metà"
            ],
            correct: "Distribuisce lo spazio in eccesso tra gli elementi"
        },
        {
            question: "Quale differenza principale distingue un selettore per classe da un selettore per id?",
            options: [
                "La classe può essere usata per più elementi, l’id deve essere unico",
                "L’id è sempre applicato agli elementi <'div>",
                "La classe richiede valori numerici, l’id stringhe",
                "La classe viene usata solo nei form"
            ],
            correct: "La classe può essere usata per più elementi, l’id deve essere unico"
        },
        {
            question: "Qual è l’effetto di 'display: none' su un elemento HTML?",
            options: [
                "Lo rende trasparente ma ancora cliccabile",
                "Lo nasconde mantenendo lo spazio vuoto",
                "Lo rimuove completamente dal rendering",
                "Lo sposta in fondo al documento"
            ],
            correct: "Lo rimuove completamente dal rendering"
        },
        {
            question: "Quale tra le seguenti è una caratteristica del linguaggio JavaScript?",
            options: [
                "È compilato staticamente",
                "È debolmente tipato e dinamico",
                "Richiede sempre la dichiarazione del tipo",
                "Supporta solo la programmazione imperativa"
            ],
            correct: "È debolmente tipato e dinamico"
        },
        {
            question: "Quale metodo array restituisce un nuovo array con gli elementi trasformati da una funzione?",
            options: ["forEach", "map", "reduce", "filter"],
            correct: "map"
        },
        {
            question: "Cosa restituisce l’operatore `===` in JavaScript?",
            options: [
                "Confronta valori con conversione implicita",
                "Confronta valori e tipi senza conversione",
                "Confronta solo i tipi delle variabili",
                "Restituisce sempre un booleano false"
            ],
            correct: "Confronta valori e tipi senza conversione"
        },
        {
            question: "Qual è la differenza tra `for...in` e `for...of`?",
            options: [
                "`for...in` itera sugli elementi di un array, `for...of` sulle proprietà di un oggetto",
                "`for...in` itera sulle proprietà di un oggetto, `for...of` sugli elementi iterabili",
                "Entrambi iterano sulle proprietà di un oggetto",
                "`for...of` è una sintassi obsoleta di `for...in`"
            ],
            correct: "`for...in` itera sulle proprietà di un oggetto, `for...of` sugli elementi iterabili"
        },
        {
            question: "Quale metodo della DOM API è usato per registrare un listener a un evento?",
            options: [
                "document.listenEvent()",
                "element.onEvent()",
                "element.addEventListener()",
                "document.register()"
            ],
            correct: "element.addEventListener()"
        },
        {
            question: "Cosa rappresenta il concetto di closure in JavaScript?",
            options: [
                "La possibilità di eseguire più thread in parallelo",
                "Il fatto che una funzione ricordi le variabili dello scope in cui è stata creata",
                "Un blocco di codice che viene eseguito una sola volta",
                "La capacità di bloccare la propagazione degli eventi"
            ],
            correct: "Il fatto che una funzione ricordi le variabili dello scope in cui è stata creata"
        },
        {
            question: "In che ordine vengono gestiti gli eventi nel modello single-thread di JavaScript?",
            options: [
                "In parallelo, in base alla priorità",
                "In sequenza, secondo l’ordine di arrivo nella coda",
                "In ordine casuale, scelto dal browser",
                "In base alla velocità della funzione callback"
            ],
            correct: "In sequenza, secondo l’ordine di arrivo nella coda"
        },
        {
            question: "Quale metodo DOM permette di creare un nuovo elemento HTML?",
            options: [
                "document.createElement()",
                "element.newNode()",
                "document.addElement()",
                "DOM.create()"
            ],
            correct: "document.createElement()"
        },
        {
            question: "Quale è la principale differenza tra React e Angular/Vue?",
            options: [
                "React è una libreria, Angular e Vue sono framework",
                "React è orientato a oggetti, Angular è funzionale",
                "React non supporta componenti UI",
                "Angular e Vue non permettono SPA"
            ],
            correct: "React è una libreria, Angular e Vue sono framework"
        },
        {
            question: "Cosa rappresenta un componente in React?",
            options: [
                "Un insieme di funzioni standalone",
                "Una funzione di rendering che restituisce un sottoalbero DOM",
                "Un modulo CSS",
                "Un file HTML statico"
            ],
            correct: "Una funzione di rendering che restituisce un sottoalbero DOM"
        },
        {
            question: "In JSX, quale attributo sostituisce 'class' di HTML?",
            options: ["styleName", "cssClass", "className", "classAttr"],
            correct: "className"
        },
        {
            question: "Cosa succede se cambiano le props di un componente?",
            options: [
                "Il componente non cambia nulla",
                "React rigenera la view del componente",
                "Le props cambiano solo nello stato interno",
                "Si aggiorna soltanto il genitore"
            ],
            correct: "React rigenera la view del componente"
        },
        {
            question: "Qual è la differenza tra 'show/hide' e 'mount/unmount' di un sotto-componente?",
            options: [
                "Show/hide modifica la classe CSS, mount/unmount modifica il DOM",
                "Show/hide crea nuove istanze, mount/unmount non modifica nulla",
                "Show/hide funziona solo nei router, mount/unmount solo nei menu",
                "Non c’è alcuna differenza"
            ],
            correct: "Show/hide modifica la classe CSS, mount/unmount modifica il DOM"
        },
        {
            question: "Qual è il vantaggio principale di una Single Page Application?",
            options: [
                "Non usa mai il browser",
                "Non effettua reload di pagina ma aggiorna solo il DOM",
                "Non richiede server-side app",
                "Non utilizza componenti"
            ],
            correct: "Non effettua reload di pagina ma aggiorna solo il DOM"
        },
        {
            question: "Cosa permette l’interpolazione in JSX?",
            options: [
                "Scrivere CSS inline dentro JS",
                "Inserire valori JS/TS dentro l’HTML",
                "Usare più classi CSS nello stesso attributo",
                "Eseguire query SQL dentro componenti"
            ],
            correct: "Inserire valori JS/TS dentro l’HTML"
        },
        {
            question: "Qual è la differenza tra un Server HTTP e un Web Server?",
            options: [
                "Nessuna differenza",
                "Un Server HTTP implementa il protocollo, un Web Server eroga risorse Web",
                "Un Web Server è un’applicazione client-side",
                "Il Server HTTP funziona solo con HTTPS"
            ],
            correct: "Un Server HTTP implementa il protocollo, un Web Server eroga risorse Web"
        },
        {
            question: "Quale modello usa Node.js per gestire le richieste?",
            options: [
                "Multi-threaded blocking",
                "Single-threaded event loop asincrono",
                "Un thread per ogni richiesta",
                "Fork multipli di processo"
            ],
            correct: "Single-threaded event loop asincrono"
        },
        {
            question: "Quale modello adotta Apache HTTP Server?",
            options: [
                "Single-thread event loop",
                "Multi-thread: un thread per ogni richiesta",
                "Un thread globale unico",
                "Solo reverse proxy"
            ],
            correct: "Multi-thread: un thread per ogni richiesta"
        },
        {
            question: "Quale funzionalità NON è tipica di un Web Server?",
            options: [
                "Fornire contenuti statici",
                "Autenticazione e autorizzazione",
                "Compilazione automatica di TypeScript",
                "Gestione caching"
            ],
            correct: "Compilazione automatica di TypeScript"
        },
        {
            question: "Cos’è un reverse proxy?",
            options: [
                "Un server che riceve richieste e le reindirizza ad altri server",
                "Un client che nasconde il proprio IP",
                "Un database che riscrive query SQL",
                "Un middleware che valida i body JSON"
            ],
            correct: "Un server che riceve richieste e le reindirizza ad altri server"
        },
        {
            question: "In una server-side app Node.js con Express, quale metodo registra un handler per le richieste POST?",
            options: ["app.listen()", "app.post()", "app.use()", "app.handle()"],
            correct: "app.post()"
        },
        {
            question: "Cosa contiene req.params in Express?",
            options: [
                "I parametri della query string",
                "I segmenti parametrici della route",
                "Il body della richiesta",
                "Gli header HTTP"
            ],
            correct: "I segmenti parametrici della route"
        },
        {
            question: "Quale linguaggio/framework è tipicamente usato per server-side app enterprise?",
            options: ["Java/Spring", "PHP/Wordpress", "Python/Flask", "JS/jQuery"],
            correct: "Java/Spring"
        },
        {
            question: "Qual è il ruolo dell’annotazione @Entity in Spring JPA?",
            options: [
                "Definisce una classe come tabella persistente",
                "Indica una classe di servizio",
                "Identifica un controller REST",
                "Specifica un parametro opzionale in un metodo"
            ],
            correct: "Definisce una classe come tabella persistente"
        },
        {
            question: "Qual è il ruolo dell’annotazione @Repository in Spring JPA?",
            options: [
                "Definisce un repository come interfaccia per l’accesso ai dati",
                "Definisce la tabella associata a una classe",
                "Crea una servlet",
                "Gestisce i file statici"
            ],
            correct: "Definisce un repository come interfaccia per l’accesso ai dati"
        },
        {
            question: "Quale affermazione su JDBC è corretta?",
            options: [
                "JDBC permette di persistere i dati indipendentemente dal DB utilizzato",
                "JDBC funziona solo con MySQL",
                "JDBC è un framework concorrente di Spring",
                "JDBC è usato solo lato client"
            ],
            correct: "JDBC permette di persistere i dati indipendentemente dal DB utilizzato"
        },
        {
            question: "Quale affermazione su Java Servlet è FALSA?",
            options: [
                "Una web app può implementare più servlet",
                "Ogni servlet ha un ciclo di vita con init, service, destroy",
                "Le servlet possono rispondere a diverse route",
                "Una web app implementa sempre e solo una servlet"
            ],
            correct: "Una web app implementa sempre e solo una servlet"
        },
        {
            question: "Quali sono le fasi del ciclo di vita di una servlet?",
            options: [
                "create, run, terminate",
                "init, service, destroy",
                "start, execute, close",
                "allocate, process, release"
            ],
            correct: "init, service, destroy"
        }
    ]
