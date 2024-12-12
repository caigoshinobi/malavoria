// Tabelle per descrizioni
const descrizioni = {
    forza: {
        braccio: {
			1: ["di legno","scheletrico","da anfibio","da rettile"],
            2: ["grande","argentato","muscoloso","affilato","meccanico","viscido"],
            3: ["enorme","dorato","rinforzato","artigliato","pneumatico","appiccicoso"],
            4: ["gigante","adamantino","corazzato","demoniaco","rotativo","tentacolare"]
        },
        corno: {
			1: ["di legno","a fungo","di cervo"],
            2: ["grande","argentato","ricurvo", "meccanico", "viscido"],
            3: ["enorme","dorato","seghettato", "idraulico", "appiccicoso", "arcobaleno"],
            4: ["gigante","adamantino","demoniaco", "pneumatico", "tentacolare"]
        },
        bocca: {
			1: ["da cane", "da rana", "da papera", "da pesce"],
            2: ["grande","da iguana", "da tucano", "da lupo"],
            3: ["enorme","tentacolare","da coccodrillo","da squalo"],
            4: ["gigante","draconica","demoniaca","xenomorfa"]
        }
    },
    mente: {
        naso: {
			1: ["umano","nanico","adunco","da topo"],
            2: ["grande","da cane","argentato","goblinoide"],
            3: ["enorme","a proboscide","dorato","elfico"],
            4: ["gigante","ultraperfetto","adamantino","arcano"]
        },
        orecchio: {
			1: ["umano","nanico","da topo","da cane"],
            2: ["grande","da volpe","ipersensibile","a sventola", "goblinoide"],
            3: ["enorme","da elefante","a imbuto", "elfico", "arcobaleno"],
            4: ["gigante","arcano","draconico","demoniaco","tentacolare"]
        },
        occhio: {
			1: ["di pesce","umano","nanico","da lupo","da rettile","da rana"],
            2: ["grande","vispo","iridescente", "meccanico"],
            3: ["enorme","telescopico","arcobaleno"],
            4: ["gigante","arcano","demoniaco"]
        }
    },
    agilita: {
        gamba: {
			1: ["di legno", "scheletrica","da anfibio","da rettile"],
            2: ["grande","slanciata", "squamosa", "meccanica"],
            3: ["enorme","artigliata", "rinforzata", "tentacolare"],
            4: ["gigante","demoniaca", "draconica", "pneumatica"]
        },
        coda: {
			1: ["di legno","da pesce","da lucertola","da topo","da cane"],
            2: ["grande","argentata","spinata", "squamosa", "appuntita", "viscida"],
            3: ["enorme","dorata","rinforzata","appiccicosa", "artigliata", "arcobaleno"],
            4: ["gigante","adamantina","draconica", "demoniaca", "tentacolare"]
        },
        ala: {
			1: ["di legno", "piumata","da pipistrello", "scheletrica"],
            2: ["grande","argentata", "artigliata", "membranosa", "meccanica"],
            3: ["enorme","dorata", "rinforzata", "squamosa", "ad elica", "arcobaleno"],
            4: ["gigante","adamantina", "draconica", "demoniaca", "a doppia elica"]
        }
    }
};



// Funzione per generare una descrizione casuale basata sul numero
function generaDescrizione(caratteristica, parte, numero) {
    if (numero === 0) return ""; // Nessuna parte

    const descrizioniParte = descrizioni[caratteristica][parte];
    const gruppi = []; // Array per suddividere la quantità in gruppi

    // Suddividere la quantità in gruppi casuali con massimo livello 4
    let rimanenti = numero;
    while (rimanenti > 0) {
        const maxGruppo = Math.min(rimanenti, 4);
        const gruppo = Math.floor(Math.random() * maxGruppo) + 1;
        gruppi.push(gruppo);
        rimanenti -= gruppo;
    }

    // Generare descrizioni per ogni gruppo
    return gruppi
        .map(gruppo => {
            // Assegna un aggettivo anche per i gruppi di livello 1
            const aggettivi = descrizioniParte[gruppo];
            const aggettivo = aggettivi[Math.floor(Math.random() * aggettivi.length)];
            return `${parte} ${aggettivo} (${gruppo})`;
        })
        .join(", ");
}





// Funzione per consolidare e generare la descrizione dell'omuncolo
function consolidaAspetto() {
    // Input per Forza
    const braccio = parseInt(document.getElementById("input-braccio").value) || 0;
    const corno = parseInt(document.getElementById("input-corno").value) || 0;
    const bocca = parseInt(document.getElementById("input-bocca").value) || 0;

    // Input per Mente
    const naso = parseInt(document.getElementById("input-naso").value) || 0;
    const orecchio = parseInt(document.getElementById("input-orecchio").value) || 0;
    const occhio = parseInt(document.getElementById("input-occhio").value) || 0;

    // Input per Agilità
    const gamba = parseInt(document.getElementById("input-gamba").value) || 0;
    const coda = parseInt(document.getElementById("input-coda").value) || 0;
    const ala = parseInt(document.getElementById("input-ala").value) || 0;

    // Descrizioni per ogni caratteristica
    const descrizioneForza = [
        generaDescrizione("forza", "braccio", braccio),
        generaDescrizione("forza", "corno", corno),
        generaDescrizione("forza", "bocca", bocca),
    ].filter(desc => desc).join(", ");

    const descrizioneMente = [
        generaDescrizione("mente", "naso", naso),
        generaDescrizione("mente", "orecchio", orecchio),
        generaDescrizione("mente", "occhio", occhio),
    ].filter(desc => desc).join(", ");

    const descrizioneAgilita = [
        generaDescrizione("agilita", "gamba", gamba),
        generaDescrizione("agilita", "coda", coda),
        generaDescrizione("agilita", "ala", ala),
    ].filter(desc => desc).join(", ");

    // Compone il risultato in formato schematizzato
    const risultato = `
        <b>Forza:</b><br>
        ${descrizioneForza || "Nessuna parte"}<br><br>
        <b>Mente:</b><br>
        ${descrizioneMente || "Nessuna parte"}<br><br>
        <b>Agilità:</b><br>
        ${descrizioneAgilita || "Nessuna parte"}
    `;

    // Mostra il risultato nel modale
    document.getElementById("stabilized-look-result").innerHTML = risultato;
}

// Event listener per il pulsante di consolidamento
document.getElementById("generate-description-button").addEventListener("click", consolidaAspetto);


// Event listener per il pulsante di consolidamento
document.getElementById("generate-description-button").addEventListener("click", consolidaAspetto);
