'use strict';

let galleryFilter = 'Tất cả',
  gallerySearch = '',
  visibleImages = images.map((_, i) => i),
  lightIndex = 0;

const categories = ['Tất cả', 'Cuộc đời', 'Hoạt động cách mạng', 'Với nhân dân', 'Với thiếu nhi',
  'Các sự kiện lịch sử'
];

const gallery = () => pageHead('Thư viện',
  'Những chân dung và khoảnh khắc lịch sử. Mỗi hình ảnh có chú thích cùng hồ sơ nguồn để tìm hiểu thêm.',
  '05') + `<section class="section">
<label for="gallerySearch" class="eyebrow">TÌM TRONG THƯ VIỆN</label>
<input class="search" id="gallerySearch" type="search" placeholder="Tìm theo chú thích, năm hoặc địa điểm…">
<div class="filter-row">${categories.map(c=>`<button class="chip ${c===galleryFilter?'active':''}" data-filter="${c}" aria-pressed="${c===galleryFilter}">${c}</button>`).join('')}</div>
<p id="galleryCount" class="notice" aria-live="polite">
</p>
<div class="gallery" id="galleryGrid">
</div>
<p class="notice">Chú thích theo hồ sơ nguồn. Những ngày tháng không xác định chính xác được ghi rõ. Các ảnh Bundesarchiv được ghi công theo CC BY-SA 3.0 DE; cách hiển thị có thể cắt khung theo bố cục.</p>
<a class="text-link" target="_blank" rel="noopener" href="https://creativecommons.org/licenses/by-sa/3.0/de/">Giấy phép ảnh Bundesarchiv ↗</a>
</section>`;

function updateGallery() {
  const q = gallerySearch.toLocaleLowerCase('vi');
  visibleImages = images.map((_, i) => i).filter(i => (galleryFilter === 'Tất cả' || images[i]
      .cat === galleryFilter) && `${images[i].title} ${images[i].year} ${images[i].place}`
    .toLocaleLowerCase('vi').includes(q));
  document.querySelector('#galleryGrid').innerHTML = visibleImages.length ? visibleImages.map(i => `<button class="gallery-item" data-image="${i}" aria-label="Mở ảnh: ${images[i].title}">${image(i)}<h3>${images[i].title}</h3>
<small>${images[i].year} · ${images[i].place}</small>
</button>`).join('') :
    '<div class="empty">Không có ảnh phù hợp.<br>Hãy chọn danh mục khác hoặc đổi từ khóa.</div>';
  document.querySelector('#galleryCount').textContent = `${visibleImages.length} ảnh tư liệu`;
  document.querySelectorAll('[data-filter]').forEach(b => {
    b.classList.toggle('active', b.dataset.filter === galleryFilter);
    b.setAttribute('aria-pressed', b.dataset.filter === galleryFilter)
  });
  fallbackImages()
}
