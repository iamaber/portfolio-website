document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const root = document.documentElement;
    
    // Light theme colors
    const lightTheme = {
        '--bg-color': '#ffffff',
        '--text-color': '#333333',
        '--accent-color': '#0066cc',
        '--secondary-bg': '#f5f5f5',
        '--border-color': '#e0e0e0'
    };
    
    // Dark theme colors (default)
    const darkTheme = {
        '--bg-color': '#1a1a1a',
        '--text-color': '#e0e0e0',
        '--accent-color': '#4a9eff',
        '--secondary-bg': '#2a2a2a',
        '--border-color': '#404040'
    };
    
    // Get current theme from localStorage or default to dark
    let currentTheme = localStorage.getItem('theme') || 'dark';
    
    // Apply theme
    function applyTheme(theme) {
        const colors = theme === 'light' ? lightTheme : darkTheme;
        Object.entries(colors).forEach(([property, value]) => {
            root.style.setProperty(property, value);
        });
        themeToggle.textContent = theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode';
        localStorage.setItem('theme', theme);
    }
    
    // Initialize theme
    applyTheme(currentTheme);
    
    // Theme toggle event listener
    themeToggle.addEventListener('click', function() {
        currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(currentTheme);
    });
});
