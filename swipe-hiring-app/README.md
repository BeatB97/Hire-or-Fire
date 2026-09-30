# Chi Assumeresti? — Sondaggio interattivo stile "swipe"

App web gratuita, senza server da gestire e senza installazioni per gli studenti.
Basta un link: gli studenti lo aprono dal telefono, il docente proietta la sua schermata,
e tutto si sincronizza in tempo reale grazie a **Firebase Realtime Database**.

## Come funziona

- **docente.html** → la "regia": crea una stanza, mostra un fascicolo alla volta, avanza/torna indietro, e alla fine sblocca i risultati.
- **studente.html** → la pagina che apre ogni studente: si sincronizza da sola col fascicolo mostrato dal docente, e ha solo due pulsanti: **MATCH** o **SKIP**.
- **index.html** → pagina iniziale con i due link sopra.
- I risultati (Match/Skip) restano nascosti a tutti finché il docente non preme "Sblocca e mostra i risultati finali".

Non serve scaricare app: tutto gira nel browser del telefono.

---

## Perché Firebase + GitHub Pages (e non solo GitHub)

GitHub da solo (GitHub Pages) ospita **solo file statici**: HTML, CSS, JS. Non ha un "cervello" che tenga in memoria in tempo reale qual è il fascicolo corrente o i voti di 25 studenti contemporaneamente.

Per questo serve un piccolo database in tempo reale: **Firebase Realtime Database** di Google. È gratuito per questo utilizzo (piano Spark), non richiede carta di credito, e si collega al sito con poche righe di configurazione già pronte nel file `firebase-config.js`.

Riassumendo:
- **GitHub Pages** = dove "vive" il link che apri col telefono (gratis, istantaneo).
- **Firebase Realtime Database** = la lavagna condivisa che sincronizza docente e studenti (gratis, 5 minuti di setup).

---

## PARTE 1 — Crea il database Firebase (una tantum, 5 minuti)

1. Vai su **https://console.firebase.google.com** ed entra con un account Google.
2. Clicca **"Aggiungi progetto"**. Dai un nome (es. `chi-assumeresti`), procedi (puoi disattivare Google Analytics, non serve).
3. Nel menu a sinistra del progetto, vai su **Build → Realtime Database**.
4. Clicca **"Crea database"**. Scegli la località (va bene `europe-west1` se disponibile).
5. Alla domanda sulle regole di sicurezza, scegli **"Avvia in modalità test"** per procedere velocemente (la sistemi in modo permanente al punto 6bis qui sotto).
**5bis. Rendi le regole permanenti (niente scadenza a 30 giorni)**

La modalità test si disattiva automaticamente dopo 30 giorni per motivi di sicurezza. Dato che qui non ci sono dati sensibili (profili inventati), puoi impostare regole aperte ma **senza scadenza**:

- Nel menu a sinistra, sotto Realtime Database, clicca la scheda **"Regole"** (Rules).
- Cancella il contenuto e incolla questo al suo posto:
  ```json
  {
    "rules": {
      ".read": true,
      ".write": true
    }
  }
  ```
  (Lo trovi già pronto nel file `firebase-database-rules.json` incluso in questo progetto — puoi anche solo copiare e incollare da lì.)
- Clicca **"Pubblica"** (Publish). Fatto: ora le regole restano valide per sempre, nessuna scadenza.

6. Ora vai nel menu a sinistra su **⚙️ Impostazioni progetto → Generale**, scorri fino a "Le tue app", clicca l'icona **`</>`** (Web) per registrare una nuova app web. Dai un nome qualsiasi e clicca "Registra app".
7. Firebase ti mostrerà un blocco di codice `const firebaseConfig = { ... }`. **Copia solo quei valori** (apiKey, authDomain, databaseURL, projectId, storageBucket, messagingSenderId, appId).
8. Apri il file **`firebase-config.js`** che ti ho preparato e incolla i tuoi valori al posto dei segnaposto `INCOLLA_QUI_...`. Salva il file.

