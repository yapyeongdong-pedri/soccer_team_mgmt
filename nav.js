(() => {
  const nav = document.getElementById('siteNav');
  if (!nav) {
    return;
  }
  const path = (window.location.pathname || '').split('/').pop() || 'index.html';
  const links = nav.querySelectorAll('a[href]');
  links.forEach((link) => {
    const href = link.getAttribute('href');
    if (!href) {
      return;
    }
    if (href === path) {
      link.classList.add('active');
    }
  });
  if (document.body.classList.contains('nav-fixed')) {
    nav.classList.add('visible');
    nav.classList.remove('fading');
    return;
  }
  let hideTimer;
  let lastScrollY = window.scrollY;
  const showNav = () => {
    nav.classList.add('visible');
    nav.classList.remove('fading');
    if (hideTimer) {
      clearTimeout(hideTimer);
    }
    hideTimer = window.setTimeout(() => {
      nav.classList.add('fading');
      nav.classList.remove('visible');
    }, 5000);
  };

  showNav();

  window.addEventListener(
    'scroll',
    () => {
      const currentY = window.scrollY;
      if (Math.abs(currentY - lastScrollY) < 4) {
        return;
      }
      lastScrollY = currentY;
      showNav();
    },
    { passive: true }
  );
})();
