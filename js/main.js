(function () {
    const YEAR = document.getElementById('year');
    if (YEAR) YEAR.textContent = new Date().getFullYear();


    // Persisted theme: 'light' | 'dark' | null
    const STORAGE_KEY = 'site-theme';
    const root = document.documentElement; // <html>
    const btn = document.getElementById('themeToggle');


    function systemPrefersDark() {
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }


    function applyTheme(theme) {
        const t = theme || (systemPrefersDark() ? 'dark' : 'light');
        root.setAttribute('data-theme', t);
        if (btn) {
            btn.setAttribute('aria-pressed', String(t === 'dark'));
            btn.textContent = t === 'dark' ? '☀️' : '🌙';
        }
    }


    // Initialize from localStorage or system
    const saved = localStorage.getItem(STORAGE_KEY);
    applyTheme(saved);


    // Listen for explicit toggles
    if (btn) {
        btn.addEventListener('click', () => {
            const current = root.getAttribute('data-theme');
            const next = current === 'dark' ? 'light' : 'dark';
            localStorage.setItem(STORAGE_KEY, next);
            applyTheme(next);
        });
    }


    // Update if system preference changes (when user hasn't explicitly chosen)
    if (window.matchMedia) {
        const mq = window.matchMedia('(prefers-color-scheme: dark)');
        mq.addEventListener?.('change', () => {
            const hasChoice = localStorage.getItem(STORAGE_KEY);
            if (!hasChoice) applyTheme();
        });
    }

    // Expandable Project Cards with Shrinking Behavior
    const projectCards = document.querySelectorAll('.project-card');
    let currentlyExpanded = null;

    // Event listeners for project cards
    projectCards.forEach(card => {
        const toggleBtn = card.querySelector('.toggle-details-btn');
        const detailsSection = card.querySelector('.project-details');
        
        if (toggleBtn && detailsSection) {
            toggleBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                toggleProjectDetails(card, toggleBtn, detailsSection);
            });
        }
        
        // Add click listener to entire card for tab-like behavior
        card.addEventListener('click', (e) => {
            if (!card.classList.contains('expanded')) {
                toggleProjectDetails(card, toggleBtn, detailsSection);
            }
        });
    });

    // Function to toggle project details
    function toggleProjectDetails(card, button, details) {
        const isExpanded = card.classList.contains('expanded');
        
        if (isExpanded) {
            // Collapse current card
            collapseCard(card, button, details);
            currentlyExpanded = null;
        } else {
            // Collapse any previously expanded card and shrink others
            if (currentlyExpanded) {
                const prevButton = currentlyExpanded.querySelector('.toggle-details-btn');
                const prevDetails = currentlyExpanded.querySelector('.project-details');
                collapseCard(currentlyExpanded, prevButton, prevDetails);
            }
            
            // Expand current card and shrink others
            expandCard(card, button, details);
            currentlyExpanded = card;
        }
    }

    // Function to expand a card
    function expandCard(card, button, details) {
        // Show details
        details.style.display = 'block';
        button.textContent = 'Hide Details ↑';
        button.classList.add('expanded');
        card.classList.add('expanded');
        
        // Shrink all other cards
        projectCards.forEach(otherCard => {
            if (otherCard !== card) {
                otherCard.classList.add('collapsed');
            }
        });
        
        // Smooth scroll to the expanded card
        setTimeout(() => {
            card.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start',
                inline: 'nearest'
            });
        }, 100);
    }

    // Function to collapse a card
    function collapseCard(card, button, details) {
        // Hide details
        details.style.display = 'none';
        button.textContent = 'Show Details ↓';
        button.classList.remove('expanded');
        card.classList.remove('expanded');
        
        // Remove collapsed state from all cards
        projectCards.forEach(otherCard => {
            otherCard.classList.remove('collapsed');
        });
    }

    // Back to Top Button Functionality
    const backToTopButton = document.getElementById('backToTop');
    
    if (backToTopButton) {
        // Show/hide button based on scroll position
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });
        
        // Smooth scroll to top when clicked
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
})();