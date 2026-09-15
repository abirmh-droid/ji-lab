/* Navigation is an enhancement: every section and link works without JavaScript. */
(() => {
  'use strict';

  /* The uploaded .png is HEIC internally, which Chrome cannot render reliably.
     Use the browser-compatible JPEG copy of the same Ji Lab group photo instead. */
  const heroImage = document.querySelector('.hero-image img');
  if (heroImage) {
    heroImage.src = 'assets/ji-lab-group.jpg?v=chrome-fix';
    heroImage.alt = 'Ji Lab members together in front of the Penn State College of Health and Human Development Nutritional Sciences sign.';
    heroImage.style.objectFit = 'contain';
    heroImage.style.objectPosition = 'center center';
    heroImage.style.background = '#fff';
  }

  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#primary-nav');
  if (toggle && nav) {
    document.documentElement.classList.add('js-enabled');
    const setMenu = (open) => {
      toggle.setAttribute('aria-expanded', String(open));
      nav.classList.toggle('is-open', open);
      toggle.querySelector('span').textContent = open ? 'Close' : 'Menu';
    };
    toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
    nav.addEventListener('click', (event) => {
      if (event.target.closest('a')) setMenu(false);
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setMenu(false);
        toggle.focus();
      }
    });
    document.addEventListener('click', (event) => {
      if (!nav.contains(event.target) && !toggle.contains(event.target)) setMenu(false);
    });
    window.addEventListener('resize', () => { if (window.innerWidth > 920) setMenu(false); });
    if ('IntersectionObserver' in window) {
      const links = Array.from(nav.querySelectorAll('a[href^="#"]'));
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          links.forEach((link) => {
            if (link.hash === '#' + entry.target.id) link.setAttribute('aria-current', 'location');
            else link.removeAttribute('aria-current');
          });
        });
      }, { rootMargin: '-15% 0px -55% 0px', threshold: 0 });
      document.querySelectorAll('main section[id]').forEach((section) => observer.observe(section));
    }
  }
  const year = document.querySelector('#copyright-year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
