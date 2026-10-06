'use strict';

const events = [

  {
    year: '1890',
    title: 'Từ quê hương xứ Nghệ',
    text: `Chủ tịch Hồ Chí Minh sinh ngày 19 tháng 5 năm 1890, tên thuở nhỏ là Nguyễn Sinh Cung, tại làng Hoàng Trù, quê ngoại ở Nghệ An. Quê nội của Người là làng Kim Liên, còn gọi là làng Sen. Người lớn lên trong một gia đình nhà nho có truyền thống yêu nước và hiếu học.`,
    detail: `<strong>Gia đình</strong>
<br>Cha của Người là Nguyễn Sinh Sắc, đỗ Phó bảng năm 1901. Mẹ là Hoàng Thị Loan, làm ruộng và dệt vải. Người có chị là Nguyễn Thị Thanh và anh là Nguyễn Sinh Khiêm.<br>
<br>
<strong>Tuổi thơ và học tập</strong>
<br>Năm 1895, Nguyễn Sinh Cung theo gia đình vào Huế. Người học chữ Hán với cha tại làng Dương Nỗ. Năm 1901, khi trở về quê nội, Người được đặt tên Nguyễn Tất Thành và tiếp tục theo học các thầy giáo ở quê.<br>
<br>
<strong>Những ảnh hưởng ban đầu</strong>
<br>Sự giáo dục của gia đình, những người thầy yêu nước và cuộc sống khó khăn của nhân dân góp phần hình thành lòng thương người, tinh thần ham học và ý thức về vận mệnh dân tộc.`,
    img: 0,
    source: BIO
  },

  {
    year: '1911',
    title: 'Ra đi tìm đường cứu nước',
    text: 'Ngày 5 tháng 6, Nguyễn Tất Thành rời cảng Sài Gòn trên tàu Amiral Latouche-Tréville.',
    detail: 'Với tên Văn Ba, Người làm phụ bếp trên tàu và bắt đầu hành trình tìm hiểu thế giới. Qua lao động và quan sát, Người tìm kiếm một con đường giành độc lập cho Việt Nam.',
    img: 1,
    source: BIO
  },

  {
    year: '1919',
    title: 'Tiếng nói tại Versailles',
    text: 'Nguyễn Ái Quốc gửi bản Yêu sách của nhân dân An Nam tới Hội nghị Versailles.',
    detail: 'Bản yêu sách gồm tám điểm, yêu cầu những quyền tự do, dân chủ và bình đẳng. Sự kiện đánh dấu một bước hoạt động chính trị quan trọng tại Pháp.',
    img: 1,
    source: MUSEUM
  },

  {
    year: '1930',
    title: 'Thành lập Đảng Cộng sản Việt Nam',
    text: 'Nguyễn Ái Quốc chủ trì hội nghị hợp nhất các tổ chức cộng sản tại Hương Cảng.',
    detail: 'Ngày 3 tháng 2 được lấy làm ngày thành lập Đảng. Hội nghị thông qua các văn kiện đặt nền tảng cho đường lối cách mạng Việt Nam.',
    img: 4,
    source: GOV
  },

  {
    year: '1945',
    title: 'Một nước Việt Nam độc lập',
    text: 'Sau thắng lợi Cách mạng Tháng Tám, ngày 2 tháng 9, Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập tại Ba Đình.',
    detail: 'Bản Tuyên ngôn công bố sự ra đời của nước Việt Nam Dân chủ Cộng hòa và khẳng định quyền độc lập của dân tộc trước thế giới.',
    img: 7,
    source: GOV
  },

  {
    year: '1954',
    title: 'Chiến thắng Điện Biên Phủ',
    text: 'Ngày 7 tháng 5, chiến dịch Điện Biên Phủ kết thúc thắng lợi.',
    detail: 'Chủ tịch Hồ Chí Minh cùng Trung ương Đảng lãnh đạo cuộc kháng chiến; Đại tướng Võ Nguyên Giáp trực tiếp chỉ huy chiến dịch. Người gửi thư động viên và khen ngợi lực lượng tham gia.',
    img: 4,
    source: DIENBIEN
  },

  {
    year: '1969',
    title: 'Di sản để lại cho mai sau',
    text: 'Chủ tịch Hồ Chí Minh qua đời ngày 2 tháng 9 năm 1969 tại Hà Nội.',
    detail: 'Di chúc của Người thể hiện sự quan tâm tới đoàn kết, đạo đức, thế hệ trẻ và đời sống nhân dân. Tư liệu công bố năm 1969 được liên kết để bạn đọc tra cứu.',
    img: 0,
    source: WILL
  }
];
