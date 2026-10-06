'use strict';

const career = [

  {
    title: 'Hành trình tìm đường cứu nước',
    tag: '1911 — 1930',
    img: 1,
    text: 'Từ những chuyến đi và trải nghiệm lao động đến hoạt động cách mạng quốc tế.',
    event: 1
  },

  {
    title: 'Thành lập Đảng Cộng sản Việt Nam',
    tag: '1930',
    img: 4,
    text: 'Một bước ngoặt trong tổ chức và định hướng của cách mạng Việt Nam.',
    event: 3
  },

  {
    title: 'Cách mạng Tháng Tám',
    tag: '1945',
    img: 7,
    text: 'Chủ tịch Hồ Chí Minh cùng Trung ương Đảng lãnh đạo nhân dân giành chính quyền.',
    event: 4
  },

  {
    title: 'Tuyên ngôn Độc lập',
    tag: '02.09.1945',
    img: 7,
    text: 'Lời tuyên bố về quyền độc lập của dân tộc tại Quảng trường Ba Đình.',
    event: 4
  },

  {
    title: 'Kháng chiến chống thực dân Pháp',
    tag: '1946 — 1954',
    img: 4,
    text: 'Lãnh đạo cuộc kháng chiến, bảo vệ nền độc lập và chính quyền cách mạng.',
    event: 5
  },

  {
    title: 'Xây dựng đất nước',
    tag: '1954 — 1969',
    img: 6,
    text: 'Khôi phục kinh tế, phát triển văn hóa và chăm lo đời sống nhân dân.',
    event: 5,
    detail: 'Sau năm 1954, miền Bắc bước vào khôi phục kinh tế và xây dựng xã hội mới. Người đồng thời quan tâm đến đấu tranh thống nhất đất nước và quan hệ quốc tế.',
    source: GOV
  },

  {
    title: 'Sáng tác văn học và thơ ca',
    tag: 'VĂN HỌC — THƠ CA',
    img: 8,
    text: 'Những tác phẩm văn học, thơ ca gắn với cuộc đời hoạt động cách mạng và tư tưởng của Hồ Chí Minh.',
    event: 7,
    detail: 'Bên cạnh hoạt động cách mạng, Hồ Chí Minh để lại nhiều tác phẩm văn học và thơ ca có giá trị. Tiêu biểu có tập thơ "Nhật ký trong tù", cùng nhiều bài thơ, bài báo và tác phẩm chính luận được sáng tác trong những giai đoạn khác nhau của cuộc đời.',
    source: GOV
  },

  {
    title: 'Di sản và tư tưởng',
    tag: 'GIÁ TRỊ TIẾP NỐI',
    img: 2,
    text: 'Độc lập, đoàn kết và những giá trị đạo đức hướng đến con người.',
    event: 6
  }
];

const careerPage = () => pageHead(
  'Sự nghiệp',
  'Tám chủ đề để khám phá hoạt động, sáng tác và những đóng góp gắn với các giai đoạn lịch sử.',
  '03'
) + `<section class="section">
<div class="cards">${career.map(card).join('')}</div>
<p class="notice">Ảnh tư liệu minh họa; chú thích, niên đại và nguồn ảnh được hiển thị trong cửa sổ chi tiết.</p>
</section>`;