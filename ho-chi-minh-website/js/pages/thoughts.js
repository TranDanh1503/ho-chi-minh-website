'use strict';

const values = [
  ['Độc lập dân tộc',
    'Quyền độc lập và tự quyết của dân tộc là một giá trị xuyên suốt trong tư tưởng và hoạt động cách mạng của Hồ Chí Minh. Người luôn gắn mục tiêu giành độc lập cho đất nước với quyền được sống trong tự do, hòa bình và tự chủ của mỗi dân tộc.',
    QUOTE
  ],

  ['Đoàn kết',
    'Hồ Chí Minh đặc biệt coi trọng sức mạnh của tinh thần đoàn kết. Trong nhiều bài viết và đặc biệt là trong Di chúc, Người nhấn mạnh việc giữ gìn sự thống nhất trong Đảng, củng cố khối đại đoàn kết toàn dân và cùng nhau hướng tới lợi ích chung của đất nước.',
    WILL
  ],

  ['Đạo đức',
    'Đạo đức cách mạng được Hồ Chí Minh xem là nền tảng quan trọng đối với mỗi cán bộ và mỗi con người. Những phẩm chất như trách nhiệm, liêm chính, giản dị, tận tụy và đặt lợi ích của nhân dân lên trên lợi ích cá nhân luôn được Người đề cao trong cả tư tưởng và đời sống.',
    WILL
  ],

  ['Giá trị con người',
    'Trong tư tưởng Hồ Chí Minh, độc lập dân tộc không chỉ là mục tiêu chính trị mà còn phải gắn với cuộc sống của con người. Người quan tâm đến quyền được học tập, lao động, sống trong tự do, ấm no và hạnh phúc của nhân dân.',
    QUOTE
  ],

  ['Tinh thần học tập',
    'Hồ Chí Minh coi giáo dục và học tập là nền tảng quan trọng để xây dựng con người và phát triển đất nước. Người đặc biệt quan tâm đến việc bồi dưỡng thế hệ trẻ, nâng cao dân trí và khuyến khích tinh thần học tập không ngừng trong suốt cuộc đời.',
    WILL
  ],

  ['Lòng yêu nước',
    'Lòng yêu nước là động lực lớn trong hành trình hoạt động của Hồ Chí Minh. Từ khi ra đi tìm đường cứu nước năm 1911 cho đến những năm cuối đời, mục tiêu giải phóng dân tộc, bảo vệ nền độc lập và xây dựng một đất nước hòa bình, thống nhất luôn giữ vị trí trung tâm.',
    GOV
  ]
];
const thoughts = () => pageHead('Tư tưởng',
    'Sáu giá trị tiêu biểu, được giới thiệu bằng diễn giải ngắn và liên kết nguồn tham khảo.', '04'
    ) + `<section class="quote-section">
<span class="eyebrow">LỜI CỦA NGƯỜI</span>
<blockquote>“Không có gì quý hơn<br>độc lập, tự do.”</blockquote>
<cite>HỒ CHÍ MINH</cite>
<a class="source" href="${QUOTE}" target="_blank" rel="noopener">Nguồn trích dẫn: HCM.VN ↗</a>
</section>
<section class="section">
<div class="values">${values.map((v,i)=>`<article class="value">
<span>0${i+1}</span>
<h3>${v[0]}</h3>
<p>${v[1]}</p>
<a href="${v[2]}" target="_blank" rel="noopener">Đọc tư liệu gốc ↗</a>
</article>`).join('')}</div>
<p class="notice">Các mô tả trong thẻ là diễn giải giới thiệu, không phải trích dẫn nguyên văn của Chủ tịch Hồ Chí Minh.</p>
</section>`;
