/* Navigation is an enhancement: every section and link works without JavaScript. */
(() => {
  'use strict';
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
