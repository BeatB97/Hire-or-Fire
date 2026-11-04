// PROFILI DEI CANDIDATI — dati condivisi tra la regia (monitor) e i telefoni.
// Per aggiungere/modificare un candidato, modifica questo elenco.
// "img" deve puntare a un file dentro la cartella /img
//
// Ogni candidato ha due box, mostrati in grande sul monitor:
//   "presentazione" = come si presenta il candidato (email, messaggio, CV…)
//   "valutazione"   = la valutazione della recruiter che ha fatto il colloquio
// Sul telefono compaiono solo foto, nome, età, ruolo e i pulsanti di scelta.
//
// "answer" è la RISPOSTA GIUSTA usata per i punti del quiz:
//   "match" = il candidato va assunto (MATCH)   "skip" = va scartato (SKIP)

const CARDS = [
  {
    id: 1,
    name: "Alessia",
    age: 18,
    position: "Addetta al Front Office / Segretaria",
    answer: "match",
    presentazione: "Ciao! Sono super organizzata, a scuola gestivo io il Drive condiviso della classe con tutti i riassunti e i calendari delle interrogazioni per non farci beccare impreparati. Se serve efficienza, sono la persona giusta.",
    valutazione: "Puntuale e preparata: ha portato il CV stampato e ha fatto domande su come è organizzato l'ufficio. L'email era un po' troppo informale, ma al colloquio si è dimostrata seria, precisa e gentile con tutti.",
    img: "img/Alessia.png"
  },
  {
    id: 2,
    name: "Chiara",
    age: 18,
    position: "Stage in Amministrazione / Contabilità",
    answer: "match",
    presentazione: "Buongiorno, mi chiamo Chiara e mi sono appena diplomata in Amministrazione, Finanza e Marketing con 100/100. Vorrei mettere in pratica quello che ho studiato e imparare da chi ha più esperienza di me. Allego il CV e resto a disposizione.",
    valutazione: "Si è presentata con 20 minuti di anticipo. Durante il colloquio era visibilmente in ansia ed emozionata, ma ha dimostrato di conoscere a memoria tutti i bilanci dell'azienda.",
    img: "img/Chiara.png"
  },
  {
    id: 3,
    name: "Diego",
    age: 19,
    position: "Perito Meccanico Junior / Operatore CNC",
    answer: "skip",
    presentazione: "Ho la media del 9 nelle materie tecniche e col CAD sono più veloce di tanti professionisti. Cerco un'azienda che sappia riconoscere il mio talento, non un posto dove fare la gavetta.",
    valutazione: "Competenze CAD formidabili, ma si è presentato al colloquio in ritardo, masticando la gomma e rispondendo al recruiter: 'Tanto quello che sapete fare voi qui dentro io lo facevo già a 15 anni'.",
    img: "img/Diego.png"
  },
  {
    id: 4,
    name: "Elena",
    age: 18,
    position: "Front Office / Stage in Agenzia di Viaggi e Turismo",
    answer: "skip",
    presentazione: "Salve, mi chiamo Elena e amo viaggiare: ho già visitato dodici Paesi e mi appassiona la storia dei luoghi. Mi piacerebbe lavorare in agenzia per aiutare i clienti a organizzare il viaggio dei loro sogni.",
    valutazione: "Si è presentata al colloquio accompagnata dalla madre, che ha preteso di entrare nella stanza. Elena non ha mai guardato negli occhi il recruiter e ha fatto rispondere la madre a tutte le domande.",
    img: "img/Elena.png"
  },
  {
    id: 5,
    name: "Leo",
    age: 19,
    position: "Impiegato Data Entry / Impiegato Logistico",
    answer: "skip",
    presentazione: "Bella, mi candido per inserimento dati. Sono velocissimo con la tastiera perché faccio i tornei di Call of Duty la notte. Se c'è da scrivere veloci non mi batte nessuno. Disponibile solo dalle 11:00 in poi.",
    valutazione: "Durante il colloquio ha risposto due volte al telefono. Sugli orari ha ripetuto che prima delle 11 'non è operativo'. Non ha fatto nessuna domanda sull'azienda né sul ruolo.",
    img: "img/Leo.png"
  },
  {
    id: 6,
    name: "Marco",
    age: 19,
    position: "Addetto Vendite / Negozio di Abbigliamento",
    answer: "skip",
    presentazione: "Bella raga, vi lascio il mio CV, fatemi sapere se vi gusto. Ciao!",
    valutazione: "Arrivato senza CV e senza sapere per quale negozio si fosse candidato. Grande passione per la moda, ma ha detto che il lavoro gli serve 'solo finché non trovo di meglio'.",
    img: "img/Marco.png"
  },
  {
    id: 7,
    name: "Samuele",
    age: 19,
    position: "Apprendista Elettricista / Idraulico",
    answer: "match",
    presentazione: "Salve, vi allego il mio CV. Ho anche un profilo TikTok con 5k follower dove mostro come riparo i vecchi motorini, se volete vedere come me la cavo con le mani cercatemi pure come @samu_customs!",
    valutazione: "Ha mostrato i video dei suoi lavori spiegando con precisione ogni passaggio. Educato, curioso e molto motivato a imparare il mestiere. Si è detto subito disponibile a fare il corso sulla sicurezza.",
    img: "img/Samuele.png"
  },
  {
    id: 8,
    name: "Tommaso",
    age: 19,
    position: "Addetto alle Vendite",
    answer: "match",
    presentazione: "Buongiorno, sono Tommaso e ho il diploma di Liceo Scientifico. Mi piace stare in mezzo alle persone e lavorare in squadra: vorrei iniziare nel mondo delle vendite e crescere con voi.",
    valutazione: "Capitano della squadra di calcio giovanile da 3 anni. Racconta con grande maturità ed educazione come gestisce le tensioni nello spogliatoio e motiva i compagni. Molto socievole e puntuale.",
    img: "img/Tommaso.png"
  }
];
