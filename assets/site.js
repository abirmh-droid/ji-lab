/* Navigation is an enhancement: every section and link works without JavaScript. */
(() => {
  'use strict';

  /* Use the current lab group portrait as the homepage feature image. */
  const heroFigure = document.querySelector('.hero-image');
  if (heroFigure) {
    const heroImage = heroFigure.querySelector('img');
    const heroCaption = heroFigure.querySelector('figcaption');
    if (heroImage) {
      heroImage.src = 'assets/ji-lab-group.jpg';
      heroImage.alt = 'Ji Lab members together at Penn State Nutritional Sciences.';
      heroImage.width = 1200;
      heroImage.height = 703;
      heroImage.style.objectPosition = 'center center';
    }
    if (heroCaption) {
      heroCaption.innerHTML = '<span>MEET THE JI LAB</span><strong>Our team</strong><span>Department of Nutritional Sciences · Penn State</span>';
    }
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
