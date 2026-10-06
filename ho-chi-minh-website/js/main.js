'use strict';

document.addEventListener('click', e => {
  const b = e.target.closest('button');
  if (!b) return;
  if (b.dataset.event !== undefined) showDetail(events[+b.dataset.event]);
  if (b.dataset.career !== undefined) {
    const c = career[+b.dataset.career],
      ev = events[c.event];
    showDetail({
      ...ev,
      ...c,
      detail: c.detail || ev.detail,
      source: c.source || ev.source
    })
  }
  if (b.dataset.place !== undefined) selectPlace(+b.dataset.place);
  if (b.dataset.image !== undefined) showLight(+b.dataset.image);
  if (b.dataset.filter) {
    galleryFilter = b.dataset.filter;
    updateGallery()
  }
  if (b.dataset.doc) {
    docFilter = b.dataset.doc;
    updateDocs()
  }
  if (b.classList.contains('close')) b.closest('dialog').close()
});

document.addEventListener('input', e => {
  if (e.target.id === 'gallerySearch') {
    gallerySearch = e.target.value;
    updateGallery()
  }
});

document.querySelector('#menuButton').addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  document.querySelector('#menuButton').setAttribute('aria-expanded', open);
  document.querySelector('#menuButton').setAttribute('aria-label', open ? 'Đóng menu' :
    'Mở menu')
});

document.querySelector('#top').onclick = () => window.scrollTo({
  top: 0,
  behavior: 'smooth'
});
document.querySelector('#prev').onclick = () => lightStep(-1);
document.querySelector('#next').onclick = () => lightStep(1);

[detail, lightbox].forEach(d => {
  d.addEventListener('close', () => document.body.style.overflow = '');
  d.addEventListener('click', e => {
    if (e.target === d) {
      const r = d.getBoundingClientRect();
      if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r
        .bottom) d.close()
    }
  })
});

document.addEventListener('keydown', e => {
  if (lightbox.open && e.key === 'ArrowLeft') {
    e.preventDefault();
    lightStep(-1)
  }
  if (lightbox.open && e.key === 'ArrowRight') {
    e.preventDefault();
    lightStep(1)
  }
  if (e.key === 'Escape') {
    nav.classList.remove('open');
    document.querySelector('#menuButton').setAttribute('aria-expanded', 'false')
  }
});

window.addEventListener('scroll', () => document.querySelector('header').classList.toggle(
  'scrolled', window.scrollY > 40), {
  passive: true
});
window.addEventListener('hashchange', route);
route();
