// PROFILI DEI CANDIDATI — dati condivisi tra la regia (monitor) e i telefoni.
// Per aggiungere/modificare un candidato, modifica questo elenco.
// "img" deve puntare a un file dentro la cartella /img
//
// Ogni candidato ha due box, mostrati in grande sul monitor:
//   "presentazione" = l'email con cui il candidato si presenta
//   "valutazione"   = le note della HR Recruiter che ha fatto il colloquio
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
    presentazione: "Ciao! Mi chiamo Alessia, ho 18 anni e sono di Rimini. Sono super organizzata: a scuola gestivo io il Drive condiviso della classe con tutti i riassunti e i calendari delle interrogazioni per non farci beccare impreparati. Parlo Inglese e Spagnolo (B2) e nel tempo libero leggo e guardo serie TV in lingua. Se serve efficienza, sono la persona giusta.",
    valutazione: "Puntuale e preparata: ha portato il CV stampato e ha fatto domande su come è organizzato l'ufficio. L'email era un po' troppo informale, ma al colloquio si è dimostrata seria, precisa e gentile con tutti.",
    img: "img/Alessia.png"
  },
  {
    id: 2,
    name: "Chiara",
    age: 18,
    position: "Stage in Amministrazione / Contabilità",
    answer: "match",
    presentazione: "Buongiorno, mi chiamo Chiara, ho 18 anni e vivo a Genova. Mi sono diplomata con 100/100 all'Istituto Tecnico Economico, sono autonoma su Excel (ho seguito un corso estivo) e ho l'Inglese Commerciale B2. L'economia è la mia passione: vorrei mettere in pratica quello che ho studiato e imparare da chi ha più esperienza. Allego il CV e resto a disposizione.",
    valutazione: "Si è presentata con 20 minuti di anticipo. Durante il colloquio era visibilmente in ansia ed emozionata, ma ha dimostrato di conoscere a memoria tutti i bilanci dell'azienda.",
    img: "img/Chiara.png"
  },
  {
    id: 3,
    name: "Diego",
    age: 19,
    position: "Perito Meccanico Junior / Operatore CNC",
    answer: "skip",
    presentazione: "Ciao, sono Diego, 19 anni, di Lecce. Ho la media del 9 nelle materie tecniche, ma 6 in condotta (i prof non mi capivano). Meccanica, grafica 3D e tuning sono la mia vita: col CAD sono più veloce di tanti che lo fanno di mestiere. Cerco un'azienda che sappia riconoscere il talento, non un posto dove fare la gavetta.",
    valutazione: "Competenze CAD formidabili, ma si è presentato al colloquio in ritardo, masticando la gomma e rispondendo al recruiter: 'Tanto quello che sapete fare voi qui dentro io lo facevo già a 15 anni'.",
    img: "img/Diego.png"
  },
  {
    id: 4,
    name: "Elena",
    age: 18,
    position: "Front Office / Stage in Agenzia di Viaggi e Turismo",
    answer: "skip",
    presentazione: "Buongiorno, sono Elena, ho 18 anni e abito a Sansepolcro. Ho ottimi voti in geografia e lingue straniere e le mie passioni sono i viaggi, la geografia e la storia dell'arte. Mi piacerebbe molto lavorare in un'agenzia di viaggi per aiutare i clienti a organizzare la vacanza dei loro sogni. Grazie per l'attenzione.",
    valutazione: "Si è presentata al colloquio accompagnata dalla madre, che ha preteso di entrare nella stanza. Elena non ha mai guardato negli occhi il recruiter e ha fatto rispondere la madre a tutte le domande.",
    img: "img/Elena.png"
  },
  {
    id: 5,
    name: "Leo",
    age: 19,
    position: "Impiegato Data Entry / Impiegato Logistico",
    answer: "skip",
    presentazione: "Bella, sono Leo, 19 anni, da Vicenza. Mi candido per inserimento dati. Uso il PC a livello avanzato e sono velocissimo con la tastiera perché faccio i tornei di Call of Duty la notte. Gaming, tecnologia e anime sono la mia vita. Se c'è da scrivere veloci non mi batte nessuno. Disponibile solo dalle 11:00 in poi.",
    valutazione: "Durante il colloquio ha risposto due volte al telefono. Sugli orari ha ripetuto che prima delle 11 'non è operativo'. Non ha fatto nessuna domanda sull'azienda né sul ruolo.",
    img: "img/Leo.png"
  },
  {
    id: 6,
    name: "Marco",
    age: 19,
    position: "Addetto Vendite / Negozio di Abbigliamento",
    answer: "skip",
    presentazione: "Bella raga, sono Marco, 19 anni, di Padova. Conosco benissimo tutti i brand di streetwear, moda e basket sono la mia vita. Vi lascio il mio CV, fatemi sapere se vi gusto. Ciao!",
    valutazione: "Arrivato senza CV e senza sapere per quale negozio si fosse candidato. Grande passione per la moda, ma ha detto che il lavoro gli serve 'solo finché non trovo di meglio'.",
    img: "img/Marco.png"
  },
  {
    id: 7,
    name: "Samuele",
    age: 19,
    position: "Apprendista Elettricista / Idraulico",
    answer: "match",
    presentazione: "Salve, mi chiamo Samuele, ho 19 anni e vivo a Roma. Frequento l'istituto professionale e ho un'ottima manualità e precisione; le mie passioni sono motori, fai-da-te e domotica. Vi allego il mio CV. Ho anche un profilo TikTok con 5k follower dove mostro come riparo i vecchi motorini: se volete vedere come me la cavo con le mani, cercatemi pure come @samu_customs!",
    valutazione: "Ha mostrato i video dei suoi lavori spiegando con precisione ogni passaggio. Educato, curioso e molto motivato a imparare il mestiere. Si è detto subito disponibile a fare il corso sulla sicurezza.",
    img: "img/Samuele.png"
  },
  {
    id: 8,
    name: "Tommaso",
    age: 19,
    position: "Addetto alle Vendite",
    answer: "match",
    presentazione: "Buongiorno, sono Tommaso, ho 19 anni e vivo a Brescia. Ho il diploma di Liceo Scientifico e non ho ancora esperienze di lavoro, ma calcio, lavoro di squadra e leadership sono le mie passioni. Mi piace stare in mezzo alle persone: vorrei iniziare nel mondo delle vendite e imparare il mestiere. Resto a disposizione per un colloquio.",
    valutazione: "Capitano della squadra di calcio giovanile da 3 anni. Racconta con grande maturità ed educazione come gestisce le tensioni nello spogliatoio e motiva i compagni. Molto socievole e puntuale.",
    img: "img/Tommaso.png"
  }
];
