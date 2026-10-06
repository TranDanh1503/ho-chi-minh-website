'use strict';

const documents = [

  {
    title: 'Hồ Chí Minh — Tiểu sử',
    year: '2008',
    type: 'Sách',
    desc: 'Công trình do Bảo tàng Hồ Chí Minh biên soạn, Nhà xuất bản Chính trị quốc gia ấn hành.',
    url: BIO,
    cover: 'Tiểu sử'
  },

  {
    title: 'Hồ Chí Minh Toàn tập — Tập 4',
    year: '1945 — 1946 · giai đoạn tác phẩm',
    type: 'Văn kiện',
    desc: 'Tập sách mở đầu với Tuyên ngôn Độc lập, gồm tác phẩm từ ngày 2.9.1945 đến hết năm 1946.',
    url: 'https://hochiminh.vn/book/tac-pham-cua-ho-chi-minh/ho-chi-minh-toan-tap/ho-chi-minh-toan-tap-tap-4-271?categoryId=102001160',
    cover: 'Toàn tập'
  },

  {
    title: 'Di chúc công bố năm 1969',
    year: '1969',
    type: 'Văn kiện',
    desc: 'Đọc văn bản Di chúc được công bố năm 1969 trên cổng thông tin Hồ Chí Minh.',
    url: WILL,
    cover: 'Di chúc'
  },

  {
    title: 'Hồ Chí Minh với chiến dịch Điện Biên Phủ',
    year: '2019 · bài viết',
    type: 'Bài viết',
    desc: 'Bài viết giới thiệu vai trò và những chỉ đạo, động viên trong chiến dịch.',
    url: DIENBIEN,
    cover: 'Điện Biên Phủ'
  },

  {
    title: 'Hồ Chí Minh — Biên niên tiểu sử (10 tập)',
    year: '2016 · tái bản',
    type: 'Sách',
    desc: 'Giới thiệu bộ sách phục vụ tra cứu các sự kiện trong cuộc đời và hoạt động của Người.',
    url: 'https://baotanghochiminh.vn/ho-chi-minh-bien-nien-tieu-su-10-tap.htm',
    cover: 'Biên niên'
  },

  {
    title: 'Đề cương kỷ niệm 130 năm ngày sinh',
    year: '2020',
    type: 'Tài liệu tham khảo',
    desc: 'Tài liệu khái quát các giai đoạn trong cuộc đời và sự nghiệp, đăng tại Bảo tàng Hồ Chí Minh.',
    url: MUSEUM,
    cover: 'Cuộc đời'
  },

  {
    title: 'Không có gì quý hơn độc lập, tự do',
    year: '2023 · bài viết',
    type: 'Bài viết',
    desc: 'Nguồn tham khảo cho câu nói được trưng bày trong triển lãm.',
    url: QUOTE,
    cover: 'Độc lập · Tự do'
  }

];


/* =========================================================
   VIDEO YOUTUBE
   ========================================================= */

const videos = [

  {
    id: '0iY2sRiAEz4',

    title: 'Tư liệu về Chủ tịch Hồ Chí Minh',

    desc:
      'Video tư liệu phục vụ việc tìm hiểu cuộc đời, hành trình hoạt động và những dấu mốc lịch sử gắn với Chủ tịch Hồ Chí Minh.'
  },

  {
    id: 'H5_Hu1ju1QM',

    title: 'Cuộc đời và sự nghiệp Chủ tịch Hồ Chí Minh',

    desc:
      'Tư liệu hình ảnh giới thiệu những giai đoạn tiêu biểu trong cuộc đời và sự nghiệp cách mạng của Chủ tịch Hồ Chí Minh.'
  },

  {
    id: 'RR0p5Aqrhto',

    title: 'Di sản và giá trị lịch sử',

    desc:
      'Video tham khảo về tư tưởng, di sản và những giá trị lịch sử gắn với Chủ tịch Hồ Chí Minh.'
  }

];


let docFilter = 'Tất cả';


/* =========================================================
   TRANG TƯ LIỆU
   ========================================================= */

