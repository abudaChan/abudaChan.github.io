let lightmode = localStorage.getItem('light-mode');
const mode = document.getElementById('mode');

const enablelightmode = () => {
    document.body.classList.add('lightmode'); 
    localStorage.setItem('light-mode', 'active');
};

const disablelightmode = () => {
    document.body.classList.remove('lightmode'); 
    localStorage.setItem('light-mode', 'null');
};

if (lightmode === 'active') {
    enablelightmode();
}

mode.addEventListener('click', () => {
    lightmode = localStorage.getItem('light-mode');
    lightmode !== 'active' ? enablelightmode() : disablelightmode();
});
