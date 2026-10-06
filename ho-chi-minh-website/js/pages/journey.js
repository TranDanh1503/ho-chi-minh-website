'use strict';

/* =========================================================
   HÀNH TRÌNH
   =========================================================

   Thứ tự tuyến:

   01 Nghệ An
        ↓
   02 Sài Gòn
        ↓
   03 Mỹ
        ↓
   04 Anh
        ↓
   05 Pháp
        ↓
   06 Liên Xô
        ↓
   07 Trung Quốc
        ↓
   08 Việt Nam

   x, y:
   - vị trí marker theo %
   - x: trái → phải
   - y: trên → dưới
   ========================================================= */


const places = [

  /* =====================================================
     01 — NGHỆ AN
     ===================================================== */

  {
    name: 'Nghệ An',

    year: '1890',

    x: 78.2,
    y: 45.1,

    title: 'Nơi khởi đầu',

    text:
      'Nguyễn Sinh Cung sinh tại Hoàng Trù, Nghệ An. ' +
      'Quê hương và gia đình là những dấu ấn đầu tiên trong cuộc đời Người.',

    image:
      'assets/nhacunguyensinhcung.jpg',

    imageAlt:
      'Ngôi nhà gắn với thời niên thiếu của Nguyễn Sinh Cung tại Nghệ An',

    imageCaption:
      'Không gian quê hương gắn với thời niên thiếu của Nguyễn Sinh Cung tại Nghệ An.',

    source: 'https://vi.wikipedia.org/wiki/H%E1%BB%93_Ch%C3%AD_Minh'
  },


  /* =====================================================
     02 — SÀI GÒN
     ===================================================== */

  {
    name: 'Sài Gòn',

    year: '1911',

    x: 79.2,
    y: 52.6,

    title: 'Từ bến cảng Nhà Rồng',

    text:
      'Ngày 5 tháng 6 năm 1911, Nguyễn Tất Thành rời Sài Gòn ' +
      'để bắt đầu hành trình tìm đường cứu nước.',

    image:
      'assets/journey/ben-nha-rong.jpg',

    imageAlt:
      'Bến Nhà Rồng tại Sài Gòn',

    imageCaption:
      'Bến Nhà Rồng — địa điểm gắn với sự kiện Nguyễn Tất Thành rời Sài Gòn năm 1911.',

    source: 'https://vi.wikipedia.org/wiki/B%E1%BA%BFn_Nh%C3%A0_R%E1%BB%93ng'
  },


  /* =====================================================
     03 — MỸ
     ===================================================== */

  {
    name: 'Mỹ',

    year: '1912 — 1913',

    x: 23.5,
    y: 34.2,

    title: 'Trải nghiệm trên đất Mỹ',

    text:
      'Trong hành trình lao động trên biển, Người đến Mỹ ' +
      'và tìm hiểu đời sống xã hội. ' +
      'Mốc năm được trình bày theo tiểu sử của Bảo tàng Hồ Chí Minh.',

    image:
      'assets/journey/usa.jpg',

    imageAlt:
      'Tư liệu minh họa về nước Mỹ đầu thế kỷ XX',

    imageCaption:
      'Tư liệu địa điểm minh họa cho giai đoạn Nguyễn Tất Thành đến Mỹ trong hành trình lao động trên biển.',

    source: 'https://vi.wikipedia.org/wiki/H%E1%BB%93_Ch%C3%AD_Minh'
  },


  /* =====================================================
     04 — ANH
     ===================================================== */

  {
    name: 'Anh',

    year: '1913 — 1917',

    /* London / khu vực đảo Anh */
    x: 46.8,
    y: 23.9,

    title: 'Những năm tháng tại Anh',

    text:
      'Nguyễn Tất Thành sống và làm việc tại Anh, ' +
      'tiếp tục quan sát đời sống người lao động và học hỏi.',

    image:
      'assets/journey/london.jpg',

    imageAlt:
      'London, Anh trong những năm đầu thế kỷ XX',

    imageCaption:
      'London — nơi Nguyễn Tất Thành từng sống và làm việc trong những năm ở Anh.',

    source: 'https://vi.wikipedia.org/wiki/H%E1%BB%93_Ch%C3%AD_Minh'
  },


  /* =====================================================
     05 — PHÁP
     ===================================================== */

  {
    name: 'Pháp',

    year: '1917 — 1923',

    /* Paris / Pháp */
    x: 49.2,
    y: 28.1,

    title: 'Hoạt động tại Pháp',

    text:
      'Người tới Pháp trong hành trình năm 1911. ' +
      'Trong những năm hoạt động tại Paris, Nguyễn Ái Quốc ' +
      'tham gia phong trào chính trị và báo chí.',

    image:
      'assets/journey/paris.jpg',

    imageAlt:
      'Paris, Pháp trong giai đoạn Nguyễn Ái Quốc hoạt động',

    imageCaption:
      'Paris — một trong những địa điểm quan trọng trong thời kỳ Nguyễn Ái Quốc hoạt động tại Pháp.',

    source: 'https://vi.wikipedia.org/wiki/H%E1%BB%93_Ch%C3%AD_Minh'
  },


  /* =====================================================
     06 — LIÊN XÔ
     ===================================================== */

  {
    name: 'Liên Xô',

    year: '1923 — 1924',

    /* Moskva */
    x: 57.8,
    y: 22.8,

    title: 'Hoạt động tại Moskva',

    text:
      'Nguyễn Ái Quốc tới Liên Xô năm 1923 ' +
      'và tham gia các hoạt động của phong trào cộng sản quốc tế.',

    image:
      'assets/young.jpg',

    imageAlt:
      'Nguyễn Ái Quốc tại Liên Xô năm 1923',

    imageCaption:
      'Nguyễn Ái Quốc tại Liên Xô, năm 1923.',

    source: 'https://vi.wikipedia.org/wiki/H%E1%BB%93_Ch%C3%AD_Minh'
  },


  /* =====================================================
     07 — TRUNG QUỐC
     ===================================================== */

  {
    name: 'Trung Quốc',

    year: '1924; 1930',

    /* khu vực miền Nam Trung Quốc */
    x: 74.8,
    y: 36.6,

    title: 'Từ Quảng Châu đến Hương Cảng',

    text:
      'Người hoạt động tại Quảng Châu từ năm 1924. ' +
      'Năm 1930, hội nghị hợp nhất các tổ chức cộng sản ' +
      'diễn ra tại Hương Cảng.',

    image:
      'assets/journey/quang-chau.jpg',

    imageAlt:
      'Quảng Châu, Trung Quốc',

    imageCaption:
      'Quảng Châu — một địa điểm quan trọng trong hoạt động của Nguyễn Ái Quốc tại Trung Quốc.',

    source: 'https://vi.wikipedia.org/wiki/H%E1%BB%93_Ch%C3%AD_Minh'
  },


  /* =====================================================
     08 — VIỆT NAM
     ===================================================== */

  {
    name: 'Việt Nam',

    year: '1941',

    /* Cao Bằng / Bắc Việt Nam */
    x: 77.8,
    y: 42.0,

    title: 'Trở về Tổ quốc',

    text:
      'Năm 1941, Nguyễn Ái Quốc trở về nước, ' +
      'hoạt động tại Pác Bó và chủ trì Hội nghị Trung ương lần thứ VIII.',

    image:
      'assets/journey/pac-bo.jpg',

    imageAlt:
      'Pác Bó, Cao Bằng',

    imageCaption:
      'Pác Bó, Cao Bằng — địa điểm gắn với thời kỳ Nguyễn Ái Quốc trở về Tổ quốc năm 1941.',

    source: 'https://vi.wikipedia.org/wiki/P%C3%A1c_B%C3%B3'
  }

];



