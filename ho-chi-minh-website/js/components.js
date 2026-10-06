'use strict';

const imageSource = i => 'https://commons.wikimedia.org/wiki/File:' + encodeURIComponent(images[i]
  .name.replaceAll(' ', '_'));

const image = (i, extra = '') =>
  `<img src="assets/${images[i].file}" alt="${images[i].title}" ${extra || 'loading="lazy"'}>`;

const attribution = i => `<small>${images[i].title} · ${images[i].year}</small>
<small>${images[i].credit} · <a target="_blank" rel="noopener" href="${imageSource(i)}"></a>
</small>`;

const menus = [
  ['', 'Trang chủ'],
  ['tieu-su', 'Tiểu sử'],
  ['hanh-trinh', 'Hành trình'],
  ['su-nghiep', 'Sự nghiệp'],
  ['tu-tuong', 'Tư tưởng'],
  ['thu-vien', 'Thư viện'],
  ['tu-lieu', 'Tư liệu']
];

const main = document.querySelector('main'),
  nav = document.querySelector('nav');

nav.innerHTML = menus.map(([id, label]) => `<a href="#/${id}" data-page="${id}">${label}</a>`).join(
  '');

const pageHead = (title, sub, num) => `<div class="page-head">
<div class="crumb">
<a href="#/">Trang chủ</a> / ${title}</div>
<span class="eyebrow">PHÒNG TRIỂN LÃM ${num}</span>
<h1>${title}</h1>
<p>${sub}</p>
</div>`;

const card = (c, i) => `<article class="card">
<div class="image-wrap">${image(c.img)}</div>
<span class="tag">${c.tag}</span>
<h3>${c.title}</h3>
<p>${c.text}</p>
<button data-career="${i}">Xem chi tiết ↗</button>
</article>`;
