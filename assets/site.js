/* Navigation is an enhancement: every section and link works without JavaScript. */
(() => {
  'use strict';

  /* Display the lab group photo at its natural aspect ratio so no one is cropped. */
  const peopleSection = document.querySelector('#people');
  const teamMembers = peopleSection ? peopleSection.querySelector('.team-members') : null;
  if (peopleSection && teamMembers && !peopleSection.querySelector('.lab-group-photo')) {
    if (!document.querySelector('#lab-group-photo-styles')) {
      const style = document.createElement('style');
      style.id = 'lab-group-photo-styles';
      style.textContent = `
        .lab-group-photo{margin-top:76px;margin-bottom:76px}
        .lab-group-photo figure{margin:0}
        .lab-group-photo img{display:block;width:100%;height:auto;max-height:none;object-fit:contain;background:#fff}
        .lab-group-photo figcaption{margin-top:12px;font-size:.75rem;line-height:1.5;letter-spacing:.08em;font-weight:600;color:var(--muted)}
        @media(max-width:920px){.lab-group-photo{margin-top:54px;margin-bottom:54px}}
        @media(max-width:620px){.lab-group-photo{margin-top:40px;margin-bottom:40px}.lab-group-photo figcaption{font-size:.7rem}}
      `;
      document.head.appendChild(style);
    }

    const groupPhoto = document.createElement('div');
    groupPhoto.className = 'container lab-group-photo';
    groupPhoto.innerHTML = `
      <figure>
        <img src="assets/ji-lab-group.png" alt="Ji Lab members together in front of the Penn State College of Health and Human Development Nutritional Sciences sign." loading="lazy">
        <figcaption>JI LAB · DEPARTMENT OF NUTRITIONAL SCIENCES · PENN STATE</figcaption>
      </figure>
    `;
    peopleSection.insertBefore(groupPhoto, teamMembers);
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
