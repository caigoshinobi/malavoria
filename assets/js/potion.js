const guardian = [
    "acida",
    "brutale",
    "ceffone",
    "facchina",
    "scudo",
    "vigore"
];

const familiar = [
    "costruttrice",
    "idrante",
    "incendiaria",
    "sociale",
    "teleporta",
    "zeta",
];

const scout = [
    "fortunata",
    "lanciatrice",
    "runica",
    "sartoria",
    "segugio",
    "sfigata",
];

// generate button
const generatePotionButton = document.getElementById('generate-potion-button');
generatePotionButton.addEventListener('click', function () {

    // info generation
    const randomGuardian = guardian[Math.floor(Math.random() * guardian.length)];
    const randomFamiliar = familiar[Math.floor(Math.random() * familiar.length)];
    const randomScout = scout[Math.floor(Math.random() * scout.length)];

    document.getElementById("generatePotionBody").innerHTML = `
				<p id="guardian-text"><b>Guardiani:</b>  <code>${randomGuardian}</code></p>
				<p id="familiar-text"><b>Famigli:</b>  <code>${randomFamiliar}</code></p>
				<p id="scout-text"><b>Ricognitori:</b>  <code>${randomScout}</code></p>
     `;
});