> ⚠️ Importante: assicurati che `databaseURL` sia presente — a volte Firebase non lo mostra nel primo riquadro; se manca, prendilo dalla pagina Realtime Database (è l'URL in alto, tipo `https://chi-assumeresti-default-rtdb.europe-west1.firebasedatabase.app`).

---

## PARTE 2 — Metti l'app online con GitHub Pages (5 minuti)

1. Vai su **https://github.com** e crea un account gratuito se non lo hai già.
2. Clicca **"New repository"** (in alto a destra, icona `+`). Dai un nome, es. `chi-assumeresti`, impostalo **Public**, poi **"Create repository"**.
3. Nella pagina del repository appena creato, clicca **"uploading an existing file"** (o "Add file → Upload files").
4. Trascina dentro **tutti i file e le cartelle** di questo progetto (compresa la cartella `img` con le 8 foto già inclusa) — cioè: `index.html`, `docente.html`, `studente.html`, `style.css`, `cards-data.js`, `firebase-config.js` (già compilato con i tuoi dati Firebase!) e la cartella `img/`. Il file `firebase-database-rules.json` non serve caricarlo su GitHub — è solo un riferimento da incollare nella console Firebase al punto 5bis.
5. Scorri in basso e clicca **"Commit changes"**.
6. Vai su **Settings** (in alto nel repository) → nel menu a sinistra **Pages**.
7. Sotto "Build and deployment", in "Branch" scegli **`main`** e cartella **`/ (root)`**, poi **Save**.
8. Aspetta circa 1 minuto, poi ricarica la pagina: GitHub ti mostrerà un link tipo
   `https://tuonomeutente.github.io/chi-assumeresti/`
   Quello è il link definitivo, sempre valido, da condividere.

Da quel momento:
- Tu apri **`https://tuonomeutente.github.io/chi-assumeresti/docente.html`**
- Gli studenti aprono **`https://tuonomeutente.github.io/chi-assumeresti/studente.html`** (o semplicemente il link principale e cliccano "Sono uno Studente")

---

## Come si svolge l'attività in classe

1. Tu apri **docente.html**, clicchi **"Crea nuova stanza"**: ti appare un codice tipo `TRK4G` e un QR code.
2. Proietti quella schermata. Gli studenti aprono **studente.html** dal telefono, inseriscono il codice (o inquadrano il QR) ed entrano.
3. Clicchi **"Inizia proiezione fascicolo 1"**: sia tu che tutti gli studenti vedete lo stesso fascicolo, sincronizzato.
4. Ogni studente clicca **MATCH** o **SKIP**: una volta votato, il suo schermo mostra "in attesa" finché non avanzi tu.
5. Usi **"← Precedente" / "Successivo →"** per scorrere gli 8 fascicoli. Il contatore ti dice quante risposte sono arrivate, ma **non** la loro ripartizione: i risultati restano segreti.
6. Alla fine, clicchi **"🔓 Sblocca e mostra i risultati finali"**: sia la tua schermata sia quelle degli studenti mostrano i grafici Match/Skip per ogni candidato, pronti per la discussione in classe.

Se devi ripetere l'attività con un'altra classe, clicca semplicemente **"Crea nuova stanza"** di nuovo: ogni stanza ha voti indipendenti.

---

## Nota sulla sicurezza dei dati

Con le regole permanenti del punto 5bis, il database resta leggibile/scrivibile da chiunque abbia il link, senza scadenza. Va benissimo per questa attività perché i profili sono inventati e non ci sono dati sensibili. Tieni presente che:
- uno studente molto smanettone con gli strumenti sviluppatore del browser potrebbe, in teoria, leggere i voti prima dello sblocco — per un'attività di classe standard è un rischio trascurabile;
- se in futuro volessi usare l'app con dati reali o sensibili, scrivimi e ti preparo delle regole più restrittive (es. limitate a una finestra temporale o protette da una password di stanza).

## Personalizzare le carte

Tutti i testi ed i nomi dei file immagine sono in **`cards-data.js`**: puoi modificarli, aggiungerne altri, o sostituire le foto nella cartella **`img/`** (basta rispettare lo stesso nome file usato in `cards-data.js`, oppure aggiornarlo).