/* =========================================================
   SVG MAP
   ========================================================= */

const mapSVG = `

<svg
  class="journey-map-svg"
  viewBox="0 0 960 540"
  role="img"
  aria-label="Sơ đồ thế giới minh họa hành trình của Chủ tịch Hồ Chí Minh"
>


  <!-- =====================================================
       DEFINITIONS
       ===================================================== -->

  <defs>

    <!-- grid atlas rất nhẹ -->

    <pattern
      id="journeyGrid"
      width="48"
      height="48"
      patternUnits="userSpaceOnUse"
    >

      <path
        d="
          M 48 0
          L 0 0
          0 48
        "
        class="journey-map-grid-line"
      />

    </pattern>

  </defs>



  <!-- =====================================================
       BACKGROUND
       ===================================================== -->

  <rect
    class="journey-map-paper"
    width="960"
    height="540"
  />


  <rect
    class="journey-map-grid"
    width="960"
    height="540"
    fill="url(#journeyGrid)"
  />



  <!-- =====================================================
       WORLD MAP
       ===================================================== -->

  <g class="journey-map-land">


    <!-- =========================
         BẮC MỸ
         ========================= -->

    <path
      d="
        M82 126

        L144 97
        L213 100

        L271 132
        L316 140

        L345 176

        L318 206
        L307 246

        L266 274
        L233 314

        L205 272
        L165 259

        L154 216
        L103 184

        Z
      "
    />


    <!-- =========================
         NAM MỸ
         ========================= -->

    <path
      d="
        M244 317

        L289 322
        L320 362

        L311 411

        L286 470
        L268 510

        L246 468
        L241 420

        L223 376

        Z
      "
    />


    <!-- =========================
         GREENLAND
         ========================= -->

    <path
      d="
        M353 63

        L418 51
        L450 70

        L440 112

        L393 134
        L365 108

        Z
      "
    />


    <!-- =========================
         ANH / ĐẢO BRITAIN
         ========================= -->

    <path
      d="
        M438 116

        C431 123
         430 136
         436 145

        L444 147

        L449 138
        L447 124

        Z
      "
    />


    <!-- =========================
         CHÂU ÂU + CHÂU Á
         ========================= -->

    <path
      d="
        M448 145

        L480 115
        L515 108

        L543 94
        L620 97

        L675 94
        L734 112

        L855 117
        L900 164

        L870 205
        L838 205

        L810 256
        L767 292

        L761 357

        L720 327
        L706 286

        L680 272
        L650 309

        L612 264
        L564 264

        L527 232
        L485 232

        L456 198

        L443 175

        Z
      "
    />


    <!-- =========================
         PHÁP / TÂY ÂU NHÔ RÕ HƠN
         ========================= -->

    <path
      d="
        M458 142

        L480 136
        L493 146

        L491 163
        L476 172

        L459 162

        Z
      "
    />


    <!-- =========================
         CHÂU PHI
         ========================= -->

    <path
      d="
        M478 266

        L535 254
        L590 286

        L617 343

        L588 387
        L573 454

        L533 485

        L509 431
        L486 372

        L463 331

        Z
      "
    />


    <!-- =========================
         ĐÔNG NAM Á
         ========================= -->

    <path
      d="
        M756 334

        L786 366
        L797 402

        L775 393

        Z
      "
    />


    <!-- =========================
         NHẬT BẢN
         ========================= -->

    <path
      d="
        M812 226

        L824 240
        L818 257

        L809 245

        Z
      "
    />


    <!-- =========================
         AUSTRALIA
         ========================= -->

    <path
      d="
        M801 418

        L854 393
        L894 425

        L903 476

        L867 507
        L811 495

        L787 455

        Z
      "
    />


    <!-- =========================
         NEW ZEALAND
         ========================= -->

    <path
      d="
        M922 509

        L935 497
        L938 529

        L926 546

        Z
      "
    />

  </g>



  <!-- =====================================================
       ROUTE 01
       NGHỆ AN → SÀI GÒN
       ===================================================== -->

  <path
    class="
      journey-map-route
      journey-route-01
    "
    d="
      M751 244

      C756 252
       758 266
       760 284
    "
  />



  <!-- =====================================================
       ROUTE 02
       SÀI GÒN → MỸ

       Đây là tuyến xuyên Thái Bình Dương.
       Cho curve xuống thấp để không cắt ngang quá nhiều đất.
       ===================================================== -->

  <path
    class="
      journey-map-route
      journey-route-02
    "
    d="
      M760 284

      C840 350
       897 394
       932 354

      C954 329
       950 287
       916 264
    "
  />


  <!--
    Vì bản đồ phẳng kết thúc tại mép phải,
    tuyến Thái Bình Dương được tiếp tục
    từ mép trái vào Bắc Mỹ.
  -->

  <path
    class="
      journey-map-route
      journey-route-02
      journey-route-wrap
    "
    d="
      M0 259

      C61 241
       143 214
       226 185
    "
  />



  <!-- =====================================================
       ROUTE 03
       MỸ → ANH
       ===================================================== -->

  <path
    class="
      journey-map-route
      journey-route-03
    "
    d="
      M226 185

      C285 139
       349 112
       401 118

      C421 119
       436 124
       449 129
    "
  />



  <!-- =====================================================
       ROUTE 04
       ANH → PHÁP
       ===================================================== -->

  <path
    class="
      journey-map-route
      journey-route-04
    "
    d="
      M449 129

      C454 136
       462 144
       472 152
    "
  />



  <!-- =====================================================
       ROUTE 05
       PHÁP → LIÊN XÔ
       ===================================================== -->

  <path
    class="
      journey-map-route
      journey-route-05
    "
    d="
      M472 152

      C493 135
       519 124
       555 123
    "
  />



  <!-- =====================================================
       ROUTE 06
       LIÊN XÔ → TRUNG QUỐC
       ===================================================== -->

  <path
    class="
      journey-map-route
      journey-route-06
    "
    d="
      M555 123

      C604 120
       656 140
       691 163

      C704 172
       713 183
       718 198
    "
  />



  <!-- =====================================================
       ROUTE 07
       TRUNG QUỐC → VIỆT NAM
       ===================================================== -->

  <path
    class="
      journey-map-route
      journey-route-07
    "
    d="
      M718 198

      C729 205
       738 216
       747 227
    "
  />



  <!-- =====================================================
       TÊN ĐẠI DƯƠNG
       ===================================================== -->

  <text
    class="journey-map-ocean"
    x="89"
    y="391"
  >
    ĐẠI TÂY DƯƠNG
  </text>


  <text
    class="journey-map-ocean"
    x="613"
    y="430"
  >
    ẤN ĐỘ DƯƠNG
  </text>


  <text
    class="journey-map-ocean"
    x="390"
    y="56"
  >
    BẮC BĂNG DƯƠNG
  </text>


  <text
    class="journey-map-ocean journey-map-pacific"
    x="785"
    y="375"
  >
    THÁI BÌNH DƯƠNG
  </text>

</svg>

`;



