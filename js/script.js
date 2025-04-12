document.addEventListener('DOMContentLoaded', function() {
  const menuButton = document.getElementById('menuButton');
  const closeMenu = document.getElementById('closeMenu');
  const mobileMenu = document.getElementById('mobileMenu');
  const menuLinks = mobileMenu.querySelectorAll('a');
  
  menuButton.addEventListener('click', function() {
    mobileMenu.classList.add('active');
  });
  
  closeMenu.addEventListener('click', function() {
    mobileMenu.classList.remove('active');
  });
  
  menuLinks.forEach(link => {
    link.addEventListener('click', function() {
      mobileMenu.classList.remove('active');
    });
  });

  const themeToggle = document.getElementById('themeToggle');
  const mobileThemeToggle = document.getElementById('mobileThemeToggle');
  const themeIcon = document.querySelector('.theme-icon');
  const mobileThemeIcon = document.querySelector('.theme-icon-mobile');
  const themeTextMobile = document.querySelector('.theme-text-mobile');
  const htmlElement = document.documentElement;
  
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    enableDarkMode();
  } else {
    enableLightMode();
  }
  
  function toggleTheme() {
    if (htmlElement.getAttribute('data-theme') === 'light') {
      enableDarkMode();
    } else {
      enableLightMode();
    }
    
    themeIcon.classList.add('spin');
    mobileThemeIcon.classList.add('spin');
    
    setTimeout(() => {
      themeIcon.classList.remove('spin');
      mobileThemeIcon.classList.remove('spin');
    }, 500);
  }
  
  function enableDarkMode() {
    htmlElement.setAttribute('data-theme', 'dark');
    themeIcon.classList.remove('ph-sun');
    themeIcon.classList.add('ph-moon');
    mobileThemeIcon.classList.remove('ph-sun');
    mobileThemeIcon.classList.add('ph-moon');
    themeTextMobile.textContent = 'Light Mode';
    localStorage.setItem('theme', 'dark');
  }
  
  function enableLightMode() {
    htmlElement.setAttribute('data-theme', 'light');
    themeIcon.classList.remove('ph-moon');
    themeIcon.classList.add('ph-sun');
    mobileThemeIcon.classList.remove('ph-moon');
    mobileThemeIcon.classList.add('ph-sun');
    themeTextMobile.textContent = 'Dark Mode';
    localStorage.setItem('theme', 'light');
  }
  
  themeToggle.addEventListener('click', toggleTheme);
  mobileThemeToggle.addEventListener('click', toggleTheme);
  
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem('theme')) {
      if (e.matches) {
        enableDarkMode();
      } else {
        enableLightMode();
      }
    }
  });
  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const navbarHeight = document.querySelector('nav').offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
  
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-up');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  document.querySelectorAll('section h2').forEach(element => {
    observer.observe(element);
  });
});

