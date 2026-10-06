'use strict';

const home = () => `<section class="hero">
<div class="hero-art">
<img src="assets/portrait.jpg" alt="Chân dung Chủ tịch Hồ Chí Minh, khoảng năm 1947" fetchpriority="high">
</div>
<div class="hero-copy">
<span class="eyebrow">MỘT CUỘC ĐỜI. MỘT DI SẢN.</span>
<h1>CHỦ TỊCH<br>HỒ CHÍ MINH</h1>
<div class="dates">1890 — 1969</div>
<p>Khám phá cuộc đời, hành trình và những giá trị của vị lãnh tụ gắn liền với lịch sử Việt Nam hiện đại.</p>
<div class="actions">
<a class="btn" href="#/hanh-trinh">Khám phá hành trình <span>↗</span>
</a>
<a class="btn outline" href="#/tieu-su">Tìm hiểu về Bác <span>→</span>
</a>
</div>
</div>
<div class="hero-bottom">
<a href="#intro">CUỘN ĐỂ KHÁM PHÁ ↓</a>
</div>
</section>

<section class="section intro" id="intro">
<div>
<span class="eyebrow">CHÂN DUNG MỘT CUỘC ĐỜI</span>
<h2>Một cuộc đời vì<br>độc lập, tự do<br>của dân tộc</h2>
</div>
<div>
<p class="lead">Từ một người thanh niên xứ Nghệ đến Chủ tịch nước Việt Nam Dân chủ Cộng hòa.</p>
<p>Cuộc đời Hồ Chí Minh đi qua những biến chuyển lớn của thế kỷ XX. Web triển lãm này mở ra các lát cắt về hành trình hoạt động, những dấu mốc lịch sử và di sản của Người — qua hình ảnh, câu chuyện và nguồn tư liệu có thể tra cứu.</p>
<div class="intro-meta">
<div>
<strong>1890</strong>
<small>NĂM SINH</small>
</div>
<div>
<strong>1911</strong>
<small>RA ĐI TÌM ĐƯỜNG CỨU NƯỚC</small>
</div>
<div>
<strong>1945</strong>
<small>TUYÊN NGÔN ĐỘC LẬP</small>
</div>
</div>
<div class="actions">
<a class="text-link" href="#/tieu-su">Đọc tiểu sử của Người ↗</a>
</div>
</div>
</section>

<section class="dark">
<div class="section">
<div class="section-heading">
<div>
<span class="eyebrow">DẤU MỐC LỊCH SỬ</span>
<h2>Những năm tháng<br>làm nên lịch sử</h2>
</div>
<a href="#/tieu-su" class="text-link">Xem toàn bộ dòng thời gian ↗</a>
</div>
<div class="home-timeline">${[1,3,4,6].map(i=>`<article class="home-event">
<strong>${events[i].year}</strong>
<h3>${events[i].title}</h3>
<p>${events[i].text}</p>
<button data-event="${i}">Tìm hiểu thêm →</button>
</article>`).join('')}</div>
</div>
</section>

<section class="section">
<div class="section-heading">
<div>
<span class="eyebrow">CUỘC ĐỜI & SỰ NGHIỆP</span>
<h2>Những câu chuyện<br>qua từng chặng đường</h2>
</div>
<a class="text-link" href="#/su-nghiep">Khám phá sự nghiệp ↗</a>
</div>
<div class="cards">${[career[0],career[3],career[6]].map(c=>card(c,career.indexOf(c))).join('')}</div>
</section>

<section class="quote-section">
<span class="eyebrow">MỘT GIÁ TRỊ VƯỢT THỜI GIAN</span>
<blockquote>“Không có gì quý hơn<br>độc lập, tự do.”</blockquote>
<cite>CHỦ TỊCH HỒ CHÍ MINH</cite>
<a class="source" href="${QUOTE}" target="_blank" rel="noopener">Tra cứu nguồn trích dẫn · HCM.VN ↗</a>
</section>

<section class="section">
<div class="section-heading">
<div>
<span class="eyebrow">KÝ ỨC QUA HÌNH ẢNH</span>
<h2>Những khoảnh khắc<br>được lưu giữ</h2>
</div>
<a class="text-link" href="#/thu-vien">Mở thư viện ảnh ↗</a>
</div>
<div class="gallery-preview">${[2,1,3].map(i=>`<button data-image="${i}" aria-label="Xem ảnh ${images[i].title}">${image(i)}<small>${images[i].title} · ${images[i].year}</small>
</button>`).join('')}</div>
</section>`;