/* =========================================================
   HTML SECTION
   ========================================================= */

const journey = () =>

  pageHead(

    'Hành trình của Người',

    'Từ quê hương Nghệ An đến hành trình tìm đường cứu nước.',

    '02'

  ) + `


<section
  class="section journey-section"
  aria-labelledby="journeySectionTitle"
>


  <!-- ===================================================
       INTRO
       =================================================== -->

  <header class="journey-section-head">

    <span class="eyebrow">
      HÀNH TRÌNH QUA CÁC CHÂU LỤC
    </span>


    <p id="journeySectionTitle">

      Theo dấu những điểm dừng tiêu biểu trong hành trình
      tìm đường cứu nước và hoạt động cách mạng.

    </p>

  </header>



  <!-- ===================================================
       TIMELINE
       =================================================== -->

  <nav
    class="journey-timeline"
    aria-label="Các mốc hành trình"
  >


    <div class="journey-timeline-track">


      ${places.map((place, index) => `


        <button

          class="
            journey-timeline-item
            ${index === 0 ? 'active' : ''}
          "

          data-place="${index}"

          type="button"

          aria-pressed="${index === 0}"

        >


          <span class="journey-timeline-number">

            ${String(index + 1).padStart(2, '0')}

          </span>


          <span
            class="journey-timeline-marker"
            aria-hidden="true"
          ></span>


          <span class="journey-timeline-year">

            ${place.year.split(';')[0]}

          </span>


          <span class="journey-timeline-name">

            ${place.name}

          </span>


        </button>


      `).join('')}


    </div>


  </nav>



  <!-- ===================================================
       MAP + CARD
       =================================================== -->

  <div class="journey-layout">


    <!-- =========================
         MAP
         ========================= -->

    <figure class="journey-map-panel">


      <figcaption class="journey-map-heading">


        <span class="eyebrow">

          HÀNH TRÌNH QUA CÁC CHÂU LỤC

        </span>


        <span>

          Sơ đồ minh họa

        </span>


      </figcaption>



      <div class="journey-map">


        ${mapSVG}



        ${places.map((place, index) => `


          <button

            class="
              journey-map-marker
              ${index === 0 ? 'active' : ''}
            "

            data-map-place="${index}"

            data-place="${index}"

            type="button"

            aria-label="
              ${place.name},
              ${place.year}
            "

            aria-pressed="${index === 0}"

          >


            <span

              class="journey-map-dot"

              aria-hidden="true"

            ></span>



            <span class="journey-map-marker-label">


              <strong>

                ${place.name}

              </strong>


              <small>

                ${place.year}

              </small>


            </span>


          </button>


        `).join('')}


      </div>


    </figure>



    <!-- =========================
         CONTENT CARD
         ========================= -->

    <aside

      class="journey-info"

      id="journeyInfo"

      aria-live="polite"

    ></aside>


  </div>



  <!-- ===================================================
       NOTE
       =================================================== -->

  <p class="journey-note">

    Bản đồ là sơ đồ minh họa; vị trí và đường nối mang tính
    khái quát. Danh sách điểm dừng được chọn lọc, không mô tả
    đầy đủ hoặc liên tục toàn bộ hành trình.

  </p>


</section>

`;



