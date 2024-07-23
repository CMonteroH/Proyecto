JavaScript
const verbTenses = [
    {
        title: 'Simple Present',
        definition: 'Describes actions that are habitual or generally true.',
        structure: 'Affirmative: Subject + base form of verb (he/she/it + base form + \'s\')\nNegative: Subject + do/does not + base form of verb\nQuestion: Do/Does + subject + base form of verb?',
        uses: 'To express habits or routines\nTo state general truths or facts\nTo describe schedules or timetables',
        examples: 'She writes in her journal every morning.\nThey do not play football on Sundays.\nDoes he know the answer?'
    },
    // Agrega los demás tiempos verbales aquí...
];

function displayTenses() {
    const list = document.getElementById('verbTensesList');
    verbTenses.forEach((tense, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = tense.title;
        listItem.onclick = () => displayDetails(index);
        list.appendChild(listItem);
    });
}

function displayDetails(index) {
    const tense = verbTenses[index];
    document.getElementById('tenseTitle').textContent = tense.title;
    document.getElementById('tenseDefinition').textContent = `Definition: ${tense.definition}`;
    document.getElementById('tenseStructure').textContent = `Structure: ${tense.structure}`;
    document.getElementById('tenseUses').textContent = `Uses: ${tense.uses}`;
    document.getElementById('tenseExamples').textContent = `Examples: ${tense.examples}`;
    
    document.getElementById('detailsSection').classList.remove('hidden');
    document.getElementById('verbTensesList').classList.add('hidden');
}

function goBack() {
    document.getElementById('detailsSection').classList.add('hidden');
    document.getElementById('verbTensesList').classList.remove('hidden');
}

window.onload = displayTenses;
