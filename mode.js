let lightmode = localStorage.getItem('light-mode');
const mode = document.getElementById('mode');

const enablelightmode = () => {
    document.body.classList.add('lightmode'); // Add the correct class name
    localStorage.setItem('light-mode', 'active');
};

const disablelightmode = () => {
    document.body.classList.remove('lightmode'); // Add the correct class name
    localStorage.setItem('light-mode', 'null');
};

// Check the saved preference and apply it on page load
if (lightmode === 'active') {
    enablelightmode();
}

// Add event listener to the theme switch button
mode.addEventListener('click', () => {
    lightmode = localStorage.getItem('light-mode');
    lightmode !== 'active' ? enablelightmode() : disablelightmode();
});