/* =========================================================
   ĐẶT MARKER LÊN MAP
   ========================================================= */

function positionJourneyMarkers() {


  document

    .querySelectorAll(
      '[data-map-place]'
    )

    .forEach(marker => {


      const index =

        Number(
          marker.dataset.mapPlace
        );


      const place =

        places[index];


      if (!place) return;



      marker.style.left =

        `${place.x}%`;


      marker.style.top =

        `${place.y}%`;


    });

}



/* =========================================================
   RENDER IMAGE
   ========================================================= */

function renderJourneyImage(place) {


  return `


    <figure class="journey-info-figure">


      <div class="journey-info-image-wrap">


        <img

          class="journey-info-image"

          src="${place.image}"

          alt="${place.imageAlt}"

          loading="lazy"

        >


      </div>



      <figcaption>

        ${place.imageCaption}

      </figcaption>


    </figure>


  `;

}



/* =========================================================
   ACTIVE ROUTE
   =========================================================

   index:
   0 = Nghệ An
   1 = Sài Gòn
   2 = Mỹ
   3 = Anh
   4 = Pháp
   5 = Liên Xô
   6 = Trung Quốc
   7 = Việt Nam

   Khi chọn một mốc, những route đã đi qua sẽ sáng hơn.
   ========================================================= */

