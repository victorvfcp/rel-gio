// script.js

// Função para alternar entre tocar e pausar a música
function toggleMusic() {
    const audioElement = document.getElementById('lofi-music');
    const button = document.getElementById('toggle-music-button');
    
    if (audioElement.paused) {
        audioElement.play().catch(error => {
            console.error('Erro ao tentar reproduzir o áudio:', error);
        });
        button.textContent = 'Parar o Lo-Fi';
    } 
    else {
        audioElement.pause();
        button.textContent = 'Tocar Lo-Fi';
    }
}

// Adicionar evento de clique ao botão para alternar entre tocar e pausar a música
document.getElementById('toggle-music-button').addEventListener('click', toggleMusic);