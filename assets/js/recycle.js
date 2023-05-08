const recycle = [
    "un armadio con serratura",
    "una libreria",
    "un tavolino da giardino",
    "una statua che spruzza acqua per la fontana",
    "un ripiano del caminetto",
    "due braccioli per una poltrona",
    "un orologio da parete a pendolo",
    "un lampadario",
    "un bassorilievo per la parete",
    "un portaombrelli",
    "un vaso per le piante",
    "una lampada intelligente",
    "un pendolo per orologi a pendolo",
    "un set di posate",
    "un set di candelabri",
    "una cornice per specchi",
    "una cassettiera",
    "un set di posaceneri",
    "un fermaporta",
    "una porta in compensato",
    "una scultura per l'ingresso",
    "un armadietto da cucina",
    "un gargoyle per l'esterno",
    "una bacheca parlante per annotare eventi"
];

const slogan = [
    "Ricicla oggi, perdona domani.",
    "Ricicla omuncoli, non idee.",
    "Ama lo stregone e ricicla.",
    "Ricicla o muori.",
    "Ama lo stregone, riciclati.",
    "Ragiona. Nella differenziata.",
    "Trapasso a zero emissioni di CO2.",
    "Mangia, servi, ricicla.",
    "Non pensare e salva il pianeta.",
    "Salva il pianeta e il nostro tempo.",
    "Stregoneria a km 0.",
    "Nutri l'ambiente, non le speranze."
];

// generate button
const recycleButton = document.getElementById('recycle-button');
recycleButton.addEventListener('click', function () {

    // info generation
    const randomRecycle = recycle[Math.floor(Math.random() * recycle.length)];
    const randomSlogan = slogan[Math.floor(Math.random() * slogan.length)];

    document.getElementById("recyclePGBody").innerHTML = `
				<p>Il tuo omuncolo \u00E8 stato riciclato! </p>
                <p>Ora \u00E8: <code>${randomRecycle}</code></p>
     `;

    document.getElementById("recycleSlogan").innerHTML = `
				${randomSlogan}
     `;
});