function updateJourneyRoutes(index) {


  document

    .querySelectorAll(
      '.journey-map-route'
    )

    .forEach(route => {


      route.classList.remove(
        'route-completed',
        'route-current'
      );


    });



  /*
   * Có 7 chặng.
   */

  for (
    let step = 1;
    step <= 7;
    step++
  ) {


    const routes =

      document.querySelectorAll(
        `.journey-route-0${step}`
      );


    routes.forEach(route => {


      /*
       * route trước mốc hiện tại
       */

      if (step < index) {


        route.classList.add(
          'route-completed'
        );


      }


      /*
       * route dẫn tới mốc đang active
       */

      if (step === index) {


        route.classList.add(
          'route-current'
        );


      }


    });

  }

}



/* =========================================================
   CHỌN MỐC
   ========================================================= */

function selectPlace(index) {


  const place =
    places[index];


  const total =
    places.length;


  const info =

    document.querySelector(
      '#journeyInfo'
    );



  if (
    !info ||
    !place
  ) {

    return;

  }



  /* =====================================================
     CARD TRANSITION
     ===================================================== */

  info.classList.remove(
    'is-changing'
  );


  void info.offsetWidth;


  info.classList.add(
    'is-changing'
  );



  /* =====================================================
     RENDER CARD
     ===================================================== */

  info.innerHTML = `


    <div class="journey-info-content">


      <div class="journey-info-count">


        ${String(index + 1).padStart(2, '0')}

        /

        ${String(total).padStart(2, '0')}


      </div>



      <span class="journey-info-kicker">


        ${place.year}

        ·

        ${place.name.toUpperCase()}


      </span>



      <h2>

        ${place.title}

      </h2>



      <p>

        ${place.text}

      </p>



      <a

        class="journey-source-link"

        href="${place.source}"

        target="_blank"

        rel="noopener"

      >

        Đọc nguồn lịch sử ↗

      </a>


    </div>



    ${renderJourneyImage(place)}



    <nav

      class="journey-card-nav"

      aria-label="Điều hướng các mốc hành trình"

    >


      <button

        type="button"

        data-journey-step="prev"

        ${index === 0 ? 'disabled' : ''}

      >

        ← Mốc trước

      </button>



      <button

        type="button"

        data-journey-step="next"

        ${index === total - 1 ? 'disabled' : ''}

      >

        Mốc tiếp →

      </button>


    </nav>


  `;



  /* =====================================================
     ACTIVE MARKER + TIMELINE
     ===================================================== */

  document

    .querySelectorAll(
      '[data-place]'
    )

    .forEach(button => {


      const active =

        Number(
          button.dataset.place
        ) === index;



      button.classList.toggle(
        'active',
        active
      );



      button.setAttribute(
        'aria-pressed',
        active
      );


    });



  /* =====================================================
     UPDATE ROUTE
     ===================================================== */

  updateJourneyRoutes(
    index
  );



  /* =====================================================
     ROUTE ANIMATION
     ===================================================== */

  document

    .querySelectorAll(
      '.journey-map-route.route-current'
    )

    .forEach(route => {


      route.classList.remove(
        'is-animating'
      );


      void route.getBoundingClientRect();


      route.classList.add(
        'is-animating'
      );


    });



  /* =====================================================
     PREVIOUS BUTTON
     ===================================================== */

  const previousButton =

    info.querySelector(
      '[data-journey-step="prev"]'
    );



  if (previousButton) {


    previousButton.addEventListener(

      'click',

      () => {


        if (
          index > 0
        ) {


          selectPlace(
            index - 1
          );


        }


      }

    );


  }



  /* =====================================================
     NEXT BUTTON
     ===================================================== */

  const nextButton =

    info.querySelector(
      '[data-journey-step="next"]'
    );



  if (nextButton) {


    nextButton.addEventListener(

      'click',

      () => {


        if (
          index <
          total - 1
        ) {


          selectPlace(
            index + 1
          );


        }


      }

    );


  }



  /* =====================================================
     IMAGE FALLBACK
     ===================================================== */

  const imageElement =

    info.querySelector(
      '.journey-info-image'
    );



  if (imageElement) {


    imageElement.addEventListener(

      'error',

      () => {


        const wrapper =

          imageElement.closest(
            '.journey-info-image-wrap'
          );



        if (!wrapper) return;



        wrapper.innerHTML = `


          <div class="journey-image-placeholder">


            <span>

              Ảnh tư liệu chưa được thêm

            </span>


            <small>

              ${place.image}

            </small>


          </div>


        `;


      },

      {
        once: true
      }

    );


  }



  /* =====================================================
     POSITION MARKERS
     ===================================================== */

  positionJourneyMarkers();


}