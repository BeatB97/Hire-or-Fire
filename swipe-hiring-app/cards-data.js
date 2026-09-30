// FASCICOLI CANDIDATI — dati condivisi tra pagina Docente e pagina Studente
// Per aggiungere/modificare una carta, edita questo array.
// "img" deve puntare a un file dentro la cartella /img
//
// Nota: durante il voto i candidati sono anonimi (solo foto, posizione e nota).
// Il nome viene mostrato SOLO nella schermata dei risultati finali, per la discussione.

const CARDS = [
  {
    id: 1,
    name: "Alessia",
    position: "Addetta al Front Office / Segretaria",
    quoteLabel: "Email di presentazione",
    quote: "Ciao! Sono super organizzata, a scuola gestivo io il Drive condiviso della classe con tutti i riassunti e i calendari delle interrogazioni per non farci beccare impreparati. Se serve efficienza, sono la persona giusta.",
    img: "img/Alessia.png"
  },
  {
    id: 2,
    name: "Chiara",
    position: "Stage in Amministrazione / Contabilità",
    quoteLabel: "Nota HR",
    quote: "Si è presentata con 20 minuti di anticipo. Durante il colloquio era visibilmente in ansia ed emozionata, ma ha dimostrato di conoscere a memoria tutti i bilanci dell'azienda.",
    img: "img/Chiara.png"
  },
  {
    id: 3,
    name: "Diego",
    position: "Perito Meccanico Junior / Operatore CNC",
    quoteLabel: "Nota HR",
    quote: "Competenze CAD formidabili, ma si è presentato al colloquio in ritardo, masticando la gomma e rispondendo al recruiter: 'Tanto quello che sapete fare voi qui dentro io lo facevo già a 15 anni'.",
    img: "img/Diego.png"
  },
  {
    id: 4,
    name: "Elena",
    position: "Front Office / Stage in Agenzia di Viaggi e Turismo",
    quoteLabel: "Nota HR",
    quote: "Si è presentata al colloquio accompagnata dalla madre, che ha preteso di entrare nella stanza. Elena non ha mai guardato negli occhi il recruiter e ha fatto rispondere la madre a tutte le domande.",
    img: "img/Elena.png"
  },
  {
    id: 5,
    name: "Leo",
    position: "Impiegato Data Entry / Impiegato Logistico",
    quoteLabel: "Email di presentazione",
    quote: "Bella, mi candido per inserimento dati. Sono velocissimo con la tastiera perché faccio i tornei di Call of Duty la notte. Se c'è da scrivere veloci non mi batte nessuno. Disponibile solo dalle 11:00 in poi.",
    img: "img/Leo.png"
  },
  {
    id: 6,
    name: "Marco",
    position: "Addetto Vendite / Negozio di Abbigliamento",
    quoteLabel: "Email di presentazione",
    quote: "Bella raga, vi lascio il mio CV, fatemi sapere se vi gusto. Ciao!",
    img: "img/Marco.png"
  },
  {
    id: 7,
    name: "Samuele",
    position: "Apprendista Elettricista / Idraulico",
    quoteLabel: "Email di presentazione",
    quote: "Salve, vi allego il mio CV. Ho anche un profilo TikTok con 5k follower dove mostro come riparo i vecchi motorini, se volete vedere come me la cavo con le mani cercatemi pure come @samu_customs!",
    img: "img/Samuele.png"
  },
  {
    id: 8,
    name: "Tommaso",
    position: "Addetto alle Vendite",
    quoteLabel: "Nota HR",
    quote: "Capitano della squadra di calcio giovanile da 3 anni. Racconta con grande maturità ed educazione come gestisce le tensioni nello spogliatoio e motiva i compagni. Molto socievole e puntuale.",
    img: "img/Tommaso.png"
  }
];
