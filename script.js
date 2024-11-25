// script.js
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;

    if (min < 10) min = '0' + min;

    if (s < 10) s = '0' + s;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;

})
// Função para alternar entre modos
function toggleMode() {
    const body = document.body;
    const button = document.getElementById('toggle-mode');
    const isDarkMode = body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode', !isDarkMode);

    // Atualizar o texto do botão
    button.textContent = isDarkMode ? 'Modo Claro' : 'Modo Escuro';

    // Armazenar a preferência no localStorage
    const currentMode = isDarkMode ? 'dark' : 'light';
    localStorage.setItem('mode', currentMode);
}

// Recuperar a preferência do modo do localStorage
function loadMode() {
    const savedMode = localStorage.getItem('mode');
    const body = document.body;
    const button = document.getElementById('toggle-mode');

    if (savedMode === 'dark') {
        body.classList.add('dark-mode');
        button.textContent = 'Modo Claro';
    } else {
        body.classList.add('light-mode');
        button.textContent = 'Modo Escuro';
    }
}

// Adicionar um evento de clique ao botão
document.getElementById('toggle-mode').addEventListener('click', toggleMode);

// Carregar o modo armazenado ao carregar a página
window.addEventListener('load', loadMode);

