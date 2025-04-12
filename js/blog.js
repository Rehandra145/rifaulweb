    const menuButton = document.getElementById('menuButton');
    const closeMenu = document.getElementById('closeMenu');
    const mobileMenu = document.getElementById('mobileMenu');
    
    menuButton.addEventListener('click', () => {
      mobileMenu.classList.add('open');
    });
    
    closeMenu.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
    });
    
    const themeToggle = document.getElementById('themeToggle');
    const mobileThemeToggle = document.getElementById('mobileThemeToggle');
    const html = document.documentElement;
    const themeIcon = document.querySelector('.theme-icon');
    const themeIconMobile = document.querySelector('.theme-icon-mobile');
    const themeTextMobile = document.querySelector('.theme-text-mobile');
    
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      html.classList.add('dark');
      html.setAttribute('data-theme', 'dark');
      themeIcon.classList.remove('ph-sun');
      themeIcon.classList.add('ph-moon');
      themeIconMobile.classList.remove('ph-sun');
      themeIconMobile.classList.add('ph-moon');
      themeTextMobile.textContent = 'Light Mode';
    }
    
    function toggleTheme() {
      if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        html.setAttribute('data-theme', 'light');
        themeIcon.classList.remove('ph-moon');
        themeIcon.classList.add('ph-sun');
        themeIconMobile.classList.remove('ph-moon');
        themeIconMobile.classList.add('ph-sun');
        themeTextMobile.textContent = 'Dark Mode';
        localStorage.setItem('theme', 'light');
      } else {
        html.classList.add('dark');
        html.setAttribute('data-theme', 'dark');
        themeIcon.classList.remove('ph-sun');
        themeIcon.classList.add('ph-moon');
        themeIconMobile.classList.remove('ph-sun');
        themeIconMobile.classList.add('ph-moon');
        themeTextMobile.textContent = 'Light Mode';
        localStorage.setItem('theme', 'dark');
      }
    }
    
    themeToggle.addEventListener('click', toggleTheme);
    mobileThemeToggle.addEventListener('click', toggleTheme);