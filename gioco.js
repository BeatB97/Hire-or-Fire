// LOGICA DEL QUIZ — condivisa tra la regia (monitor) e i telefoni dei partecipanti.
//
// Stato della stanza su Firebase (sessions/CODICE):
//   phase        "lobby"    = iscrizioni aperte
//                "question" = profilo sui telefoni, si vota
//                "reveal"   = risposta giusta svelata, punti assegnati
//                "final"    = classifica finale
//   currentIndex posizione del profilo attuale (0, 1, 2…)
//   cardOrder    ordine (mescolato) dei profili per questa stanza
//   students     { idPartecipante: "nickname" }
//   votes        { posizione: { idPartecipante: "match" | "skip" } }
//
// Punti: 1 punto per ogni risposta giusta, contati solo sui profili già svelati.

function getOrder(data){
  return (data && data.cardOrder) || CARDS.map((_, i) => i);
}

function cardAt(data, pos){
  return CARDS[getOrder(data)[pos]];
}

function votesAt(data, pos){
  const v = data && data.votes ? data.votes[pos] : null;
  return v || {};
}

// Quanti profili sono già stati svelati (e quindi contano per i punti)
function revealedCount(data){
  const idx = data.currentIndex || 0;
  if (data.phase === 'reveal' || data.phase === 'final') return idx + 1;
  if (data.phase === 'question') return idx;
  return 0;
}

// Classifica: [{ id, name, score }] ordinata dal punteggio più alto
function computeLeaderboard(data){
  const students = data.students || {};
  const scores = {};
  Object.keys(students).forEach(id => scores[id] = 0);
  const n = revealedCount(data);
  for (let p = 0; p < n; p++){
    const answer = cardAt(data, p).answer;
    const v = votesAt(data, p);
    Object.keys(v).forEach(id => {
      if (id in scores && v[id] === answer) scores[id]++;
    });
  }
  return Object.keys(scores)
    .map(id => ({ id, name: String(students[id] || '—'), score: scores[id] }))
    .sort((a, b) => b.score - a.score || a.name.localeCompare(b.name, 'it'));
}

// Posizione in classifica (a pari punti, stessa posizione)
function rankOf(board, id){
  const me = board.find(r => r.id === id);
  if (!me) return null;
  return 1 + board.filter(r => r.score > me.score).length;
}

// Foto senza testi sovrapposti (nome, passioni, descrizione): cartella img/telefono
function cleanImg(card){
  return card.img.replace('img/', 'img/telefono/').replace(/\.png$/i, '.jpg');
}

function answerLabel(a){
  return a === 'match' ? '♥ MATCH' : '✕ SKIP';
}

function escapeHtml(s){
  return String(s).replace(/[&<>"']/g, c => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c]));
}
