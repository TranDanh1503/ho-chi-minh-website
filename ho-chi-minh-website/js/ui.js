'use strict';

const detail = document.querySelector('#detail'),
  lightbox = document.querySelector('#lightbox');

function showDetail(e) {
  document.querySelector('#detailBody').innerHTML = `<span class="eyebrow">${e.year||e.tag}</span>
<h2>${e.title}</h2>${image(e.img)}${attribution(e.img)}<p>${e.text}</p>
<p>${e.detail}</p>
<a href="${e.source}" target="_blank" rel="noopener">Tra cứu nguồn lịch sử ↗</a>`;
  detail.showModal();
  document.body.style.overflow = 'hidden';
  fallbackImages()
}

function showLight(i) {
  if (!visibleImages.includes(i)) visibleImages = images.map((_, j) => j);
  lightIndex = visibleImages.indexOf(i);
  renderLight();
  lightbox.showModal();
  document.body.style.overflow = 'hidden'
}

function renderLight() {
  const i = visibleImages[lightIndex],
    im = images[i];
  document.querySelector('#lightBody').innerHTML = `${image(i,'loading="eager"')}<figcaption>${im.title}<br>${im.year} · ${im.place}<br>
<small>${im.credit}</small>
<br>
<a href="${imageSource(i)}" target="_blank" rel="noopener">Xem nguồn và quyền sử dụng ↗</a>
<br>
<small>${lightIndex+1} / ${visibleImages.length}</small>
</figcaption>`;
  fallbackImages()
}

function lightStep(delta) {
  lightIndex = (lightIndex + delta + visibleImages.length) % visibleImages.length;
  renderLight()
}

function fallbackImages() {
  document.querySelectorAll('img').forEach(img => img.onerror = () => {
    const p = document.createElement('div');
    p.className = 'image-fallback';
    p.textContent =
      `Ảnh tư liệu chưa tải được: ${img.alt}. Xem liên kết hồ sơ nguồn để tra cứu.`;
    img.replaceWith(p)
  })
}