const resources = () =>

  pageHead(

    'Tư liệu',

    'Một điểm khởi đầu cho việc đọc, đối chiếu và nghiên cứu. Các tài liệu mở tại website của cơ quan cung cấp.',

    '06'

  ) + `

<section class="section">


  <!-- ===================================================
       FILTER
       =================================================== -->

  <div class="filter-row">

    ${
      [
        'Tất cả',
        'Văn kiện',
        'Bài viết',
        'Sách',
        'Video',
        'Tài liệu tham khảo'
      ]

      .map(category => `

        <button

          class="
            chip
            ${category === docFilter ? 'active' : ''}
          "

          data-doc="${category}"

          aria-pressed="${category === docFilter}"

          type="button"

        >

          ${category}

        </button>

      `)

      .join('')
    }

  </div>


  <!-- ===================================================
       DANH SÁCH TÀI LIỆU / VIDEO
       =================================================== -->

  <div
    id="documentList"
    aria-live="polite"
  ></div>


  <!-- ===================================================
       SOURCES
       =================================================== -->

  <div class="sources">

    <span class="eyebrow">
      NGUYÊN TẮC BIÊN SOẠN
    </span>


    <h3>
      Đọc lịch sử từ những nguồn có thể kiểm chứng
    </h3>


    <p>
      Ưu tiên Bảo tàng Hồ Chí Minh, cổng thông tin Hồ Chí Minh
      và Cổng thông tin Chính phủ. Không thay thế việc nghiên cứu
      tài liệu gốc. Thumbnail văn bản là thiết kế của website,
      không phải bìa sách gốc.
    </p>


    <a
      href="https://baotanghochiminh.vn"
      target="_blank"
      rel="noopener"
    >
      Bảo tàng Hồ Chí Minh ↗
    </a>


    <a
      href="https://hochiminh.vn"
      target="_blank"
      rel="noopener"
    >
      Cổng thông tin Hồ Chí Minh ↗
    </a>


    <a
      href="${GOV}"
      target="_blank"
      rel="noopener"
    >
      Tiểu sử trên Cổng thông tin Chính phủ ↗
    </a>


    <a
      href="https://commons.wikimedia.org/wiki/Category:Ho_Chi_Minh"
      target="_blank"
      rel="noopener"
    >
      Hồ sơ ảnh tại Wikimedia Commons ↗
    </a>

  </div>


</section>

`;


/* =========================================================
   RENDER VIDEO
   ========================================================= */

function renderVideos() {

  return `

    <section class="resource-video-section">

      <div class="resource-video-grid">

        ${videos.map(video => `

          <article class="resource-video-card">


            <!-- VIDEO -->

            <div class="resource-video-frame">

              <iframe

                src="https://www.youtube.com/embed/${video.id}"

                title="${video.title}"

                loading="lazy"

                allow="
                  accelerometer;
                  autoplay;
                  clipboard-write;
                  encrypted-media;
                  gyroscope;
                  picture-in-picture;
                  web-share
                "

                referrerpolicy="
                  strict-origin-when-cross-origin
                "

                allowfullscreen

              ></iframe>

            </div>


            <!-- INFO -->

            <div class="resource-video-info">

              <span class="eyebrow">
                VIDEO TƯ LIỆU
              </span>


              <h3>
                ${video.title}
              </h3>


              <p>
                ${video.desc}
              </p>


              <a

                class="resource-video-link"

                href="https://youtu.be/${video.id}"

                target="_blank"

                rel="noopener"

              >
                Xem trên YouTube ↗
              </a>

            </div>


          </article>

        `).join('')}

      </div>

    </section>

  `;

}


/* =========================================================
   RENDER DOCUMENT
   ========================================================= */

function renderDocuments(list) {

  return list.map(document => `

    <article class="document">


      <!-- COVER -->

      <div
        class="document-cover"
        role="img"
        aria-label="Thumbnail chữ: ${document.cover}"
      >

        <small>
          HỒ CHÍ MINH
        </small>


        ${document.cover}


        <small>
          TƯ LIỆU
        </small>

      </div>


      <!-- INFO -->

      <div>

        <span class="eyebrow">

          ${document.type.toUpperCase()}
          ·
          ${document.year}

        </span>


        <h3>
          ${document.title}
        </h3>


        <p>
          ${document.desc}
        </p>

      </div>


      <!-- LINK -->

      <a

        class="btn cream"

        href="${document.url}"

        target="_blank"

        rel="noopener"

      >

        Xem tư liệu ↗

      </a>


    </article>

  `).join('');

}


/* =========================================================
   UPDATE FILTER
   ========================================================= */

function updateDocs() {

  const documentList =
    document.querySelector(
      '#documentList'
    );


  if (!documentList) {
    return;
  }


  /* =====================================================
     VIDEO
     ===================================================== */

  if (docFilter === 'Video') {

    documentList.innerHTML =
      renderVideos();

  }


  /* =====================================================
     CÁC CATEGORY KHÁC
     ===================================================== */

  else {

    const filteredDocuments =

      documents.filter(document =>

        docFilter === 'Tất cả' ||

        document.type === docFilter

      );


    documentList.innerHTML =

      filteredDocuments.length

        ? renderDocuments(
            filteredDocuments
          )

        : `

          <div class="empty">

            Chưa có tài liệu
            trong danh mục này.

          </div>

        `;

  }


  /* =====================================================
     ACTIVE FILTER
     ===================================================== */

  document
    .querySelectorAll('[data-doc]')
    .forEach(button => {

      const active =
        button.dataset.doc ===
        docFilter;


      button.classList.toggle(
        'active',
        active
      );


      button.setAttribute(
        'aria-pressed',
        active
      );

    });

}