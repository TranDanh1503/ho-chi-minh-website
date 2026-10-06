'use strict';

function route() {
  const path = location.hash.replace(/^#\//, '').split('?')[0];
  if (!menus.some(m => m[0] === path)) {
    if (location.hash === '#intro') return;
    location.hash = '#/';
    return
  }
  document.querySelectorAll('dialog[open]').forEach(d => d.close());
  document.body.style.overflow = '';
  const pages = {
    '': home,
    'tieu-su': biography,
    'hanh-trinh': journey,
    'su-nghiep': careerPage,
    'tu-tuong': thoughts,
    'thu-vien': gallery,
    'tu-lieu': resources
  };
  main.innerHTML = pages[path]();
  document.title = `${menus.find(m=>m[0]===path)[1]} — Hồ Chí Minh · Cuộc đời & Di sản`;
  nav.querySelectorAll('a').forEach(a => {
    a.classList.toggle('active', a.dataset.page === path);
    if (a.dataset.page === path) a.setAttribute('aria-current', 'page');
    else a.removeAttribute('aria-current')
  });
  document.querySelector('header').classList.toggle('over-hero', path === '');
  nav.classList.remove('open');
  document.querySelector('#menuButton').setAttribute('aria-expanded', 'false');
  if (path === 'hanh-trinh') selectPlace(0);
  if (path === 'thu-vien') {
    gallerySearch = '';
    updateGallery()
  }
  if (path === 'tu-lieu') updateDocs();
  fallbackImages();
  window.scrollTo(0, 0);
  const ob = new IntersectionObserver(entries => entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('reveal');
      ob.unobserve(e.target)
    }
  }), {
    threshold: .08
  });
  document.querySelectorAll('.card,.event,.value,.intro').forEach(e => ob.observe(e))
}
