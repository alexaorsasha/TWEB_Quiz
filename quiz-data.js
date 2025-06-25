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
    {
        question: "Qual è la sintassi corretta per definire un elemento HTML?",
        options: [
            "<tag>contenuto</tag>",
            "<tag>",
            "</tag>",
            "<tag name='value'>"
        ],
        correct: "<tag>contenuto</tag>"
    },
    {
        question: "Qual è l'elemento HTML utilizzato per creare un collegamento ipertestuale?",
        options: [
            "<link>",
            "<url>",
            "<href>",
            "<a></a>"
        ],
        correct: "<a></a>"
    },
    {
        question: "Quale tag viene utilizzato per definire un paragrafo in HTML?",
        options: [
            "<h1></h1>",
            "<div></div>",
            "<span></span>",
            "<p></p>"
        ],
        correct: "<p></p>"
    },
    {
        question: "Quale elemento HTML rappresenta una cella di intestazione in una tabella?",
        options: [
            "<td>",
            "<tr>",
            "<th>",
            "<table></table>"
        ],
        correct: "<th>"
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
        question: "Quale attributo deve essere presente in tutti gli elementi con tag input ?",
        options: ["value", "type", "id", "name"],
        correct: "name"
    },
    {
        question: "Qual è il metodo per registrare un listener su un oggetto DOM?",
        options: ["addEventListener", "attachEvent", "bindEvent", "addListener"],
        correct: "addEventListener"
    },
    {
        question: "Che cosa restituisce il metodo getElementById(id)?",
        options: [
            "L'elemento con l'id cercato, se esistente; null altrimenti",
            "Un HTMLCollection",
            "Tutti gli elementi con l'id specificato",
            "Un NodeList"
        ],
        correct: "L'elemento con l'id cercato, se esistente; null altrimenti"
    },
    {
        question: "Quale metodo restituisce una NodeList contenente tutti gli elementi trovati che corrispondono al selettore?",
        options: [
            "querySelector",
            "querySelectorAll",
            "getElementsByClassName",
            "getElementsByTagName"
        ],
        correct: "querySelectorAll"
    },
    {
        question: "Quali sono le proprietà tipografiche relative ai caratteri e al testo?",
        options: [
            "color, display, top, left",
            "width, height, padding, margin",
            "font-size, font-family, font-weight, font-style",
            "border, border-radius, background-color, position"
        ],
        correct: "font-size, font-family, font-weight, font-style"
    },
    {
        question: "Cosa significa closure in JavaScript?",
        options: [
            "Le variabili di uno scope sopravvivono alla sua chiusura",
            "Le variabili di uno scope non possono essere utilizzate dopo la sua chiusura",
            "Le funzioni non possono restituire valori",
            "Le funzioni non possono essere passate come parametri"
        ],
        correct: "Le variabili di uno scope sopravvivono alla sua chiusura"
    },
    {
        question: "Quale metodo viene utilizzato per trasformare i valori di un array in un nuovo array in JavaScript?",
        options: ["forEach", "reduce", "map", "filter"],
        correct: "map"
    },
    {
        question: "Come si può esportare una funzione da un modulo in JavaScript?",
        options: [
            "Non è possibile esportare funzioni",
            "Precedendo la definizione con include",
            "Precedendo la definizione con export",
            "Attraverso la parola chiave import"
        ],
        correct: "Precedendo la definizione con export"
    },
    {
        question: "Qual è il modo corretto per importare una funzione con default export da un modulo?",
        options: [
            "import funzione from 'modulo.js'",
            "import * as funzione from 'modulo.js'",
            "import funzione as 'nuovoNome' from 'modulo.js'",
            "import { funzione } from 'modulo.js'"
        ],
        correct: "import funzione from 'modulo.js'"
    },
    {
        question: "Cosa rappresenta il Document Object Model (DOM)?",
        options: [
            "La struttura dati che rappresenta il documento HTML",
            "Un linguaggio di programmazione",
            "Una libreria di funzioni JavaScript",
            "Un framework per applicazioni web"
        ],
        correct: "La struttura dati che rappresenta il documento HTML"
    },
    {
        question: "Qual è la funzione dell'API DOM?",
        options: [
            "Fornire un'interfaccia per la comunicazione con il server",
            "Creare elementi HTML",
            "Specificare come interrogare e aggiornare il DOM",
            "Gestire il layout della pagina"
        ],
        correct: "Specificare come interrogare e aggiornare il DOM"
    },
    {
        question: "Cosa significa che un oggetto è prototipo di un altro?",
        options: [
            "Significa che è un oggetto primordiale.",
            "Significa che l'oggetto può essere modificato.",
            "Significa che può ereditare proprietà dal prototipo.",
            "Significa che ha un prototipo diverso."
        ],
        correct: "Significa che può ereditare proprietà dal prototipo."
    },
    {
        question: "Quale delle seguenti affermazioni è vera riguardo a HTMLCollection e NodeList?",
        options: [
            "Entrambi non possono essere utilizzati in cicli for.",
            "Entrambi sono collezioni live.",
            "NodeList è una collezione statica.",
            "Sono entrambi tipi di array."
        ],
        correct: "NodeList è una collezione statica."
    },
    {
        question: "Qual è il metodo per rimuovere un listener registrato?",
        options: [
            "removeEventListener",
            "removeListener",
            "unregisterEvent",
            "detachEvent"
        ],
        correct: "removeEventListener"
    },
    {
        question: "Cosa fa l'istruzione evento.stopPropagation()?",
        options: [
            "Blocca l'evento dal propagarsi al suo target.",
            "Impedisce l'effetto di default dell'evento.",
            "Propaga l'evento al suo parent.",
            "Ferma l'esecuzione del listener."
        ],
        correct: "Blocca l'evento dal propagarsi al suo target."
    },
    {
        question: "Quale metodo viene utilizzato per creare un nuovo elemento DOM?",
        options: [
            "document.insertElement",
            "document.createElement",
            "document.createNode",
            "document.addElement"
        ],
        correct: "document.createElement"
    },
    {
        question: "Qual è la prima fase di propagazione degli eventi nel DOM?",
        options: [
            "Capturing",
            "Dispatching",
            "Handling",
            "Bubbling"
        ],
        correct: "Capturing"
    },
    {
        question: "Quale metodo aggiunge una classe a un elemento?",
        options: [
            "element.classList.insert",
            "element.addClassList",
            "element.classList.add",
            "element.addClass"
        ],
        correct: "element.classList.add"
    },
    {
        question: "Cosa restituisce document.body?",
        options: [
            "Tutti i nodi figli del body",
            "L'elemento BODY del documento",
            "Il nodo radice del documento",
            "L'elemento HEAD del documento"
        ],
        correct: "L'elemento BODY del documento"
    },
    {
        question: "Qual è l'oggetto che rappresenta l'evento in un listener?",
        options: [
            "event",
            "event.source",
            "event.currentTarget",
            "event.target"
        ],
        correct: "event"
    },
    {
        question: "Quali sono gli oggetti primordiali di Javascript?",
        options: [
            "Array e Object",
            "Object e Function",
            "Object e Object.prototype",
            "Function e Array"
        ],
        correct: "Object e Object.prototype"
    },
    {
        question: "Cosa indica l'opzione '-D' durante l'installazione di un package?",
        options: [
            "Che il package verrà installato globalmente",
            "Che si tratta di una dev dependency",
            "Che si tratta di una runtime dependency",
            "Che il package è obsoleto"
        ],
        correct: "Che si tratta di una dev dependency"
    },
    {
        question: "Come si accede al prototipo di un oggetto in Javascript?",
        options: [
            "oggetto.__proto__",
            "Object.getPrototypeOf(oggetto)",
            "Object.prototype(oggetto)",
            "oggetto.prototype"
        ],
        correct: "oggetto.__proto__"
    },
    {
        question: "Cosa fa il metodo Object.preventExtensions(ogg)?",
        options: [
            "Rimuove tutte le proprietà dall'oggetto.",
            "Blocca l'oggetto dalla modifica di proprietà esistenti.",
            "Conserva tutte le proprietà dell'oggetto.",
            "Impedisce all'oggetto di acquisire nuove proprietà o cambiare prototipo."
        ],
        correct: "Impedisce all'oggetto di acquisire nuove proprietà o cambiare prototipo."
    },
    {
        question: "Che cosa restituisce Object.keys(snoopy)?",
        options: [
            "Un array con le chiavi del prototipo.",
            "Un array con tutte le proprietà del prototipo.",
            "Un array con tutte le proprietà ereditarie.",
            "Un array con i nomi delle proprietà definite nell'oggetto stesso."
        ],
        correct: "Un array con i nomi delle proprietà definite nell'oggetto stesso."
    },
    {
        question: "Qual è la differenza tra binding implicito ed esplicito in Javascript?",
        options: [
            "Il binding esplicito usa la parola chiave this.",
            "Il binding esplicito richiede l'uso di bind.",
            "Il binding implicito si verifica automaticamente per le funzioni anonime.",
            "Non esiste differenza."
        ],
        correct: "Il binding esplicito richiede l'uso di bind."
    },
    {
        question: "Cosa succede quando si utilizza la keyword new con una funzione costruttore?",
        options: [
            "La funzione non può essere utilizzata.",
            "L'oggetto viene distrutto.",
            "Non viene creato alcun oggetto.",
            "Viene creato un nuovo oggetto con prototipo Fun.prototype."
        ],
        correct: "Viene creato un nuovo oggetto con prototipo Fun.prototype."
    },
    {
        question: "Cosa sono le dipendenze dev in npm?",
        options: [
            "Package necessari per l'esecuzione dell'applicazione.",
            "Package che devono essere installati globalmente.",
            "Package necessari solo durante lo sviluppo.",
            "Package non necessari durante lo sviluppo."
        ],
        correct: "Package necessari solo durante lo sviluppo."
    },
    {
        question: "Qual è la funzione principale di Typescript?",
        options: [
            "Creare un nuovo linguaggio di programmazione.",
            "Compilare codice Javascript.",
            "Aggiungere funzionalità a Javascript.",
            "Aggiungere un sistema di tipi a Javascript."
        ],
        correct: "Aggiungere un sistema di tipi a Javascript."
    },
    {
        question: "Qual è il comando per installare i package in npm?",
        options: [
            "npm build",
            "npm start",
            "npm create",
            "npm install"
        ],
        correct: "npm install"
    },
    {
        question: "Quale comando si utilizza per installare il primo package in un progetto con npm?",
        options: [
            "npm start",
            "npm create",
            "npm init",
            "npm install [-D] [-g] nome-package[@versione]"
        ],
        correct: "npm install [-D] [-g] nome-package[@versione]"
    },
    {
        question: "Dove vengono scritte le dipendenze del progetto?",
        options: [
            "package-lock.json",
            "src",
            "node_modules",
            "package.json"
        ],
        correct: "package.json"
    },
    {
        question: "Quale comando si usa per inizializzare un progetto TypeScript?",
        options: [
            "npm install typescript",
            "npx tsc –init",
            "npm run tsc",
            "npm init"
        ],
        correct: "npx tsc –init"
    },
    {
        question: "Qual è il valore di default per l'opzione 'target' in tsconfig.json?",
        options: [
            "es2020",
            "es2016",
            "es5",
            "es2015"
        ],
        correct: "es2016"
    },
    {
        question: "Cosa fa l’opzione ‘skipLibCheck’ se impostata su true?",
        options: [
            "Compila liberamente senza errori",
            "Aggiunge librerie al progetto",
            "Salta la verifica dei tipi all’interno delle librerie",
            "Verifica tutti i tipi nel progetto"
        ],
        correct: "Salta la verifica dei tipi all’interno delle librerie"
    },
    {
        question: "Come si definisce un tipo unione in TypeScript?",
        options: [
            "tipoA ? tipoB : tipoC",
            "tipoA & tipoB",
            "tipoA + tipoB",
            "tipoA | tipoB"
        ],
        correct: "tipoA | tipoB"
    },
    {
        question: "Qual è la sintassi per dichiarare una funzione in TypeScript?",
        options: [
            "function nomeFunzione(p1: TIPO1, p2: TIPO2) => TIPORET",
            "function nomeFunzione(p1: TIPO1, p2: TIPO2): TIPORET",
            "let nameFunzione = (p1: TIPO1, p2: TIPO2) => TIPORET",
            "function nomeFunzione: (p1: TIPO1, p2: TIPO2) => TIPORET"
        ],
        correct: "function nomeFunzione(p1: TIPO1, p2: TIPO2): TIPORET"
    },
    {
        question: "Cosa rappresenta il simbolo '?' in una dichiarazione di classe?",
        options: [
            "Una proprietà privata",
            "Una proprietà opzionale",
            "Una variabile non inizializzata",
            "Una variabile d'istanza obbligatoria"
        ],
        correct: "Una proprietà opzionale"
    },
    {
        question: "Cosa sono le interfacce in TypeScript?",
        options: [
            "Classi base di un'applicazione",
            "Costrutti dichiarativi senza semantica operazionale",
            "Costrutti operazionali con metodi",
            "Funzioni di callback"
        ],
        correct: "Costruiti dichiarativi senza semantica operazionale"
    },
    {
        question: "Qual è il tipo di oggetto utilizzato in Typescript per memorizzare valori a partire da una chiave?",
        options: [
            "Dizionario indicizzato",
            "Array",
            "Oggetto",
            "Mappa"
        ],
        correct: "Dizionario indicizzato"
    },
    {
        question: "Come deve essere dichiarato il tipo di un repository per utilizzare un dizionario indicizzato in Typescript?",
        options: [
            "const repo : { Persona : string }",
            "const repo : { [chiave : string] : Persona }",
            "const repo : { string : Persona }",
            "const repo : { chiave : string }"
        ],
        correct: "const repo : { [chiave : string] : Persona }"
    },
    {
        question: "Cosa rappresentano i getter e setter in Typescript?",
        options: [
            "Funzioni che restituiscono valori",
            "Funzioni di callback",
            "Proprietà calcolate",
            "Variabili globali"
        ],
        correct: "Proprietà calcolate"
    },
    {
        question: "Qual è la sintassi corretta per definire un getter in una classe?",
        options: [
            "get nome(den. string): void { this.nome = den; }",
            "get nome(). string { return this.nome; } set nome(den. string): void { this.nome = den; }",
            "get nome(). string { return this.nome; }",
            "get nome(). void { return this.nome; }"
        ],
        correct: "get nome(). string { return this.nome; }"
    },
    {
        question: "Cosa rappresenta il parametro 'init' nella funzione fetch?",
        options: [
            "Un oggetto con opzioni per la richiesta",
            "Il metodo HTTP",
            "Il corpo della risposta",
            "L'URL della richiesta"
        ],
        correct: "Un oggetto con opzioni per la richiesta"
    },
    {
        question: "Qual è la differenza principale tra fetch e XMLHttpRequest?",
        options: [
            "Fetch richiede librerie esterne",
            "Fetch è più lento di XMLHttpRequest",
            "Fetch non supporta richieste asincrone",
            "Fetch restituisce sempre una promessa"
        ],
        correct: "Fetch restituisce sempre una promessa"
    },
    {
        question: "Quale tipo di dati non può essere inviato in una richiesta di tipo GET?",
        options: [
            "Stringhe",
            "Corpo della richiesta",
            "Oggetti JSON",
            "Numeri"
        ],
        correct: "Corpo della richiesta"
    },
    {
        question: "Qual è la funzione che restituisce la promessa di un dato in un’operazione asincrona?",
        options: [
            "Promise",
            "Event",
            "Callback",
            "Fetch"
        ],
        correct: "Promise"
    },
    {
        question: "Cosa accade quando una richiesta HTTP effettuata con fetch è completata?",
        options: [
            "La pagina viene ricaricata",
            "Il browser mostra un errore",
            "Niente, la richiesta è ignorata",
            "Un evento endogeno viene generato"
        ],
        correct: "Un evento endogeno viene generato"
    },
    {
        question: "Cos'è un oggetto Promise?",
        options: [
            "Rappresenta la promessa di un dato T",
            "Rappresenta una funzione sincrona",
            "Rappresenta un errore durante un'operazione",
            "Rappresenta un array di risultati"
        ],
        correct: "Rappresenta la promessa di un dato T"
    },
    {
        question: "Qual è uno stato possibile di una Promise?",
        options: [
            "Executing",
            "Completed",
            "Pending",
            "Started"
        ],
        correct: "Pending"
    },
    {
        question: "Che cosa indica lo stato 'fulfilled' di una Promise?",
        options: [
            "L'operazione è fallita.",
            "L'operazione è in corso.",
            "L'operazione è stata annullata.",
            "L'operazione è terminata con successo."
        ],
        correct: "L'operazione è terminata con successo."
    },
    {
        question: "Cosa si intende per gerarchie di componenti?",
        options: [
            "Componenti che non possono interagire.",
            "Componenti che non hanno relazioni fra loro.",
            "Un componente genitore che contiene sotto-componenti.",
            "Componenti statici senza dinamismo."
        ],
        correct: "Un componente genitore che contiene sotto-componenti."
    },
    {
        question: "Cosa rappresenta la disgiunzione tra N operazioni asincrone?",
        options: [
            "Si considera conclusa con successo solo se tutte le operazioni falliscono.",
            "Non ha alcuna definizione.",
            "Si considera conclusa con successo solo se una delle operazioni termina con successo.",
            "Si considera conclusa con successo solo se tutte le operazioni terminano con successo."
        ],
        correct: "Si considera conclusa con successo solo se una delle operazioni termina con successo."
    },
    {
        question: "Cosa succede se una funzione agganciata a una Promise restituisce una nuova Promise?",
        options: [
            "La Promise originale viene ignorata.",
            "La Promise originale si rifiuta.",
            "Viene lanciato un errore.",
            "La nuova Promise diventa una Promise di una Promise."
        ],
        correct: "La nuova Promise diventa una Promise di una Promise."
    },
    {
        question: "Qual è la sintassi corretta per serializzare un oggetto in JSON?",
        options: [
            "JSON objectify(oggetto)",
            "JSON parse(oggetto)",
            "JSON serialize(oggetto)",
            "JSON stringify(oggetto)"
        ],
        correct: "JSON stringify(oggetto)"
    },
    {
        question: "Qual è una delle tecniche per far scomparire un componente figlio nel componente genitore?",
        options: [
            "Dichiarare il componente come statico.",
            "Cambiare la classe CSS per nasconderlo.",
            "Modificare il Data Model.",
            "Aggiungere una nuova istanza del componente."
        ],
        correct: "Cambiare la classe CSS per nasconderlo."
    },
    {
        question: "Che cosa rappresentano le props in un componente React?",
        options: [
            "Le proprietà che un componente riceve dal suo genitore.",
            "Le funzioni di callback.",
            "Le classi CSS associate al componente.",
            "I dati statici hardcoded."
        ],
        correct: "Le proprietà che un componente riceve dal suo genitore."
    },
    {
        question: "Cosa caratterizza un componente UI?",
        options: [
            "Solo il comportamento e la parte del Data Model.",
            "Nessuna delle precedenti.",
            "Unicamente l'aspetto grafico.",
            "Un aspetto grafico, una parte del Data Model e un comportamento."
        ],
        correct: "Un aspetto grafico, una parte del Data Model e un comportamento."
    },
    {
        question: "Cosa fa il metodo finally su una Promise?",
        options: [
            "Esegue una funzione solo in caso di fallimento.",
            "Esegue una funzione indipendentemente dal risultato della Promise.",
            "Esegue una funzione solo in caso di successo.",
            "Non restituisce nulla."
        ],
        correct: "Esegue una funzione indipendentemente dal risultato della Promise."
    },
    {
        question: "Cosa restituisce il metodo catch su una Promise?",
        options: [
            "Un valore booleano",
            "Un oggetto Promise",
            "Un nuovo oggetto Promise",
            "Un oggetto di errore"
        ],
        correct: "Un oggetto Promise"
    },
    {
        question: "Qual è il metodo HTTP utilizzato per inviare dati al server?",
        options: [
            "POST",
            "PUT",
            "GET",
            "DELETE"
        ],
        correct: "POST"
    },
    {
        question: "Qual è un carattere distintivo di React rispetto ad altri framework?",
        options: [
            "React gestisce solo la UI.",
            "React è object-oriented.",
            "React è una libreria per il back-end.",
            "React non è object-oriented, ma funzionalmente basato su JS/TS."
        ],
        correct: "React non è object-oriented, ma funzionalmente basato su JS/TS."
    },
    {
        question: "Quale metodo si usa per agganciare una funzione da eseguire in caso di successo di una Promise?",
        options: [
            "then",
            "finally",
            "await",
            "catch"
        ],
        correct: "then"
    },
    {
        question: "Qual è una delle principali differenze tra Angular e Vue riguardo alla gestione degli oggetti?",
        options: [
            "Vue non gestisce gli oggetti.",
            "Angular e Vue gestiscono gli oggetti nello stesso modo.",
            "Angular monitora i cambiamenti, mentre Vue crea copie addizionate.",
            "Angular crea copie degli oggetti, mentre Vue monitora i cambiamenti."
        ],
        correct: "Angular monitora i cambiamenti, mentre Vue crea copie addizionate."
    },
    {
        question: "Qual è il ruolo del ViewModel nel pattern MVVM?",
        options: [
            "Interagire con il DOM senza collegamenti ai dati.",
            "Collegare la View al Modello Dati.",
            "Non ha alcun ruolo nel pattern MVVM.",
            "Gestire solo la presentazione dei dati."
        ],
        correct: "Collegare la View al Modello Dati."
    },
    {
        question: "Quale metodo viene utilizzato per inviare i dati al server in una richiesta POST?",
        options: [
            "GET",
            "PUT",
            "headers",
            "body"
        ],
        correct: "body"
    },
    {
        question: "Qual è l'effetto della parola chiave async in una funzione?",
        options: [
            "Non ha alcun effetto.",
            "Permette l'uso di await.",
            "Rende la funzione sincrona.",
            "Restituisce un valore void."
        ],
        correct: "Permette l'uso di await."
    },
    {
        question: "Cosa rappresenta il property binding in React?",
        options: [
            "L'invio di dati dal Model alla View.",
            "La connessione tra View e Model.",
            "Il modo in cui i componenti comunicano tra loro.",
            "L'assegnazione di eventi ai listener."
        ],
        correct: "L'invio di dati dal Model alla View."
    },
    {
        question: "Cosa è una Single Page Application (SPA)?",
        options: [
            "Un'app che utilizza solo componenti statici.",
            "Un'app che non utilizza alcun framework.",
            "Un'app che monta solo un figlio alla volta senza ricaricare la pagina.",
            "Un'applicazione che carica una nuova pagina per ogni interazione."
        ],
        correct: "Un'app che monta solo un figlio alla volta senza ricaricare la pagina."
    },
    {
        question: "Qual è la funzione principale di un oggetto JSON?",
        options: [
            "Gestire le richieste HTTP",
            "Contenere funzioni JavaScript",
            "Creare interfacce utente",
            "Rappresentare dati strutturati"
        ],
        correct: "Rappresentare dati strutturati"
    },
    {
        question: "Cosa è un API?",
        options: [
            "Un’interfaccia per interagire con un software",
            "Un linguaggio di programmazione",
            "Un metodo di serializzazione",
            "Un tipo di database"
        ],
        correct: "Un’interfaccia per interagire con un software"
    },
    {
        question: "In che formato viene restituito il body di una risposta HTTP?",
        options: [
            "Stringa",
            "JSON",
            "Array",
            "ReadableStream"
        ],
        correct: "ReadableStream"
    },
    {
        question: "Quali sono i vantaggi dell'uso delle props in React?",
        options: [
            "Isolamento, astrazione, riduzione delle dipendenze",
            "Riuso, configurabilità, gestione del flusso di informazioni",
            "Semplicità, linearità, riduzione del codice",
            "Prestazioni migliorate, riduzione dei bug, aumento della complessità"
        ],
        correct: "Riuso, configurabilità, gestione del flusso di informazioni"
    },
    {
        question: "Cosa succede se il valore di una proprietà dell'oggetto props cambia?",
        options: [
            "React rigenera la view del componente",
            "React provoca un errore",
            "React crea un nuovo componente",
            "React ignora il cambiamento"
        ],
        correct: "React rigenera la view del componente"
    },
    {
        question: "Cosa è l'object destructuring in JavaScript/TypeScript?",
        options: [
            "Un metodo per semplificare l'accesso alle proprietà di un oggetto",
            "Un tipo di ciclo",
            "Un costrutto per gestire eventi",
            "Un modo per creare oggetti"
        ],
        correct: "Un metodo per semplificare l'accesso alle proprietà di un oggetto"
    },
    {
        question: "Come si crea una variabile di stato in un componente React?",
        options: [
            "Utilizzando stateVariable()",
            "Utilizzando la funzione createState()",
            "Utilizzando setState()",
            "Utilizzando useState()"
        ],
        correct: "Utilizzando useState()"
    },
    {
        question: "Qual è il compito del genitore riguardo allo stato dei componenti figli?",
        options: [
            "Stabilire come spartire i dati fra i propri figli",
            "Modificare direttamente lo stato dei figli",
            "Gestire solo il rendering",
            "Non ha alcun compito"
        ],
        correct: "Stabilire come spartire i dati fra i propri figli"
    },
    {
        question: "Cosa significa 'delega al genitore' in React?",
        options: [
            "Il figlio invia eventi al genitore per gestire lo stato",
            "Il figlio ignora gli eventi",
            "Il genitore gestisce tutto senza aiuto dai figli",
            "Il genitore non ha accesso agli eventi dei figli"
        ],
        correct: "Il figlio invia eventi al genitore per gestire lo stato"
    },
    {
        question: "Qual è l'effetto del cambiamento di stato su un componente React?",
        options: [
            "React rigenera la view del componente",
            "Il componente viene aggiornato solo se ci sono errori",
            "Solo il genitore viene aggiornato",
            "Il componente non viene mai aggiornato"
        ],
        correct: "React rigenera la view del componente"
    },
    {
        question: "Qual è la funzione principale di useState?",
        options: [
            "Gestire eventi UI",
            "Creare nuove props",
            "Fornire un modo per aggiornare lo stato di un componente",
            "Restituire il valore predefinito"
        ],
        correct: "Fornire un modo per aggiornare lo stato di un componente"
    },
    {
        question: "Cosa deve contenere il valore passato a useState?",
        options: [
            "Il valore iniziale della variabile di stato",
            "Una funzione",
            "Un array di valori",
            "Un oggetto"
        ],
        correct: "Il valore iniziale della variabile di stato"
    },
    {
        question: "Cosa rappresenta una concatenazione di Promise?",
        options: [
            "Esegue le operazioni in parallelo",
            "Non ha alcun effetto",
            "Esegue le operazioni in sequenza",
            "Esegue le operazioni in ordine casuale"
        ],
        correct: "Esegue le operazioni in sequenza"
    },
    {
        question: "Quali sono i componenti che possono costituire una stringa JSON?",
        options: [
            "Solo valori semplici",
            "Un valore semplice, un array JSON, un oggetto JSON",
            "Solo oggetti JSON",
            "Solo array JSON"
        ],
        correct: "Un valore semplice, un array JSON, un oggetto JSON"
    },
    {
        question: "Qual è il metodo per serializzare un oggetto in una stringa JSON?",
        options: [
            "JSON serialize()",
            "JSON parse()",
            "JSON stringify()",
            "JSON convert()"
        ],
        correct: "JSON stringify()"
    },
    {
        question: "Cosa accade se un oggetto contiene riferimenti circolari durante la serializzazione?",
        options: [
            "Viene convertito in null",
            "Viene serializzato normalmente",
            "Viene ignorato",
            "Dà errore"
        ],
        correct: "Dà errore"
    },
    {
        question: "Qual è il metodo per deserializzare una stringa JSON?",
        options: [
            "JSON.convert()",
            "JSON.serialize()",
            "JSON.parse()",
            "JSON.stringify()"
        ],
        correct: "JSON.parse()"
    },
    {
        question: "Quale header deve essere specificato in una richiesta POST con contenuto JSON?",
        options: [
            "Content-Type: application/xml",
            "Content-Type: multipart/form-data",
            "Content-Type: application/json",
            "Content-Type: text/plain"
        ],
        correct: "Content-Type: application/json"
    },
    {
        question: "Cosa rappresenta il pathname in una richiesta HTTP?",
        options: [
            "Il corpo della richiesta",
            "L'indirizzo IP del server",
            "La funzionalità richiesta",
            "Il metodo di richiesta"
        ],
        correct: "La funzionalità richiesta"
    },
    {
        question: "Qual è la differenza principale tra un client-side app e un server-side app?",
        options: [
            "La server-side app gestisce la persistenza dei dati",
            "La client-side app utilizza JSON, mentre la server-side app no",
            "Non ci sono differenze significative",
            "La client-side app gestisce i dati, mentre la server-side app no"
        ],
        correct: "La server-side app gestisce la persistenza dei dati"
    },
    {
        question: "Qual è la tipologia di un componente form-like che riflette il cambiamento degli elementi sulla view di altri componenti?",
        options: [
            "Tipologia 'modal dialog'",
            "Tipologia 'modulo'",
            "Tipologia 'pannello di controllo'",
            "Tipologia 'input'"
        ],
        correct: "Tipologia 'pannello di controllo'"
    },
    {
        question: "Cosa succede se l’array di dipendenze in useEffect è vuoto?",
        options: [
            "Non verrà eseguito alcun effetto.",
            "L’effetto verrà eseguito solo se ci sono cambiamenti di stato.",
            "L’effetto verrà eseguito ad ogni rendering.",
            "L’effetto verrà eseguito solo al primo rendering."
        ],
        correct: "L’effetto verrà eseguito solo al primo rendering."
    },
    {
        question: "Quale problema può sorgere combinando useEffect e setState?",
        options: [
            "L’aumento della complessità del codice.",
            "L’impossibilità di gestire le props.",
            "Un loop infinito di aggiornamenti di stato.",
            "Il fallimento del rendering del componente."
        ],
        correct: "Un loop infinito di aggiornamenti di stato."
    },
    {
        question: "Quando viene eseguito l’effetto in useEffect?",
        options: [
            "Ad ogni rendering.",
            "Solo al primo rendering.",
            "Quando la funzione di rendering termina.",
            "Quando le props cambiano."
        ],
        correct: "Quando la funzione di rendering termina."
    },
    {
        question: "In che modo un'applicazione server-side comunica con il mondo esterno?",
        options: [
            "Ignorando il sistema operativo.",
            "Utilizzando solo chiamate di rete senza intermediari.",
            "Solo tramite richieste dirette al database.",
            "Attraverso librerie fornite dall'ambiente di esecuzione e l'HTTP Server."
        ],
        correct: "Attraverso librerie fornite dall'ambiente di esecuzione e l'HTTP Server."
    },
    {
        question: "Qual è la funzione principale di un Server HTTP?",
        options: [
            "Archiviare dati in un database.",
            "Eseguire script lato client.",
            "Fornire contenuti statici tramite FTP.",
            "Gestire richieste HTTP e fornire risposte."
        ],
        correct: "Gestire richieste HTTP e fornire risposte."
    },
    {
        question: "Qual è il ruolo del middleware in un'app server-side?",
        options: [
            "Controllare la sicurezza dell'applicazione.",
            "Gestire la comunicazione tra app e database.",
            "Effettuare elaborazioni preliminari sulla richiesta HTTP.",
            "Rispondere direttamente alle richieste degli utenti."
        ],
        correct: "Effettuare elaborazioni preliminari sulla richiesta HTTP."
    },
    {
        question: "Cosa fa un Rewrite Engine in un Server Web?",
        options: [
            "Riscrive le URL per rendere il percorso delle risorse più semplice e intuitivo per gli utenti.",
            "Riduce la dimensione delle risorse servite.",
            "Crea nuove risorse sul server.",
            "Aumenta la sicurezza del server."
        ],
        correct: "Riscrive le URL per rendere il percorso delle risorse più semplice e intuitivo per gli utenti."
    },
    {
        question: "Qual è la porta di default per un Server HTTP?",
        options: [
            "3000",
            "80",
            "443",
            "8080"
        ],
        correct: "80"
    },
    {
        question: "Cosa permette di fare il framework in un'applicazione server-side?",
        options: [
            "Automatizzare compiti e uniformare le interfacce verso il mondo esterno.",
            "Aumentare la complessità del codice.",
            "Eliminare completamente il codice personalizzato.",
            "Ridurre la velocità di esecuzione dell'app."
        ],
        correct: "Automatizzare compiti e uniformare le interfacce verso il mondo esterno."
    },
    {
        question: "Qual è la funzione principale di un Server Web?",
        options: [
            "Eseguire applicazioni server-side complesse.",
            "Archiviare dati su un database.",
            "Fornire risorse statiche e dinamiche per il World Wide Web.",
            "Gestire le richieste di autenticazione degli utenti."
        ],
        correct: "Fornire risorse statiche e dinamiche per il World Wide Web."
    },
    {
        question: "Cosa rappresenta l'hook useEffect in React?",
        options: [
            "Una funzione per gestire le props del componente.",
            "Una funzione per il re-rendering del componente.",
            "Una funzione per la gestione dello stato del componente.",
            "Una funzione per eseguire effetti collaterali del rendering in modo asincrono."
        ],
        correct: "Una funzione per eseguire effetti collaterali del rendering in modo asincrono."
    },
    {
        question: "Cosa fa un reverse proxy?",
        options: [
            "Automatizza la gestione delle dipendenze.",
            "Compila il codice del server.",
            "Gestisce la sicurezza delle richieste HTTP.",
            "Accetta richieste e le inoltra ad altri server."
        ],
        correct: "Accetta richieste e le inoltra ad altri server."
    },
    {
        question: "Qual è la struttura della funzione useEffect?",
        options: [
            "useEffect(funzioneEffetto)",
            "useEffect(funzioneEffetto, dipendenzeEffetto)",
            "useEffect(dipendenzeEffetto)",
            "useEffect(dipendenzeEffetto?, funzioneEffetto)"
        ],
        correct: "useEffect(funzioneEffetto, dipendenzeEffetto)"
    },
    {
        question: "Come viene gestita la sincronizzazione bidirezionale in un form React?",
        options: [
            "Con il binding unidirezionale",
            "Utilizzando l'attributo onChange e il valore dello stato",
            "Attraverso eventi globali",
            "Tramite l'uso di props"
        ],
        correct: "Utilizzando l'attributo onChange e il valore dello stato"
    },
    {
        question: "Qual è lo scopo di una funzione di cleanup in useEffect?",
        options: [
            "Per aggiornare le props del componente.",
            "Per gestire errori durante il rendering.",
            "Per ottimizzare le performance del componente.",
            "Per annullare o invalidare un effetto prima che venga rieseguito."
        ],
        correct: "Per annullare o invalidare un effetto prima che venga rieseguito."
    },
    {
        question: "Cosa si intende per caching in un Server Web?",
        options: [
            "Ridurre la dimensione delle risorse statiche.",
            "Incrementare la banda disponibile per le risorse statiche.",
            "Memorizzare le risposte HTTP per riutilizzarle in future richieste.",
            "Eliminare risorse obsolete dal server."
        ],
        correct: "Memorizzare le risposte HTTP per riutilizzarle in future richieste."
    },
    {
        question: "Qual è lo scopo del bandwidth throttling in un Server Web?",
        options: [
            "Aumentare la velocità di risposta del server.",
            "Aumentare la capacità del server di gestire molteplici richieste.",
            "Ridurre artificialmente l’ampiezza di banda occupata da una singola risposta.",
            "Eliminare l’uso della banda per le risorse statiche."
        ],
        correct: "Ridurre artificialmente l’ampiezza di banda occupata da una singola risposta."
    },
    {
        question: "Cosa significa 'virtual hosting' in un Server Web?",
        options: [
            "Gestire più indirizzi IP su un singolo server.",
            "Limitare l'accesso a specifiche risorse.",
            "Creare server virtuali per test.",
            "Ospitare più host con il proprio hostname su un'unica macchina."
        ],
        correct: "Ospitare più host con il proprio hostname su un'unica macchina."
    },
    {
        question: "Qual è la differenza principale tra autenticazione e autorizzazione?",
        options: [
            "L'autenticazione è solo per risorse statiche, mentre l'autorizzazione è per risorse dinamiche.",
            "L'autenticazione è più importante dell'autorizzazione.",
            "L'autenticazione riguarda il riconoscimento dell'identità dell'utente, mentre l'autorizzazione riguarda il permesso di accesso a una risorsa.",
            "L'autenticazione e l'autorizzazione sono la stessa cosa."
        ],
        correct: "L'autenticazione riguarda il riconoscimento dell'identità dell'utente, mentre l'autorizzazione riguarda il permesso di accesso a una risorsa."
    },
    {
        question: "Quale oggetto di Express contiene i parametri della query string?",
        options: [
            "req.query",
            "req.headers",
            "req.params",
            "req.body"
        ],
        correct: "req.query"
    },
    {
        question: "Qual è la funzione del middleware in Express?",
        options: [
            "Aggiungere un nuovo server HTTP",
            "Gestire direttamente le richieste HTTP",
            "Effettuare elaborazioni preliminari sulla richiesta o risposta",
            "Configurare i parametri di routing"
        ],
        correct: "Effettuare elaborazioni preliminari sulla richiesta o risposta"
    },
    {
        question: "Come si invia una risposta in un'unica soluzione in Express?",
        options: [
            "res.send(content)",
            "res.end()",
            "res.write(text)",
            "res.status(code).send(content)"
        ],
        correct: "res.status(code).send(content)"
    },
    {
        question: "In una server-side app con Jakarta, qual è il server HTTP di riferimento?",
        options: [
            "Microsoft IIS",
            "Node.js Server",
            "Nginx",
            "Apache Tomcat"
        ],
        correct: "Apache Tomcat"
    },
    {
        question: "Quale strumento principale offre il Jakarta Web Profile per gestire le richieste HTTP?",
        options: [
            "JSP",
            "Servlet",
            "JSF",
            "JDBC"
        ],
        correct: "Servlet"
    },
    {
        question: "Quale linguaggio è comunemente usato con il framework Laravel?",
        options: [
            "Node.js",
            "Python",
            "PHP",
            "Java"
        ],
        correct: "PHP"
    },
    {
        question: "Che cosa accade quando un utente scrive una URL nella barra del browser?",
        options: [
            "Il browser invia una richiesta al server.",
            "Il server invia automaticamente una risposta di errore.",
            "Il browser ignora la richiesta.",
            "Il server non risponde."
        ],
        correct: "Il browser invia una richiesta al server."
    },
    {
        question: "Qual è l'oggetto che rappresenta la richiesta HTTP in una server-side app con Node.js?",
        options: [
            "RequestHandler",
            "ServerResponse",
            "HttpResponse",
            "IncomingMessage"
        ],
        correct: "IncomingMessage"
    },
    {
        question: "Quale metodo di res permette di specificare il valore di uno header della risposta?",
        options: [
            "res.write(text)",
            "res.end()",
            "res.setHeader(name, val)",
            "res.send(content)"
        ],
        correct: "res.setHeader(name, val)"
    },
    {
        question: "Come si attiva un server in ascolto su una porta specifica in una app Node.js con Express?",
        options: [
            "app.run(port)",
            "app.listen(port, ...)",
            "app.activate(port)",
            "app.start(port)"
        ],
        correct: "app.listen(port, ...)"
    },
    {
        question: "Qual è il metodo principale che verifica il metodo della richiesta in una Servlet?",
        options: [
            "service(ServletRequest req, ServletResponse res)",
            "init()",
            "destroy()",
            "doGet(HttpServletRequest req, HttpServletResponse res)"
        ],
        correct: "service(ServletRequest req, ServletResponse res)"
    },
    {
        question: "Qual è la funzione del metodo service() in HttpServlet?",
        options: [
            "Inizializzare la Servlet.",
            "Gestire la configurazione della Servlet.",
            "Gestire le richieste e le risposte HTTP.",
            "Distruggere la Servlet."
        ],
        correct: "Gestire le richieste e le risposte HTTP."
    },
    {
        question: "Cosa permette di fare il metodo init() all'interno di una Servlet?",
        options: [
            "Inviare la risposta HTTP",
            "Chiudere la Servlet",
            "Ricevere la richiesta HTTP",
            "Inizializzare le risorse necessarie"
        ],
        correct: "Inizializzare le risorse necessarie"
    },
    {
        question: "Qual è la funzione principale di Spring in relazione a Jakarta?",
        options: [
            "Fornire un server HTTP",
            "Gestire la persistenza dei dati",
            "Inizializzare Servlet",
            "Realizzare request handler per le API"
        ],
        correct: "Realizzare request handler per le API"
    },
    {
        question: "Qual è il metodo invocato dal Web Container per inizializzare una Servlet?",
        options: [
            "service(ServletRequest req, ServletResponse res)",
            "destroy()",
            "doGet(HttpServletRequest req, HttpServletResponse res)",
            "init(ServletConfig config)"
        ],
        correct: "init(ServletConfig config)"
    },
    {
        question: "Cosa accade alla Servlet al termine della fase di init?",
        options: [
            "La Servlet è considerata attiva e pronta a ricevere richieste.",
            "Viene creato un nuovo oggetto ServletConfig.",
            "La Servlet viene distrutta.",
            "Il Web Container elimina la Servlet."
        ],
        correct: "La Servlet è considerata attiva e pronta a ricevere richieste."
    },
    {
        question: "Qual è la fase 1 del ciclo di vita della Servlet?",
        options: [
            "Garbage collection",
            "Predisposizione del servizio",
            "Creazione",
            "Inoltro delle richieste"
        ],
        correct: "Creazione"
    },
    {
        question: "Quale metodo viene invocato per gestire una richiesta HTTP?",
        options: [
            "service(ServletRequest req, ServletResponse res)",
            "doXXX()",
            "init(ServletConfig config)",
            "destroy()"
        ],
        correct: "service(ServletRequest req, ServletResponse res)"
    },
    {
        question: "Cosa fa il metodo destroy() in una Servlet?",
        options: [
            "Elimina le connessioni aperte e fa pulizia.",
            "Avvia il Web Container.",
            "Inizializza la Servlet.",
            "Gestisce le richieste HTTP."
        ],
        correct: "Elimina le connessioni aperte e fa pulizia."
    },
    {
        question: "Qual è l'interfaccia base che tutte le Servlet devono implementare?",
        options: [
            "ServletResponse",
            "HttpServlet",
            "Servlet",
            "ServletConfig"
        ],
        correct: "Servlet"
    },

    {
        question: "Qual è la funzione di @RequestParam in Spring?",
        options: [
            "Indica un parametro del body della richiesta",
            "Indica un segmento del path",
            "Definisce un header della richiesta",
            "Indica un parametro della query string"
        ],
        correct: "Indica un parametro della query string"
    },
    {
        question: "Come viene chiamato il metodo per gestire una richiesta POST?",
        options: [
            "service()",
            "doPost()",
            "doGet()",
            "init()"
        ],
        correct: "doPost()"
    },
    {
        question: "Quali annotazioni definiscono i componenti in Spring?",
        options: [
            "@Service, @Repository, @Entity",
            "@Controller, @Bean, @Component",
            "@Controller, @Service, @Repository",
            "@Component, @Service, @Entity"
        ],
        correct: "@Controller, @Service, @Repository"
    },
    {
        question: "Cosa si intende per Inversion of Control in Spring?",
        options: [
            "Il controller gestisce la logica di business",
            "La business logic è gestita dal repository",
            "X crea un'istanza di Y nel suo codice",
            "Il framework crea un'istanza di Y e la inietta a X"
        ],
        correct: "Il framework crea un'istanza di Y e la inietta a X"
    },
    {
        question: "Che cosa restituisce ResponseEntity.ok(data)?",
        options: [
            "Una risposta con status code 500",
            "Una risposta con status code 404",
            "Una risposta con status code 200 e body l'oggetto data",
            "Una richiesta parziale"
        ],
        correct: "Una risposta con status code 200 e body l'oggetto data"
    },
    {
        question: "Qual è il pacchetto di dipendenza di base per un progetto Spring Boot?",
        options: [
            "spring-boot-starter-data",
            "spring-boot-starter-web",
            "spring-boot-starter-parent",
            "spring-boot-starter-security"
        ],
        correct: "spring-boot-starter-parent"
    },
    {
        question: "Qual è la responsabile della logica di business in un'applicazione Spring?",
        options: [
            "Il controller",
            "Il model",
            "Il service",
            "Il repository"
        ],
        correct: "Il service"
    },
    {
        question: "Qual è il pattern architettonale utilizzato da Spring per strutturare le applicazioni?",
        options: [
            "Model-View-Controller",
            "Component-Based Architecture",
            "Layered Architecture",
            "Microservices"
        ],
        correct: "Model-View-Controller"
    },
    {
        question: "Cosa accade nella fase di STOP del ciclo di vita della Servlet?",
        options: [
            "La Servlet è inizializzata.",
            "Viene eseguito il matching delle richieste.",
            "Viene creata una nuova Servlet.",
            "Il Web Container chiama il metodo destroy() per ogni Servlet."
        ],
        correct: "Il Web Container chiama il metodo destroy() per ogni Servlet."
    },
    {
        question: "Quale annotazione si utilizza per definire un'entità in JPA?",
        options: [
            "@Table",
            "@Entity",
            "@Repository",
            "@Service"
        ],
        correct: "@Entity"
    },

    {
        question: "Qual è la funzione dell'operatore logico in un predicato composito?",
        options: [
            "Ordina i risultati secondo un criterio specificato.",
            "Dichiara un metodo come transazione.",
            "Permette di combinare più specificatori in un solo predicato composito.",
            "Ignora le maiuscole nei parametri di ingresso."
        ],
        correct: "Permette di combinare più specificatori in un solo predicato composito."
    },
    {
        question: "Cosa fa l'annotazione @Transactional in un metodo di un service?",
        options: [
            "Combina più specificatori in un predicato.",
            "Dichiara che il metodo deve essere trattato come una transazione.",
            "Permette di ignorare le maiuscole.",
            "Ordina i risultati di un repository."
        ],
        correct: "Dichiara che il metodo deve essere trattato come una transazione."
    },
    {
        question: "Cosa indica il concetto di sessione in un'applicazione?",
        options: [
            "Un modo per ignorare le maiuscole nei parametri.",
            "Un'interazione prolungata fra due parti con stato.",
            "La gestione della persistenza dei dati.",
            "La configurazione di un filtro per le richieste."
        ],
        correct: "Un'interazione prolungata fra due parti con stato."
    },
    {
        question: "Qual è il metodo per configurare il nome del cookie di sessione in Spring Boot?",
        options: [
            "server.servlet.session.name=COOKIE_NAME",
            "server.servlet.session.cookie.name=SESSION_COOKIE_NAME",
            "server.servlet.session.cookie.name=LAB_SESSION_COOKIE",
            "server.session.cookie.name=SESSION_NAME"
        ],
        correct: "server.servlet.session.cookie.name=LAB_SESSION_COOKIE"
    },
    {
        question: "Cosa deve contenere la risposta a una preflight request per le richieste CORS?",
        options: [
            "Access-Control-Allow-Origin: *",
            "Access-Control-Allow-Headers: Content-Type",
            "Access-Control-Allow-Methods: GET, POST",
            "Access-Control-Allow-Credentials: true"
        ],
        correct: "Access-Control-Allow-Credentials: true"
    },
    {
        question: "Cosa fa il metodo findById(Id id) in un repository JPA?",
        options: [
            "Restituisce tutte le entities nella tabella",
            "Restituisce l'entity con l'id specificato, se presente",
            "Elimina un'entity dalla tabella",
            "Salva un'entity nella tabella"
        ],
        correct: "Restituisce l'entity con l'id specificato, se presente"
    },
    {
        question: "Qual è la strategia di generazione predefinita per la chiave primaria in JPA?",
        options: [
            "GenerationType.IDENTITY",
            "GenerationType.TABLE",
            "GenerationType.SEQUENCE",
            "GenerationType.AUTO"
        ],
        correct: "GenerationType.AUTO"
    },
    {
        question: "Quali sono i metodi di base già definiti da JPARepository per operazioni CRUD?",
        options: [
            "save, delete, findAll",
            "add, get, remove",
            "insert, select, update",
            "create, update, remove"
        ],
        correct: "save, delete, findAll"
    },
    {
        question: "Qual è la responsabilità principale di un @RestController?",
        options: [
            "Attuare i servizi di business logic.",
            "Gestire le richieste HTTP e decidere la risposta da inviare.",
            "Iniettare i servizi nei componenti.",
            "Garantire la persistenza dei dati."
        ],
        correct: "Gestire le richieste HTTP e decidere la risposta da inviare."
    },
    {
        question: "Qual è la funzione del metodo doFilter in un filtro?",
        options: [
            "Inoltrare la richiesta e la risposta nella catena di filtri.",
            "Ordinare i risultati di una query.",
            "Gestire la persistenza dei dati.",
            "Dichiarare un metodo come transazione."
        ],
        correct: "Inoltrare la richiesta e la risposta nella catena di filtri."
    },

    {
        question: "Quale annotazione permette di gestire richieste cross-origin in Spring Boot?",
        options: [
            "@CrossOrigin",
            "@Service",
            "@RequestMapping",
            "@Transactional"
        ],
        correct: "@CrossOrigin"
    },
    {
        question: "Cosa succede se una preflight request viene respinta?",
        options: [
            "Il server restituisce un errore 200.",
            "Il server ignora la preflight request.",
            "Il browser blocca la richiesta originale.",
            "La richiesta viene eseguita comunque."
        ],
        correct: "Il browser blocca la richiesta originale."
    },
    {
        question: "Qual è la configurazione necessaria per abilitare le credenziali nelle richieste CORS?",
        options: [
            "@CrossOrigin(origins = http://example.com)",
            "@CrossOrigin(allowCredentials = false)",
            "@CrossOrigin(origins = *, allowCredentials = true)",
            "@CrossOrigin(allowCredentials = true)"
        ],
        correct: "@CrossOrigin(allowCredentials = true)"
    },
    {
        question: "Come può essere realizzata una richiesta di logout?",
        options: [
            "Inviando un codice di errore",
            "Invalidando la sessione",
            "Creando un nuovo attributo nella sessione",
            "Cambiando la password dell'utente"
        ],
        correct: "Invalidando la sessione"
    },
    {
        question: "Qual è la funzione della route esposta dal server per gli utenti non autenticati?",
        options: [
            "Registrare nuovi utenti",
            "Verificare lo stato corrente dell'autenticazione",
            "Permettere il login",
            "Cambiare le credenziali dell'utente"
        ],
        correct: "Verificare lo stato corrente dell'autenticazione"
    },
    {
        question: "Qual è il compito del request handler in una richiesta di login?",
        options: [
            "Determinare se le credenziali sono corrette tramite un @Service",
            "Registrare l'utente nel database",
            "Creare un nuovo utente",
            "Inviare una risposta automatica"
        ],
        correct: "Determinare se le credenziali sono corrette tramite un @Service"
    },
    {
        question: "Cosa deve fare il server se le credenziali di login sono corrette?",
        options: [
            "Nessuna azione necessaria",
            "Restituire un codice 404 NOT FOUND",
            "Creare nella sessione l'attributo di autenticazione",
            "Invalidare la sessione"
        ],
        correct: "Creare nella sessione l'attributo di autenticazione"
    },
    {
        question: "Quale codice di stato HTTP deve restituire il server se le credenziali non sono corrette?",
        options: [
            "500 INTERNAL SERVER ERROR",
            "401 UNAUTHORIZED",
            "403 FORBIDDEN",
            "200 OK"
        ],
        correct: "401 UNAUTHORIZED"
    }


]