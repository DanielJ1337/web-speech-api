let synth = window.speechSynthesis;
let voices = [];

const playBtn = document.getElementById('read');
const pauseBtn = document.getElementById('pause');
const rateButton = document.getElementById('rate');
const pitchButton = document.getElementById('pitch');
const inputField = document.getElementById('input');
const formSelect = document.getElementById('form');
const rateValue = document.getElementById('rate-value');
const pitchValue = document.getElementById('pitch-value');
let voiceCheck = document.querySelector('.select-option__select');

function populateVoices() {
    voices = this.getVoices();
    voiceCheck.innerHTML = voices
        .map(
            (voice) =>
                `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`
        )
        .join('');
}

speechSynthesis.addEventListener('voiceschanged', populateVoices);

function playUtterance() {
    const selectedVoice = voiceCheck.value;
    if (inputField.value !== '') {
        console.log(inputField.value);
        const utterance = new SpeechSynthesisUtterance(inputField.value);
        voices.forEach((voice) => {
            if (voice.name === selectedVoice) {
                utterance.voice = voice;
                utterance.lang = voice.lang;
            }
        });
        utterance.rate = rateButton.value;
        utterance.pitch = pitchButton.value;
        utterance.volume = 1;
        console.log(utterance);
        synth.speak(utterance);
    }
}

function pauseUtterance() {}

formSelect.addEventListener('submit', (e) => {
    e.preventDefault();
    playUtterance();
});

rateButton.addEventListener('change', (e) => {
    rateValue.innerHTML = e.target.value;
});

pitchButton.addEventListener('change', (e) => {
    pitchValue.innerHTML = e.target.value;
});

playBtn.addEventListener('click', playUtterance);

pause.addEventListener('click');
