const races = [
    "umano",
    "nano",
    "elfo",
    "gnomo",
    "folletto",
    "stregone"
];



const jobs = [
    "ambasciatore",
    "conciliatore",
    "diplomatico",
    "lupo di mare",
    "capitano",
    "mercante",
    "esattore",
    "tesoriere",
    "cuoco",
    "fattorino",
    "nobile",
    "mercenario",
    "custode del portale",
    "cacciatore di taglie",
    "guardia cittadina",
    "guardiano del tempio",
    "soldato",
    "custode della foresta",
    "sceriffo",
    "spazzino",
    "mago",
    "stregone",
    "incantatore",
    "mago del fuoco",
    "mago dell'acqua",
    "mago dell'aria",
    "mago della terra",
    "alchimista",
    "fabbro",
    "cavaliere",
    "paladino",
    "scudiero",
    "barbaro",
    "cacciatore",
    "ranger",
    "ladro",
    "assassino",
    "bardo",
    "druido",
    "chierico",
    "sacerdote",
    "monaco",
    "necromante",
    "sommelier di pozioni",
    "abilissimo giocoliere",
    "spadaccino",
    "arciere",
    "guerriero del tempio",
    "artigiano di frecce",
    "custode di tombe",
    "sciamano",
    "stregone delle ombre",
    "combattente dell'oscurita'",
    "stregone del vento",
    "pittore di illusioni",
    "custode del libro dei segreti",
    "magistrato delle leggi arcane",
    "maestro della trappola",
    "creatore di golem",
    "burattinaio",
    "inventore di armi meccaniche",
    "cercatore di antiche reliquie",
    "ricercatore di conoscenza proibita",
    "custode della porta dimensionale",
    "fabbro di armature magiche",
    "inventore di dispositivi volanti",
    "custode di una biblioteca magica"
];


const causesOfDeath = [
    "avvelenamento",
    "colpo alla testa",
    "annegamento",
    "stordimento",
    "assideramento",
    "esplosione",
    "incendio",
    "impiccagione",
    "soffocamento",
    "fulminazione",
    "maledizione",
    "esposizione alla magia nera",
    "morso di un mostro",
    "ferita da arma da taglio",
    "ferita da arma da fuoco",
    "caduta da grande altezza",
    "sbranato da animali selvaggi",
    "tramortito da una pozione",
    "congelamento",
    "pugnalato da una lama avvelenata",
    "vittima di una magia malvagia",
    "morte per avvelenamento da cioccolato",
    "presa in giro a morte",
    "lacerazione da un libro stregato",
    "morte per affaticamento mentale",
    "annientamento da un raggio distruttivo",
    "morte per intossicazione da formaggio",
    "influenza da polvere di fata",
    "fusa dopo essere stato trasformato in un gatto"
];

const culprits = [
    "cuscino maledetto",
    "gnoll",
    "orco",
    "goblin",
    "lich",
    "drago",
    "assassino",
    "vampiro",
    "demone",
    "necromante",
    "elementale dell'aria",
    "elementale dell'acqua",
    "elementale della terra",
    "elementale del fuoco",
    "minotauro",
    "kraken",
    "fantasma",
    "ladro",
    "traditore",
    "spia",
    "fratello geloso",
    "sorella gelosa",
    "padre adottivo",
    "madre adottiva",
    "maestro",
    "studente",
    "compagno di avventura",
    "rivale",
    "amante respinto",
    "membro di un culto",
    "ospite invidioso",
    "sconosciuto (bersaglio sbagliato)",
    "colpo accidentale",
    "destino infausto",
    "sedia assassina",
    "quadro incantato",
    "pianta carnivora",
    "peluche posseduto",
    "penna stregata",
    "tappeto volante impazzito",
    "tazza malefica",
    "forchetta assassina",
    "tisana avvelenata",
    "biscotto maledetto",
    "matita posseduta",
    "pennello incantato",
    "calzino demoniaco",
    "libro incendiario",
    "poltrona assassina",
    "rasoio ribelle",
    "candela velenosa",
    "pupazzo di nonna",
    "tagliacarte assassino",
    "borsa demoniaca",
    "cappello stregato",
    "scarpa maledetta",
    "portafoglio insidioso",
    "cintura assassina",
    "pettine malefico",
    "spazzola posseduta",
    "chiave incantata",
    "torcia assassina",
    "cacciavite infernale"
];


// generate button
const generateButton = document.getElementById('generate-button');
generateButton.addEventListener('click', function () {

    // info generation
    const randomRace = races[Math.floor(Math.random() * races.length)];
    const randomJob = jobs[Math.floor(Math.random() * jobs.length)];
    const randomDeath = causesOfDeath[Math.floor(Math.random() * causesOfDeath.length)];
    const randomCulprit = culprits[Math.floor(Math.random() * culprits.length)];

    document.getElementById("generateMemoriesBody").innerHTML = `
				<p id="race-text"><b>Razza:</b>  <code>${randomRace}</code></p>
				<p id="job-text"><b>Professione:</b>  <code>${randomJob}</code></p>
				<p id="death-text"><b>Causa del decesso:</b>  <code>${randomDeath}</code></p>
				<p id="culprit-text"><b>Il colpevole:</b>  <code>${randomCulprit}</code></p>
     `;
});