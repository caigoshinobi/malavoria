const forza = [
    "braccio",
    "corno",
    "bocca",
];

const mente = [
    "naso",
    "orecchio",
    "occhio",
];

const agilita = [
    "gamba",
    "coda",
    "ala",
];


// generate button
const generateLookButton = document.getElementById('generate-look-button');
generateLookButton.addEventListener('click', function () {

    // info generation
    const randomFor1 = forza[Math.floor(Math.random() * forza.length)];
    const randomFor2 = forza[Math.floor(Math.random() * forza.length)];
    const randomMen1 = mente[Math.floor(Math.random() * mente.length)];
    const randomMen2 = mente[Math.floor(Math.random() * mente.length)];
    const randomAgi1 = agilita[Math.floor(Math.random() * agilita.length)];
    const randomAgi2 = agilita[Math.floor(Math.random() * agilita.length)];

    const randomFor3 = forza[Math.floor(Math.random() * forza.length)];
    const randomMen3 = mente[Math.floor(Math.random() * mente.length)];
    const randomAgi3 = agilita[Math.floor(Math.random() * agilita.length)];

    document.getElementById("generateLookBody").innerHTML = `
            <div class="col-sm">
				<p id="race-text"><b>Forza (FOR) [2]:</b>  <code>${randomFor1}, ${randomFor2}</code></p>
				<p id="job-text"><b>Mente (MEN) [2]:</b>  <code>${randomMen1}, ${randomMen2}</code></p>
				<p id="death-text"><b>Agilita (AGI) [2]:</b>  <code>${randomAgi1}, ${randomAgi2}</code></p>
            <div>
            <hr>
            <div class="col-sm">
                <p id="race-text"><b>Guardiano:</b>  <code>${randomFor3}</code></p>
				<p id="job-text"><b>Famiglio:</b>  <code>${randomMen3}</code></p>
				<p id="death-text"><b>Ricognitore:</b>  <code>${randomAgi3}</code></p>
            </div>
    `;
});