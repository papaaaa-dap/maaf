// Pindah Halaman
function nextScene(current, next) {
    document.getElementById(current).classList.remove('active');
    setTimeout(() => {
        document.getElementById(next).classList.add('active');
    }, 100);
}

// Efek Ngetik
const textPesan = [
    "aku minta maaf ya...",
    "aku tau aku salah dan bikin kamu kesel",
    "aku ga mau kita berantem terus gini...",
    "maafin aku ya?"
];
let line = 0;
let isTyping = false;

function showMessages() {
    if (isTyping) return;
    document.getElementById('typing-container').classList.remove('hidden');
    
    if (line < textPesan.length) {
        isTyping = true;
        let char = 0;
        let target = document.getElementById('typing-text');
        target.innerHTML = "";
        
        let typing = setInterval(() => {
            target.innerHTML += textPesan[line][char];
            char++;
            if (char >= textPesan[line].length) {
                clearInterval(typing);
                isTyping = false;
                line++;
                if (line === textPesan.length) {
                    document.getElementById('btn-pesan').classList.add('hidden');
                    document.getElementById('btn-ke-audio').classList.remove('hidden');
                }
            }
        }, 50);
    }
}

// Audio
function playAudio() {
    const audio = document.getElementById('myAudio');
    if (audio.paused) {
        audio.play();
        document.getElementById('btn-audio').innerText = "lagi bunyi... 🎵";
    } else {
        audio.pause();
        document.getElementById('btn-audio').innerText = "denger ini sebentar ya… 🎵";
    }
}

// Logika Tombol Marah 3 Kali
let count = 0;
const btnIya = document.getElementById('btn-marah-iya');
const btnEngga = document.getElementById('btn-marah-engga');

function handleMarahClick() {
    count++;
    if (count === 1) {
        btnIya.innerText = "kok masih marah? 🥺";
    } else if (count === 2) {
        btnIya.innerText = "beneran masih marah nih? 😭";
    } else if (count === 3) {
        btnIya.innerText = "jangan marah dong... ya? 🥺";
    } else if (count === 4) {
        btnIya.style.display = "none"; // Tombol Iya Hilang
        btnEngga.innerText = "iyaa udah engga marah lagi 🙄";
        btnEngga.style.width = "100%"; // Tombol engga jadi lebar
    }
}

// Efek Akhir
function forgiveMe() {
    document.getElementById('final-text').innerHTML = "Makasih yaa! Janji ga gitu lagi ❤️";
    document.getElementById('btn-maaf').style.display = "none";
    
    const container = document.getElementById('hearts-container');
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.innerHTML = '❤️';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.opacity = Math.random();
            container.appendChild(heart);
            setTimeout(() => heart.remove(), 3000);
        }, i * 150);
    }
}