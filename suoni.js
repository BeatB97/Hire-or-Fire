// SUONI DEL TELEFONO — applauso (risposta giusta) e "buuu" (risposta sbagliata).
// Sono generati al momento con il Web Audio del browser: nessun file audio da scaricare.
//
// Sui telefoni (soprattutto iPhone) l'audio si può attivare solo dopo un tocco
// dell'utente: per questo chiamiamo sbloccaAudio() quando si preme "Entra" e quando si vota.

let AUDIO_CTX = null;

function sbloccaAudio(){
  try {
    if (!AUDIO_CTX) {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return;
      AUDIO_CTX = new Ctx();
    }
    if (AUDIO_CTX.state === 'suspended') AUDIO_CTX.resume();
    // un suono muto brevissimo "sveglia" l'audio su iOS
    const b = AUDIO_CTX.createBuffer(1, 1, 22050);
    const s = AUDIO_CTX.createBufferSource();
    s.buffer = b; s.connect(AUDIO_CTX.destination); s.start(0);
  } catch (e) { /* audio non disponibile: il gioco funziona lo stesso */ }
}

function audioPronto(){
  if (!AUDIO_CTX) return false;
  if (AUDIO_CTX.state === 'suspended') AUDIO_CTX.resume();
  return true;
}

// Uscita comune: un limitatore evita che il suono "gracchi" quando è forte
function uscita(){
  const comp = AUDIO_CTX.createDynamicsCompressor();
  comp.threshold.value = -10; comp.ratio.value = 12; comp.attack.value = 0.003; comp.release.value = 0.2;
  comp.connect(AUDIO_CTX.destination);
  return comp;
}

function rumoreBianco(secondi){
  const ctx = AUDIO_CTX;
  const buf = ctx.createBuffer(1, Math.floor(ctx.sampleRate * secondi), ctx.sampleRate);
  const d = buf.getChannelData(0);
  for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
  return buf;
}

// 👏 Applauso: tanti battiti di mani brevi e casuali, che crescono e poi si spengono
function suonaApplauso(){
  if (!audioPronto()) return;
  const ctx = AUDIO_CTX;
  const t0 = ctx.currentTime + 0.05;
  const durata = 2.8;
  const master = ctx.createGain();
  master.gain.setValueAtTime(0.0001, t0);
  master.gain.exponentialRampToValueAtTime(2.6, t0 + 0.35);
  master.gain.setValueAtTime(2.6, t0 + durata - 1.0);
  master.gain.exponentialRampToValueAtTime(0.0001, t0 + durata);
  master.connect(uscita());

  const rumore = rumoreBianco(0.06);
  const persone = 14;
  for (let p = 0; p < persone; p++) {
    const ritmo = 0.19 + Math.random() * 0.12;     // ogni persona batte con il suo ritmo
    const tono = 900 + Math.random() * 1700;       // mani diverse, suono diverso
    for (let t = Math.random() * ritmo; t < durata; t += ritmo * (0.85 + Math.random() * 0.3)) {
      const src = ctx.createBufferSource();
      src.buffer = rumore;
      const filtro = ctx.createBiquadFilter();
      filtro.type = 'bandpass';
      filtro.frequency.value = tono;
      filtro.Q.value = 0.9;
      const g = ctx.createGain();
      const at = t0 + t;
      g.gain.setValueAtTime(0.0001, at);
      g.gain.exponentialRampToValueAtTime(0.5, at + 0.003);
      g.gain.exponentialRampToValueAtTime(0.0001, at + 0.05);
      src.connect(filtro); filtro.connect(g); g.connect(master);
      src.start(at); src.stop(at + 0.06);
    }
  }
}

// 👎 "Buuu": un piccolo coro di voci basse che fanno "uuu" scendendo di tono
function suonaBuuu(){
  if (!audioPronto()) return;
  const ctx = AUDIO_CTX;
  const t0 = ctx.currentTime + 0.05;
  const durata = 2.0;

  const master = ctx.createGain();
  master.gain.setValueAtTime(0.0001, t0);
  master.gain.exponentialRampToValueAtTime(2.0, t0 + 0.25);
  master.gain.setValueAtTime(2.0, t0 + durata - 0.6);
  master.gain.exponentialRampToValueAtTime(0.0001, t0 + durata);

  // filtri "vocale U": prima formante ~300 Hz, seconda ~850 Hz
  const f1 = ctx.createBiquadFilter(); f1.type = 'bandpass'; f1.frequency.value = 320; f1.Q.value = 4;
  const f2 = ctx.createBiquadFilter(); f2.type = 'bandpass'; f2.frequency.value = 850; f2.Q.value = 6;
  const g2 = ctx.createGain(); g2.gain.value = 0.35;
  const passaBasso = ctx.createBiquadFilter(); passaBasso.type = 'lowpass'; passaBasso.frequency.value = 1400;
  f1.connect(passaBasso); f2.connect(g2); g2.connect(passaBasso);
  passaBasso.connect(master);
  master.connect(uscita());

  const voci = 7;
  for (let v = 0; v < voci; v++) {
    const osc = ctx.createOscillator();
    osc.type = 'sawtooth';
    const base = 105 + Math.random() * 70;
    const start = t0 + Math.random() * 0.15;
    osc.frequency.setValueAtTime(base * 1.08, start);
    osc.frequency.exponentialRampToValueAtTime(base * 0.82, t0 + durata);
    // leggero tremolio della voce
    const lfo = ctx.createOscillator(); lfo.frequency.value = 4 + Math.random() * 2.5;
    const lfoG = ctx.createGain(); lfoG.gain.value = base * 0.025;
    lfo.connect(lfoG); lfoG.connect(osc.frequency);
    const g = ctx.createGain(); g.gain.value = 0.5 / voci * 3;
    osc.connect(g); g.connect(f1); g.connect(f2);
    osc.start(start); lfo.start(start);
    osc.stop(t0 + durata + 0.05); lfo.stop(t0 + durata + 0.05);
  }

  // un po' di "fiato"
  const fiato = ctx.createBufferSource(); fiato.buffer = rumoreBianco(durata);
  const fg = ctx.createGain(); fg.gain.value = 0.08;
  fiato.connect(fg); fg.connect(f1);
  fiato.start(t0); fiato.stop(t0 + durata);
}
