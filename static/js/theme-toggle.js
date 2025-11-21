// Dark theme toggle functionality
(function() {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    // Apply the saved theme immediately to prevent flash
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    // Wait for DOM to be fully loaded
    document.addEventListener('DOMContentLoaded', function() {
        // Update toggle button icon based on current theme
        updateToggleIcon();
        
        // Add click event listener to theme toggle button
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', toggleTheme);
        }
    });
    
    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        // Set the new theme
        document.documentElement.setAttribute('data-theme', newTheme);
        
        // Save the theme preference
        localStorage.setItem('theme', newTheme);
        
        // Update the toggle button icon
        updateToggleIcon();
    }
    
    function updateToggleIcon() {
        const themeToggle = document.getElementById('theme-toggle');
        if (!themeToggle) return;
        
        const currentTheme = document.documentElement.getAttribute('data-theme');
        
        if (currentTheme === 'dark') {
            themeToggle.innerHTML = '☀️';
            themeToggle.setAttribute('title', 'Switch to light mode');
        } else {
            themeToggle.innerHTML = '🌙';
            themeToggle.setAttribute('title', 'Switch to dark mode');
        }
    }
    
    // Expose toggleTheme function globally if needed
    window.toggleTheme = toggleTheme;
})();