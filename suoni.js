// SUONI DEL TELEFONO — applauso (risposta giusta) e "buuu" (risposta sbagliata).
//
// I suoni sono file audio nella cartella /suoni:
//   suoni/applauso.mp3   suoni/buuu.mp3
// Se un file manca, il gioco funziona lo stesso, semplicemente senza quel suono.
//
// Sui telefoni (soprattutto iPhone) l'audio si può attivare solo dopo un tocco
// dell'utente: per questo chiamiamo sbloccaAudio() quando si preme "Entra" e quando si vota.

const FILE_SUONI = { applauso: 'suoni/applauso.mp3', buuu: 'suoni/buuu.mp3' };
const VOLUME_SUONI = 0.8;

let AUDIO_CTX = null;
const BUFFER_SUONI = {};
let suoniInCaricamento = false;

function sbloccaAudio(){
  try {
    if (!AUDIO_CTX) {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return;
      AUDIO_CTX = new Ctx();
    }
    if (AUDIO_CTX.state === 'suspended') AUDIO_CTX.resume();
    // un suono muto brevissimo "sveglia" l'audio su iOS
    const s = AUDIO_CTX.createBufferSource();
    s.buffer = AUDIO_CTX.createBuffer(1, 1, 22050);
    s.connect(AUDIO_CTX.destination); s.start(0);
    caricaSuoni();
  } catch (e) { /* audio non disponibile: il gioco funziona lo stesso */ }
}

// Scarica e prepara i file una volta sola
function caricaSuoni(){
  if (suoniInCaricamento || !AUDIO_CTX) return;
  suoniInCaricamento = true;
  Object.keys(FILE_SUONI).forEach(nome => {
    fetch(FILE_SUONI[nome])
      .then(r => { if (!r.ok) throw new Error('manca ' + FILE_SUONI[nome]); return r.arrayBuffer(); })
      .then(dati => new Promise((ok, ko) => AUDIO_CTX.decodeAudioData(dati, ok, ko)))
      .then(buf => { BUFFER_SUONI[nome] = buf; })
      .catch(() => { /* file assente: niente suono */ });
  });
}

function suona(nome){
  if (!AUDIO_CTX || !BUFFER_SUONI[nome]) return;
  if (AUDIO_CTX.state === 'suspended') AUDIO_CTX.resume();
  const src = AUDIO_CTX.createBufferSource();
  src.buffer = BUFFER_SUONI[nome];
  const g = AUDIO_CTX.createGain();
  g.gain.value = VOLUME_SUONI;
  src.connect(g); g.connect(AUDIO_CTX.destination);
  src.start(0);
}

function suonaApplauso(){ suona('applauso'); }
function suonaBuuu(){ suona('buuu'); }

// Per i pulsanti di prova: aspetta che il file sia pronto (max 3 secondi) e poi suona
function provaSuono(nome){
  sbloccaAudio();
  const inizio = Date.now();
  (function attendi(){
    if (BUFFER_SUONI[nome]) return suona(nome);
    if (Date.now() - inizio > 3000) return alertSuonoMancante(nome);
    setTimeout(attendi, 100);
  })();
}
function alertSuonoMancante(nome){
  const el = document.getElementById('avvisoSuoni');
  if (el) el.textContent = `Manca il file ${FILE_SUONI[nome]}`;
}
