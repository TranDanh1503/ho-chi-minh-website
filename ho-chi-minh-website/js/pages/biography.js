'use strict';

/*
  Trang Tiểu sử dùng dữ liệu biographyStages.
  Dữ liệu nằm trong js/data/biography-data.js.
*/

function biographyEscape(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function biographyEventTemplate(event, stage) {
  const [date, title, summary, detail, source] = event;
  const sourceUrl = source || stage.source;

  return `
    <details class="bio-event">
      <summary class="bio-event-summary">
        <span class="bio-date">
          ${biographyEscape(date)}
        </span>

        <span class="bio-event-heading">
          <strong>${biographyEscape(title)}</strong>
          <span>${biographyEscape(summary)}</span>
        </span>

        <span class="bio-toggle" aria-hidden="true"></span>
      </summary>

      <div class="bio-event-body">
        <p>${biographyEscape(detail)}</p>

        <a
          class="bio-source"
          href="${biographyEscape(sourceUrl)}"
          target="_blank"
          rel="noopener noreferrer"
        >
          
        </a>
      </div>
    </details>
  `;
}

function biographyStageTemplate(stage, index) {
  return `
    <details class="bio-stage" ${index === 0 ? 'open' : ''}>
      <summary class="bio-stage-summary">
        <span class="bio-stage-number">
          ${String(index + 1).padStart(2, '0')}
        </span>

        <span class="bio-stage-heading">
          <span class="bio-period">
            ${biographyEscape(stage.period)}
          </span>

          <strong>${biographyEscape(stage.title)}</strong>

         
        </span>

        <span class="bio-stage-arrow" aria-hidden="true">⌄</span>
      </summary>

      <div class="bio-stage-content">
        <div class="bio-stage-intro">
          <div>
            <span class="eyebrow">KHÁI QUÁT GIAI ĐOẠN</span>
            <p>${biographyEscape(stage.overview)}</p>
          </div>

          <figure class="bio-stage-photo">
            ${image(stage.imageIndex)}
            <figcaption>
              ${attribution(stage.imageIndex)}
            </figcaption>
          </figure>
        </div>

        <div class="bio-event-list">
          ${stage.events
            .map(event => biographyEventTemplate(event, stage))
            .join('')}
        </div>

        <div class="bio-stage-conclusion">
          <strong>Tổng kết giai đoạn</strong>
          <p>${biographyEscape(stage.overview)}</p>
        </div>
      </div>
    </details>
  `;
}

const biography = () => {
  const totalEvents = biographyStages.reduce(
    (total, stage) => total + stage.events.length,
    0
  );

  return `
    ${pageHead(
      'Tiểu sử',
      'Tìm hiểu cuộc đời, sự nghiệp và di sản Hồ Chí Minh qua năm giai đoạn lịch sử.',
      '01'
    )}

    <section class="section bio-page">
      <div class="bio-guide">
        <div>
          <span class="eyebrow">DÒNG THỜI GIAN</span>
          <h2>Một cuộc đời.<br>Những dấu mốc lịch sử.</h2>
        </div>

      
      </div>

      <div class="bio-stages">
        ${biographyStages
          .map((stage, index) => biographyStageTemplate(stage, index))
          .join('')}
      </div>

      <p class="bio-note">
        Phần sau năm 1969 giới thiệu di sản và hoạt động tưởng niệm.
        Các mô tả là nội dung tổng hợp, không phải lời trích nguyên văn
        của Chủ tịch Hồ Chí Minh.
      </p>
    </section>
  `;
};