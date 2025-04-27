document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const currentMode = localStorage.getItem('darkMode');

    if (currentMode === 'enabled') {
        document.body.classList.add('dark-mode');
    }

    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDarkMode = document.body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
    });
});